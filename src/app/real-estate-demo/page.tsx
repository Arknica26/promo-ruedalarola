"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin, Home } from "lucide-react";
import Image from "next/image";

const properties = [
  {
    id: 1,
    name: "Apartamento Centro",
    price: "$120,000",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=300&q=80",
    description: "2 Habitaciones, 1 Baño. Cerca del metro.",
  },
  {
    id: 2,
    name: "Casa de Campo",
    price: "$250,000",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=300&q=80",
    description: "Amplio jardín, piscina y zona BBQ.",
  },
  {
    id: 3,
    name: "Loft Industrial",
    price: "$180,000",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=300&q=80",
    description: "Estilo moderno, techos altos, zona exclusiva.",
  },
];

export default function RealEstateDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans text-gray-900">
      {/* simulated mobile header */}
      <header className="bg-white p-4 shadow-xs sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            I
          </div>
          <div>
            <h1 className="font-bold leading-tight">InmoBot Properties</h1>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Agentes en línea
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className="relative h-48 bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80"
          alt="Luxury Home"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-end p-4 bg-linear-to-t from-gray-900/80 to-transparent">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-1">Tu Hogar Ideal</h2>
            <p className="text-sm opacity-90">Asesoría gratuita por IA</p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="p-4 flex gap-3 overflow-x-auto no-scrollbar">
        {["Venta", "Alquiler", "Oficinas", "Terrenos"].map((cat, i) => (
          <button
            key={i}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
              i === 0
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="px-4 grid gap-4">
        {properties.map((prop) => (
          <motion.div
            key={prop.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="relative w-full h-40 bg-gray-200">
              <Image
                src={prop.image}
                alt={prop.name}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {prop.price}
              </div>
            </div>

            <div className="p-3">
              <h3 className="font-bold text-gray-800 text-lg">{prop.name}</h3>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3" /> Zona Norte
              </p>
              <p className="text-sm text-gray-600 mt-2">{prop.description}</p>

              <button className="mt-3 w-full py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors">
                Ver Detalles
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg shadow-green-500/30 hover:scale-105 transition-transform font-bold">
          <MessageCircle className="w-5 h-5" />
          Agendar Visita
        </button>
      </div>
    </div>
  );
}
