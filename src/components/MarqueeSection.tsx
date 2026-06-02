"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function MarqueeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Use a spring for smoother direction changes if the user scrolls up/down quickly
  const smoothVelocity = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400
  });

  const x1 = useTransform(smoothVelocity, [0, 1], ["0%", "-50%"]);
  const x2 = useTransform(smoothVelocity, [0, 1], ["-50%", "0%"]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-background overflow-hidden relative border-t border-border/50">
      {/* Top subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-surface to-transparent pointer-events-none z-10" />
      
      <div className="flex flex-col gap-8 md:gap-16 relative z-0">
        
        {/* Marquee Row 1 */}
        <motion.div style={{ x: x1 }} className="flex whitespace-nowrap">
          <MarqueeContent />
          <MarqueeContent />
        </motion.div>

        {/* Marquee Row 2 (Moves opposite direction) */}
        <motion.div style={{ x: x2 }} className="flex whitespace-nowrap">
          <MarqueeContentOutline />
          <MarqueeContentOutline />
        </motion.div>

      </div>
    </section>
  );
}

function MarqueeContent() {
  return (
    <div className="flex items-center gap-12 pr-12">
      <span className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold text-foreground tracking-tighter uppercase">
        Precision Engineering
      </span>
      <span className="w-6 h-6 md:w-10 md:h-10 bg-primary rounded-full shrink-0" />
      <span className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold text-foreground tracking-tighter uppercase">
        Massive Scale
      </span>
      <span className="w-6 h-6 md:w-10 md:h-10 bg-primary rounded-full shrink-0" />
      <span className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold text-foreground tracking-tighter uppercase">
        Global Leadership
      </span>
      <span className="w-6 h-6 md:w-10 md:h-10 bg-primary rounded-full shrink-0" />
    </div>
  );
}

function MarqueeContentOutline() {
  return (
    <div className="flex items-center gap-12 pr-12">
      <span 
        className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter"
        style={{ WebkitTextStroke: "2px var(--color-foreground)", color: "transparent" }}
      >
        Renewable Thermal
      </span>
      <span className="w-6 h-6 md:w-10 md:h-10 border-4 border-primary rounded-full shrink-0" />
      <span 
        className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter"
        style={{ WebkitTextStroke: "2px var(--color-foreground)", color: "transparent" }}
      >
        Industrial Grade
      </span>
      <span className="w-6 h-6 md:w-10 md:h-10 border-4 border-primary rounded-full shrink-0" />
      <span 
        className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase tracking-tighter"
        style={{ WebkitTextStroke: "2px var(--color-foreground)", color: "transparent" }}
      >
        Zero Carbon
      </span>
      <span className="w-6 h-6 md:w-10 md:h-10 border-4 border-primary rounded-full shrink-0" />
    </div>
  );
}
