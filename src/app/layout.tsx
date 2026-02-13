import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rueda La Rola Media - Soluciones Tecnológicas para Emprendedores",
    template: "%s | Rueda La Rola Media",
  },
  description:
    "Impulsa tu negocio con tecnología de nivel empresarial a precio de emprendedor. Sitios web, apps y automatización. ¡Empieza hoy mismo! 🚀",
  keywords: [
    "Desarrollo Web",
    "Aplicaciones Móviles",
    "Automatización",
    "IA para Negocios",
    "Emprendedores",
    "SMEs",
    "Tecnología Accesible",
  ],
  authors: [{ name: "Rueda La Rola Types" }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "",
    title: "Rueda La Rola Media - Soluciones Tecnológicas para Emprendedores",
    description:
      "Tecnología de nivel empresarial al alcance de todos. Transforma tu negocio digitalmente hoy.",
    siteName: "Rueda La Rola Media",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rueda La Rola Media - Tecnología para Emprendedores",
    description:
      "Desarrollo web, apps y automatización para hacer crecer tu negocio.",
    creator: "@RuedaLaRolaMedia",
  },
  other: {
    "deploy-version": "redeploy-check-v2",
  },
};

import { LanguageProvider } from "@/lib/i18n-context";

import { FloatingChat } from "@/components/floating-chat";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <FloatingChat />
        </LanguageProvider>
      </body>
    </html>
  );
}
