import type { Metadata } from "next";
import Link from "next/link";
import ProductsShowcase from "@/components/ProductsShowcase";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "Solar Products | Radhey Solar — Dryers, Concentrators & Biomass Equipment",
  description:
    "Browse Radhey Solar's full product range: Standard Solar Dryers, Vegetable & Fruit Dehydrators, Herb Dryers, Sludge Processors, Parabolic Thermal Concentrators, Industrial Drying Plants & Biomass Processors.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Solar Products | Radhey Solar",
    description:
      "8 industrial solar products — dryers, concentrators, biomass processors. Capacities from 20 kg/batch to 50 tons/batch. GMP certified, ISO 9001:2008. Request a quote today.",
    url: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-background text-foreground overflow-hidden">
        <LenisProvider />

        {/* Page Hero Banner */}
        <div className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 bg-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,88,12,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,88,12,0.08)_0%,transparent_55%)] pointer-events-none" />
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
              Our Range
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-bold text-background tracking-tight leading-[1.05] mb-6">
              Solar Product{" "}
              <span className="text-primary">Ecosystem</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-background/60 leading-relaxed max-w-3xl">
              Innovative solar processing systems engineered for agriculture, food processing,
              pharmaceuticals, waste management and heavy industry.
            </p>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mt-8">
              <ol className="flex items-center gap-2 font-sans text-sm text-background/40">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden="true" className="text-background/20">/</li>
                <li aria-current="page" className="text-primary font-semibold">Products</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Products Grid */}
        <ProductsShowcase />
      </main>
      <Footer />
    </>
  );
}
