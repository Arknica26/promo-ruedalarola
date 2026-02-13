"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Check,
  Home,
  MapPin,
  DollarSign,
  Star,
  Search,
  Bed,
  Bath,
  Square,
  TrendingUp,
  Shield,
  Users,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

// --- Real Estate Bot Component (Adapted for Luxury Theme) ---
const RealEstateBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Welcome to Arknica Private Office. 🏛️" },
    { type: "bot", text: "How may we assist you with your portfolio today?" },
  ]);
  const [conversationStep, setConversationStep] = useState("initial"); // initial, preferences, suggestion, completed

  const toggleChat = () => setIsOpen(!isOpen);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        // Notification logic could go here
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleUserAction = (action: string) => {
    if (action === "inquire_listing") {
      const newMessages = [
        ...messages,
        { type: "user", text: "I am interested in a new acquisition." },
        {
          type: "bot",
          text: "Splendid. Which region captures your interest? 🌍",
        },
      ];
      setMessages(newMessages);
      setConversationStep("preferences");
    } else if (action === "region_ny") {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: "New York, Manhattan" },
        { type: "bot", text: "Consulting off-market availability... 💼" },
      ]);

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: '✨ EXCLUSIVE: "The Azure Penthouse". 4 Beds, Central Park Views, $12.5M. Shall I arrange a private viewing?',
          },
        ]);
        setConversationStep("suggestion");
      }, 1500);
    } else if (action === "viewing_yes") {
      setMessages((prev) => [
        ...prev,
        { type: "user", text: "Yes, arrange a viewing." },
        {
          type: "bot",
          text: "Your request has been prioritized. Our concierge will contact you shortly. 🥂",
        },
      ]);
      setConversationStep("completed");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-60 font-sans">
      {/* Notification Bubble - Luxury Style */}
      {!isOpen && (
        <div className="absolute bottom-full right-0 mb-4 bg-[#0f172a] text-white px-5 py-4 shadow-2xl w-72 animate-fade-in border border-[#D4AF37]/30">
          <div className="relative">
            <p className="font-serif italic text-[#D4AF37] mb-1">
              Private Notification
            </p>
            <p className="text-sm font-light">
              New off-market opportunity in Manhattan.
            </p>
            <div className="absolute -bottom-6 right-6 w-0 h-0 border-l-10 border-l-transparent border-t-10 border-t-[#0f172a] border-r-10 border-r-transparent"></div>
          </div>
        </div>
      )}

      <button
        onClick={toggleChat}
        className="bg-[#0f172a] hover:bg-[#1152d4] transition-all duration-500 rounded-none w-16 h-16 flex items-center justify-center shadow-2xl group border border-[#D4AF37]/50"
      >
        {isOpen ? (
          <X className="text-[#D4AF37] w-6 h-6" />
        ) : (
          <MessageSquare className="text-[#D4AF37] w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[380px] bg-white border border-[#D4AF37]/30 shadow-2xl flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-500">
          {/* Header */}
          <div className="bg-[#0f172a] p-6 flex items-center justify-between border-b border-[#D4AF37]/30">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#D4AF37] text-[#0f172a] flex items-center justify-center font-serif font-bold">
                A
              </div>
              <div>
                <h3 className="font-serif text-white text-lg tracking-wide">
                  ARKNICA
                </h3>
                <p className="text-[#D4AF37] text-xs uppercase tracking-widest">
                  Private Concierge
                </p>
              </div>
            </div>
          </div>

          {/* Chat Body */}
          <div className="p-6 h-[400px] overflow-y-auto bg-[#f8f9fa] space-y-6 flex flex-col">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-4 ${msg.type === "user" ? "justify-end" : ""}`}
              >
                {msg.type === "bot" && (
                  <div className="w-8 h-8 bg-[#0f172a] border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                    <span className="text-[#D4AF37] font-serif text-xs">A</span>
                  </div>
                )}
                <div
                  className={`p-4 text-sm max-w-[85%] leading-relaxed shadow-sm ${
                    msg.type === "bot"
                      ? "bg-white text-slate-800 border-l-2 border-[#D4AF37]"
                      : "bg-[#D4AF37] text-white"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}

            <div className="mt-auto pt-6 space-y-3">
              {conversationStep === "initial" && (
                <button
                  onClick={() => handleUserAction("inquire_listing")}
                  className="w-full bg-[#0f172a] hover:bg-[#1e293b] text-white py-3 uppercase tracking-widest text-xs font-semibold transition-all border border-[#D4AF37]/30 hover:border-[#D4AF37]"
                >
                  Inquire About Listings
                </button>
              )}
              {conversationStep === "preferences" && (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleUserAction("region_ny")}
                    className="bg-white border border-slate-200 hover:border-[#D4AF37] text-slate-800 py-3 text-xs uppercase tracking-wider transition-all"
                  >
                    New York
                  </button>
                  <button
                    className="bg-white border border-slate-200 text-slate-300 py-3 text-xs uppercase tracking-wider cursor-not-allowed"
                    disabled
                  >
                    London
                  </button>
                </div>
              )}
              {conversationStep === "suggestion" && (
                <button
                  onClick={() => handleUserAction("viewing_yes")}
                  className="w-full bg-[#D4AF37] hover:bg-[#b8860b] text-white py-3 uppercase tracking-widest text-xs font-semibold transition-all shadow-lg"
                >
                  Request Private Viewing
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function RealEstateLuxuryPage() {
  return (
    <div className="font-sans text-[#0f172a] antialiased bg-[#ffffff] selection:bg-[#D4AF37] selection:text-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap");
        @import url("https://fonts.googleapis.com/icon?family=Material+Icons+Outlined");

        .font-display {
          font-family: "Inter", sans-serif;
        }
        .font-serif {
          font-family: "Playfair Display", serif;
        }

        .text-gold-gradient {
          background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <RealEstateBot />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-[#0f172a]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="shrink-0 flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 bg-[#0f172a] text-white flex items-center justify-center font-serif text-xl font-bold">
                A
              </div>
              <span className="font-serif text-2xl font-semibold tracking-wide text-[#0f172a]">
                ARKNICA
              </span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12">
              {["Portfolio", "Services", "Private Office", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm font-medium text-[#0f172a]/80 hover:text-[#0f172a] tracking-widest uppercase transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
            {/* Action */}
            <div className="hidden md:flex">
              <button className="px-6 py-2 border border-[#0f172a]/20 text-[#0f172a] text-sm font-medium hover:bg-[#0f172a] hover:text-white transition-all duration-300">
                Login
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-[#0f172a] hover:text-[#1152d4] p-2">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {/* Using a high-quality Unsplash image as placeholder for the one in HTML */}
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt6QAQLmPFk4dX-hAzJfGrR_0KQwmU31M1j2AL4VPpP_PGp5CoFxJtGgy8zSVjOAdNNq_PO-4ylw_vFRJ2H9VxUl-wvpQAgmCa5bMM1VPq8NmLDP3UnqSVynt2ppA6gJLazZZG_5A40TSzjxlNII2mvMcp1OUxMgD8G2pdGS4Dw_7oNDtf_VXiAR-4k6TrWI1MEAD4fxU99eRpQyvc2-XRiY9mrHXGoqMeE6nVgUU-qomrxyKMp0IPTcAo6tTBw7QEVIH9lBQeLbc"
            alt="Modern luxury glass villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f172a]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-linear-to-t from-[#0f172a]/80 via-transparent to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Curating the{" "}
            <span className="italic text-[#F3E5AB] font-light">
              Exceptional
            </span>
          </h1>
          <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-12 tracking-wide font-display">
            Discover a collection of the world's most distinguished properties,
            exclusively tailored for the modern elite.
          </p>

          {/* Quick Search Bar */}
          <div className="bg-white p-4 md:p-6 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row gap-4 items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {[
                {
                  label: "Location",
                  options: ["New York, NY", "Los Angeles, CA", "London, UK"],
                },
                {
                  label: "Property Type",
                  options: ["Penthouse", "Villa", "Estate"],
                },
                {
                  label: "Price Range",
                  options: ["$1M - $5M", "$5M - $10M", "$25M+"],
                },
              ].map((field, i) => (
                <div key={i} className="relative group text-left">
                  <label className="block text-xs uppercase tracking-wider text-[#0f172a]/50 mb-1 ml-1 font-semibold">
                    {field.label}
                  </label>
                  <div className="relative">
                    <select className="w-full border-b border-[#0f172a]/20 bg-transparent py-2 px-1 text-[#0f172a] focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none rounded-none cursor-pointer hover:bg-[#f8f9fa]">
                      {field.options.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 bottom-3 w-4 h-4 text-[#0f172a]/40 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full md:w-auto bg-[#0f172a] hover:bg-[#1152d4] text-white px-8 py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 whitespace-nowrap h-full mt-4 md:mt-0 flex items-center justify-center gap-2">
              Search <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Portfolio */}
      <section className="py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a] mb-4">
                Exclusive Listings
              </h2>
              <div className="h-1 w-20 bg-[#D4AF37]"></div>
            </div>
            <a
              className="text-[#0f172a] hover:text-[#D4AF37] transition-colors flex items-center gap-2 uppercase tracking-widest text-sm font-medium group"
              href="#"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cards */}
            {[
              {
                title: "The Azure Penthouse",
                loc: "Manhattan, NY",
                price: "$12,500,000",
                beds: 4,
                baths: 5,
                sqft: "5,400",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoXn-C3mMZJnUx1pViP6Wtby9RmK2H6ZYyERhpdMzsn009IY0QDZiNV8PkNMxupcDMT70GarZCD-0mhrasEsoOPZzwYydNOz73xRZtrupaXXtTBZE2LQS8FjJ972Dk4BdakrDDKyjhFg4wEODf9II8PeaiO1HkFR5ZUADl6O0m5ijhup4T83yu2Bl3TlaPyjuIo5YyK89O4pzMPwkteSdDyc4fRSZpN5JNiv-qwTJE9nltzlN2oBmRPnz9HcFLYBG6kueF6VF2ZBs",
              },
              {
                title: "Manor on the Hill",
                loc: "Beverly Hills, CA",
                price: "$28,000,000",
                beds: 8,
                baths: 10,
                sqft: "12,500",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7IKAfGAWlsT0vTF7qY97sp-hlfaNoRDG2TgADuOf-EeFVs9h8vDOiVIHWXVVvuooUXEf1Q0mGCdkutARbTLdNefQ8UXomfaKOk9aRi9mG9nb01QOdWl8-STTz_juWAXzvZQWAzgccSDx-8vejw1e5KDWS9YtyGASloCDZj9ug98QVQjr585YYIet-woqwuYWiOuQg5xCUzXqWSMDdkIvkMwOzH7WajHDiBJCWDW-ncCINCz8sgpwxtx6CNdiM4nXtIj8yXMJD4b4",
              },
              {
                title: "Skyline Loft",
                loc: "Chicago, IL",
                price: "$4,800,000",
                beds: 3,
                baths: 3,
                sqft: "2,800",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6g2RPv1sFYpBh4x0OadiN3Gh8RZ7yg_B4V8dHvnUkKNEocQZq7Q81UWA8-qQoX_Ncy0mFfoIEU5bpyOQdf_dg3tddU2bBb3RlReDcFZ6KTu1OAoRWnLAPox5V9mmD2XFTGo1dkFRlNGH5ixGam-j0R-BEotfl0sro3mmzb9szVkqUhfrDxrsBma6fwz-L-fWwjRSfS9mty7X-GzH7IRy5JytkP4A3EiJvvHrdgVXPuzapIhTesHOulvfaNSAI621TFrbM4cQ68FQ",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-4/3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#0f172a] text-white text-xs px-3 py-1 uppercase tracking-wider font-semibold">
                    New Listing
                  </div>
                </div>
                <div className="p-8 border-t-2 border-transparent group-hover:border-[#D4AF37] transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-serif text-2xl text-[#0f172a] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#0f172a]/60 font-display">
                        {item.loc}
                      </p>
                    </div>
                    <span className="font-serif text-xl font-semibold text-[#D4AF37]">
                      {item.price}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t border-[#0f172a]/10 pt-4 mt-4 text-[#0f172a]/70 font-display">
                    <div className="flex items-center gap-2">
                      <Bed className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-sm">{item.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-sm">{item.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="w-5 h-5 text-[#D4AF37]" />
                      <span className="text-sm">{item.sqft}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Arknica Edge (Bento) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-sm font-semibold mb-2 block font-display">
              Our Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-[#0f172a]">
              The Arknica Edge
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            {/* Large Vertical Card */}
            <div className="md:row-span-2 relative group overflow-hidden bg-[#f8f9fa] border border-[#0f172a]/5 hover:border-[#D4AF37] transition-colors duration-500 p-10 flex flex-col justify-between">
              <div className="absolute inset-0 bg-linear-to-br from-white/0 to-[#0f172a]/5 pointer-events-none"></div>
              <div>
                <div className="w-16 h-16 bg-[#0f172a] text-[#D4AF37] flex items-center justify-center mb-8">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-[#0f172a] mb-4">
                  Investment Strategy
                </h3>
                <p className="text-[#0f172a]/70 leading-relaxed mb-6 font-display">
                  We don't just sell homes; we curate appreciation. Our market
                  analysts provide bespoke reports predicting growth vectors in
                  emerging luxury districts.
                </p>
              </div>
              <a
                className="inline-flex items-center text-[#0f172a] font-medium hover:text-[#D4AF37] transition-colors gap-2 font-display uppercase tracking-wider text-xs"
                href="#"
              >
                Read Analysis <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Horizontal Card 1 */}
            <div className="md:col-span-2 bg-[#0f172a] text-white p-10 flex flex-col md:flex-row items-start md:items-center gap-8 relative overflow-hidden group">
              {/* Pattern */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <div className="shrink-0 w-16 h-16 border border-[#D4AF37]/30 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl text-white mb-2">
                  Legal Security
                </h3>
                <p className="text-white/70 max-w-lg font-display">
                  Our in-house legal team ensures airtight contracts and
                  discrete transaction handling for complex international
                  acquisitions.
                </p>
              </div>
            </div>

            {/* Horizontal Card 2 */}
            <div className="md:col-span-2 bg-[#f8f9fa] border border-[#0f172a]/5 hover:border-[#D4AF37] transition-colors duration-500 p-10 flex flex-col md:flex-row items-start md:items-center gap-8 group">
              <div className="shrink-0 w-16 h-16 bg-white shadow-lg flex items-center justify-center text-[#0f172a]">
                <Users className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-[#0f172a] mb-2">
                  Personalized Consulting
                </h3>
                <p className="text-[#0f172a]/70 max-w-lg font-display">
                  A dedicated property concierge works with you to understand
                  lifestyle requirements, from school districts to private
                  aviation access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#f8f9fa] relative">
        <div className="absolute left-0 top-0 bottom-0 w-2 md:w-4 bg-[#0f172a]"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <h2 className="font-serif text-5xl md:text-6xl text-[#0f172a] mb-6 leading-tight">
                Schedule a <br />
                <span className="text-[#D4AF37] italic">Private Tour</span>
              </h2>
              <p className="text-lg text-[#0f172a]/70 mb-8 max-w-md font-display">
                Experience our properties firsthand. Our agents are ready to
                arrange a viewing at your convenience.
              </p>
              <div className="flex flex-col gap-6 font-display">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm text-[#0f172a]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#0f172a]/50">
                      Direct Line
                    </div>
                    <div className="text-lg font-serif">+1 (800) 555-0199</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white flex items-center justify-center shadow-sm text-[#0f172a]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#0f172a]/50">
                      Email Concierge
                    </div>
                    <div className="text-lg font-serif">
                      concierge@arknica.com
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-[#D4AF37]">
              <form className="space-y-6 font-display">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {["Full Name", "Email Address"].map((label) => (
                    <div key={label} className="relative">
                      <input
                        className="peer w-full border-b border-[#0f172a]/20 bg-transparent py-2.5 px-0 text-[#0f172a] focus:border-[#0f172a] focus:outline-none placeholder-transparent"
                        placeholder={label}
                        type="text"
                      />
                      <label className="absolute left-0 -top-3.5 text-xs text-[#0f172a]/60 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#0f172a]/40 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#0f172a]">
                        {label}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <input
                    className="peer w-full border-b border-[#0f172a]/20 bg-transparent py-2.5 px-0 text-[#0f172a] focus:border-[#0f172a] focus:outline-none placeholder-transparent"
                    placeholder="Phone"
                    type="tel"
                  />
                  <label className="absolute left-0 -top-3.5 text-xs text-[#0f172a]/60 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#0f172a]/40 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#0f172a]">
                    Phone Number
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    className="peer w-full border-b border-[#0f172a]/20 bg-transparent py-2.5 px-0 text-[#0f172a] focus:border-[#0f172a] focus:outline-none placeholder-transparent"
                    placeholder="Message"
                    rows={3}
                  ></textarea>
                  <label className="absolute left-0 -top-3.5 text-xs text-[#0f172a]/60 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#0f172a]/40 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#0f172a]">
                    Interest or Inquiry
                  </label>
                </div>
                <div className="pt-4">
                  <button
                    className="w-full bg-[#0f172a] hover:bg-[#1152d4] text-white py-4 uppercase tracking-widest text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    type="button"
                  >
                    Request Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white text-[#0f172a] flex items-center justify-center font-serif text-xl font-bold">
                  A
                </div>
                <span className="font-serif text-2xl font-semibold tracking-wide">
                  ARKNICA
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs font-display">
                Redefining luxury real estate with integrity, intelligence, and
                impeccable taste.
              </p>
            </div>
            <div>
              <h4 className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-6 font-display">
                Offices
              </h4>
              <ul className="space-y-4 text-sm text-white/70 font-display">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>
                    15 Central Park West
                    <br />
                    New York, NY 10023
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>
                    1 Hyde Park
                    <br />
                    London, SW1X 7LJ
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-6 font-display">
                Explore
              </h4>
              <ul className="space-y-3 text-sm text-white/70 font-display">
                {[
                  "Current Listings",
                  "Market Reports",
                  "Our Team",
                  "Press & Media",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold mb-6 font-display">
                Stay Informed
              </h4>
              <p className="text-white/60 text-xs mb-4 font-display">
                Subscribe for exclusive off-market updates.
              </p>
              <div className="flex border-b border-white/20 pb-2">
                <input
                  className="bg-transparent border-none text-white placeholder-white/40 text-sm w-full focus:ring-0 p-0"
                  placeholder="Email Address"
                  type="email"
                />
                <button className="text-[#D4AF37] hover:text-white transition-colors uppercase text-xs font-bold">
                  Join
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-display">
            <div className="flex gap-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
            <p>© 2023 Arknica Properties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
