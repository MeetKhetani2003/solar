"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Zap,
  Leaf,
  Settings2,
  HeadphonesIcon,
  Globe2,
  FlaskConical,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";

/**
 * WhyChooseUs — Differentiator section.
 * Placed after AboutSection. Uses existing design tokens exactly.
 * No visual redesign — matches the established site aesthetic.
 */

const reasons = [
  {
    icon: Zap,
    title: "Industry-Leading Efficiency",
    description:
      "Our solar dryers achieve thermal efficiency of over 85%, with parabolic concentrators delivering focal temperatures up to 400°C — unmatched in the industry.",
    stat: ">85%",
    statLabel: "Thermal Efficiency",
  },
  {
    icon: Leaf,
    title: "Zero Carbon Operations",
    description:
      "Harness renewable solar energy to replace fossil fuel-powered drying. Dramatically reduce your carbon footprint while cutting operational energy costs.",
    stat: "0",
    statLabel: "Carbon Emissions",
  },
  {
    icon: Settings2,
    title: "Fully Customisable Systems",
    description:
      "Every installation is engineered to your exact specification — capacity, material, automation level, and site conditions. No one-size-fits-all compromises.",
    stat: "50+",
    statLabel: "Product Variants",
  },
  {
    icon: FlaskConical,
    title: "Precision Engineering",
    description:
      "Food-grade SS304/SS316 construction, HEPA H13 filtration, PLC automation, and 10-inch touchscreen interfaces — built to pharmaceutical and industrial standards.",
    stat: "GMP",
    statLabel: "ISO 9001 Certified",
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Project Support",
    description:
      "From site assessment and custom engineering to installation, commissioning, and remote monitoring — our team manages the entire project lifecycle.",
    stat: "24/7",
    statLabel: "Technical Support",
  },
  {
    icon: TrendingDown,
    title: "Massive Cost Reduction",
    description:
      "Cut disposal and drying costs by up to 80%. Our sludge processors and industrial plants deliver measurable ROI within months of commissioning.",
    stat: "80%",
    statLabel: "Cost Reduction",
  },
  {
    icon: Globe2,
    title: "Global Proven Track Record",
    description:
      "1,000+ successful installations across 20+ countries. Trusted by agriculture, pharmaceuticals, food processing, and heavy industry clients worldwide.",
    stat: "20+",
    statLabel: "Countries Served",
  },
  {
    icon: ShieldCheck,
    title: "25+ Years of Excellence",
    description:
      "Backed by over 25 years of solar thermal manufacturing expertise. ISO 9001:2008 certified and MSME approved — a name synonymous with reliability.",
    stat: "25+",
    statLabel: "Years Experience",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      aria-label="Why choose Radha Energy Cell for industrial solar drying solutions"
      className="relative w-full py-24 md:py-32 bg-foreground text-background overflow-hidden"
    >
      {/* Parallax background texture */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 w-full h-[110%] -top-[5%] z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(234,88,12,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(234,88,12,0.08)_0%,transparent_55%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(253,252,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(253,252,249,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">

        {/* Header */}
        <div className="mb-20 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5"
          >
            Our Advantage
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-5xl md:text-7xl font-bold text-background tracking-tight leading-[1.05] mb-6"
          >
            Why Choose{" "}
            <span className="text-primary">Radha</span>{" "}
            Energy Cell
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xl md:text-2xl text-background/60 leading-relaxed max-w-2xl"
          >
            Eight reasons why industry leaders across 20+ countries trust us for their most critical solar drying and thermal energy requirements.
          </motion.p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-background/10 rounded-[2rem] overflow-hidden border border-background/10">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.7,
                  delay: (idx % 4) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-foreground p-8 md:p-10 flex flex-col gap-5 hover:bg-background/5 transition-colors duration-500 cursor-default"
              >
                {/* Top row: icon + stat */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors duration-500">
                    <Icon
                      className="w-5 h-5 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-2xl md:text-3xl font-bold text-primary leading-none">
                      {reason.stat}
                    </div>
                    <div className="font-mono text-[10px] font-semibold text-background/40 tracking-widest uppercase mt-1">
                      {reason.statLabel}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-background leading-snug group-hover:text-primary transition-colors duration-400">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-sm text-background/55 leading-relaxed flex-1">
                  {reason.description}
                </p>

                {/* Bottom accent line */}
                <div className="h-px w-0 bg-primary group-hover:w-full transition-all duration-700 ease-out rounded-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 rounded-2xl border border-background/10 bg-background/5"
        >
          <p className="font-sans text-background/70 text-base text-center sm:text-left">
            Ready to transform your industrial drying operations with clean solar energy?
          </p>
          <div className="flex items-center gap-4 shrink-0">
            <a
              href={`https://wa.me/911234567890?text=${encodeURIComponent("Hello! I'd like a quote for an industrial solar dryer from Radha Energy Cell.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Request a solar dryer quote from Radha Energy Cell on WhatsApp"
            >
              Request a Quote
            </a>
            <button
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 border border-background/20 text-background font-sans font-bold text-sm rounded-full hover:border-primary hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="View all Radha Energy Cell solar products"
            >
              View Products
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
