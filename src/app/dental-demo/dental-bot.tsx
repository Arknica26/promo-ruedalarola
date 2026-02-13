"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, MessageCircle, Calendar, Send, User, Clock } from "lucide-react";

export const DentalBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Welcome to Lumina Dental Spa. 🦷" },
    {
      type: "bot",
      text: "I'm Dr. AI. How can I assist with your smile today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { type: "user", text }];
    setMessages(newMessages);
    setInputValue("");

    // Simple auto-reply logic
    setTimeout(() => {
      let botReply = { type: "bot", text: "" };
      const lowerText = text.toLowerCase();

      if (lowerText.includes("book") || lowerText.includes("appointment")) {
        botReply.text =
          "I can help with that. Please select your preferred date/time below or call us directly at (555) 123-4567.";
        // In a real app, we'd show a calendar widget here
      } else if (lowerText.includes("price") || lowerText.includes("cost")) {
        botReply.text =
          "Our initial consultation starts at $150. For specific treatments like Invisalign or Veneers, we recommend a personalized assessment.";
      } else if (lowerText.includes("whitening")) {
        botReply.text =
          "We offer gentle, laser-assisted whitening sessions. They take about an hour and results are immediate! ✨";
      } else {
        botReply.text =
          "Thank you for your inquiry. A patient coordinator will be with you shortly to answer that in detail.";
      }
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
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
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.type === "user" ? "justify-end" : ""}`}
              >
                {msg.type === "bot" && (
                  <div className="w-8 h-8 bg-[#2A9D8F] rounded-full flex items-center justify-center shrink-0 self-end mb-1">
                    <span className="text-white text-xs font-bold">L</span>
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-sm max-w-[80%] leading-relaxed shadow-sm ${
                    msg.type === "bot"
                      ? "bg-white text-gray-700 rounded-bl-none"
                      : "bg-[#2A9D8F] text-white rounded-br-none"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}
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
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleSendMessage(inputValue)
                }
                placeholder="Type your message..."
                className="flex-1 bg-[#F5F5F0] border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-[#2A9D8F]/50 outline-none placeholder-gray-400"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                className="bg-[#2A9D8F] hover:bg-[#21867a] text-white p-2 rounded-xl transition-colors"
                disabled={!inputValue.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
