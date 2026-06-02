"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown, ArrowUpRight } from "lucide-react";
import { productsData } from "@/lib/products";



export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Close drawer on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(e.target as Node) &&
        !triggerRef.current?.contains(e.target as Node)
      ) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isProductsActive = pathname.startsWith("/products");

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? "py-4" : "py-6"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div
            className={`flex items-center justify-between rounded-full transition-all duration-500 px-4 sm:px-6 py-3 ${
              scrolled || !isHome
                ? "bg-background/90 backdrop-blur-xl border border-border shadow-lg"
                : "bg-transparent"
            }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-full" aria-label="Radhey Solar — homepage">
              <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border border-primary/20 bg-white flex shrink-0 shadow-sm">
                <Image src="/logo.png" alt="Radhey Solar — Industrial Solar Drying Solutions" fill className="object-cover p-1 hover:scale-110 transition-transform duration-500" />
              </div>
              <span className={`font-heading font-black text-xl md:text-2xl tracking-tighter transition-colors duration-500 ${isTransparent ? "text-white drop-shadow-md" : "text-foreground"}`}>
                RADHEY <span className="text-primary">SOLAR</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Home */}
              <NavLink href="/" label="Home" isTransparent={isTransparent} isActive={pathname === "/"} />

              {/* About */}
              <NavLink href="/about" label="About" isTransparent={isTransparent} isActive={pathname.startsWith("/about")} />

              {/* Products trigger */}
              <div className="relative">
                <button
                  ref={triggerRef}
                  onClick={() => setProductsOpen((o) => !o)}
                  aria-haspopup="true"
                  aria-expanded={productsOpen}
                  className={`flex items-center gap-1.5 text-sm font-sans font-semibold tracking-wide transition-colors duration-300 relative group focus:outline-none focus-visible:underline ${
                    isTransparent
                      ? "text-white/90 drop-shadow-md hover:text-white"
                      : isProductsActive
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  Products
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${productsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${isProductsActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </button>
              </div>

              {/* Contact */}
              <NavLink href="/contact" label="Contact" isTransparent={isTransparent} isActive={pathname === "/contact"} />
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="px-8 py-3 bg-primary text-primary-foreground text-sm font-bold font-sans rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:shadow-primary/40 hover:scale-105 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                Request Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className={`lg:hidden p-2 transition-colors duration-500 ${isTransparent ? "text-white drop-shadow-md" : "text-foreground"}`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Products Mega Drawer ─────────────────────────────── */}
      <AnimatePresence>
        {productsOpen && (
          <motion.div
            ref={drawerRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[5.5rem] left-0 right-0 z-[99] px-4 sm:px-6 max-w-7xl mx-auto"
          >
            <div className="rounded-[1.75rem] bg-background/95 backdrop-blur-2xl border border-border shadow-2xl overflow-hidden">
              {/* Header strip */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-border/40">
                <div>
                  <p className="font-heading text-lg font-bold text-foreground">Solar Product Ecosystem</p>
                  <p className="font-sans text-xs text-muted-foreground">Click any product for full details, specs & pricing</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href="/products"
                    onClick={() => setProductsOpen(false)}
                    className="px-5 py-2 text-sm font-sans font-semibold text-primary border border-primary/30 rounded-full hover:bg-primary/10 transition-colors"
                  >
                    View All Products
                  </Link>
                  <button
                    onClick={() => setProductsOpen(false)}
                    className="p-2 text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-full transition-colors"
                    aria-label="Close products menu"
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Products grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 p-px">
                {productsData.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    onClick={() => setProductsOpen(false)}
                    className="group flex items-start gap-4 p-5 bg-background hover:bg-foreground/[0.03] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/40"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-foreground/5 border border-border/40 shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="56px"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-sans text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {product.name}
                        </h3>
                        <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all shrink-0 mt-0.5" aria-hidden="true" />
                      </div>
                      <p className="font-mono text-[10px] text-primary font-semibold tracking-wider uppercase mt-1">
                        {product.capacity}
                      </p>
                      <p className="font-sans text-xs text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Full-Screen Mobile Menu ─────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-background flex flex-col p-6 lg:hidden overflow-y-auto"
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between mb-10">
              <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative w-10 h-10 overflow-hidden rounded-full border border-primary/20 bg-white shadow-sm shrink-0">
                  <Image src="/logo.png" alt="Radhey Solar" fill className="object-cover p-1" />
                </div>
                <span className="font-heading font-black text-2xl tracking-tighter text-foreground">
                  RADHEY <span className="text-primary">SOLAR</span>
                </span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-foreground hover:bg-foreground/5 rounded-full" aria-label="Close navigation menu">
                <X className="w-7 h-7" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile nav links */}
            <div className="flex flex-col gap-1 px-2">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
              ].map(({ label, href }, idx) => (
                <motion.div key={label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.06 }}>
                  <Link href={href} onClick={() => setMobileMenuOpen(false)} className={`block py-4 text-3xl sm:text-4xl font-heading font-bold border-b border-border/20 ${pathname === href ? "text-primary" : "text-foreground hover:text-primary"} transition-colors`}>
                    {label}
                  </Link>
                </motion.div>
              ))}

              {/* Products expand */}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.12 }}>
                <button
                  onClick={() => setMobileProductsOpen((o) => !o)}
                  className={`w-full flex items-center justify-between py-4 text-3xl sm:text-4xl font-heading font-bold border-b border-border/20 ${isProductsActive ? "text-primary" : "text-foreground"} hover:text-primary transition-colors`}
                >
                  Products
                  <ChevronDown className={`w-7 h-7 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="py-3 pl-4 flex flex-col gap-2">
                        <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="py-2 font-sans text-sm font-bold text-primary flex items-center gap-2">
                          View All Products <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                        {productsData.map((product) => (
                          <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 py-2.5 border-b border-border/20 last:border-b-0 group"
                          >
                            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-foreground/5 border border-border/30 shrink-0">
                              <Image src={product.image} alt={product.name} fill className="object-cover" sizes="40px" />
                            </div>
                            <div>
                              <p className="font-sans text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</p>
                              <p className="font-mono text-[10px] text-primary tracking-wider">{product.capacity}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18 }}>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={`block py-4 text-3xl sm:text-4xl font-heading font-bold border-b border-border/20 ${pathname === "/contact" ? "text-primary" : "text-foreground hover:text-primary"} transition-colors`}>
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto pt-10 pb-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="w-full py-5 bg-primary text-primary-foreground text-xl font-bold font-sans rounded-full shadow-[0_0_30px_-5px_rgba(234,88,12,0.4)] flex items-center justify-center gap-3 hover:bg-primary/90 transition-all">
                Request Quote <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({
  href,
  label,
  isTransparent,
  isActive,
}: {
  href: string;
  label: string;
  isTransparent: boolean;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`text-sm font-sans font-semibold tracking-wide transition-colors duration-300 relative group focus:outline-none focus-visible:underline ${
        isTransparent ? "text-white/90 drop-shadow-md hover:text-white" : isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
      <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
    </Link>
  );
}
