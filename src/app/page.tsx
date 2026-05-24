"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProductsShowcase from "@/components/ProductsShowcase";
import Lenis from "lenis";

import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";
import MarqueeSection from "@/components/MarqueeSection";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navbar />
      <Hero />
      <StatsSection />
      <MarqueeSection />
      <ProductsShowcase />
    </main>
  );
}
