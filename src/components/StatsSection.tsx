"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "Installations" },
  { value: 50, suffix: "+", label: "Product Solutions" },
  { value: 20, suffix: "+", label: "Countries Served" },
];

export default function StatsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background text-foreground z-20 overflow-hidden border-b border-border/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,88,12,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x md:divide-border/40"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center group px-6 text-center">
              <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCounter({ value, suffix, label }: { value: number, suffix: string, label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      <div className="flex items-baseline justify-center gap-1 mb-4">
        <span className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-500">
          {count}
        </span>
        <span className="font-heading text-4xl md:text-5xl font-medium text-primary">{suffix}</span>
      </div>
      <p className="text-xs md:text-sm font-sans font-bold text-muted-foreground tracking-[0.2em] uppercase">
        {label}
      </p>
    </>
  );
}
