// ─── Site-wide constants ────────────────────────────────────────────────────
export const SITE_URL = "https://radhasolar.com";
export const SITE_NAME = "Radha Solar";
export const SITE_DESCRIPTION =
  "Advanced Solar Drying & Thermal Solutions Designed For Agriculture, Food Processing, Industrial Manufacturing, and Sustainable Production. 25+ Years of Excellence, 1000+ Installations, 20+ Countries Served.";

// ─── Organization Schema ─────────────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 200,
    height: 200,
  },
  description: SITE_DESCRIPTION,
  foundingYear: "1999",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
    maxValue: 500,
  },
  areaServed: {
    "@type": "GeoShape",
    name: "Worldwide",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9888897248",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9888897248",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/radhasolar",
    "https://www.linkedin.com/company/radhasolar",
    "https://www.instagram.com/radhasolar",
    "https://www.youtube.com/@radhasolar",
  ],
};

// ─── LocalBusiness Schema ────────────────────────────────────────────────────
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Manufacturer"],
  "@id": `${SITE_URL}/#localbusiness`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/hero_solar_dryer_1779596596223.png`,
  description:
    "Leading manufacturer of industrial solar dryers, parabolic thermal concentrators, and biomass processing equipment. Serving agriculture, food processing, pharmaceuticals, and heavy industry worldwide.",
  priceRange: "₹₹₹",
  telephone: "+91-9888897248",
  email: "info@radhasolar.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Industrial Area, Phase 2",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360002",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "22.3039",
    longitude: "70.8022",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=Rajkot+Gujarat+India",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
};

// ─── WebSite + SearchAction Schema ──────────────────────────────────────────
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// ─── Breadcrumb Schema ───────────────────────────────────────────────────────
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Solar Products",
      item: `${SITE_URL}/#products`,
    },
  ],
};

