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
      telephone: "+91-1234567890",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-1234567890",
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
  telephone: "+91-1234567890",
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
    "@id": `${SITE_URL}/#product-solar-dryer`,
    name: "Standard Solar Dryer",
    alternateName: "Industrial Solar Drying System",
    description:
      "Versatile industrial solar drying solution for diverse materials. Automated temperature and humidity control with food-grade stainless steel construction and hybrid backup system for continuous operation.",
    image: `${SITE_URL}/solar_dryer_1779596613449.png`,
    url: `${SITE_URL}/#products`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Industrial Solar Dryer",
    keywords:
      "solar dryer, industrial solar dryer, solar drying system, solar food dryer",
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
        value: "50-500 kg/batch",
      },
      {
        "@type": "PropertyValue",
        name: "Operating Temperature",
        value: "35°C - 85°C",
      },
      { "@type": "PropertyValue", name: "Power Consumption", value: "2.5 kW" },
      { "@type": "PropertyValue", name: "Warranty", value: "5 Years" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-vegetable-dryer`,
    name: "Solar Vegetable Processing Unit",
    alternateName: "Agricultural Produce Solar Dryer",
    description:
      "Specialized solar drying system for agricultural produce. Ensures rapid moisture extraction while maintaining nutritional value, color, and flavor. Ideal for large-scale agricultural operations.",
    image: `${SITE_URL}/solar_vegetable_dryer_1779596639507.png`,
    url: `${SITE_URL}/#products`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Agricultural Solar Dryer",
    keywords:
      "vegetable dryer, solar vegetable dryer, agricultural dryer, food processing dryer",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "32",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "100-1000 kg/batch",
      },
      {
        "@type": "PropertyValue",
        name: "Operating Temperature",
        value: "40°C - 65°C",
      },
      {
        "@type": "PropertyValue",
        name: "Drying Time",
        value: "4 - 8 Hours",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-fruit-dryer`,
    name: "Solar Fruit Dehydration System",
    alternateName: "Solar Fruit Dryer Machine",
    description:
      "Premium fruit drying machine preserving natural sugars and flavor. Calibrated for delicate fruits to prevent caramelization while ensuring thorough drying for superior market value.",
    image: `${SITE_URL}/solar_fruit_dryer_1779596657010.png`,
    url: `${SITE_URL}/#products`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Food Processing Solar Dryer",
    keywords:
      "fruit dryer, solar fruit dryer, fruit dehydrator, food dehydration machine",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "28",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "50-800 kg/batch",
      },
      {
        "@type": "PropertyValue",
        name: "Thermal Efficiency",
        value: "> 85%",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-herb-dryer`,
    name: "Botanical & Herb Solar Dryer",
    alternateName: "Low Temperature Pharmaceutical Herb Dryer",
    description:
      "Low-temperature solar drying system for sensitive herbs and spices. Operates at lower temperatures with high-volume airflow to extract moisture without degrading volatile oils or active pharmaceutical ingredients.",
    image: `${SITE_URL}/solar_herb_dryer_1779596674009.png`,
    url: `${SITE_URL}/#products`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Pharmaceutical Herb Dryer",
    keywords:
      "herb dryer, botanical dryer, pharmaceutical dryer, spice dryer, GMP dryer",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "19",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "20-200 kg/batch",
      },
      {
        "@type": "PropertyValue",
        name: "Compliance",
        value: "GMP / ISO 9001",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-sludge-dryer`,
    name: "Industrial Solar Sludge Processor",
    alternateName: "Wastewater Sludge Solar Dryer",
    description:
      "Heavy-duty solar drying for wastewater and industrial sludge. Drastically reduces volume and weight using zero-carbon solar thermal energy, cutting disposal costs by up to 80%.",
    image: `${SITE_URL}/solar_sludge_dryer_1779596697756.png`,
    url: `${SITE_URL}/#products`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Industrial Waste Management Equipment",
    keywords:
      "sludge dryer, industrial sludge dryer, wastewater sludge treatment, sludge dewatering",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "15",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "1-10 Tons/day",
      },
      {
        "@type": "PropertyValue",
        name: "Moisture Reduction",
        value: "From 85% to <10%",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-parabolic-cooker`,
    name: "Parabolic Solar Thermal Concentrator",
    alternateName: "Solar Parabolic Dish Concentrator",
    description:
      "High-temperature solar concentrator for industrial heating. Dual-axis automated solar tracking delivers up to 400°C focal temperature for boiling, steam generation, and industrial process heat.",
    image: `${SITE_URL}/solar_parabolic_cooker_1779596715146.png`,
    url: `${SITE_URL}/#products`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Solar Thermal Concentrator",
    keywords:
      "parabolic solar concentrator, solar process heat, solar steam generator, solar thermal energy",
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
        value: "10-100 kW",
      },
      {
        "@type": "PropertyValue",
        name: "Focal Temperature",
        value: "Up to 400°C",
      },
      {
        "@type": "PropertyValue",
        name: "Lifespan",
        value: "25+ Years",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-industrial-dryer`,
    name: "Massive Scale Industrial Solar Drying Plant",
    alternateName: "Enterprise Solar Drying Facility",
    description:
      "Enterprise-grade solar drying facility for mass production. Integrates solar collectors, advanced heat exchangers, and massive drying chambers for 10-50 ton batch capacity.",
    image: `${SITE_URL}/industrial_solar_dryer_1779596730597.png`,
    url: `${SITE_URL}/#products`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Industrial Scale Solar Drying Plant",
    keywords:
      "industrial solar dryer, large scale solar dryer, mass production solar dryer, enterprise solar drying",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "11",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "10-50 Tons/batch",
      },
      {
        "@type": "PropertyValue",
        name: "Heat Recovery",
        value: "Up to 40% energy savings",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/#product-biomass`,
    name: "Biomass Processing Equipment",
    alternateName: "Agricultural Waste Biomass Briquette Maker",
    description:
      "Converts agricultural waste into usable biofuel and briquettes at 500-2000 kg/hour. Closes the loop on agricultural waste with high-pressure extrusion and pre-drying solar integration.",
    image: `${SITE_URL}/biomass_processing_equipment_1779596747506.png`,
    url: `${SITE_URL}/#products`,
    brand: { "@type": "Brand", name: SITE_NAME },
    manufacturer: { "@id": `${SITE_URL}/#organization` },
    category: "Biomass Processing Equipment",
    keywords:
      "biomass processor, biofuel equipment, briquette making machine, agricultural waste processor",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@id": `${SITE_URL}/#organization` },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "18",
      bestRating: "5",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Capacity",
        value: "500-2000 kg/hour",
      },
      {
        "@type": "PropertyValue",
        name: "Motor Power",
        value: "45 kW - 90 kW",
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
