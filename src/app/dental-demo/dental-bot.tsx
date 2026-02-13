"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  X,
  MessageCircle,
  Calendar,
  Send,
  User,
  Clock,
  Loader2,
} from "lucide-react";
import { useChat } from "@ai-sdk/react";

export const DentalBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, status, sendMessage } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "intro",
        role: "assistant",
        content:
          "Welcome to Lumina Dental Spa. 🦷 I'm Dr. AI. How can I assist with your smile today?",
      },
    ],
  });

  const isLoading = status === "submitted" || status === "streaming";

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, status]);

  const [inputValue, setInputValue] = useState("");

  const handleOptionClick = (option: string) => {
    sendMessage({ role: "user", content: option, id: Date.now().toString() });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newMessage = {
      role: "user" as const,
      content: inputValue,
      id: Date.now().toString(),
    };

    setInputValue("");

    try {
      await sendMessage(newMessage);
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      {/* Notification Bubble */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-4 bg-white text-[#2A9D8F] px-5 py-3 shadow-xl rounded-2xl w-64 animate-bounce border border-[#2A9D8F]/20">
          <div className="relative">
            <p className="font-medium text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4" /> Book your visit today?
            </p>
            <div className="absolute -bottom-5 right-6 w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-t-white border-r-[10px] border-r-transparent"></div>
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className="bg-[#2A9D8F] hover:bg-[#21867a] text-white transition-all duration-300 rounded-full w-16 h-16 flex items-center justify-center shadow-2xl group border-2 border-white ring-4 ring-[#2A9D8F]/20"
      >
        {isOpen ? (
          <X className="w-8 h-8" />
        ) : (
          <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[350px] md:w-[400px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300 border border-[#f0f0f0]">
          {/* Header */}
          <div className="bg-[#2A9D8F] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <User className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-white text-lg font-medium">
                  Lumina Desk
                </h3>
                <p className="text-[#bdebe6] text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-[#ccff00] rounded-full"></span>{" "}
                  Online Now
                </p>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-4 h-[400px] overflow-y-auto bg-[#F5F5F0] space-y-4 flex flex-col">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : ""}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 bg-[#2A9D8F] rounded-full flex items-center justify-center shrink-0 self-end mb-1">
                    <span className="text-white text-xs font-bold">L</span>
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-sm max-w-[80%] leading-relaxed shadow-sm ${
                    msg.role === "assistant"
                      ? "bg-white text-gray-700 rounded-bl-none"
                      : "bg-[#2A9D8F] text-white rounded-br-none"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-[#2A9D8F] rounded-full flex items-center justify-center shrink-0 self-end mb-1">
                  <span className="text-white text-xs font-bold">L</span>
                </div>
                <div className="p-3 bg-white text-gray-700 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1">
                  <Loader2 className="w-3 h-3 animate-spin text-gray-400" />
                  <span className="text-xs text-gray-400">Typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Options */}
          <div className="p-2 bg-white border-t border-gray-100 flex gap-2 overflow-x-auto">
            <button
              onClick={() => handleOptionClick("Book Appointment")}
              className="whitespace-nowrap px-3 py-1.5 bg-[#F5F5F0] hover:bg-[#e0e0db] text-[#2A9D8F] text-xs rounded-full font-medium transition-colors"
            >
              Book Appt
            </button>
            <button
              onClick={() => handleOptionClick("Services")}
              className="whitespace-nowrap px-3 py-1.5 bg-[#F5F5F0] hover:bg-[#e0e0db] text-[#2A9D8F] text-xs rounded-full font-medium transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => handleOptionClick("Contact Time")}
              className="whitespace-nowrap px-3 py-1.5 bg-[#F5F5F0] hover:bg-[#e0e0db] text-[#2A9D8F] text-xs rounded-full font-medium transition-colors"
            >
              Hours
            </button>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-[#F5F5F0] border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-[#2A9D8F]/50 outline-none placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-[#2A9D8F] hover:bg-[#21867a] text-white p-2 rounded-xl transition-colors disabled:opacity-50"
                disabled={!inputValue.trim() || isLoading}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
