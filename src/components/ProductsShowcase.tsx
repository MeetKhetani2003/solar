"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { productsData } from "@/lib/products";

export default function ProductsShowcase() {
  const orderedProducts = [
    ...productsData.filter((p) => p.slug === "solar-cooker"),
    ...productsData.filter((p) => p.slug === "solar-dryer"),
    ...productsData.filter((p) => p.slug !== "solar-cooker" && p.slug !== "solar-dryer"),
  ];

  return (
    <section
      className="relative w-full bg-background py-24 md:py-32 z-10 overflow-hidden"
      id="products"
      aria-label="Radha Solar product ecosystem — industrial solar drying and thermal solutions"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
        {/* Header */}
        <div className="mb-20 max-w-4xl">
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
            Innovative solar concentrator systems engineered for modern industries. Minimalist design, maximum thermal performance.
          </motion.p>
        </div>

        {/* Alternating Split Layout */}
        <div className="flex flex-col gap-24 md:gap-36 max-w-7xl mx-auto">
          {orderedProducts.map((product, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
              >
                {/* Image Column */}
                <div className="w-full lg:w-1/2 relative aspect-[3/4] rounded-3xl overflow-hidden border border-border/40 bg-foreground/5 shadow-xl group shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-95 group-hover:brightness-100"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                  {/* Glowing Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  {/* Capacity Pill */}
                  <div className="absolute top-4 right-4 bg-background/85 backdrop-blur-md border border-border/30 px-4 py-2 rounded-full font-mono text-xs font-semibold text-foreground shadow-sm">
                    {product.capacity}
                  </div>
                </div>

                {/* Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {product.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-sans font-bold text-primary uppercase tracking-widest px-3 py-1 border border-primary/20 bg-primary/5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-muted-foreground text-base sm:text-lg leading-relaxed">
                    {product.description}
                  </p>

                  {/* Key Features Preview list */}
                  <div className="flex flex-col gap-3">
                    {product.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                        <span className="font-sans text-sm text-foreground/80 leading-relaxed line-clamp-2">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-4 flex flex-wrap gap-4 items-center">
                    <Link
                      href={`/products/${product.slug}`}
                      className="px-8 py-3.5 bg-primary text-white font-sans font-bold text-sm rounded-full hover:bg-primary/95 transition-all shadow-md shadow-primary/25 flex items-center gap-2 hover:scale-105"
                    >
                      Explore System
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={`https://wa.me/911234567890?text=${encodeURIComponent(`Hello! I'd like a quote for the ${product.name} from Radha Solar.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 border border-border/80 text-foreground font-sans font-bold text-sm rounded-full hover:border-primary/50 hover:text-primary transition-all flex items-center justify-center gap-2"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
