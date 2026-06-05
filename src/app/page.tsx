import Hero from "@/components/Hero";
import ProductsShowcase from "@/components/ProductsShowcase";
import StatsSection from "@/components/StatsSection";
import MarqueeSection from "@/components/MarqueeSection";
import LenisProvider from "@/components/LenisProvider";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radha Solar | Industrial Solar Drying & Thermal Solutions",
  description:
    "Leading manufacturer of industrial solar dryers, parabolic concentrators & biomass processors. 25+ years, 1000+ installations across 20+ countries. Based in Ludhiana, India.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        id="main-content"
        className="min-h-screen bg-background text-foreground overflow-hidden"
      >
        <LenisProvider />
        <Hero />
        <StatsSection />
        <MarqueeSection />
        <ProductsShowcase />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
