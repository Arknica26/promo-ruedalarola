"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/i18n-context";

export default function TermsPage() {
  const { t } = useLanguage();
  const text = t.legal_docs?.terms || {
    title: "Terms and Conditions",
    acceptance_title: "1. Acceptance",
    acceptance_text: "Loading...",
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <div className="grow container mx-auto px-4 py-32 md:py-40">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold mb-8 text-primary">{text.title}</h1>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{text.acceptance_title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {text.acceptance_text}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{text.license_title}</h2>
            <p className="text-gray-300 leading-relaxed">{text.license_text}</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">{text.limitations_title}</h2>
            <p className="text-gray-300 leading-relaxed">
              {text.limitations_text}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              {text.modifications_title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {text.modifications_text}
            </p>
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
