"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";

const contactDetails = [
  {
    icon: MapPin,
    label: "Address",
    value: "1st Floor ,Deol Mkt ,Rajesh Nagar, Haibowal Kalan, Ludhiana, Punjab 141001, India",
    href: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d219059.0466558085!2d75.822119!3d30.920281000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a83a410b99833%3A0x59fd0b3675e6e49f!2sRadha%20Energy%20Cell!5e0!3m2!1sen!2sus!4v1781702281988!5m2!1sen!2sus",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98888 97248",
    href: "tel:+919888897248",
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@radhasolar.com\npur@radhasolar.com",
    href: "mailto:sales@radhasolar.com",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon–Fri: 9:00 AM – 6:00 PM\nSaturday: 9:00 AM – 2:00 PM",
    href: null,
  },
];

const inquiryTypes = [
  "Standard Solar Dryer",
  "Vegetable / Fruit Dryer",
  "Herb & Botanical Dryer",
  "Industrial Sludge Processor",
  "Parabolic Thermal Concentrator",
  "Massive Scale Drying Plant",
  "Biomass Processor",
  "Solar PV Grid System",
  "Off-Grid Solar System",
  "Other / Custom Requirement",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-background text-foreground overflow-hidden">
        <LenisProvider />

        {/* Page Hero Banner */}
        <div className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 bg-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(234,88,12,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(253,252,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(253,252,249,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
            <p className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5">
              Get In Touch
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-bold text-background tracking-tight leading-[1.05] mb-6">
              Contact{" "}
              <span className="text-primary">Us</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-background/60 leading-relaxed max-w-3xl">
              Request a quote, ask a technical question, or discuss a custom solar drying solution
              with our engineering team.
            </p>
            <nav aria-label="Breadcrumb" className="mt-8">
              <ol className="flex items-center gap-2 font-sans text-sm text-background/40">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden="true" className="text-background/20">/</li>
                <li aria-current="page" className="text-primary font-semibold">Contact</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,88,12,0.04)_0%,transparent_65%)] pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

              {/* Left — Contact Details */}
              <div className="lg:col-span-4 flex flex-col gap-10">
                <div>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-4"
                  >
                    Reach Us Directly
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.06 }}
                    className="font-sans text-base text-muted-foreground leading-relaxed"
                  >
                    Our solar engineering team is available Monday to Saturday to answer your
                    questions and provide customised quotations.
                  </motion.p>
                </div>

                {/* Contact cards */}
                <div className="flex flex-col gap-4">
                  {contactDetails.map((item, idx) => {
                    const Icon = item.icon;
                    const content = (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08 }}
                        className="group flex items-start gap-4 p-5 rounded-2xl bg-foreground/[0.03] border border-border/40 hover:border-primary/30 hover:shadow-lg transition-all duration-400"
                      >
                        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-400">
                          <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] font-bold text-primary tracking-widest uppercase mb-1">
                            {item.label}
                          </p>
                          <p className="font-sans text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    );
                    return item.href ? (
                      <a key={idx} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-2xl">
                        {content}
                      </a>
                    ) : (
                      <div key={idx}>{content}</div>
                    );
                  })}
                </div>

                {/* WhatsApp CTA */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  href={`https://wa.me/919888897248?text=${encodeURIComponent("Hello! I'd like to enquire about your solar drying products and get a quote.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/50 transition-all duration-300 focus:outline-none"
                  aria-label="Chat with Radha Solar on WhatsApp"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/20">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-bold text-foreground">Chat on WhatsApp</p>
                    <p className="font-sans text-xs text-muted-foreground">Quick response guaranteed</p>
                  </div>
                </motion.a>
              </div>

              {/* Right — Contact Form */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="p-8 md:p-12 rounded-[2rem] bg-foreground/[0.03] border border-border/40"
                >
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center gap-6">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-primary" aria-hidden="true" />
                      </div>
                      <h2 className="font-heading text-3xl font-bold text-foreground">
                        Message Sent!
                      </h2>
                      <p className="font-sans text-muted-foreground text-lg max-w-md leading-relaxed">
                        Thank you for reaching out. Our solar engineering team will contact you
                        within 24 hours with a customised response.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                        Request a Quote
                      </h2>
                      <p className="font-sans text-sm text-muted-foreground mb-8">
                        Fill in your details and we&apos;ll prepare a customised solar solution for you.
                      </p>

                      {/* Grid of fields */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                            Full Name <span className="text-primary">*</span>
                          </label>
                          <input
                            id="name" name="name" type="text" required
                            value={form.name} onChange={handleChange}
                            placeholder="Your full name"
                            className="px-4 py-3.5 rounded-xl bg-background border border-border/60 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors"
                          />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                            Email Address <span className="text-primary">*</span>
                          </label>
                          <input
                            id="email" name="email" type="email" required
                            value={form.email} onChange={handleChange}
                            placeholder="your@email.com"
                            className="px-4 py-3.5 rounded-xl bg-background border border-border/60 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors"
                          />
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="phone" className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                            Phone Number
                          </label>
                          <input
                            id="phone" name="phone" type="tel"
                            value={form.phone} onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="px-4 py-3.5 rounded-xl bg-background border border-border/60 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors"
                          />
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-2">
                          <label htmlFor="company" className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                            Company / Organisation
                          </label>
                          <input
                            id="company" name="company" type="text"
                            value={form.company} onChange={handleChange}
                            placeholder="Your company name"
                            className="px-4 py-3.5 rounded-xl bg-background border border-border/60 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Product Inquiry */}
                      <div className="flex flex-col gap-2 mb-5">
                        <label htmlFor="inquiry" className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                          Product of Interest <span className="text-primary">*</span>
                        </label>
                        <select
                          id="inquiry" name="inquiry" required
                          value={form.inquiry} onChange={handleChange}
                          className="px-4 py-3.5 rounded-xl bg-background border border-border/60 font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors appearance-none cursor-pointer"
                        >
                          <option value="">Select a product category…</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-2 mb-8">
                        <label htmlFor="message" className="font-sans text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                          Message / Requirements <span className="text-primary">*</span>
                        </label>
                        <textarea
                          id="message" name="message" required rows={5}
                          value={form.message} onChange={handleChange}
                          placeholder="Describe your drying requirements — capacity needed, material type, location, budget range…"
                          className="px-4 py-3.5 rounded-xl bg-background border border-border/60 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto px-12 py-4 bg-primary text-white font-sans font-bold text-base rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        {loading ? (
                          <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" aria-hidden="true" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </motion.div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
