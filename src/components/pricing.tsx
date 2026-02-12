"use client";

import { motion } from "framer-motion";
import { Check, Shield, Zap, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n-context";

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.pricing.plans.standard.name,
      price: "$299",
      period: t.pricing.plans.standard.period,
      description: t.pricing.plans.standard.description,
      features: [
        t.pricing.plans.standard.feature_1,
        t.pricing.plans.standard.feature_2,
        t.pricing.plans.standard.feature_3,
        t.pricing.plans.standard.feature_4,
        t.pricing.plans.standard.feature_5,
      ],
      highlight: false,
      renewal: t.pricing.plans.standard.renewal,
      cta: t.pricing.plans.standard.cta,
    },
    {
      name: t.pricing.plans.pro.name,
      price: "$499",
      period: t.pricing.plans.pro.period,
      description: t.pricing.plans.pro.description,
      features: [
        t.pricing.plans.pro.feature_1,
        t.pricing.plans.pro.feature_2,
        t.pricing.plans.pro.feature_3,
        t.pricing.plans.pro.feature_4,
        t.pricing.plans.pro.feature_5,
        t.pricing.plans.pro.feature_6,
      ],
      highlight: true,
      renewal: t.pricing.plans.pro.renewal,
      cta: t.pricing.plans.pro.cta,
    },
    {
      name: t.pricing.plans.enterprise.name,
      price: t.pricing.plans.enterprise.price,
      period: t.pricing.plans.enterprise.period,
      description: t.pricing.plans.enterprise.description,
      features: [
        t.pricing.plans.enterprise.feature_1,
        t.pricing.plans.enterprise.feature_2,
        t.pricing.plans.enterprise.feature_3,
        t.pricing.plans.enterprise.feature_4,
        t.pricing.plans.enterprise.feature_5,
        t.pricing.plans.enterprise.feature_6,
      ],
      highlight: false,
      renewal: t.pricing.plans.enterprise.renewal,
      cta: t.pricing.plans.enterprise.cta,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.pricing.title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative p-8 rounded-3xl border ${
                plan.highlight
                  ? "bg-white/5 border-primary/50 shadow-2xl shadow-primary/20"
                  : "bg-white/5 border-white/10 hover:border-white/20"
              } flex flex-col`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full text-xs font-bold text-white shadow-lg">
                  {t.pricing.plans.pro.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 text-gray-200">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 font-medium">
                    {plan.price !== "A Medida" && "USD"}
                  </span>
                </div>
                <p className="text-sm text-primary font-bold mt-1 uppercase tracking-wider">
                  {plan.period}
                </p>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="mt-1 p-0.5 rounded-full bg-primary/20 shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/5 text-center">
                  <p className="text-xs text-gray-500 mb-1">
                    {t.pricing.maintenance_label}
                  </p>
                  <p className="text-sm font-bold text-gray-300">
                    {plan.renewal}
                  </p>
                  <p className="text-[10px] text-gray-600 mt-1">
                    {t.pricing.maintenance_desc}
                  </p>
                </div>

                <Link
                  href={`https://wa.me/1234567890?text=Hola,%20me%20interesa%20el%20plan%20${plan.name}`}
                  className={`w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 ${
                    plan.highlight
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
                      : "bg-white text-black hover:bg-gray-200"
                  }`}
                >
                  {plan.highlight && <Sparkles className="w-4 h-4" />}
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" />
            {t.pricing.guarantee}
          </p>
        </div>
      </div>
    </section>
  );
}
