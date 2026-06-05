import type { Metadata } from "next";
import Link from "next/link";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "About Us | Radha Solar — Solar Products Manufacturer Since 2007",
  description:
    "Learn about Radha Solar Energy Cell — ISO 9001:2008 certified, MSME approved solar products manufacturer in Ludhiana Punjab. Established 2007. Solar PV Grid & Off-Grid specialists with 700+ rooftop installations.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Radha Solar Energy Cell | Solar Products Manufacturer Ludhiana India",
    description:
      "Established 2007 in Ludhiana Punjab. ISO 9001:2008 & MSME certified. Solar dryers, parabolic cookers, PV grid systems. 700+ rooftop installations, 4300+ street lights, 5.25 MW grid project.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-background text-foreground overflow-hidden">
        <LenisProvider />

        {/* Page Hero Banner */}
        <div className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 bg-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(234,88,12,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(234,88,12,0.08)_0%,transparent_55%)] pointer-events-none" />
          {/* Grid pattern */}
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
              Who We Are
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-bold text-background tracking-tight leading-[1.05] mb-6">
              About Radha{" "}
              <span className="text-primary">Energy Cell</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-background/60 leading-relaxed max-w-3xl">
              Market leader in solar products and equipment. ISO 9001:2008 certified manufacturer
              and exporter based in Ludhiana, Punjab, India — since 2007.
            </p>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mt-8">
              <ol className="flex items-center gap-2 font-sans text-sm text-background/40">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden="true" className="text-background/20">/</li>
                <li aria-current="page" className="text-primary font-semibold">About</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Full About Content */}
        <AboutSection />

        {/* Stats */}
        <StatsSection />

        {/* Why Choose Us */}
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
