"use client";

import { motion } from "framer-motion";
import { Bot, Send, User, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { useLanguage } from "@/lib/i18n-context";

export function DemoChat() {
  const { t } = useLanguage();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Initialize Vercel AI SDK
  const { messages, status, input, handleInputChange, handleSubmit } = useChat({
    // @ts-ignore
    api: "/api/chat",
    streamProtocol: "data",
    initialMessages: [
      {
        id: "intro",
        role: "assistant",
        content: t.chat.bot_intro,
      },
    ],
  });

  const isLoading = status === "submitted" || status === "streaming";

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, status]);

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
            {messages.map((msg) => {
              const content = msg.content;
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === "assistant"
                        ? "bg-primary text-white"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <Bot className="w-5 h-5" />
                    ) : (
                      <User className="w-5 h-5" />
                    )}
                  </div>
                  <div
                    className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                      msg.role === "assistant"
                        ? "bg-white/10 text-gray-100 rounded-tl-none"
                        : "bg-primary text-white rounded-tr-none"
                    }`}
                  >
                    <p className="whitespace-pre-line leading-relaxed">
                      {content}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                  <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                  <span className="text-xs text-gray-400 italic">
                    Escribiendo...
                  </span>
                </div>
              </motion.div>
            )}
            <div />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-card border-t border-border">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder={
                  t.chat.input_placeholder || "Escribe un mensaje..."
                }
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                disabled={!input?.trim() || isLoading}
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
