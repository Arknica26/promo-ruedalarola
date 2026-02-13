"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/i18n-context";

export default function PrivacyPage() {
  const { t } = useLanguage();
  // Safe fallback to prevent crash if keys missing
  const text = t.legal_docs?.privacy || {
    title: "Privacy Policy",
    intro_title: "1. Introduction",
    intro_text: "Loading...",
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="grow container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold mb-8 text-primary">{text.title}</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{text.intro_title}</h2>
            <p className="text-gray-300 leading-relaxed">{text.intro_text}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{text.collection_title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {text.collection_text}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{text.use_title}</h2>
            <p className="text-gray-300 leading-relaxed">{text.use_text}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{text.contact_title}</h2>
            <p className="text-gray-300 leading-relaxed">{text.contact_text}</p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
