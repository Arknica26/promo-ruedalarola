"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Plus,
  Play,
  Music,
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Mail,
  Sandwich,
  Star,
  X,
  MessageCircle,
} from "lucide-react";

// --- Components ---

const OrderBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Welcome to NEON BURGER! 🤖" },
    { type: "bot", text: "Hungry? Tell me what you're craving!" },
  ]);
  const [showOptions, setShowOptions] = useState(true);
  const [conversationStep, setConversationStep] = useState("initial"); // initial, ordering, upselling, completed

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        // Notification logic
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleUserAction = (action: string) => {
    if (action === "order_burger") {
      const newMessages = [
        ...messages,
        { type: "user", text: "I want a massive burger!" },
        {
          type: "bot",
          text: "Excellent choice! The Cyber-Cheese XL is legendary. 🍔",
        },
      ];
      setMessages(newMessages);
      setConversationStep("upselling");

      // Simulate thinking delay for upselling
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "🔥 UPGRADE DETECTED: Make it a meal? Add Volcanic Fries & Neon Drink for just $5 more?",
          },
        ]);
      }, 1000);
    } else if (action === "upsell_yes") {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: "Yes, upgrade me! 🍟" },
        {
          type: "bot",
          text: "Upgrade applied! You're eating like a king. 👑 Total: $23.99",
        },
        { type: "bot", text: "Order sent to kitchen! ETA: 15 mins. 🚀" },
      ]);
      setConversationStep("completed");
    } else if (action === "upsell_no") {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: "No, just the burger" },
        { type: "bot", text: "No problem! Just the burger. Total: $18.99" },
        { type: "bot", text: "Order sent to kitchen! ETA: 15 mins. 🚀" },
      ]);
      setConversationStep("completed");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Notification Bubble */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-4 bg-white text-black px-4 py-3 rounded-xl shadow-xl w-64 animate-bounce">
          <div className="relative">
            <p className="font-bold text-sm">Hey! What looks good today? 🍔</p>
            <div className="absolute -bottom-5 right-6 w-0 h-0 border-l-10 border-l-transparent border-t-10 border-t-white border-r-10 border-r-transparent"></div>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={toggleChat}
        className="bg-[#f27f0d] hover:bg-[#ccff00] hover:scale-110 transition-all duration-300 rounded-full p-4 shadow-[0_0_20px_rgba(242,127,13,0.5)] group border-2 border-white/20"
      >
        {isOpen ? (
          <X className="text-black w-8 h-8" />
        ) : (
          <Sandwich className="text-black w-8 h-8 group-hover:animate-spin" />
        )}
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] bg-[#1a1a1a] border-2 border-[#f27f0d]/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-[#f27f0d] p-4 flex items-center gap-3">
            <div className="bg-black/20 p-2 rounded-full">
              <Sandwich className="text-black w-6 h-6" />
            </div>
            <div>
              <h3 className="font-black text-black text-lg leading-none">
                NEON BOT
              </h3>
              <p className="text-black/70 text-xs font-bold uppercase">
                Online // Ready to Serve
              </p>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 h-[350px] overflow-y-auto bg-[#131313] space-y-4 flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.type === "user" ? "justify-end" : ""}`}
              >
                {msg.type === "bot" && (
                  <div className="w-8 h-8 bg-[#2a2a2a] rounded-full flex items-center justify-center shrink-0">
                    <Sandwich className="w-4 h-4 text-[#f27f0d]" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl text-sm max-w-[80%] ${
                    msg.type === "bot"
                      ? "bg-[#2a2a2a] rounded-tl-none text-white"
                      : "bg-[#f27f0d]/20 border border-[#f27f0d]/50 rounded-tr-none text-[#f27f0d]"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Options Area */}
            <div className="mt-auto pt-4 space-y-2">
              {conversationStep === "initial" && (
                <button
                  onClick={() => handleUserAction("order_burger")}
                  className="w-full bg-[#f27f0d]/10 hover:bg-[#f27f0d] border border-[#f27f0d] text-[#f27f0d] hover:text-black py-2 rounded-lg text-sm font-bold transition-all uppercase"
                >
                  I want a massive burger!
                </button>
              )}

              {conversationStep === "upselling" && (
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUserAction("upsell_yes")}
                    className="flex-1 bg-[#ccff00]/10 hover:bg-[#ccff00] border border-[#ccff00] text-[#ccff00] hover:text-black py-2 rounded-lg text-sm font-bold transition-all uppercase"
                  >
                    Yes, upgrade me! 🍟
                  </button>
                  <button
                    onClick={() => handleUserAction("upsell_no")}
                    className="flex-1 bg-white/5 hover:bg-white/20 border border-white/20 text-gray-300 py-2 rounded-lg text-sm transition-all"
                  >
                    No, thanks
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Input Placeholder */}
          <div className="p-3 bg-[#1a1a1a] border-t border-white/10 opacity-50 pointer-events-none">
            <div className="relative">
              <input
                type="text"
                placeholder="Type your order..."
                disabled
                className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function ClientDemoPage() {
  return (
    <div className="bg-[#131313] min-h-screen text-white font-sans selection:bg-[#f27f0d] selection:text-white overflow-x-hidden">
      {/* --- Styles for this page only --- */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800;900&display=swap");

        .font-display {
          font-family: "Inter", sans-serif;
        }

        .text-glow {
          text-shadow:
            0 0 10px rgba(242, 127, 13, 0.5),
            0 0 20px rgba(242, 127, 13, 0.3);
        }
        .text-glow-green {
          text-shadow:
            0 0 10px rgba(204, 255, 0, 0.5),
            0 0 20px rgba(204, 255, 0, 0.3);
        }
        .box-glow {
          box-shadow: 0 0 15px rgba(242, 127, 13, 0.3);
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #131313;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #f27f0d;
        }
      `}</style>

      <OrderBot />

      {/* Background Grid Effect */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4">
        <div className="max-w-7xl mx-auto rounded-full bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 flex justify-between items-center px-6 py-3">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Sandwich className="text-[#f27f0d] w-8 h-8 group-hover:animate-pulse" />
            <span className="text-2xl font-black tracking-tighter italic font-display">
              NEON<span className="text-[#f27f0d] text-glow">BURGER</span>
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center font-bold tracking-wide text-sm font-display">
            {["Menu", "Locations", "The Vibe"].map((item) => (
              <a
                key={item}
                href="#"
                className="hover:text-[#f27f0d] transition-colors uppercase"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="bg-[#f27f0d] hover:bg-white hover:text-[#f27f0d] text-black px-6 py-2 rounded-full font-black uppercase transition-all duration-300 box-glow"
            >
              Order Now
            </a>
          </div>
          <div className="md:hidden text-[#f27f0d]">
            <Menu className="w-8 h-8" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden font-display">
        {/* Decoration Elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#f27f0d]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ccff00]/10 rounded-full blur-[120px]"></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side: Visual */}
          <div className="order-2 lg:order-1 relative group">
            <div className="absolute inset-0 bg-linear-to-tr from-[#f27f0d] to-[#ccff00] rounded-3xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhq4aqJ4-mqRvB9ao07I2A3mQHYQHqUo1Wodugc1FpLYtHx-5B2Y0M-oNoNJbzjdFKnNMK50ZR1ZV4TdKmdDZufXkq0SK29EIIlXcTZYMufs1_l1wnyDxMmzQkLPFpS_rqbuCwie2nVQbAnBTdHtcCuJK4uFPa-QbadaUUAPa0PkfaOzpMl_RC4ZG0I5R7YqZUoduo4iOvyPDzBpZs7nQYuerZa-Mr6Kf9PwaIo9O23Z1mJwG9wTHvWaQEJdjKeuRRjz1kg58T_Ao"
                alt="Gourmet Burger"
                className="w-full h-auto object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
              />
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md border border-[#ccff00] text-[#ccff00] px-4 py-2 rounded-lg font-mono text-sm font-bold flex items-center gap-2">
                <span className="block w-2 h-2 bg-[#ccff00] rounded-full animate-ping"></span>
                FRESH_SYNTHESIS_COMPLETE
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#f27f0d]/30 bg-[#f27f0d]/10 text-[#f27f0d] text-xs font-bold tracking-widest uppercase mb-6">
              <Zap className="w-4 h-4" /> Next Gen Sustenance
            </div>
            <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter mb-6 text-white">
              BITES{" "}
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#f27f0d] via-orange-400 to-[#ccff00]">
                FROM THE
              </span>{" "}
              FUTURE
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 mb-10 font-light">
              Gourmet synthesis. 100% Real Beef. 0% Latency. Experience the
              taste of tomorrow, grilled to perfection today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="relative group overflow-hidden bg-[#f27f0d] text-black font-black text-lg px-8 py-4 rounded-xl transition-all hover:scale-105 box-glow">
                <span className="relative z-10 flex items-center gap-2 uppercase">
                  Grab a Byte <ArrowRight className="w-5 h-5" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <button className="border border-white/20 hover:border-[#ccff00] hover:text-[#ccff00] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all uppercase tracking-wide">
                View Full Menu
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-center">
                <span className="block text-2xl font-black flex items-center gap-1 justify-center">
                  <Star className="w-5 h-5 fill-current" /> 4.9
                </span>
                <span className="text-xs uppercase tracking-widest">
                  Rating
                </span>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="text-center">
                <span className="block text-2xl font-black">24/7</span>
                <span className="text-xs uppercase tracking-widest">
                  Delivery
                </span>
              </div>
              <div className="w-px h-10 bg-white/20"></div>
              <div className="text-center">
                <span className="block text-2xl font-black">15m</span>
                <span className="text-xs uppercase tracking-widest">
                  Avg Time
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Interactive Menu (Bento Grid) */}
      <section className="py-24 relative bg-[#131313] font-display">
        <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-[#f27f0d]/50 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-2">
                System{" "}
                <span className="text-[#f27f0d] text-glow">Favorites</span>
              </h2>
              <p className="text-gray-400 font-mono text-sm">
                // TOP_RATED_ITEMS_LOADED
              </p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-[#f27f0d] hover:text-black transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:bg-[#f27f0d] hover:text-black transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
            {/* Main Featured Item (Span 2x2) */}
            <div className="col-span-1 md:col-span-2 md:row-span-2 group relative rounded-3xl overflow-hidden bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 hover:border-[#f27f0d]/50 transition-colors duration-300">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRLn3oSFZfzwUoDW11LXsQhVjTsoyTCcxtEWlcZokSR7UtawbH5kLdLLhHmj76gxkLduY9NNtUWS5b_rQy72uk9gDhLbSCK2Z0b5WcFrBQdqhC4hkU8chj-E2HrtAJdxtIdqZKEs4jubnnHiiAJIPb331S3ml1KEILDEHDodSYfGH_rS62EpCqAztsgfZfyO74mwcli63nioOSIK02rwq8jsFNmVC7IlUut7-LHvsvaQXpgM3C63OEURHW7t8oSLmes7_63osHVYQ"
                alt="The Cyber-Cheese XL"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-[#131313]/50 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-[#f27f0d] text-black font-black px-3 py-1 rounded-md text-xs uppercase animate-pulse">
                Best Seller
              </div>
              <div className="absolute bottom-0 p-8 w-full">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-3xl font-black uppercase text-white group-hover:text-[#f27f0d] transition-colors">
                    The Cyber-Cheese XL
                  </h3>
                  <span className="text-2xl font-bold text-[#ccff00] font-mono">
                    $18.99
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-6 line-clamp-2">
                  Double smashed patty, crypto-cheese blend, synth-bacon, and
                  our signature neon sauce.
                </p>
                <button className="w-full py-3 rounded-xl bg-white/10 hover:bg-[#f27f0d] hover:text-black font-bold uppercase tracking-wide backdrop-blur-md border border-white/10 transition-all">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Side Item 1 */}
            <div className="col-span-1 md:col-span-2 relative rounded-3xl overflow-hidden bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 group">
              <div className="flex h-full flex-col sm:flex-row">
                <div className="w-full sm:w-1/2 p-8 flex flex-col justify-center relative z-10">
                  <span className="text-[#ccff00] text-xs font-mono mb-2">
                    // SPICY_LEVEL: HIGH
                  </span>
                  <h3 className="text-2xl font-black uppercase mb-2">
                    Volcano Fries
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Loaded with jalapeños and liquid cheese magma.
                  </p>
                  <span className="text-xl font-bold text-[#f27f0d] font-mono">
                    $8.50
                  </span>
                </div>
                <div className="w-full sm:w-1/2 relative h-48 sm:h-full">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAL8YOI4DuIce0W5MQYYxF2PG9wFJGh2I_-P8ERs3--nyspSjW-qmiyossaakymkpwGv69uWTo75V3RQXj8Aq48S_4mpTIlljQJP9Tamw9s5zlVdTF04pBA44bqsP6jc68hpqdXCErVH8nXISTgzd-QNfO_WmxVjG-2LIup56MTIkZmPcEx4uh3GgieVgfbgjpNEgF9bRTivwA90xkTabOMv1XMeE8iUtFQ2Jkyjur42rXh1lA3WcbF7bwFgb-2OvFHE81zGV4nhkM"
                    alt="Volcano Fries"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#131313] to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Tall Vertical Item */}
            <div className="col-span-1 relative rounded-3xl overflow-hidden bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 group h-80 md:h-auto">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZuUG2Gq90iMrRrcgH0uFEknRsxN5vOAFEKA9D46fdg4PKzOvSkCof_-X1MCOyK7i1UISekp4iIjvFoZ0ZlczDCPndMWSPBTrr2y-XZMGGiP8uYyG2lty2-I8FmJZHXk0yc0uRm6e99qjCNfdoXyfMojr4fNGC5vkx2hQXxA8G7E4e1Z8rcH_mVbfQLsAkRLOuxpUdgWWt8Gc6yqIWAD5AMfUbP7CJGjOX2t9bSp6iZHaeJuc-BNpEKuXEDmsC4iW8bH1qFWgJjRA"
                alt="Glitch Shake"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#131313] to-transparent"></div>
              <div className="absolute bottom-0 p-6 w-full">
                <div className="inline-block bg-[#ccff00] text-black text-xs font-bold px-2 py-1 rounded mb-2">
                  NEW
                </div>
                <h3 className="text-xl font-black uppercase mb-1">
                  Glitch Shake
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-[#f27f0d] font-mono font-bold">
                    $7.00
                  </span>
                  <button className="w-8 h-8 rounded-full bg-white/20 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Square Item */}
            <div className="col-span-1 relative rounded-3xl overflow-hidden bg-[#1a1a1a]/60 backdrop-blur-xl border border-white/10 group flex flex-col h-80 md:h-auto">
              <div className="flex-1 relative overflow-hidden">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfKES6pX2Zz02AiGPtFJSvfP01mQETIsWzgoFTX-vbPly4NKliombQjwPzuwVFAGaiD7PhCOY9_rzsyk6b6Rt596JN0YEuiYOOoUvSPmj8OwkLWrC8KD3gIGaGEyA26dWqCYIhfxTmxM0OD-XkqsWNyvvYPPhxum40NOz6cLSAF-Dp2SFlTQHlAMDQd8OF2h1kxEbRJn7nj3OyD-W5w7M1FiAeU3z2cTJFYUuPZzsPf1mNHRbrg4kVKsfNoRf_0JGERla7hKy309Q"
                  alt="Neon Chicken"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 bg-[#1a1a1a]/90 backdrop-blur-lg border-t border-white/5">
                <h3 className="text-lg font-black uppercase mb-1">
                  Neon Chicken
                </h3>
                <p className="text-xs text-gray-400 mb-3">
                  Crispy. Spicy. Electric.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-mono font-bold">$12.50</span>
                  <button className="text-[#f27f0d] text-sm font-bold uppercase hover:text-white transition-colors">
                    Add +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-[#f8f7f5] dark:bg-[#181818] text-black dark:text-white font-display">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-[#f27f0d] font-bold uppercase tracking-widest text-sm mb-2 block">
                The Hideout
              </span>
              <h2 className="text-4xl md:text-6xl font-black uppercase leading-none text-gray-900 dark:text-white">
                Vibe &{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ccff00] to-[#f27f0d]">
                  Music
                </span>
              </h2>
              <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg">
                Eat to the beat of synth-wave. Our spaces are designed for the
                digital nomad and the night owl. The streets are watching, but
                inside, it's just you and the flavor.
              </p>
            </div>
            <a
              href="#"
              className="group flex items-center gap-4 text-gray-900 dark:text-white font-bold uppercase tracking-wider hover:text-[#f27f0d] transition-colors"
            >
              <span className="w-12 h-12 rounded-full border border-current flex items-center justify-center group-hover:bg-[#f27f0d] group-hover:border-[#f27f0d] group-hover:text-black transition-all">
                <Play className="w-5 h-5 fill-current" />
              </span>
              Watch the Reel
            </a>
          </div>

          {/* Masonry-ish Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            {/* Large Image */}
            <div className="md:col-span-8 rounded-3xl overflow-hidden relative group shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqKu45cUqZ8ccsukn0GRX5haKshE74OC1yChIMzu4_mEqHGuEf_xfIU8yo1qa9FdnRQ7cZx7cijChOLaFScmRvoG_rDC3hL5Ee9TeBH5RzBYbwl0fvDbpbCzIbbbNwp4CcW7GOnl14on_Vc6PfWcw9bqqShR-gsawP5nQVlA8HS23sLwUEEOAbrREEFty-G7aV3BP0i-dfQDh2F1iRkbidiSaXNvJOxgt-xOs1dquOaTLMz4MTtbRy2V3_xWK8GCpID0J5A2afngo"
                alt="Restaurant interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
              />
              <div className="absolute bottom-6 left-6">
                <span className="bg-black/70 backdrop-blur text-white px-4 py-2 rounded-lg font-mono text-sm border-l-4 border-[#f27f0d]">
                  ZONE_A // DINING
                </span>
              </div>
            </div>
            {/* Tall Image */}
            <div className="md:col-span-4 md:row-span-2 rounded-3xl overflow-hidden relative group shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfIgZwEQCl956od9tnntmA71zx7vZxLpbmdPkCBcAz2vdrfcar7lzXjJK_t5RYianD3OXEz-OwRN3ypqXYdZuvvuiQq2_FwslswjVRWJheDEPO1D1JRHAuuAneicETT61tQ-9rmAh9v5dkI9MYP0eVO0fFlaQuGZQm3XRQQvPicjf2P071aMuZqNGKyu0Ocq6MRjaO9nycfZ587WY2moF4jx5QvfQIxpmlJTMW06vt9G90Qn5J1Q5XTfk9LrxI03VzWENlUpbjrcg"
                alt="Neon sign"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#f27f0d]/20 mix-blend-overlay"></div>
            </div>
            {/* Wide Image */}
            <div className="md:col-span-4 rounded-3xl overflow-hidden relative group shadow-xl">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG6kvxZAvc-xvQ0Ty3ghuHeVztbBjb2vmyG32ATWl6B09yiqCCJR2oMndveVT_eK3qLF8neKKmvSJHIoq9xJ_gFpjiWHYZ-yq1xnHT-C7X88MbKqfWXA3cuZa0uID17oMkbrgTuaojGUiLEsS78S_ZEU15fFwAx5eYQ68EDTPGaPypppYEHkZ1Bcn0DhRme8okcLuPy_5RY7ycA7Ydw4sma2AjY6OGTDeOiA-DEB0iPOiAfWlaFXDkl40EjxCEhKA6-6b8S0wxAig"
                alt="Chef hands"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            {/* Medium Image */}
            <div className="md:col-span-4 rounded-3xl overflow-hidden relative group shadow-xl bg-[#1a1a1a] flex items-center justify-center p-8 text-center border border-white/5">
              <div className="space-y-4">
                <Music className="w-12 h-12 text-[#ccff00] animate-bounce mx-auto" />
                <h3 className="text-2xl font-bold text-white">Live DJ Sets</h3>
                <p className="text-gray-400 text-sm">
                  Every Friday & Saturday
                  <br />
                  22:00 - 02:00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Pre-Footer */}
      <section className="py-20 bg-[#f27f0d] relative overflow-hidden font-display">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 uppercase italic">
            Sector 7 / Open Now
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
            <input
              type="email"
              placeholder="ENTER_EMAIL_FOR_UPDATES"
              className="flex-1 bg-black/10 border-2 border-black/20 rounded-xl px-6 py-4 placeholder-black/50 text-black font-mono focus:outline-none focus:border-black/50 focus:bg-black/5 transition-all"
            />
            <button className="bg-black text-white px-10 py-4 rounded-xl font-black uppercase hover:scale-105 transition-transform shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-white/5 font-mono text-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Sandwich className="text-[#f27f0d] w-6 h-6" />
                <span className="text-xl font-black italic text-white tracking-tighter">
                  NEON<span className="text-[#f27f0d]">BURGER</span>
                </span>
              </div>
              <p className="text-gray-500">
                Fueling the rebellion, one burger at a time. Establish
                connection at our physical terminals or order via the net.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#f27f0d] hover:text-black transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#f27f0d] hover:text-black transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#f27f0d] hover:text-black transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase mb-6 border-l-2 border-[#f27f0d] pl-3">
                Sitemap
              </h4>
              <ul className="space-y-3 text-gray-500">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#f27f0d] transition-colors hover:pl-2 transition-all block"
                  >
                    &gt;&gt; Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#f27f0d] transition-colors hover:pl-2 transition-all block"
                  >
                    &gt;&gt; Menu Grid
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#f27f0d] transition-colors hover:pl-2 transition-all block"
                  >
                    &gt;&gt; Locations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#f27f0d] transition-colors hover:pl-2 transition-all block"
                  >
                    &gt;&gt; Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase mb-6 border-l-2 border-[#ccff00] pl-3">
                Data Terminals
              </h4>
              <ul className="space-y-4 text-gray-500">
                <li className="flex items-start gap-3">
                  <MapPin className="text-[#f27f0d] w-4 h-4 mt-1" />
                  <span>
                    Sector 7, Downtown Grid
                    <br />
                    Neon District, ND 2049
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-[#f27f0d] w-4 h-4 mt-1" />
                  <span>+1 (555) 019-2834</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="text-[#f27f0d] w-4 h-4 mt-1" />
                  <span>Mon-Sun: 11:00 - 04:00</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 relative h-48 group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANiZ43EiqxGOF2xC0_JLXox1VPdP44jsjfbSy_rGL5Fii48wH1YLOXESVIKhl4P0lY65ddcZrROnVF39b4PyioefEM1h-fSvu2hdki3A341QfWZi6KXl7LKMFoCMS5_UCeUeLwxUZwDRMasbmEOvS1n_NSFznr0zfuHlgcfBHnmV4mSsPh3Lf_A2j8N-9nkbuQNM90Pex1AnjaXj_OB0bXK2jvLIxGWKz1d6P0YpPeqkeQP4uPZPUq_dpSX_-sTFesqCoZQ8WjIQ0"
                alt="Map"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-[#f27f0d] text-black text-xs font-bold px-3 py-1 rounded shadow-lg animate-bounce">
                  WE ARE HERE
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© 2026 NEON BURGER INC. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">
                PRIVACY PROTOCOL
              </a>
              <a href="#" className="hover:text-white">
                TERMS OF SERVICE
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
