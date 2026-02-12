"use client";

import { motion } from "framer-motion";
import { Check, Edit3, MessageSquare, Smartphone, Zap } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n-context";

export function AdminFeature() {
  const { t } = useLanguage();

  const features = [
    t.admin.feature_1,
    t.admin.feature_2,
    t.admin.feature_3,
    t.admin.feature_4,
  ];

  return (
    <section className="py-24 bg-black/20 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            >
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-bold text-purple-300">
                {t.admin.badge}
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t.admin.title}
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {t.admin.subtitle}
            </p>
            <p className="text-lg text-white font-medium mb-8">
              {t.admin.highlight}
            </p>

            <ul className="space-y-4">
              {features.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-blue-400" />
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Visual (Telegram Chat Simulation) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="bg-gray-900 rounded-4xl border-8 border-gray-800 shadow-2xl overflow-hidden h-[500px] flex flex-col">
              {/* Header */}
              <div className="bg-[#2A3942] p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div>
                  <p className="text-white font-bold leading-none">
                    {t.admin.chat_name}
                  </p>
                  <p className="text-xs text-blue-300">{t.admin.chat_status}</p>
                </div>
              </div>

              {/* Chat */}
              <div className="flex-1 bg-[#0E1621] p-4 flex flex-col gap-4 overflow-hidden relative">
                {/* Background pattern opacity */}
                <div className="absolute inset-0 opacity-5 bg-[url('https://web.telegram.org/img/bg_0.png')] bg-repeat"></div>

                {/* User Msg 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="self-end bg-[#2B5278] p-3 rounded-2xl rounded-tr-none max-w-[85%] z-10"
                >
                  <p className="text-white text-sm">{t.admin.msg_user_1}</p>
                  <span className="text-[10px] text-blue-200 block text-right mt-1">
                    10:42 AM
                  </span>
                </motion.div>

                {/* Bot Response 1 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="self-start bg-[#182533] p-3 rounded-2xl rounded-tl-none max-w-[85%] z-10"
                >
                  <p className="text-white text-sm">
                    {t.admin.msg_bot_1_title}
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    {t.admin.msg_bot_1_desc}
                  </p>
                  <p className="text-[10px] text-gray-500 block text-right mt-1">
                    10:42 AM
                  </p>
                </motion.div>

                {/* User Msg 2 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 3 }}
                  className="self-end bg-[#2B5278] p-3 rounded-2xl rounded-tr-none max-w-[85%] z-10"
                >
                  <p className="text-white text-sm">{t.admin.msg_user_2}</p>
                  <span className="text-[10px] text-blue-200 block text-right mt-1">
                    10:43 AM
                  </span>
                </motion.div>

                {/* Bot Response 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 4 }}
                  className="self-start bg-[#182533] p-3 rounded-2xl rounded-tl-none max-w-[85%] z-10"
                >
                  <p className="text-white text-sm">
                    {t.admin.msg_bot_2_title}
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    {t.admin.msg_bot_2_desc}
                  </p>
                  <p className="text-[10px] text-gray-500 block text-right mt-1">
                    10:43 AM
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
