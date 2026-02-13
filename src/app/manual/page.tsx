"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  DollarSign,
  Zap,
  Shield,
  Layers,
  HelpCircle,
  Rocket,
} from "lucide-react";
import { useRef } from "react";

export default function ManualPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30 font-sans">
      {/* 1. INTERNAL HEADER: Clear and Professional */}
      <section
        ref={targetRef}
        className="h-[80vh] flex flex-col items-center justify-center relative overflow-hidden bg-linear-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-indigo-500/10"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <motion.div
          style={{ opacity, scale }}
          className="z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-mono font-bold tracking-wider border border-indigo-500/20">
              INTERNAL USE ONLY
            </span>
            <span className="px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold tracking-wider border border-emerald-500/20">
              SALES TEAM v1.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Manual de Producto
            <span className="block text-indigo-500">Rueda La Rola Media</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Guía definitiva para vender <strong>Webs Inteligentes</strong>.
            <br />
            Qué vendemos, qué NO vendemos y cómo aumentar el ticket.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. THE CORE PRODUCT (The $299 Promo) */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={<Briefcase className="w-8 h-8 text-indigo-400" />}
            title="El Producto Estrella"
            subtitle="Promo Web Inteligente - $299 USD (Pago Único)"
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                Lo que SÍ incluye
              </h3>
              <ul className="space-y-4">
                <ListItem
                  text="Hosting y Dominio (.com) GRATIS por 1 año."
                  highlight
                />
                <ListItem text="Landing Page 'One Page' (Todo en una sola página larga)." />
                <ListItem text="Diseño Premium (UI/UX) basado en plantillas optimizadas." />
                <ListItem text="Integración de IA Vendedora (Chatbot básico entrenado)." />
                <ListItem text="Cierre de venta directo a WhatsApp (sin pasarela de pago compleja)." />
                <ListItem text="Carga de hasta 50 productos/servicios." />
                <ListItem text="Optimización básica para móviles (Responsive)." />
              </ul>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertTriangle className="w-32 h-32 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                Lo que NO incluye
              </h3>
              <p className="text-slate-400 mb-6 italic text-sm border-l-2 border-slate-700 pl-4">
                Si el cliente pide esto, es un{" "}
                <strong>presupuesto a medida (Enterprise)</strong>.
              </p>
              <ul className="space-y-4 text-slate-400">
                <ListItem
                  type="bad"
                  text="Desarrollo de Software a medida (SaaS, CRMs complejos)."
                />
                <ListItem
                  type="bad"
                  text="Pasarelas de pago bancarias (Stripe, PayPal) *en esta promo*."
                />
                <ListItem
                  type="bad"
                  text="Usuarios y Login (Área de miembros)."
                />
                <ListItem
                  type="bad"
                  text="Apps nativas (iOS/Android) descargables."
                />
                <ListItem
                  type="bad"
                  text="Diseño desde cero absoluto (Usamos nuestras bases probadas)."
                />
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. UPSELLING CATALOG */}
      <section className="py-24 px-4 bg-slate-900/30 border-y border-slate-800">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            icon={<DollarSign className="w-8 h-8 text-emerald-400" />}
            title="Catálogo de Upsells"
            subtitle="Cómo convertir una venta de $299 en $1,000+"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <UpsellCard
              title="Branding & Identidad"
              price="Desde $150"
              description="Para clientes que no tienen logo o se ve amateur. Incluye Logo, Paleta de Colores y Tipografías."
              icon={<Zap className="w-6 h-6 text-yellow-400" />}
            />
            <UpsellCard
              title="Plan 'Negocio Pro'"
              price="$499 (vs $299)"
              description="Sube de nivel. Incluye Bot de Telegram para autogestión de precios y catálogo ilimitado."
              icon={<Shield className="w-6 h-6 text-indigo-400" />}
            />
            <UpsellCard
              title="Mantenimiento Mensual"
              price="$50 - $100 / mes"
              description="Para clientes que quieren cambios constantes, blogs o actualizaciones de contenido recurrentes."
              icon={<Layers className="w-6 h-6 text-blue-400" />}
            />
            <UpsellCard
              title="Social Media Kit"
              price="Desde $200"
              description="Plantillas editables para redes sociales (Canva/Figma) alineadas con su nueva web."
              icon={<Briefcase className="w-6 h-6 text-pink-400" />}
            />
            <UpsellCard
              title="Campaña Ads Launch"
              price="$300 + Budget"
              description="Configuración de primera campaña en Meta/Google Ads para llevar tráfico a la nueva web."
              icon={<Rocket className="w-6 h-6 text-orange-400" />}
            />
            <UpsellCard
              title="Enterprise / A Medida"
              price="Cotizar"
              description="Cualquier cosa que se salga de la promo. E-commerce completo, integraciones API, etc."
              icon={<BookOpen className="w-6 h-6 text-purple-400" />}
            />
          </div>
        </div>
      </section>

      {/* 4. SALES ARGUMENTS & FAQS */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            icon={<HelpCircle className="w-8 h-8 text-slate-400" />}
            title="Argumentario de Ventas"
            subtitle="Respuestas rápidas para objeciones comunes"
          />

          <div className="space-y-6 mt-12">
            <FaqItem
              q="¿Por qué pagar $299 si Wix/Shopify es 'gratis'?"
              a="Wix no es gratis, te cobra mensualidad de por vida. Nosotros cobramos un pago único. Además, Wix no te da una IA entrenada que vende, ni un diseño de agencia. A la larga, ahorran miles de dólares con nosotros."
            />
            <FaqItem
              q="¿Qué pasa después del año gratuito?"
              a="Solo pagan la renovación del servicio técnico (hosting/dominio/Soporte). El costo es bajísimo: $99 USD al AÑO. (Menos de $9 al mes)."
            />
            <FaqItem
              q="¿Puedo editar yo mismo la página?"
              a="Si compras el Plan Estándar ($299), nosotros hacemos los cambios por ti (tienes soporte). Si quieres autogestión total, te recomendamos el Plan PRO ($499) que incluye el Bot de Telegram para editar precios al instante."
            />
            <FaqItem
              q="¿La IA atiende a clientes reales?"
              a="Sí. No es un script tonto. Entiende contexto, saluda, recomienda productos y toma el pedido. Es como contratar a una recepcionista que no duerme."
            />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-slate-600 text-sm border-t border-slate-900">
        <p>
          Rueda La Rola Media &copy; {new Date().getFullYear()} - Documento
          Confidencial Interno
        </p>
      </footer>
    </main>
  );
}

