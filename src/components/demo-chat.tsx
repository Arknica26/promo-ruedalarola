"use client";

import { motion } from "framer-motion";
import { Bot, Send, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n-context";

type Message = {
  role: "bot" | "user";
  content: string;
};

export function DemoChat() {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize/Update messages on language change
  useEffect(() => {
    setMessages([
      {
        role: "bot",
        content: t.chat.bot_intro,
      },
    ]);
  }, [t.chat.bot_intro]);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI delay and response
    setTimeout(() => {
      let botResponse = "Thinking...";
      if (
        inputValue.toLowerCase().includes("price") ||
        inputValue.toLowerCase().includes("cost") ||
        inputValue.toLowerCase().includes("precio") ||
        inputValue.toLowerCase().includes("costo")
      ) {
        botResponse = t.chat.bot_price_response;
      } else if (
        inputValue.toLowerCase().includes("catalogo") ||
        inputValue.toLowerCase().includes("catalog") ||
        inputValue.toLowerCase().includes("ver") ||
        inputValue.toLowerCase().includes("see")
      ) {
        botResponse = t.chat.bot_catalog_response;
      } else {
        botResponse = t.chat.bot_hello_response;
      }

      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section id="demo" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.chat.title}
          </h2>
          <p className="text-gray-400">{t.chat.subtitle}</p>
        </div>

        <div className="w-full max-w-md bg-card border border-border rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
          {/* Header */}
          <div className="bg-primary p-4 flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-full">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-white">{t.chat.header_title}</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-white/80">
                  {t.chat.header_status}
                </span>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div
            ref={chatContainerRef}
            className="h-[400px] p-4 overflow-y-auto bg-black/20 flex flex-col gap-4 scroll-smooth"
          >
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    msg.role === "bot"
                      ? "bg-primary text-white"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {msg.role === "bot" ? (
                    <Bot className="w-5 h-5" />
                  ) : (
                    <User className="w-5 h-5" />
                  )}
                </div>
                <div
                  className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                    msg.role === "bot"
                      ? "bg-white/10 text-gray-100 rounded-tl-none"
                      : "bg-primary text-white rounded-tr-none"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                </div>
              </motion.div>
            )}
            <div />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-card border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={t.chat.input_placeholder}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-2 bg-primary rounded-full text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
