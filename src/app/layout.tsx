import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Inter,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { SITE_URL, SITE_NAME } from "@/lib/schemas";

// ─── Font Loading (display: swap prevents FOIT for CLS improvement) ──────────
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload primary fonts
});

// ─── Viewport Export ─────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFCF9" },
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
  ],
};

// ─── Site Metadata ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // ── Base ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Industrial Solar Drying & Thermal Solutions`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Radha Solar manufactures advanced industrial solar dryers, parabolic thermal concentrators & biomass processors for agriculture, food processing, pharmaceuticals & heavy industry. 25+ years, 1000+ installations, 20+ countries.",
  keywords: [
    "industrial solar dryer",
    "solar drying system",
    "solar dryer manufacturer",
    "solar thermal solutions",
    "agricultural solar dryer",
    "food processing solar dryer",
    "parabolic solar concentrator",
    "biomass processor",
    "solar herb dryer",
    "solar vegetable dryer",
    "solar fruit dryer",
    "solar sludge dryer",
    "industrial drying plant",
    "renewable energy manufacturing",
    "solar thermal energy",
    "Radha Solar",
    "solar dryer India",
    "solar dryer Gujarat",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "Industrial Manufacturing",
  classification: "Industrial Solar Thermal Equipment",

  // ── Canonical & Alternates ────────────────────────────────────────────────
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-IN": "/",
    },
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Industrial Solar Drying & Thermal Solutions`,
    description:
      "Advanced industrial solar dryers, parabolic concentrators & biomass processors. 25+ years of excellence. 1000+ installations across 20+ countries. Request a quote today.",
    images: [
      {
        url: `${SITE_URL}/hero_solar_dryer_1779596596223.png`,
        width: 1200,
        height: 630,
        alt: "Radha Solar — Industrial Solar Drying & Thermal Solutions Manufacturer",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Cards ────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@radhasolar",
    creator: "@radhasolar",
    title: `${SITE_NAME} | Industrial Solar Drying & Thermal Solutions`,
    description:
      "Advanced industrial solar dryers & thermal solutions. 25+ years, 1000+ installations, 20+ countries. Agriculture, food processing, pharmaceuticals & heavy industry.",
    images: [
      {
        url: `${SITE_URL}/hero_solar_dryer_1779596596223.png`,
        alt: "Radha Solar Industrial Solar Dryer",
      },
    ],
  },

  // ── App / PWA ─────────────────────────────────────────────────────────────
  applicationName: SITE_NAME,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_NAME,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  // ── Verification (add your codes here) ───────────────────────────────────
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
    // yandex: "YOUR_YANDEX_VERIFICATION_CODE",
    // bing: "YOUR_BING_VERIFICATION_CODE",
  },
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Canonical hint for crawlers (Next.js also injects canonical via metadata) */}
        <link rel="canonical" href={SITE_URL} />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Geo / local SEO meta tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Rajkot, Gujarat, India" />
        <meta name="geo.position" content="22.3039;70.8022" />
        <meta name="ICBM" content="22.3039, 70.8022" />

        {/* Language & region */}
        <meta httpEquiv="Content-Language" content="en" />

        {/* JSON-LD Structured Data */}
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${bricolage.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground font-sans`}
      >
        {/* Skip to main content — hidden until focused (accessibility) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-full focus:text-sm focus:font-bold focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {children}

        {/* Sticky WhatsApp CTA — globally available */}
        <WhatsAppCTA />
      </body>
    </html>
  );
}
