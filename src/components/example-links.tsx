"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Home, Utensils, Briefcase } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n-context";

export function ExampleLinks() {
  const { t } = useLanguage();

  const examples = [
    {
      title: t.examples.restaurants_title,
      description: t.examples.restaurants_desc,
      icon: Utensils,
      color: "bg-orange-500",
      link: "/client-demo", // Using existing demo
    },
    {
      title: t.examples.realestate_title,
      description: t.examples.realestate_desc,
      icon: Home,
      color: "bg-blue-500",
      link: "/real-estate-demo",
    },
    {
      title: t.examples.services_title,
      description: t.examples.services_desc,
      icon: Briefcase,
      color: "bg-purple-500",
      link: "#",
    },
  ];

  return (
    <section className="py-24 bg-background relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.examples.title}
          </h2>
          <p className="text-gray-400">{t.examples.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div
                className={`w-12 h-12 rounded-2xl ${example.color} flex items-center justify-center mb-6 text-white shadow-lg`}
              >
                <example.icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {example.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {example.description}
              </p>

              <Link
                href={example.link}
                className="inline-flex items-center text-sm font-bold text-white/70 hover:text-white transition-colors"
              >
                {t.examples.cta_demo} <ArrowUpRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