// --- Components ---

function SectionHeader({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="text-center">
      {icon && (
        <div className="inline-flex p-3 rounded-2xl bg-slate-900 border border-slate-800 mb-4">
          {icon}
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      <p className="text-xl text-slate-400">{subtitle}</p>
    </div>
  );
}

function ListItem({
  text,
  type = "good",
  highlight = false,
}: {
  text: string;
  type?: "good" | "bad";
  highlight?: boolean;
}) {
  const isGood = type === "good";
  return (
    <div
      className={`flex items-start gap-3 text-lg ${highlight ? "text-white font-medium" : "text-slate-300"}`}
    >
      <div className={`mt-1 shrink-0`}>
        {isGood ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        ) : (
          <AlertTriangle className="w-5 h-5 text-red-900" />
        )}
      </div>
      <span>{text}</span>
    </div>
  );
}

function UpsellCard({
  title,
  price,
  description,
  icon,
}: {
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-xl hover:border-indigo-500/30 transition-all hover:bg-slate-900 group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-indigo-500/30 transition-colors">
          {icon}
        </div>
        <span className="text-emerald-400 font-bold font-mono text-sm bg-emerald-500/10 px-2 py-1 rounded">
          {price}
        </span>
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-l-2 border-slate-800 pl-6 py-2 hover:border-indigo-500 transition-colors">
      <h4 className="text-white font-medium text-lg mb-2">Q: {q}</h4>
      <p className="text-slate-400 leading-relaxed">A: {a}</p>
    </div>
  );
}
