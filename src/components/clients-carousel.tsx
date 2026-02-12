"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";

const clients = [
  "Burger King (Franquicia Sur)",
  "Café Aroma",
  "Barbería El Corte",
  "Gimnasio PowerFit",
  "Sushi House",
  "Clínica Dental Sonrisas",
  "Tienda de Modas Luna",
  "Restaurante El Fogón",
];

export function ClientsCarousel() {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-background border-y border-white/5 overflow-hidden relative">
      <div className="container px-4 mx-auto mb-8 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
          {t.clients.title}
        </p>
      </div>

      <div className="flex relative w-full overflow-hidden mask-linear-fade">
        <motion.div
          className="flex gap-16 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {/* Duplicate list for infinite loop effect */}
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="text-xl md:text-2xl font-bold text-gray-600/50 hover:text-primary/80 transition-colors cursor-default"
            >
              {client}
            </div>
          ))}
        </motion.div>

        {/* Gradient Masks for fade effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
}
