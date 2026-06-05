"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Award,
  ShieldCheck,
  BadgeCheck,
  Globe,
  CheckCircle,
  Lightbulb,
  Sun,
  Leaf,
  Zap,
  Settings,
  ChevronDown,
} from "lucide-react";

/**
 * AboutSection — Full Company Profile for Radha Solar Energy Cell
 * Placed directly after Hero. Uses existing site design tokens.
 * No visual redesign — matches the established aesthetic exactly.
 */

const companyHighlights = [
  { label: "Established", value: "2007" },
  { label: "Based In", value: "Ludhiana, Punjab" },
  { label: "Management Experience", value: "18+ Years" },
  { label: "Rooftop Installations", value: "700+" },
  { label: "Street Light Projects", value: "4,300+" },
  { label: "Grid Solar Project", value: "5.25 MW" },
];

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "ISO 9001:2008 Certified",
    subtitle: "Quality Management",
    detail:
      "CRISIL certified performance and credit rating in 2013. Committed to world-class quality in every solar product.",
  },
  {
    icon: BadgeCheck,
    title: "MSME Approved",
    subtitle: "Govt. of India Recognised",
    detail:
      "Micro, Small and Medium Enterprises (MSME) approved solar products manufacturer — Solar Parabolic Cooker.",
  },
  {
    icon: Award,
    title: "Trained Manpower",
    subtitle: "Karnataka Power Corp.",
    detail:
      "Manpower trained by Karnataka Power Corporation Limited on Solar PV Grid Connected Plants in 2011.",
  },
  {
    icon: Globe,
    title: "PV Grid Specialists",
    subtitle: "On-Grid & Off-Grid",
    detail:
      "Specialists in Solar PV Grid & Off-Grid systems. Major projects in Rajasthan, Gujarat, and across India.",
  },
];

const solarFacts = [
  { icon: Leaf, text: "Absolutely pollution free" },
  { icon: Zap, text: "Save electricity, save money" },
  { icon: Settings, text: "Safe and easy to operate" },
  { icon: Sun, text: "Easy to install, negligible maintenance" },
  { icon: Lightbulb, text: "Specially designed for Indian weather conditions" },
];

