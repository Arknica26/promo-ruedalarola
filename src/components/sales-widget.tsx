"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SalesWidget({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<
    { role: "bot" | "user"; text: string }[]
  >([
    {
      role: "bot",
      text: "¡Hola! 👋 Soy la IA de Rueda la Rola. ¿En qué puedo ayudarte hoy? ¿Buscas crear tu sitio web o ver nuestros planes?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI delay
    setTimeout(() => {
      let botResponse = "";
      const lowerMsg = userMsg.toLowerCase();

      // Simple logic (Placeholder for real AI)
      if (
        lowerMsg.includes("precio") ||
        lowerMsg.includes("costo") ||
        lowerMsg.includes("plan")
      ) {
        botResponse =
          "Tenemos planes desde $99 USD (Pago Único). \n\n1. Estándar ($99): Web + Catálogo.\n2. Pro ($499): Web + Catálogo Ilimitado + Bot Admin.\n\n¿Te interesa alguno?";
      } else if (lowerMsg.includes("hola") || lowerMsg.includes("buenas")) {
        botResponse =
          "¡Hola de nuevo! ¿Te gustaría ver una demo o cotizar tu web?";
      } else if (lowerMsg.includes("demo") || lowerMsg.includes("ver")) {
        botResponse =
          "¡Claro! Estás navegando en una demo ahora mismo. Nuestra IA puede automatizar tus ventas. ¿Quieres hablar con un asesor humano?";
      } else if (
        lowerMsg.includes("si") ||
        lowerMsg.includes("quiero") ||
        lowerMsg.includes("asesor") ||
        lowerMsg.includes("humano")
      ) {
        botResponse =
          "Perfecto. Te transferiré con un especialista por WhatsApp para cerrar tu proyecto.";
        // Trigger WhatsApp redirection here or show button
      } else {
        botResponse =
          "Entiendo. Soy una IA entrenada para ventas. Si tienes una consulta específica, puedo transferirte a nuestro WhatsApp oficial.";
      }

      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 absolute bottom-0 right-0 bg-green-500 rounded-full border border-white"></div>
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">
                  Asistente de Ventas
                </h3>
                <span className="text-xs text-indigo-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  En línea
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-white/20 rounded-full transition-colors text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-none"
                      : "bg-white/10 text-gray-200 rounded-bl-none border border-white/5"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none border border-white/5 flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10 bg-black/50">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu consulta..."
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-2 bg-indigo-600 rounded-full text-white hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
