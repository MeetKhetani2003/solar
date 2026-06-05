/**
 * Centralized product data — single source of truth.
 * Used by: ProductsShowcase, Navbar drawer, product slug pages, schemas.
 */

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  image: string;
  gallery: string[];
  description: string;
  tags: string[];
  capacity: string;
  overview: string;
  features: string[];
  specs: ProductSpec[];
  heroTagline: string;
  applications: string[];
  benefits: string[];
  industries: string[];
  faqs: ProductFaq[];
  relatedSlugs: string[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
}

export const productsData: Product[] = [
  {
    id: "parabolic-disc",
    slug: "parabolic-disc",
    name: "Solar Parabolic Disc Concentrator",
    shortName: "Parabolic Disc",
    image: "/client products/parabolic disc/img1.png",
    gallery: [
      "/client products/parabolic disc/img1.png",
      "/client products/parabolic disc/img2.png",
      "/client products/parabolic disc/img3.png",
      "/client products/parabolic disc/img4.png"
    ],
    description: "High-temperature dual-axis tracking solar concentrator reaching up to 400°C for industrial heat.",
    tags: ["Dual-Axis Tracking", "Up to 400°C", "High Optical Efficiency"],
    capacity: "10 kW - 100 kW Thermal",
    heroTagline: "The pinnacle of solar thermal concentration — dual-axis automated tracking for extreme process temperatures.",
    overview:
      "Our Solar Parabolic Dish systems are the ultimate solution for high-temperature industrial requirements. Utilizing dual-axis automated tracking, these dishes follow the sun perfectly from sunrise to sunset, concentrating solar radiation to a precise focal point. Capable of reaching temperatures up to 400°C, they are deployed for direct high-pressure steam generation, advanced chemical processing, industrial thermic fluid heating, and community cooking networks.",
    features: [
      "Dual-axis fully automated tracking system with high precision PLC controls",
      "Achieves extreme focal temperatures up to 400°C rapidly",
      "94%+ reflectivity mirror facets made of weather-resistant silvered glass",
      "Networkable design allowing multiple dishes to be connected to a central header",
      "Robust structural engineering designed to withstand wind speeds up to 120 km/h",
      "Low thermal inertia receiver for rapid start-up every morning"
    ],
    specs: [
      { label: "Focal Temperature", value: "Up to 400°C" },
      { label: "Tracking Type", value: "Dual-Axis Automated (Elevation & Azimuth)" },
      { label: "Tracking Accuracy", value: "± 0.1 Degree" },
      { label: "Reflector Efficiency", value: "94% Reflectivity" },
      { label: "Thermal Output", value: "10 kW - 100 kW Thermal per Dish" },
      { label: "Designed Lifespan", value: "25+ Years" },
      { label: "Structure Material", value: "Hot-dip Galvanized Steel" }
    ],
    applications: [
      "High-pressure industrial steam generation for boilers",
      "Direct process heat for chemical and pharmaceutical plants",
      "Centralized community cooking via steam distribution networks",
      "Solar power generation (Stirling engine integration)",
      "Advanced thermal material testing and chemical reactions"
    ],
    benefits: [
      "Highest optical efficiency and temperature capability of all solar thermal systems",
      "Eliminates fossil fuel expenses for high-temperature industrial processes",
      "Dual-axis tracking ensures maximum energy capture from sunrise to sunset in all seasons",
      "Modular architecture allows starting with a single dish and scaling to a massive array",
      "25+ year lifespan with minimal maintenance provides excellent long-term ROI"
    ],
    industries: ["Chemical Processing", "Large Scale Food Processing", "Power Generation", "Heavy Industry", "Pharmaceuticals"],
    faqs: [
      {
        question: "What temperature can the parabolic dish achieve?",
        answer:
          "The Solar Parabolic Dish can achieve focal temperatures up to 400°C. This extreme heat capability makes it suitable for high-pressure steam generation and industrial process heat that previously relied on fossil fuel combustion."
      },
      {
        question: "How does dual-axis tracking improve performance?",
        answer:
          "Unlike fixed panels or single-axis troughs, dual-axis tracking keeps the dish perfectly perpendicular to the sun's rays throughout the day (adjusting for both elevation and azimuth). This maintains peak concentration efficiency all day, capturing significantly more energy."
      },
      {
        question: "What is the structural durability of the dish?",
        answer:
          "The system is built with hot-dip galvanized steel structures and durable silvered glass mirrors. It features automated wind protection (stow mode) that triggers during high winds, securing the system safely."
      }
    ],
    relatedSlugs: ["parabolic-trough"],
    seoTitle: "Solar Parabolic Disc Concentrator | Dual-Axis 400°C | Radha Solar",
    seoDescription:
      "Radha Solar Parabolic Dish Concentrator — up to 400°C focal temperature, 94% reflectivity, dual-axis automated tracking. High thermal performance for industrial processes.",
    keywords: [
      "solar parabolic dish",
      "dual axis solar concentrator",
      "high temperature solar thermal",
      "industrial solar process heat",
      "solar steam generator dish"
    ]
  },
  {
    id: "parabolic-trough",
    slug: "parabolic-trough",
    name: "Solar Parabolic Trough Rec 20",
    shortName: "Power Trough REC-20",
    image: "/client products/parabolic through/img2.png",
    gallery: [
      "/client products/parabolic through/img2.png",
      "/client products/parabolic through/img5.png",
      "/client products/parabolic through/img6.png",
      "/client products/parabolic through/img7.png",
      "/client products/parabolic through/img8.png",
      "/client products/parabolic through/img9.png",
      "/client products/parabolic through/img10.png"
    ],
    description: "Modular linear concentrator generating high-efficiency thermal energy (180-390°F) to reduce boiler fuel consumption up to 80%.",
    tags: ["Single-Axis Tracking", "180-390°F (82-198°C)", "Up to 80% Fuel Savings"],
    capacity: "180°F - 390°F (82°C - 198°C)",
    heroTagline: "High-performance modular solar concentrators generating steam and hot water for commercial & industrial processes.",
    overview:
      "The Power Trough REC-20 is a state-of-the-art parabolic trough solar concentrator designed to generate industrial-grade thermal energy at a lower cost than gas, diesel, or fuel oil. By focusing solar radiation onto a central receiver pipe, it generates high input temperatures between 180°F and 390°F (82°C to 198°C). Its modularity and superior efficiency enable it to serve a wide range of projects, from small scale applications to massive industrial drying and steam facilities, easily mounting on rooftops or at ground level.",
    features: [
      "Highly reflective parabolic half-pipe surface concentrating solar radiation onto a receiver pipe",
      "Independent automated solar tracking system to maintain peak incidence angle throughout the day",
      "Modular design allowing up to 10 troughs to be connected in series per row",
      "Robust safety features against heavy winds, rainfall, and receiver overheating",
      "Seamless integration with existing industrial boilers to pre-heat water or generate steam",
      "Optimized footprint utilizing rooftops or ground installations efficiently"
    ],
    specs: [
      { label: "Operating Temperature", value: "180°F - 390°F (82°C - 198°C)" },
      { label: "Modularity", value: "Up to 10 Troughs connected in series per row" },
      { label: "Boiler Fuel Reduction", value: "Up to 80% savings in fuel consumption" },
      { label: "Tracking System", value: "Automated Single-Axis" },
      { label: "Safety Controls", value: "Auto-stow for wind/rain & overheat bypass" },
      { label: "Modality", value: "Rooftop or Ground-level installation" },
      { label: "Expected Payback", value: "Less than 3 Years" }
    ],
    applications: [
      "High-volume hot water generation for industrial washdowns and sanitization",
      "Steam generation for food processing and cooking lines",
      "Thermic fluid heating for textile and chemical processing",
      "Sterilization heat for pharmaceutical production",
      "Absorption chilling systems (solar air conditioning)"
    ],
    benefits: [
      "Reduces boiler fuel consumption by up to 80% using free solar thermal energy",
      "Massive reduction of carbon dioxide (CO2) emissions and corporate footprint",
      "Provides price stability against volatile fossil fuel (gas, diesel, oil) markets",
      "Highly attractive investment with a rapid payback period of less than 3 years",
      "Access to accelerated tax deductions and local green energy government grants",
      "Extends boiler lifetime and lowers maintenance costs by reducing boiler thermal load"
    ],
    industries: [
      "Food Processing",
      "Pharmaceuticals",
      "Restaurants",
      "Dairy & Derivatives",
      "Hotels & Motels",
      "Textiles",
      "Breweries & Distilleries",
      "Sports Clubs & Gyms",
      "Slaughterhouses",
      "Hospitals",
      "Industrial Laundries"
    ],
    faqs: [
      {
        question: "How does the Power Trough REC-20 concentrate solar energy?",
        answer:
          "It uses a highly reflective parabolic mirror curved as a half-pipe. This concentrates all incoming solar rays onto a central absorber/receiver tube. A heat transfer fluid flows through this tube, capturing the concentrated solar heat."
      },
      {
        question: "What scale of installations is supported?",
        answer:
          "The system is highly modular. Up to 10 individual trough modules can be connected in series to form a single tracking row. Multiple rows can be networked together, allowing custom scaling from small commercial operations to large industrial plants."
      },
      {
        question: "How does the solar tracking work?",
        answer:
          "The Power Trough REC-20 uses an automated single-axis solar tracking system. The controller monitors sun position and incidence angle, tilting the row throughout the day to maximize solar capture, and returns it to the starting position at sunset."
      },
      {
        question: "Is custom engineering required for each facility?",
        answer:
          "Yes. Every project is custom engineered. We analyze site-specific solar radiation patterns, study existing boiler networks, and design a custom array configuration to guarantee your daily steam/hot water volumes safely and efficiently."
      }
    ],
    relatedSlugs: ["parabolic-disc"],
    seoTitle: "Solar Parabolic Trough Rec 20 | Process Steam & Heat | Radha Solar",
    seoDescription:
      "Power Trough REC-20 modular solar concentrator. Achieves 180-390°F to reduce industrial boiler fuel consumption up to 80% with automated tracking.",
    keywords: [
      "solar parabolic trough",
      "Power Trough REC-20",
      "solar process heat",
      "industrial steam generator",
      "boiler fuel savings solar"
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string): Product[] {
  const product = getProductBySlug(slug);
  if (!product) return [];
  return product.relatedSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is Product => !!p);
}