const dryerProducts = [
  "Solar Fruit Dryer",
  "Vegetable Dehydrator",
  "Onion & Garlic Dryer",
  "Pepper & Tomato Dryer",
  "Champignon Dryer",
  "Ginger & Tamarind Dryer",
  "Amla & Chilli Dryer",
  "Mushroom & Grape Dryer",
  "Dates & Mango Dryer",
  "Custom Agro-Produce Dryers",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showMore, setShowMore] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="About Radha Solar Energy Cell — Solar Products Manufacturer in Ludhiana Punjab India"
      className="relative w-full bg-background text-foreground overflow-hidden border-b border-border/40"
    >
      {/* ────────────────────────────────────────────────────── */}
      {/* PART 1 — Company Intro */}
      {/* ────────────────────────────────────────────────────── */}
      <div className="py-24 md:py-32 relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,88,12,0.05)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-primary/[0.03] blur-[180px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left: Text */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5"
              >
                Company Profile
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.05] mb-8"
              >
                Radha{" "}
                <span className="text-primary">Energy</span>
                {" "}Cell
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-lg md:text-xl text-muted-foreground leading-relaxed mb-5"
              >
                Radha Solar Energy Cell is a{" "}
                <strong className="text-foreground font-semibold">market leader</strong>{" "}
                in Solar Products and Equipment — a reputed manufacturer and exporter of{" "}
                <span className="text-foreground font-medium">Solar Parabolic Cookers, Solar Cookers, Solar Dishes,</span>{" "}
                and{" "}
                <span className="text-foreground font-medium">Solar Dryers</span>.
                Established in{" "}
                <span className="text-foreground font-semibold">2007</span>{" "}
                and headquartered in{" "}
                <span className="text-foreground font-semibold">Ludhiana, Punjab, India</span>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.13, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base text-muted-foreground leading-relaxed mb-10"
              >
                As Solar PV Grid & Off-Grid specialists with a combined senior management experience of{" "}
                <strong className="text-foreground">18 years</strong>, we have successfully delivered over{" "}
                <strong className="text-foreground">700 rooftop installations</strong>, approximately{" "}
                <strong className="text-foreground">4,300 street light installations</strong>, and a landmark{" "}
                <strong className="text-foreground">5.25 MW grid-based Solar Integration project at BAAP, Rajasthan</strong>{" "}
                — alongside major projects in Gujarat and across India.
              </motion.p>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap items-center gap-4"
              >
                <button
                  onClick={() =>
                    document
                      .getElementById("products")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-8 py-3 bg-primary text-primary-foreground font-sans font-bold text-sm rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-md shadow-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Explore Radha Solar Energy Cell solar products"
                >
                  Explore Products
                </button>
                <a
                  href={`https://wa.me/911234567890?text=${encodeURIComponent(
                    "Hello! I'd like to know more about Radha Solar Energy Cell solar products."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-border/60 text-foreground font-sans font-bold text-sm rounded-full hover:border-primary hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary/50"
                  aria-label="Contact Radha Solar Energy Cell on WhatsApp"
                >
                  Contact Us
                </a>
              </motion.div>
            </div>

            {/* Right: Stats grid + Trust badges */}
            <motion.div style={{ y }} className="flex flex-col gap-6">
              {/* Company highlights strip */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                {companyHighlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-foreground/[0.03] border border-border/40 flex flex-col gap-1"
                  >
                    <span className="font-heading text-2xl font-bold text-primary">
                      {item.value}
                    </span>
                    <span className="font-sans text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                      {item.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Trust badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trustBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.7,
                        delay: 0.1 + idx * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="group relative p-5 rounded-2xl bg-foreground/[0.03] border border-border/40 hover:border-primary/30 hover:bg-background transition-all duration-500 hover:shadow-xl"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-500">
                        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-sm font-bold text-foreground mb-0.5 leading-snug">
                        {badge.title}
                      </h3>
                      <p className="font-mono text-[10px] font-semibold text-primary tracking-widest uppercase mb-2">
                        {badge.subtitle}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                        {badge.detail}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────── */}
      {/* PART 2 — Solar Dryer Products & Facts (dark band) */}
      {/* ────────────────────────────────────────────────────── */}
      <div className="bg-foreground text-background py-24 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(234,88,12,0.10)_0%,transparent_60%)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Solar Dryer Description */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5"
              >
                Solar Dryer
              </motion.p>

              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-4xl md:text-5xl font-bold text-background tracking-tight leading-tight mb-6"
              >
                India&apos;s Leading Solar{" "}
                <span className="text-primary">Dryer</span>{" "}
                Manufacturer
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base text-background/65 leading-relaxed mb-4"
              >
                Want to install a Solar Fruit Dryer or Solar Vegetable Dehydrator in India? We supply all types of solar dryers in bulk order quantities.{" "}
                <strong className="text-background">RADHA SOLAR ENERGY CELL</strong>{" "}
                — the Solar Dryer manufacturer, supplier and exporter in India. Dry Amla, Chillies, Mushroom, Grapes, Dates, Vegetables, Mangoes and many other agro-products using{" "}
                <span className="text-primary font-semibold">free solar energy</span>.
              </motion.p>

              {/* Show more toggle */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                {showMore && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="font-sans text-base text-background/65 leading-relaxed mb-4"
                  >
                    Solar Power Dryer as a source of Renewable Energy is very useful in drying food items. In many places across Rural and Urban India where consistent power supply is unavailable, Solar Dryers provide a hygienic and efficient solution. An additional feature simultaneously generates electricity via a solar panel, powering exhaust fans that force moisture-laden air out of the chamber — achieving sufficiently high drying temperatures and accelerated processing.
                  </motion.p>
                )}
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-2 focus:outline-none focus-visible:underline"
                  aria-expanded={showMore}
                >
                  {showMore ? "Show less" : "Read more"}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
              </motion.div>

              {/* Serving cities */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="font-sans text-xs text-background/40 leading-relaxed mt-6"
              >
                <span className="font-semibold text-background/60">Serving:</span>{" "}
                Delhi, Noida, Kolkata, Mumbai, Chennai, Hyderabad, Bengaluru, Ludhiana, Kashmir, Bihar, Odisha, Kerala, Assam, Tripura & all of India.
              </motion.p>
            </div>

            {/* Right: Products list + Facts */}
            <div className="flex flex-col gap-10">
              {/* Products list */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-mono text-primary text-xs font-bold tracking-[0.25em] uppercase mb-5">
                  Products We Supply
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {dryerProducts.map((product, idx) => (
                    <div key={idx} className="flex items-center gap-3 py-2 border-b border-background/10 last:border-b-0">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                      <span className="font-sans text-sm text-background/75">{product}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Solar Energy Facts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-background/10 bg-background/5 p-7"
              >
                <p className="font-mono text-primary text-xs font-bold tracking-[0.25em] uppercase mb-6">
                  Solar Energy Facts
                </p>
                <div className="flex flex-col gap-4">
                  {solarFacts.map((fact, idx) => {
                    const Icon = fact.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-primary" aria-hidden="true" />
                        </div>
                        <span className="font-sans text-sm text-background/75 font-medium">
                          {fact.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ── PART 3 — Infrastructure, Facilities & R&D ────────── */}
      <div className="py-24 md:py-32 relative bg-background border-t border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,88,12,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Infrastructure & Facilities */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5"
              >
                Our Facility
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6"
              >
                Infrastructure &amp; Facilities
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base text-muted-foreground leading-relaxed mb-6"
              >
                We have maintained an ultra-modern infrastructure unit that is well-equipped with the latest machinery and technology. This robust layout assists us in meeting large and urgent orders for our clients within the predefined time schedules.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base text-muted-foreground leading-relaxed mb-6"
              >
                For smooth functioning, we have separated our infrastructure into distinct specialized departments including production, quality testing, R&D, and sales &amp; marketing. We upgrade all installed machinery and equipment on a regular basis in accordance with market advancements.
              </motion.p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Advanced Machinery",
                  "Separate Departments",
                  "Regular Upgrades",
                  "Urgent Order Handling"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0" aria-hidden="true" />
                    <span className="font-sans text-sm text-foreground/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* R&D Department */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5"
              >
                Innovation
              </motion.p>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6"
              >
                Research &amp; Development
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base text-muted-foreground leading-relaxed mb-6"
              >
                In order to compete with the rapid pace of solar technology developments, we have established an in-house R&D wing. This division is headed by qualified Researchers and experienced analysts.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-base text-muted-foreground leading-relaxed mb-6"
              >
                Our R&D experts conduct surveys and studies regarding consumer demands and incoming technological additions. They maintain track records of advancements, assist the organization with innovation adoption, and align the production team with the latest market refinements.
              </motion.p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "Experienced Analysts",
                  "Market Trend Surveys",
                  "Innovation Briefings",
                  "Technical Guidance"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0" aria-hidden="true" />
                    <span className="font-sans text-sm text-foreground/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
