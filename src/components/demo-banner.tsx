"use client";

import { motion } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";
import { useState } from "react";

export function DemoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-[100] bg-orange-600/90 backdrop-blur-md text-white px-4 py-2 flex items-center justify-between shadow-lg"
    >
      <div className="container mx-auto flex items-center justify-center gap-2">
        <AlertTriangle className="w-4 h-4" />
        <span className="text-xs md:text-sm font-bold uppercase tracking-wider">
          Modo Demo: Este es un diseño de ejemplo
        </span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="p-1 hover:bg-white/20 rounded-full transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
