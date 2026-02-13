"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n-context";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    name: "Gallardo's Cleaning",
    url: "https://gallardoscleaning.com",
    logo: "/logos_clientes/logo_gallardos_Ceaning.png",
  },
  {
    name: "Vazquez Restaurant #3",
    url: "https://www.vazquez3.com",
    logo: "/logos_clientes/logo_vazquez_3.png",
  },
  {
    name: "Taquería El Compadre Manzano",
    url: "https://www.taqueriaelcompadremanzano.com",
    logo: "/logos_clientes/logo_compadre_manzano.png",
  },
  {
    name: "Snacks Pal Antojo ATX",
    url: "https://www.snackspalantojoatx.com",
    logo: "/logos_clientes/logo_snacks_pal_antojo_hot.png",
  },
  {
    name: "Taquería Pepe's",
    url: "https://www.taqueriapepesatx.com",
    logo: "/logos_clientes/logo_taqueria_pepes.png",
  },
  {
    name: "WG Labor LLC",
    url: "https://www.wglaborllc.com",
    logo: "/logos_clientes/logo_wglabor_llc.webp",
  },
  {
    name: "Regalitos Valentina",
    url: "https://regalitosvalentinas.com",
    logo: "/logos_clientes/logo_regalitos_valentina.png",
  },
  {
    name: "Capital City Volleyball",
    url: "https://capitalcity-volleyball.com",
    logo: "/logos_clientes/log_capital_city_volleyball.webp",
  },
];

export function ClientsCarousel() {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-background border-y border-white/5 overflow-hidden relative">
      <div className="container px-4 mx-auto mb-12 text-center">
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
            duration: 40, // Slower for logos
          }}
        >
          {/* Duplicate list for infinite loop effect */}
          {[...clients, ...clients].map((client, index) => (
            <Link
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={160}
                className="object-contain max-w-full max-h-full"
                unoptimized // Optional: for external sanity or if Next.js image optimization is tricky with these paths locally
              />
            </Link>
          ))}
        </motion.div>

        {/* Gradient Masks for fade effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
