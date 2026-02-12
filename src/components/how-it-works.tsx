"use client";

import { motion } from "framer-motion";
import { MessageCircle, QrCode, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "1. Tu Cliente Escanea",
    description:
      "Coloca tu código QR en mesas, redes sociales o tarjetas. Tu cliente accede al instante sin descargar nada.",
  },
  {
    icon: MessageCircle,
    title: "2. Tu IA Responde",
    description:
      "El asistente virtual atiende dudas, muestra el catálogo y toma pedidos en segundos, 24/7.",
  },
  {
    icon: ShoppingBag,
    title: "3. ¡Venta Cerrada!",
    description:
      "Recibes el pedido listo o la cita agendada. Sin errores y sin perder tiempo en chats interminables.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-purple-400 mb-4"
          >
            Así de Simple Funciona
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Tres pasos para automatizar tu negocio y liberar tu tiempo.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-linear-to-r from-transparent via-primary/50 to-transparent -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
