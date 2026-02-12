"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Hamburguesa Clásica",
    price: "$12.00",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80",
    description: "Carne angus, queso cheddar, lechuga y tomate.",
  },
  {
    id: 2,
    name: "Papas Fritas XL",
    price: "$5.50",
    image:
      "https://images.unsplash.com/photo-1573080496987-a199f8cd75c5?auto=format&fit=crop&w=300&q=80",
    description: "Crocantes y doradas, con nuestra salsa especial.",
  },
  {
    id: 3,
    name: "Batido de Fresa",
    price: "$4.00",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=300&q=80",
    description: "Hecho con fresas naturales y helado de vainilla.",
  },
];

export default function ClientDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans text-gray-900">
      {/* simulated mobile header */}
      <header className="bg-white p-4 shadow-xs sticky top-0 z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
            B
          </div>
          <div>
            <h1 className="font-bold leading-tight">Burger Express</h1>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Abierto ahora
            </div>
          </div>
        </div>
        <button className="p-2 bg-gray-100 rounded-full">
          <ShoppingBag className="w-5 h-5 text-gray-600" />
        </button>
      </header>

      {/* Hero Banner */}
      <div className="relative h-48 bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
          alt="Banner"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 flex items-end p-4 bg-linear-to-t from-gray-900/80 to-transparent">
          <div className="text-white">
            <h2 className="text-2xl font-bold mb-1">¡El Mejor Sabor!</h2>
            <p className="text-sm opacity-90">
              Envío gratis en pedidos de +$20
            </p>
          </div>
        </div>
      </div>

      {/* Categories (Horizontal Scroll) */}
      <div className="p-4 flex gap-3 overflow-x-auto no-scrollbar">
        {["Populares", "Hamburguesas", "Bebidas", "Postres"].map((cat, i) => (
          <button
            key={i}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${
              i === 0
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="px-4 grid gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex gap-4"
          >
            <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-gray-200">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between flex-1">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-gray-800">{product.name}</h3>
                  <div className="flex items-center gap-0.5 text-xs font-bold text-orange-500">
                    <Star className="w-3 h-3 fill-current" />
                    4.8
                  </div>
                </div>
                <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                  {product.description}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-lg">{product.price}</span>
                <button className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg shadow-lg shadow-gray-900/20 active:scale-95 transition-transform">
                  +
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg shadow-green-500/30 hover:scale-105 transition-transform font-bold">
          <MessageCircle className="w-5 h-5" />
          Pedir por WhatsApp
        </button>
      </div>
    </div>
  );
}