// ─── Product Schemas ─────────────────────────────────────────────────────────
export const productSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-parabolic-disc`,
    name: "Solar Parabolic Disc Concentrator",
    alternateName: "Boiler Fuel Replacement Solar Concentrator",
    description:
      "High-temperature dual-axis tracking solar concentrator reaching up to 400°C to replace diesel and furnace oil in Indian factories. Eligible for Section 32 Accelerated Depreciation (40%) and MSME approved.",
    image: `${SITE_URL}/client products/parabolic disc/img1.png`,
    url: `${SITE_URL}/products/parabolic-disc`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Solar Thermal Concentrator",
    keywords:
      "solar parabolic disc price India, industrial solar steam generator, boiler fuel saving solar thermal, accelerated depreciation solar heater, solar process heat textile chemical",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "22",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Thermal Output",
        value: "10-100 kW Thermal",
      },
      {
        "@type": "PropertyValue",
        name: "Focal Temperature",
        value: "Up to 400°C",
      },
      {
        "@type": "PropertyValue",
        name: "Tax Benefit",
        value: "Section 32 Accelerated Depreciation (40%)",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-parabolic-trough`,
    name: "Solar Parabolic Trough Rec 20",
    alternateName: "Industrial Boiler Preheater Power Trough",
    description:
      "Modular linear solar concentrator (82-198°C) designed to reduce boiler fuel costs in Indian dairies, food processing, and hotels. Fully compatible with IBR boilers.",
    image: `${SITE_URL}/client products/parabolic through/img2.png`,
    url: `${SITE_URL}/products/parabolic-trough`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Solar Thermal Concentrator",
    keywords:
      "solar parabolic trough manufacturer India, boiler feedwater preheater solar, solar steam generation dairy industry, industrial solar water heater price, solar process heat textile factory",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "29",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Operating Temperature",
        value: "82°C - 198°C",
      },
      {
        "@type": "PropertyValue",
        name: "Fuel Reduction",
        value: "Up to 80% savings",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-solar-dryer`,
    name: "Industrial Solar Dryer",
    alternateName: "Hygienic Solar Food & Agricultural Dryer",
    description:
      "Hygienic solar dehydrator solving post-harvest crop rot and drying costs for Indian farmers, FPOs, and food processors. FSSAI-compliant and NABARD subsidy eligible.",
    image: `${SITE_URL}/solar-dryer.png`,
    url: `${SITE_URL}/products/solar-dryer`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Industrial Solar Dryer",
    keywords:
      "solar dryer for agriculture price India, NABARD subsidy for solar dryer, commercial solar food dehydrator, Guntur chilli solar dryer machine, solar dryer manufacturer Punjab Haryana",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "45",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "10 kg - 2 Tons/batch",
      },
      {
        "@type": "PropertyValue",
        name: "Operating Temperature",
        value: "35°C - 85°C",
      },
      {
        "@type": "PropertyValue",
        name: "Compliance",
        value: "FSSAI Food-Grade Standard",
      },
      {
        "@type": "PropertyValue",
        name: "Grants Support",
        value: "NABARD & Agri-Dept Subsidy Eligible",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-solar-cooker`,
    name: "Solar Parabolic Cooker",
    alternateName: "Zero-Fuel Community Solar Cooker",
    description:
      "Zero-fuel community solar cooker saving LPG cylinders for Indian schools (Mid-Day Meals), temples (langars), and ashrams. Reaches up to 350°C focal heat.",
    image: `${SITE_URL}/solar-cooker.png`,
    url: `${SITE_URL}/products/solar-cooker`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Solar Cooker",
    keywords:
      "solar parabolic cooker price India, community solar cooker for school, mid day meal solar cooker price, large scale institutional solar cooker, solar cooker manufacturer Ludhiana",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "35",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Dish Aperture",
        value: "1.4 & 2.7 Sq Meter",
      },
      {
        "@type": "PropertyValue",
        name: "Cooking Capacity",
        value: "Up to 120 people per meal",
      },
      {
        "@type": "PropertyValue",
        name: "Approval Status",
        value: "MSME Approved Solar Equipment",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-cow-dung-log`,
    name: "Cow Dung Log Machine",
    alternateName: "Eco-Friendly Wood Substitute Log Maker",
    description:
      "Heavy-duty biomass extrusion machine compressing raw cow dung and crop residue into high-density logs. Direct eco-friendly replacement for forest wood logs in cremations and boiler applications.",
    image: `${SITE_URL}/cow-dung-log-machine.png`,
    url: `${SITE_URL}/products/cow-dung-log-machine`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Biomass Log Machine",
    keywords:
      "cow dung log machine price in India, gaushala waste management machine, gomaya log making machine price, cow dung wood making machine price, eco friendly cremation cow dung logs",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "500-1500 kg/hour",
      },
      {
        "@type": "PropertyValue",
        name: "Motor Power",
        value: "7.5 HP - 15 HP",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-cow-dung-pellet`,
    name: "Cow Dung Pellet Maker Machine",
    alternateName: "Organic Manure Fertilizer Pellet Mill",
    description:
      "Precision horizontal flat-die pellet mill converting animal manure and poultry waste into slow-release organic fertilizer pellets or heating fuel pellets.",
    image: `${SITE_URL}/cow-dung-pellet-machine.png`,
    url: `${SITE_URL}/products/cow-dung-pellet-machine`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Organic Fertilizer Machine",
    keywords:
      "cow dung pellet machine, manure pelletizer, organic fertilizer pellet machine, biomass pellet mill, fertilizer maker",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "17",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "200-800 kg/hour",
      },
      {
        "@type": "PropertyValue",
        name: "Pellet Size",
        value: "6mm, 8mm, 10mm",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-cow-dung-briquette`,
    name: "Cow Dung Briquette Press Machine",
    alternateName: "High-Pressure Biomass Briquetting Press",
    description:
      "Industrial mechanical crankshaft briquette press generating high-density bio-coal briquettes from cow dung and crop residue without binders. Direct substitute for industrial coal.",
    image: `${SITE_URL}/cow-dung-briquette-machine.png`,
    url: `${SITE_URL}/products/cow-dung-briquette-machine`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Industrial Briquetting Machine",
    keywords:
      "cow dung briquette machine, biomass briquetting press, bio-coal machine, industrial briquetting machine, crop residue press",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "31",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "1000-2500 kg/hour",
      },
      {
        "@type": "PropertyValue",
        name: "Briquette Size",
        value: "60mm - 90mm diameter",
      },
    ],
  },
];

// ─── FAQ Schema ──────────────────────────────────────────────────────────────
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an industrial solar dryer and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An industrial solar dryer is a system that uses solar thermal energy to remove moisture from agricultural produce, food products, herbs, or industrial materials. It works by capturing solar radiation through collectors, heating air, and circulating it through a drying chamber to evaporate moisture from the material. Radha Solar dryers achieve temperatures between 35°C and 85°C and can operate 24/7 with hybrid backup systems.",
      },
    },
    {
      "@type": "Question",
      name: "What is the capacity of Radha Solar dryers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Radha Solar offers dryers ranging from small-scale units processing 20 kg per batch (herb dryers) up to massive industrial drying plants handling 10-50 tons per batch. Our vegetable processing units handle 100-1000 kg per batch, while our sludge processors can handle 1-10 tons per day continuously.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an industrial solar dryer cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of an industrial solar dryer varies based on capacity, material type, and automation level. Radha Solar offers solutions starting from small agricultural units to enterprise-scale facilities. Contact us for a customized quote tailored to your production requirements, location, and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What is the thermal efficiency of Radha Solar drying systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Radha Solar drying systems achieve thermal efficiency of over 85% in our food processing models. Our parabolic concentrators deliver focal temperatures up to 400°C with 94% mirror reflectivity. Industrial plants include heat recovery systems that save up to 40% in additional energy.",
      },
    },
    {
      "@type": "Question",
      name: "Are Radha Solar dryers suitable for pharmaceutical and GMP applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Botanical & Herb Dryer is specifically designed for pharmaceutical-grade drying applications. It features HEPA H13 air filtration, precision RH & temperature sensors, ultra-low temperature capabilities (25°C - 50°C) to preserve volatile oils and active ingredients, and is GMP / ISO 9001 compliant.",
      },
    },
    {
      "@type": "Question",
      name: "Do the solar dryers work on cloudy days or at night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All Radha Solar industrial dryers include hybrid backup heating systems — either electric or biomass-based — to ensure continuous 24/7 operation regardless of weather conditions. The hybrid system automatically activates when solar input is insufficient, guaranteeing uninterrupted production.",
      },
    },
    {
      "@type": "Question",
      name: "How many countries has Radha Solar served?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Radha Solar has served customers in 20+ countries across Asia, Africa, the Middle East, and Europe. With 25+ years of experience and 1000+ successful installations, we are a globally recognized leader in industrial solar thermal technology.",
      },
    },
    {
      "@type": "Question",
      name: "What warranty does Radha Solar offer on its products?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Radha Solar offers a 5-year warranty on our Standard Solar Dryer. Parabolic thermal concentrators are built to last 25+ years. All products are manufactured with food-grade stainless steel (SS304/SS316) or epoxy-coated steel for corrosion resistance and long-term durability.",
      },
    },
    {
      "@type": "Question",
      name: "Can solar dryers be used for sludge and waste management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our Industrial Sludge Processor is purpose-built for municipal and industrial wastewater sludge. It reduces moisture content from 85% to under 10%, cutting disposal volumes and costs by up to 80%, using zero-carbon solar thermal energy with automated sludge turning and integrated odor control.",
      },
    },
    {
      "@type": "Question",
      name: "What is the installation timeline for a Radha Solar system?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Installation timelines vary by system size. Standard solar dryers and specialized units can typically be commissioned within weeks. Massive scale industrial drying plants require 3-6 months for full deployment, including site preparation, modular installation, and commissioning. Our team handles end-to-end project management.",
      },
    },
  ],
};

// ─── Review Schema ───────────────────────────────────────────────────────────
export const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Product",
    name: "Radha Solar Industrial Solar Dryer",
    brand: { "@type": "Brand", name: SITE_NAME },
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  name: "Outstanding industrial solar dryer — transformed our processing line",
  author: {
    "@type": "Person",
    name: "Rajesh Patel",
  },
  reviewBody:
    "We installed Radha Solar's vegetable processing unit 2 years ago and it has been exceptional. The automated temperature control ensures consistent drying, and the hybrid backup means we never lose a batch. Post-harvest losses dropped by 70% and energy costs fell significantly. Highly recommend for any serious agricultural processor.",
  datePublished: "2024-08-15",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// ─── Combined schemas array for JSON-LD injection ────────────────────────────
export const allSchemas = [
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  reviewSchema,
  ...productSchemas,
];
