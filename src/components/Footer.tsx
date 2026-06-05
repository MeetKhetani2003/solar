"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Sun,
} from "lucide-react";

// ─── Brand / Social icons (not in this lucide-react build) ──────────────────
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const footerLinks = {
  Products: [
    { label: "Solar Parabolic Disc", href: "/products/parabolic-disc" },
    { label: "Power Trough REC-20", href: "/products/parabolic-trough" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Quality Assurance", href: "/quality" },
    { label: "ISO Certification", href: "/quality#iso" },
  ],
  Capabilities: [
    { label: "Solar Steam Generation", href: "/products/parabolic-trough" },
    { label: "High Temp Process Heat", href: "/products/parabolic-disc" },
    { label: "Rooftop Installations", href: "/about" },
    { label: "Request Quote", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/radhasolar" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/radhasolar" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/@radhasolar" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/radhasolar" },
];

const certifications = [
  "ISO 9001:2008 Certified",
  "MSME Approved",
  "CRISIL Rated 2013",
  "Karnataka Power Corp. Trained",
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative bg-foreground text-background overflow-hidden"
      aria-label="Radha Solar Energy Cell footer"
    >
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute top-0 right-0 w-[50vw] h-[40vh] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[30vh] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      {/* ── Main Footer Grid ─────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-6 max-w-[1600px] py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col gap-7">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center shrink-0">
                <div className="relative w-11 h-11 overflow-hidden rounded-full border border-primary/20 bg-white flex shrink-0 shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Radha Solar Energy Cell — Solar Products Manufacturer Ludhiana Punjab India"
                    fill
                    className="object-cover p-1"
                  />
                </div>
                <span className="text-[8px] font-mono font-bold tracking-tighter mt-0.5 text-background/50 uppercase">
                  Since 1997
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl leading-none tracking-tighter text-background">
                  RADHA <span className="text-primary">SOLAR</span>
                </span>
                <span className="text-[10px] font-sans font-extrabold tracking-[0.25em] text-primary leading-none mt-1.5 uppercase">
                  ENERGY CELL
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="font-sans text-sm text-background/55 leading-relaxed max-w-xs">
              Market leaders in Solar Products and Equipment. Manufacturer and exporter of industrial solar dryers, parabolic concentrators & biomass processors since 2007.
            </p>

            {/* Certifications */}
            <div className="flex flex-col gap-2">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="font-sans text-xs text-background/50 font-medium">{cert}</span>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Radha Solar Energy Cell on ${label}`}
                  className="w-9 h-9 rounded-full border border-background/15 flex items-center justify-center text-background/50 hover:border-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <p className="font-mono text-xs font-bold text-background/35 tracking-[0.25em] uppercase mb-6">
                  {category}
                </p>
                <ul className="flex flex-col gap-3" role="list">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="font-sans text-sm text-background/55 hover:text-primary transition-colors duration-300 text-left flex items-center gap-1.5 group focus:outline-none focus-visible:underline"
                        aria-label={`Navigate to ${label}`}
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                          {label}
                        </span>
                        <ArrowUpRight
                          className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Contact Bar ──────────────────────────────────────── */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 md:px-6 max-w-[1600px] py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://maps.google.com/?q=Ludhiana+Punjab+India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 group focus:outline-none"
              aria-label="Radha Solar Energy Cell location in Ludhiana Punjab India"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-background/35 uppercase tracking-wider mb-1">Location</p>
                <p className="font-sans text-sm text-background/70 group-hover:text-background transition-colors duration-300 leading-snug">
                  Ludhiana, Punjab, India
                </p>
              </div>
            </a>

            <a
              href="tel:+911234567890"
              className="flex items-start gap-4 group focus:outline-none"
              aria-label="Call Radha Solar Energy Cell"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors duration-300">
                <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-background/35 uppercase tracking-wider mb-1">Phone</p>
                <p className="font-sans text-sm text-background/70 group-hover:text-background transition-colors duration-300">
                  +91 123 456 7890
                </p>
              </div>
            </a>

            <a
              href="mailto:info@radhasolar.com"
              className="flex items-start gap-4 group focus:outline-none"
              aria-label="Email Radha Solar Energy Cell"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors duration-300">
                <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="font-sans text-xs font-semibold text-background/35 uppercase tracking-wider mb-1">Email</p>
                <p className="font-sans text-sm text-background/70 group-hover:text-background transition-colors duration-300">
                  info@radhasolar.com
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────── */}
      <div className="border-t border-background/8">
        <div className="container mx-auto px-4 md:px-6 max-w-[1600px] py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans text-xs text-background/30 text-center sm:text-left">
              © {new Date().getFullYear()} Radha Solar Energy Cell. All rights reserved. ISO 9001:2008 · MSME Approved · Ludhiana, Punjab, India.
            </p>
            <div className="flex items-center gap-1.5 text-background/25">
              <Sun className="w-3.5 h-3.5 text-primary/60" aria-hidden="true" />
              <span className="font-sans text-xs">Powered by Solar Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
