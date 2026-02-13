"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Star,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Smile,
  Zap,
  Shield,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { DentalBot } from "./dental-bot";

export default function DentalDemoPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 antialiased bg-[#F5F5F0] selection:bg-[#2A9D8F] selection:text-white">
      {/* Styles & Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap");

        .font-body {
          font-family: "Lato", sans-serif;
        }
        .font-serif {
          font-family: "Playfair Display", serif;
        }
      `}</style>

      {/* Bot */}
      <DentalBot />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-[#2A9D8F]/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-[#2A9D8F] text-white flex items-center justify-center rounded-tr-xl rounded-bl-xl shadow-lg">
                <Smile className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#264653] tracking-tight block leading-none">
                  LUMINA
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#B87333] font-bold">
                  Dental Spa
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {["Expertise", "Specialists", "Technology", "Stories"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-gray-600 hover:text-[#2A9D8F] uppercase tracking-wider transition-colors font-body"
                  >
                    {item}
                  </a>
                ),
              )}
              <a
                href="#book"
                className="bg-[#2A9D8F] hover:bg-[#21867a] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-[#2A9D8F]/20 transition-all hover:scale-105"
              >
                Book Visit
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#264653] hover:text-[#2A9D8F]"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
            {["Expertise", "Specialists", "Technology", "Stories"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-lg font-serif text-gray-700 hover:text-[#2A9D8F]"
                >
                  {item}
                </a>
              ),
            )}
            <button className="w-full bg-[#2A9D8F] text-white py-3 rounded-xl font-bold mt-2">
              Book Visit
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
        id="book"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
            alt="Serene Dental Clinic Interior"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#F5F5F0] via-[#F5F5F0]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-8 animate-in slide-in-from-left-10 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-[#2A9D8F]/20 text-[#2A9D8F] text-xs font-bold tracking-wider uppercase shadow-sm">
              <Star className="w-3 h-3 fill-current" /> Award Winning Care
            </div>
            <h1 className="font-serif text-5xl md:text-7xl text-[#264653] leading-[1.1]">
              Refining the Art of <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#2A9D8F] to-[#264653]">
                Your Smile
              </span>
            </h1>
            <p className="text-xl text-gray-600 font-body max-w-lg leading-relaxed">
              Experience dentistry reimagined. Where clinical precision meets
              spa-like tranquility. Your journey to a radiant smile begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-[#2A9D8F] text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-[#2A9D8F]/30 hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 justify-center">
                Start Your Journey{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full font-bold text-[#264653] border-2 border-[#264653]/10 hover:bg-[#264653]/5 transition-all flex items-center gap-2 justify-center">
                View Gallery
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm font-medium text-gray-500">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                  >
                    <img
                      src={`https://i.pravatar.cc/100?img=${i + 10}`}
                      alt="Client"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-[#F4A261] text-white flex items-center justify-center text-xs font-bold">
                  +2k
                </div>
              </div>
              <p>Trusted by 2,000+ patients in the city.</p>
            </div>
          </div>

          {/* Embedded Scheduler Card */}
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl shadow-gray-200/50 p-8 border border-gray-100 relative animate-in slide-in-from-right-10 duration-700 delay-200">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#B87333]/10 rounded-full blur-2xl"></div>

            <h3 className="font-serif text-2xl text-[#264653] mb-2">
              Book Appointment
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Select a service to see available slots.
            </p>

            <form className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Service
                </label>
                <select className="w-full p-3 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-[#2A9D8F]/50 outline-none text-gray-700 font-medium cursor-pointer">
                  <option>General Consultation</option>
                  <option>Teeth Whitening</option>
                  <option>Invisalign Assessment</option>
                  <option>Emergency Care</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full p-3 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-[#2A9D8F]/50 outline-none text-gray-700 font-medium"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Time
                  </label>
                  <select className="w-full p-3 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-[#2A9D8F]/50 outline-none text-gray-700 font-medium">
                    <option>09:00 AM</option>
                    <option>11:30 AM</option>
                    <option>02:00 PM</option>
                    <option>04:15 PM</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Your Details
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-3 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-[#2A9D8F]/50 outline-none placeholder-gray-400 mb-2"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-3 bg-[#F5F5F0] rounded-xl border-none focus:ring-2 focus:ring-[#2A9D8F]/50 outline-none placeholder-gray-400"
                />
              </div>

              <button
                type="button"
                className="w-full bg-[#264653] text-white py-4 rounded-xl font-bold hover:bg-[#1e3a45] transition-colors shadow-lg mt-2 flex justify-center items-center gap-2"
              >
                Confirm Booking <CheckCircle className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
              <Shield className="w-3 h-3" /> HIPAA Compliant & Secure
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-white" id="expertise">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl text-[#264653] mb-4">
              Holistic Dental Excellence
            </h2>
            <p className="text-gray-500 text-lg">
              We combine advanced technology with a gentle touch to provide
              comprehensive care for your entire family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Smile,
                title: "Cosmetic Dentistry",
                desc: "Veneers, whitening, and smile makeovers designed to enhance your natural beauty.",
              },
              {
                icon: Shield,
                title: "Preventive Care",
                desc: "Advanced hygiene appointments and oral health screenings to keep your smile healthy.",
              },
              {
                icon: Zap,
                title: "Orthodontics",
                desc: "Clear aligners and modern braces for precision alignment without the hassle.",
              },
              {
                icon: Award,
                title: "Implants & Surgery",
                desc: "Restorative solutions utilizing state-of-the-art 3D imaging and guided surgery.",
              },
              {
                icon: Clock,
                title: "Emergency Care",
                desc: "Same-day appointments for urgent dental needs. We're here when you need us.",
              },
              {
                icon: Star,
                title: "Pediatric Dentistry",
                desc: "Gentle, fun, and educational visits for our youngest patients to build lifelong habits.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-[#F5F5F0] hover:bg-white border border-transparent hover:border-[#2A9D8F]/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-white text-[#2A9D8F] rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform scroll-smooth">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl text-[#264653] mb-3 group-hover:text-[#2A9D8F] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-body">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-24 bg-[#264653] text-white" id="specialists">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#2A9D8F] font-bold tracking-widest uppercase text-sm mb-2 block">
                Our Team
              </span>
              <h2 className="font-serif text-4xl md:text-5xl">
                Meet the Specialists
              </h2>
            </div>
            <button className="text-white border-b border-[#2A9D8F] hover:text-[#2A9D8F] transition-colors pb-1">
              View All Staff
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. Sarah Lin",
                role: "Orthodontist",
                img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Dr. James Wilson",
                role: "Oral Surgeon",
                img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Dr. Emily Chen",
                role: "Pediatric Dentist",
                img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Dr. Michael Ross",
                role: "Cosmetic Specialist",
                img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
            ].map((doc, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl aspect-3/4"
              >
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#1d353f] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 p-6 w-full">
                  <p className="text-[#2A9D8F] text-xs font-bold uppercase tracking-wider mb-1">
                    {doc.role}
                  </p>
                  <h3 className="font-serif text-2xl">{doc.name}</h3>
                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm text-gray-300">Book Appt</span>
                    <div className="w-8 h-8 rounded-full bg-[#2A9D8F] flex items-center justify-center">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F5F5F0] overflow-hidden" id="stories">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="absolute top-0 right-0 text-[10rem] font-serif text-[#264653]/5 leading-none pointer-events-none">
            "
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 text-[#B87333] fill-current" />
              ))}
            </div>
            <h3 className="font-serif text-3xl md:text-5xl text-[#264653] leading-snug mb-8">
              "I used to be terrified of the dentist. Lumina changed everything.
              The staff is incredibly kind, and the space feels more like a spa
              than a clinic. My smile has never looked better!"
            </h3>
            <div>
              <p className="font-bold text-[#264653] text-lg">
                Jessica Reynolds
              </p>
              <p className="text-[#2A9D8F] text-sm font-medium">
                Invisalign Patient
              </p>
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <button className="w-12 h-12 rounded-full border border-[#264653]/10 flex items-center justify-center hover:bg-[#2A9D8F] hover:text-white hover:border-transparent transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="w-12 h-12 rounded-full border border-[#264653]/10 flex items-center justify-center hover:bg-[#2A9D8F] hover:text-white hover:border-transparent transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Smile className="w-8 h-8 text-[#2A9D8F]" />
                <span className="font-serif text-2xl font-bold text-[#264653]">
                  LUMINA
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Providing exceptional dental care with a commitment to quality,
                comfort, and patient education.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholder */}
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-[#F5F5F0] hover:bg-[#2A9D8F] hover:text-white transition-colors cursor-pointer"
                  ></div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#264653] uppercase tracking-widest text-xs mb-6">
                Contact
              </h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2A9D8F] shrink-0" />
                  <span>
                    123 Wellness Blvd, Suite 400
                    <br />
                    Beverly Hills, CA 90210
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#2A9D8F] shrink-0" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#2A9D8F] shrink-0" />
                  <span>hello@luminadental.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#264653] uppercase tracking-widest text-xs mb-6">
                Hours
              </h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex justify-between">
                  <span>Mon - Fri</span> <span>08:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span> <span>09:00 - 14:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>{" "}
                  <span className="text-[#B87333]">Closed</span>
                </li>
              </ul>
            </div>

            <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-[#F5F5F0]">
                <span className="text-gray-400 text-sm font-medium">
                  Map Embed
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p>© 2026 Lumina Dental Spa. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#2A9D8F]">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#2A9D8F]">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
