"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { productsData } from "@/lib/products";

// ─── SEO alt texts ────────────────────────────────────────────────────────────
const productAltText: Record<string, string> = {
  "solar-dryer": "Standard Industrial Solar Dryer — 50 to 500 kg Batch with Automated Temperature Control",
  "solar-vegetable-dryer": "Solar Vegetable Processing Unit — 100 to 1000 kg Batch Solar Drying",
  "solar-fruit-dryer": "Solar Fruit Dehydration System — Preserves Natural Sugars at 45°C to 70°C",
  "solar-herb-dryer": "Botanical and Herb Solar Dryer — GMP ISO 9001 Compliant with HEPA Filtration",
  "solar-sludge-dryer": "Industrial Solar Sludge Dryer — Reduces Moisture from 85% to Under 10%",
  "solar-parabolic-cooker": "Parabolic Solar Thermal Concentrator — Up to 400°C with Dual-Axis Tracking",
  "industrial-solar-dryer": "Massive Scale Industrial Solar Drying Plant — 10 to 50 Tons Per Batch",
  "biomass-equipment": "Biomass Processing Equipment — 500 to 2000 kg per Hour Biofuel Briquettes",
};

export default function ProductsShowcase() {
  return (
    <section
      className="relative w-full bg-background py-24 md:py-32 z-10 overflow-hidden"
      id="products"
      aria-label="Radhey Solar product ecosystem — industrial solar drying and thermal solutions"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5"
          >
            Our Range
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="font-heading text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight"
          >
            Product Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Innovative solar processing systems engineered for modern industries. Minimalist design, maximum performance.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {productsData.map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/products"
            className="px-10 py-4 border border-border/60 text-foreground font-sans font-bold text-sm rounded-full hover:border-primary hover:text-primary transition-all duration-300 flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="View all Radhey Solar products"
          >
            View Full Product Range
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product, index }: { product: (typeof productsData)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const altText = productAltText[product.id] || product.name;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ transform: isHovered ? "translateY(-8px)" : "translateY(0px)" }}
      className="group relative w-full"
    >
      <Link
        href={`/products/${product.slug}`}
        className="flex flex-col min-h-[450px] md:min-h-[550px] rounded-[2rem] bg-foreground/5 backdrop-blur-3xl border border-border/40 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:bg-background hover:border-primary/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
        aria-label={`View details for ${product.name}`}
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

        {/* Shimmer */}
        <motion.div
          animate={{ opacity: isHovered ? 0.4 : 0, x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 1, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-20 pointer-events-none"
        />

        {/* Image */}
        <div className="relative w-full h-[55%] bg-surface/30 overflow-hidden z-10">
          <div className="relative w-full h-full transform transition-transform duration-1000 ease-out group-hover:scale-110">
            <Image
              src={product.image}
              alt={altText}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              priority={index === 0}
              className="object-cover scale-[1.05] drop-shadow-xl filter brightness-95 group-hover:brightness-100 transition-all duration-700"
            />
          </div>
          {/* Capacity Badge */}
          <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-border/30 px-3 py-1.5 rounded-full font-mono text-xs font-semibold text-foreground shadow-sm z-20">
            {product.capacity}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-between z-10 w-full">
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.slice(0, 2).map((tag, i) => (
                <span key={i} className="text-[11px] font-sans font-bold text-primary uppercase tracking-widest">
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-500">
              {product.name}
            </h3>
            <p className="font-sans text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {product.description}
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="font-sans text-xs font-semibold text-foreground uppercase tracking-wider relative overflow-hidden group-hover:text-primary transition-colors">
              View Details
              <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </span>
            <div className="w-10 h-10 rounded-full bg-foreground/5 border border-border/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 transform group-hover:rotate-45 shadow-sm shrink-0">
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
