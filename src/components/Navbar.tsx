"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className={`flex items-center justify-between rounded-full transition-all duration-500 px-4 sm:px-6 py-3 ${
            scrolled ? "bg-background/90 backdrop-blur-xl border border-border shadow-lg" : "bg-transparent"
          }`}>
            {/* Logo Desktop/Tablet */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo("hero")}>
              <Sun className={`w-7 h-7 md:w-8 md:h-8 transition-colors duration-500 ${scrolled ? 'text-primary' : 'text-primary drop-shadow-md'}`} />
              <span className={`font-heading font-black text-xl md:text-2xl tracking-tighter transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}>
                SOLAR<span className="text-primary">TECH</span>
              </span>
            </div>

            {/* Links Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollTo("hero")} className={`text-sm font-sans font-semibold tracking-wide hover:text-primary transition-colors duration-500 ${scrolled ? 'text-foreground/80' : 'text-white/90 drop-shadow-md'}`}>Home</button>
              <button onClick={() => scrollTo("products")} className={`text-sm font-sans font-semibold tracking-wide hover:text-primary transition-colors duration-500 ${scrolled ? 'text-foreground/80' : 'text-white/90 drop-shadow-md'}`}>Ecosystem</button>
              <button onClick={() => {}} className={`text-sm font-sans font-semibold tracking-wide hover:text-primary transition-colors duration-500 ${scrolled ? 'text-foreground/80' : 'text-white/90 drop-shadow-md'}`}>Technology</button>
              <button onClick={() => {}} className={`text-sm font-sans font-semibold tracking-wide hover:text-primary transition-colors duration-500 ${scrolled ? 'text-foreground/80' : 'text-white/90 drop-shadow-md'}`}>About Us</button>
              <button onClick={() => {}} className={`text-sm font-sans font-semibold tracking-wide hover:text-primary transition-colors duration-500 ${scrolled ? 'text-foreground/80' : 'text-white/90 drop-shadow-md'}`}>Contact</button>
            </div>

            {/* CTA Desktop */}
            <div className="hidden lg:block">
              <button className="px-8 py-3 bg-primary text-primary-foreground text-sm font-bold font-sans rounded-full hover:bg-primary/90 transition-all shadow-md shadow-primary/20 hover:shadow-primary/40">
                Request Quote
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className={`lg:hidden p-2 transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-white drop-shadow-md'}`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-background flex flex-col p-6 lg:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              {/* Logo Mobile */}
              <div className="flex items-center gap-2">
                <Sun className="w-8 h-8 text-primary" />
                <span className="font-heading font-black text-2xl tracking-tighter text-foreground">
                  SOLAR<span className="text-primary">TECH</span>
                </span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-foreground hover:bg-foreground/5 rounded-full transition-colors"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            <div className="flex flex-col gap-8 flex-1 px-4 mt-4 overflow-y-auto custom-scrollbar">
              <button 
                onClick={() => { scrollTo("hero"); setMobileMenuOpen(false); }} 
                className="text-4xl sm:text-5xl font-heading font-bold text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => { scrollTo("products"); setMobileMenuOpen(false); }} 
                className="text-4xl sm:text-5xl font-heading font-bold text-left text-foreground hover:text-primary transition-colors"
              >
                Ecosystem
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); }} 
                className="text-4xl sm:text-5xl font-heading font-bold text-left text-foreground hover:text-primary transition-colors"
              >
                Technology
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); }} 
                className="text-4xl sm:text-5xl font-heading font-bold text-left text-foreground hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); }} 
                className="text-4xl sm:text-5xl font-heading font-bold text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              
              <div className="mt-auto pt-12 pb-8">
                <button className="w-full py-5 bg-primary text-primary-foreground text-xl font-bold font-sans rounded-full shadow-[0_0_30px_-5px_rgba(234,88,12,0.4)]">
                  Request Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
