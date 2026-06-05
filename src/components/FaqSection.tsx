"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

/**
 * FaqSection — SEO FAQ Accordion
 * Appended after ProductsShowcase. Uses the exact same design tokens
 * (colors, fonts, spacing) as the rest of the site — no design changes.
 * FAQ content is keyword-rich for organic search ranking.
 * Matches the FAQPage JSON-LD schema in schemas.ts.
 */

const faqs = [
  {
    id: "faq-1",
    question: "What is an industrial solar dryer and how does it work?",
    answer:
      "An industrial solar dryer uses solar thermal energy to remove moisture from agricultural produce, food products, herbs, or industrial materials. It captures solar radiation through collectors, heats air, and circulates it through a drying chamber to evaporate moisture. Radha Solar dryers achieve 35°C – 85°C and operate 24/7 with hybrid backup systems for continuous production.",
  },
  {
    id: "faq-2",
    question: "What batch capacities are available in Radha Solar dryers?",
    answer:
      "Radha Solar offers dryers from 20 kg/batch (herb & botanical dryers) up to 10–50 tons/batch (massive scale industrial plants). Vegetable processing units handle 100–1,000 kg/batch, fruit dehydration systems 50–800 kg/batch, and sludge processors handle 1–10 tons/day on a continuous basis.",
  },
  {
    id: "faq-3",
    question: "How much does an industrial solar dryer cost?",
    answer:
      "The cost of an industrial solar dryer varies based on capacity, material type, and automation level. Radha Solar offers solutions for every scale — from small agricultural units to enterprise drying plants. Contact us for a free, customized quote tailored to your production requirements, location, and budget.",
  },
  {
    id: "faq-4",
    question: "What is the thermal efficiency of Radha Solar systems?",
    answer:
      "Our food processing dryers achieve thermal efficiency of over 85%. Parabolic thermal concentrators deliver focal temperatures up to 400°C with 94% mirror reflectivity. Industrial drying plants include heat recovery systems providing up to 40% additional energy savings.",
  },
  {
    id: "faq-5",
    question: "Are Radha Solar dryers suitable for pharmaceutical GMP applications?",
    answer:
      "Yes. Our Botanical & Herb Dryer is purpose-built for pharmaceutical-grade drying. It features HEPA H13 air filtration, precision RH & temperature sensors, ultra-low temperatures (25°C – 50°C) to preserve volatile oils and active pharmaceutical ingredients, and is GMP / ISO 9001 compliant.",
  },
  {
    id: "faq-6",
    question: "Do the solar dryers work on cloudy days or at night?",
    answer:
      "Yes. All Radha Solar industrial dryers include hybrid backup heating — electric or biomass-based — ensuring continuous 24/7 operation regardless of weather. The hybrid system activates automatically when solar input is insufficient, guaranteeing zero production downtime.",
  },
  {
    id: "faq-7",
    question: "How many countries has Radha Solar served?",
    answer:
      "Radha Solar has served clients in 20+ countries across Asia, Africa, the Middle East, and Europe. With 25+ years of manufacturing experience and 1,000+ successful installations, we are a globally recognized leader in industrial solar thermal technology.",
  },
  {
    id: "faq-8",
    question: "What warranty does Radha Solar offer?",
    answer:
      "We offer a 5-year warranty on our Standard Solar Dryer systems. Parabolic thermal concentrators are engineered to last 25+ years. All products use food-grade stainless steel (SS304/SS316) or epoxy-coated steel for corrosion resistance and long-term industrial durability.",
  },
  {
    id: "faq-9",
    question: "Can solar dryers be used for industrial sludge and waste management?",
    answer:
      "Absolutely. Our Industrial Sludge Processor is specifically designed for municipal and industrial wastewater sludge. It reduces moisture content from 85% to under 10%, cutting disposal volumes and costs by up to 80% — using zero-carbon solar thermal energy with automated sludge turning and integrated odor control.",
  },
  {
    id: "faq-10",
    question: "What is the installation timeline for a Radha Solar system?",
    answer:
      "Standard solar dryers and specialized units are typically commissioned within weeks of order confirmation. Massive scale industrial drying plants require 3–6 months for full deployment — including site preparation, modular installation, and commissioning. Our team handles end-to-end project management.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions about industrial solar dryers"
      className="relative w-full py-24 md:py-32 bg-background text-foreground overflow-hidden border-t border-border/40"
    >
      {/* Background glow — matches existing site style */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,88,12,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-4"
          >
            Knowledge Base
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-heading text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Everything you need to know about industrial solar drying technology, capacity, efficiency, and installation.
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (idx % 5) * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Individual FAQ item — uses details/summary for semantic HTML */}
              <div
                className="border-b border-border/40 last:border-b-0"
              >
                <button
                  id={`${faq.id}-trigger`}
                  aria-expanded={openId === faq.id}
                  aria-controls={`${faq.id}-panel`}
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-start justify-between gap-6 py-7 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:rounded-sm"
                >
                  <h3 className="font-sans text-base md:text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300 pr-2">
                    {faq.question}
                  </h3>
                  <div
                    className="shrink-0 w-9 h-9 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-300"
                    aria-hidden="true"
                  >
                    <motion.div
                      animate={{ rotate: openId === faq.id ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Plus className="w-4 h-4" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      id={`${faq.id}-panel`}
                      role="region"
                      aria-labelledby={`${faq.id}-trigger`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-base text-muted-foreground leading-relaxed pb-7 pr-14">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <p className="font-sans text-muted-foreground text-base">
            Still have questions? Our solar engineering team is ready to help.
          </p>
          <a
            href={`https://wa.me/911234567890?text=${encodeURIComponent("Hello! I have a question about your solar drying systems.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-md shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Ask your solar drying question on WhatsApp"
          >
            Ask on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
