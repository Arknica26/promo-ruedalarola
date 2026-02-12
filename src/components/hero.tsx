"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n-context";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-8 pb-12 lg:pt-0">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-30 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none opacity-20 translate-y-1/3 -translate-x-1/3" />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content (Left) */}
          <div className="text-center lg:text-left pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-6 mx-auto lg:mx-0"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-gray-300">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
            >
              {t.hero.title_part1} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                {t.hero.title_part2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="#demo"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 font-medium text-white transition-all hover:bg-primary/90 hover:scale-105 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
              >
                <Bot className="mr-2 w-5 h-5" />
                {t.hero.cta_demo}
              </Link>
              <Link
                href="#pricing"
                className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white transition-all hover:bg-white/10"
              >
                {t.hero.cta_pricing}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border border-background bg-gray-800 flex items-center justify-center text-xs"
                  >
                    U{i}
                  </div>
                ))}
              </div>
              <p>{t.hero.social_proof}</p>
            </motion.div>
          </div>

          {/* Visual Content (Right) - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Abstract Background Shapes behind phone */}
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl -z-10" />

            {/* Phone Container */}
            <div className="relative mx-auto w-[300px] h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-20" />

              {/* Screen Content */}
              <div className="w-full h-full bg-gray-950 flex flex-col pt-12">
                {/* Header simulating Telegram/Whatsapp */}
                <div className="bg-gray-900 p-4 flex items-center gap-3 border-b border-gray-800">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold">
                    IA
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">
                      Asistente Virtual
                    </p>
                    <p className="text-xs text-green-400">En línea</p>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-4 flex flex-col gap-4 overflow-hidden">
                  {/* Bot Msg 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="bg-gray-800 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%]"
                  >
                    <p className="text-xs text-gray-300">
                      ¡Hola! 👋 Bienvenido a Burger King Sur. ¿Quieres ver el
                      menú?
                    </p>
                  </motion.div>

                  {/* User Msg */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.8 }}
                    className="bg-indigo-600 p-3 rounded-2xl rounded-tr-none self-end max-w-[85%]"
                  >
                    <p className="text-xs text-white">
                      Sí, quiero una hamburguesa.
                    </p>
                  </motion.div>

                  {/* Bot Msg 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.6 }}
                    className="bg-gray-800 p-3 rounded-2xl rounded-tl-none self-start max-w-[85%]"
                  >
                    <p className="text-xs text-gray-300">
                      ¡Excelente elección! 🍔 Te recomiendo la "Super Cheese".
                      Cuesta $8. ¿Te la envío?
                    </p>
                  </motion.div>

                  {/* Floating elements simulating activity */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute bottom-20 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-lg"
                  >
                    💰 ¡Venta Cerrada!
                  </motion.div>
                </div>

                {/* Input Bar */}
                <div className="p-3 bg-gray-900 border-t border-gray-800 flex gap-2">
                  <div className="h-8 flex-1 bg-gray-800 rounded-full" />
                  <div className="h-8 w-8 bg-indigo-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute top-20 -right-4 p-4 bg-gray-900/90 backdrop-blur border border-white/10 rounded-2xl shadow-xl max-w-[180px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Sin Apps</p>
                  <p className="text-[10px] text-gray-400">0 descargas</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-40 -left-12 p-4 bg-gray-900/90 backdrop-blur border border-white/10 rounded-2xl shadow-xl max-w-[180px] z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-purple-500" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Auto-Reply</p>
                  <p className="text-[10px] text-gray-400">En 1 segundo</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
