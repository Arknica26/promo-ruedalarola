"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useLanguage } from "@/lib/i18n-context";

export function ProblemSolution() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-black/40 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.problem.title}
          </h2>
          <p className="text-gray-400">{t.problem.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
          {/* El Problema */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 backdrop-blur-xs"
          >
            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              {t.problem.old_way_title}
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                <span>{t.problem.old_way_1}</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                <span>{t.problem.old_way_2}</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                <span>{t.problem.old_way_3}</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500/50 shrink-0 mt-0.5" />
                <span>{t.problem.old_way_4}</span>
              </li>
            </ul>
          </motion.div>

          {/* La Solución */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-green-500/5 border border-green-500/10 backdrop-blur-xs relative"
          >
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg shadow-green-900/50 rotate-3">
              {t.problem.new_way_badge}
            </div>
            <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              {t.problem.new_way_title}
            </h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>{t.problem.new_way_1}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>{t.problem.new_way_2}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>{t.problem.new_way_3}</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <span>{t.problem.new_way_4}</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
