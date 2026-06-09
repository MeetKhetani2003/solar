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
    description: "High-temperature dual-axis tracking solar concentrator reaching up to 400°C to replace diesel and furnace oil in Indian factories.",
    tags: ["Dual-Axis Tracking", "Up to 400°C focal heat", "Section 32 Tax Savings", "MSME Approved"],
    capacity: "10 kW - 100 kW Thermal",
    heroTagline: "Cut factory fuel bills by up to 80% with high-temperature solar process heat. Designed for Indian textile, pharmaceutical & chemical plants.",
    overview:
      "Our Solar Parabolic Disc Concentrators are the ideal clean energy solution to combat rising diesel, LDO (Light Diesel Oil), and furnace oil costs in Indian industries. Deploying high-precision automated dual-axis tracking, these dishes follow the Indian sun perfectly from morning to evening, concentrating solar radiation to hit up to 400°C. Primarily utilized by chemical manufacturers, textile dyeing mills in Ludhiana/Surat/Tirupur, pharmaceutical plants, and large steam cooking operations, this system qualifies for Section 32 Accelerated Depreciation (40%) and MSME-approved green subsidies.",
    features: [
      "Dual-axis fully automated tracking system with high precision PLC controls",
      "Reaches extreme focal temperatures of 250°C to 400°C rapidly for industrial steam",
      "94%+ reflectivity mirror facets made of weather-resistant silvered glass",
      "Networkable design allowing multiple dishes to connect to a central boiler header",
      "Robust structural engineering designed to withstand monsoon winds up to 120 km/h",
      "Low thermal inertia receiver for rapid steam generation within 15 minutes of sunrise"
    ],
    specs: [
      { label: "Focal Temperature", value: "Up to 400°C (Process Heat)" },
      { label: "Solar Tracking", value: "Dual-Axis Automated (Elevation & Azimuth)" },
      { label: "Reflector Efficiency", value: "94% Optical Reflectivity" },
      { label: "Thermal Output", value: "10 kW - 100 kW Thermal per Dish" },
      { label: "Designed Lifespan", value: "25+ Years (Indian Climate Proof)" },
      { label: "Structure Material", value: "Hot-dip Galvanized Steel (Corrosion Resistant)" },
      { label: "Tax Incentives", value: "Section 32 Accelerated Depreciation (40%)" }
    ],
    applications: [
      "High-pressure solar steam generation for industrial process boilers",
      "Direct process heat for chemical reaction vessels and pharmaceutical plants",
      "Centralized community steam cooking for large ashrams and hostels",
      "Solar thermal energy for industrial washing and textile dyeing loops",
      "Thermic fluid heating to replace high-cost diesel and furnace oil"
    ],
    benefits: [
      "Eliminates expensive fossil fuels like diesel and furnace oil in factory operations",
      "Provides price stability against highly volatile domestic fuel markets in India",
      "Extremely attractive commercial payback period of 2.5 to 3 years",
      "Qualifies for state-level green energy subsidies and capital assistance for MSMEs",
      "Designed for Indian weather conditions, requiring minimal structural maintenance"
    ],
    industries: ["Chemical Processing", "Textile Dyeing & Processing", "Pharmaceuticals", "Large Scale Food Processing", "Heavy Engineering"],
    faqs: [
      {
        question: "How does the Solar Parabolic Disc save money for Indian industries?",
        answer:
          "In India, industrial boilers rely heavily on high-cost diesel, LDO, or furnace oil. The Parabolic Disc replaces these fossil fuels by using solar energy to heat water or thermic fluid up to 400°C. With current fuel prices, commercial users see full project payback in 24 to 36 months, alongside tax savings via 40% accelerated depreciation."
      },
      {
        question: "Is automated tracking necessary for industrial solar steam?",
        answer:
          "Yes. To generate temperatures up to 400°C, the solar rays must hit the focal receiver perfectly. Our dual-axis automated tracking continuously aligns the dish to the sun's elevation and direction, maintaining maximum heat output all day."
      },
      {
        question: "How does the system handle heavy monsoon rains or winds?",
        answer:
          "The structural framework is built using heavy hot-dip galvanized steel. The controller features an automated wind-stow safety mode. When sensors detect wind speeds exceeding 50 km/h, the dish automatically positions itself horizontally to avoid wind loads."
      }
    ],
    relatedSlugs: ["parabolic-trough", "solar-cooker"],
    seoTitle: "Solar Parabolic Disc Concentrator India | Boiler Fuel Replacement | Radha Solar",
    seoDescription:
      "Save up to 80% on industrial boiler diesel and furnace oil with Radha Solar's Parabolic Disc Concentrator. Achieves 400°C focal heat. MSME approved & tax-saving.",
    keywords: [
      "solar parabolic disc price India",
      "industrial solar steam generator",
      "boiler fuel saving solar thermal",
      "accelerated depreciation solar heater",
      "solar process heat textile chemical"
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
    description: "Modular linear solar concentrator (82-198°C) designed to reduce boiler fuel costs in Indian dairies, food processing, and hotels.",
    tags: ["Single-Axis Tracking", "82°C - 198°C Temperature", "Up to 80% Diesel Savings", "IBR Boiler Compatible"],
    capacity: "82°C - 198°C (Process Heat)",
    heroTagline: "Seamlessly integrate solar process heat with your existing industrial steam boiler, slashing fuel bills by up to 80%.",
    overview:
      "The Power Trough REC-20 is a high-performance linear parabolic trough concentrator engineered for mid-temperature industrial heat requirements (82°C to 198°C). Widely deployed in Indian dairy plants (cooperatives like Amul/Sudha style), textile washing plants, commercial laundries, and hotels. By focusing sunlight onto a central absorber tube, it pre-heats boiler feed-water or directly generates low-pressure process steam. The modular design mounts easily on factory rooftops or ground areas, integrating with existing wood, coal, or gas-fired IBR boilers.",
    features: [
      "High-reflectivity parabolic concentrator focusing solar rays onto a central receiver tube",
      "Independent automated single-axis tracking system to capture peak solar radiation all day",
      "Modular layout connecting up to 10 troughs in series for scalable plant capacities",
      "Auto-stow safety controls for wind protection, monsoon rains, and over-temperature bypass",
      "Seamless integration with commercial steam boilers, reducing boiler load and thermal shock",
      "Optimized compact footprint utilizing factory rooftops or ground land efficiently"
    ],
    specs: [
      { label: "Operating Temperature", value: "82°C - 198°C (180°F - 390°F)" },
      { label: "Boiler Compatibility", value: "Works with Oil, Gas, Biomass & IBR Boilers" },
      { label: "Fuel Cost Reduction", value: "Up to 80% savings in fuel consumption" },
      { label: "Tracking Mechanism", value: "Automated Single-Axis (East-West tracking)" },
      { label: "Safety Controls", value: "Overheat bypass & auto-stow for high winds" },
      { label: "Installation Type", value: "Rooftop or Ground-level modular mounting" },
      { label: "Payback Period", value: "Under 3 Years with commercial subsidies" }
    ],
    applications: [
      "High-volume hot water pre-heating for industrial dairy processing and cleaning",
      "Low-pressure process steam generation for cooking and canning lines",
      "Thermic fluid pre-heating for textile dying and chemical manufacturing",
      "Sterilization heat for pharmaceutical production and hospital laundries",
      "Solar air conditioning integration (driving absorption chillers)"
    ],
    benefits: [
      "Massively cuts monthly diesel, gas, or biomass expenditure in commercial factories",
      "Reduces dependency on coal and wood fuel, helping companies meet ESG and carbon mandates",
      "Protects industrial operations from unpredictable domestic fuel price hikes",
      "Qualifies for state-level renewable energy incentives and green corporate tax credits",
      "Low maintenance design built with high-grade materials to withstand Indian seasons"
    ],
    industries: [
      "Dairy & Milk Processing",
      "Food Dehydration & Processing",
      "Chemicals & Pharmaceuticals",
      "Textiles & Garment Washing",
      "Hotels & Commercial Laundries",
      "Breweries & Distilleries"
    ],
    faqs: [
      {
        question: "How does the Power Trough REC-20 integrate with our existing boiler?",
        answer:
          "The system is connected in series with your boiler feed-water line. Solar thermal energy pre-heats the water to up to 198°C before it enters the boiler, meaning the boiler requires up to 80% less fuel (gas, wood, coal, or diesel) to raise it to the final steam temperature."
      },
      {
        question: "Is this system eligible for NABARD or MSME subsidies in India?",
        answer:
          "Yes. Radha Solar systems are fully MSME approved. Industrial units and agro-processing businesses can apply for interest subventions, capital subsidies, and accelerated tax depreciation benefits."
      },
      {
        question: "What happens on cloudy monsoon days?",
        answer:
          "The system is designed to work in tandem with your existing boiler. When solar levels drop on cloudy days, the automated control system shifts the thermal load back to the boiler, ensuring zero downtime in your factory production line."
      }
    ],
    relatedSlugs: ["parabolic-disc", "solar-dryer"],
    seoTitle: "Solar Parabolic Trough Rec 20 | Industrial Boiler Preheater | Radha Solar",
    seoDescription:
      "Reduce industrial boiler fuel consumption up to 80% with Radha Solar's Power Trough REC-20. Reaches 82°C-198°C. Ideal for Indian dairies, textiles, and hotels.",
    keywords: [
      "solar parabolic trough manufacturer India",
      "boiler feedwater preheater solar",
      "solar steam generation dairy industry",
      "industrial solar water heater price",
      "solar process heat textile factory"
    ]
  },
  {
    id: "solar-dryer",
    slug: "solar-dryer",
    name: "Industrial Solar Dryer",
    shortName: "Solar Dryer",
    image: "/solar-dryer.png",
    gallery: [
      "/solar-dryer.png",
      "/solar_dryer_1779596613449.png",
      "/industrial_solar_dryer_1779596730597.png"
    ],
    description: "Hygienic solar dehydrator solving post-harvest crop rot and drying costs for Indian farmers, FPOs, and food processors.",
    tags: ["NABARD Subsidy Eligible", "FSSAI Food Grade", "Hybrid Backup (24/7)", "Saves post-harvest loss"],
    capacity: "10 kg - 2 Tons per batch",
    heroTagline: "Stop losing crops to unseasonal rains. Dry amla, chillies, onions & herbs hygienically using zero-cost solar heat.",
    overview:
      "Post-harvest crop losses due to unseasonal rains and poor drying conditions cost Indian farmers up to 30% of their yields. The Radha Solar Industrial Solar Dryer offers a high-efficiency, hygienic, closed-loop solution. Using solar air collectors, it circulates dry, clean air between 35°C and 85°C to dehydrate crops 60-80% faster than open sun drying. Tailored for Indian FPOs (Farmer Producer Organisations), food processing startups, and spice manufacturers, the system features a hybrid backup system for continuous 24/7 drying. Fully FSSAI food-grade compliant and eligible for NABARD and agricultural department subsidies.",
    features: [
      "High-efficiency solar air collectors capturing maximum thermal radiation",
      "Food-grade SS304/SS316 stainless steel interior construction to prevent contamination",
      "Automated PLC controller for humidity extraction and temperature regulation",
      "Hybrid backup heating (biomass or electrical) for continuous 24/7 operations",
      "Forced convection air circulation powered by built-in solar PV panels",
      "Double-walled insulation chamber ensuring zero heat wastage in winter"
    ],
    specs: [
      { label: "Capacities Available", value: "10 kg, 20 kg, 50 kg, 100 kg, 200 kg, 500 kg, 1 Ton, 2 Tons per batch" },
      { label: "Operating Temperature", value: "35°C - 85°C (Perfect for crops & herbs)" },
      { label: "Material of Construction", value: "Food-Grade Stainless Steel (SS304/SS316)" },
      { label: "Airflow Circulation", value: "Forced convection using solar PV-powered blowers" },
      { label: "Thermal Efficiency", value: "Over 85% heat conversion" },
      { label: "Glazing Material", value: "UV-protected multi-wall polycarbonate glazing" },
      { label: "Subsidy Approvals", value: "NABARD & Ministry of Agriculture Eligible" }
    ],
    applications: [
      "Hygienic dehydration of Guntur red chillies and turmeric fingers",
      "Processing fresh amla (gooseberry), ginger, garlic, and onion flakes",
      "Drying mango pulp into premium sheets (Aam Papad) and dates",
      "Low-temperature drying of GMP-grade pharmaceutical herbs and botanical leaves",
      "Drying tea leaves, cardamom, and black pepper in plantation zones"
    ],
    benefits: [
      "Protects food products from rain, dust, birds, and insects, ensuring FSSAI compliance",
      "Maintains the natural color, aroma, taste, and active nutrients of high-value crops",
      "Reduces drying time by up to 70% compared to traditional open sun drying",
      "Saves thousands in electricity or firewood costs using clean solar air collectors",
      "Enables FPOs and farmers to process waste crops into high-value dehydrated retail products"
    ],
    industries: ["Agriculture & FPOs", "Food Processing & Dehydration", "Herbal Medicine & GMP Pharma", "Spice Manufacturing", "Dairy & Horticulture"],
    faqs: [
      {
        question: "How do Radha Solar dryers protect farmers from unseasonal rain?",
        answer:
          "Traditional open sun drying is highly vulnerable to unseasonal rains, which rot crops and cause heavy financial losses. Our solar dryer is a fully enclosed chamber. It protects the crop from rain and uses solar heat to dry it. On rainy days or at night, the hybrid electrical/biomass backup activates automatically to keep the drying process running."
      },
      {
        question: "Are these solar dryers eligible for NABARD or government subsidies?",
        answer:
          "Yes. Our industrial solar dryers are fully certified and eligible for NABARD capital subsidies, Ministry of Agriculture schemes, and FPO development grants in India, which can cover up to 40% to 50% of the project cost depending on the state."
      },
      {
        question: "What crops can be processed in this system?",
        answer:
          "The system is multi-purpose. It is highly optimized for spices (turmeric, chillies, ginger), vegetables (onions, garlic, tomatoes), fruits (grapes/raisins, mango leather, dates), herbal leaves (neem, moringa, tulsi), and botanical extracts."
      }
    ],
    relatedSlugs: ["parabolic-trough", "cow-dung-log-machine"],
    seoTitle: "Industrial Solar Dryer Manufacturer India | NABARD Subsidy | Radha Solar",
    seoDescription:
      "Dry amla, chillies, turmeric, onions & herbs hygienically with Radha Solar's FSSAI-compliant Industrial Solar Dryer. NABARD subsidy eligible, 10kg to 2 ton capacities.",
    keywords: [
      "solar dryer for agriculture price India",
      "NABARD subsidy for solar dryer",
      "commercial solar food dehydrator",
      "Guntur chilli solar dryer machine",
      "solar dryer manufacturer Punjab Haryana"
    ]
  },
  {
    id: "solar-cooker",
    slug: "solar-cooker",
    name: "Solar Parabolic Cooker",
    shortName: "Parabolic Cooker",
    image: "/solar-cooker.png",
    gallery: [
      "/solar-cooker.png",
      "/solar_parabolic_cooker_1779596715146.png"
    ],
    description: "Zero-fuel community solar cooker saving LPG cylinders for Indian schools (Mid-Day Meals), temples, and ashrams.",
    tags: ["Replaces LPG Cylinders", "250°C+ Cooking Heat", "MSME Approved", "Saves Rural Fuel Costs"],
    capacity: "1.4 & 2.7 Sq Meter Aperture",
    heroTagline: "Stop spending on commercial LPG cylinders. Cook food for up to 120 people using concentrated solar energy.",
    overview:
      "The Radha Solar Parabolic Cooker is a high-focus thermal cooking system designed to eliminate fuel costs in institutional kitchens. Reaching temperatures of 250°C to 350°C, it cooks rice, lentils (dal), vegetables, and tea within minutes. It is widely used for Mid-Day Meal schemes in rural Indian schools, ashrams, temple kitchens (langars), border check-posts, and eco-tourism resorts. This MSME-approved system requires zero fuel, reducing dependency on commercial LPG cylinders and firewood.",
    features: [
      "High-reflectivity silvered glass mirror panels with 92%+ concentration efficiency",
      "Heavy-duty hot-dip galvanized mounting structure designed for tough outdoor conditions",
      "Manual focal adjustment gear designed for easy operation by school cooks or helpers",
      "Reaches rapid frying and boiling temperatures (up to 350°C) under clear sun",
      "Saves up to 30 to 45 commercial LPG cylinders per year for rural institutions",
      "Robust low-maintenance design requiring only periodic cleaning with water"
    ],
    specs: [
      { label: "Aperture Dish Area", value: "1.4 Sq meter and 2.7 Sq meter models" },
      { label: "Cooking Temperature", value: "250°C - 350°C (Boiling, Steaming & Frying)" },
      { label: "Reflector Efficiency", value: "92%+ Reflectivity (High Thermal Index)" },
      { label: "Tracking System", value: "Manual structure with smooth hand-wheel gear" },
      { label: "Cooking Capacity", value: "Up to 50 persons (1.4 Sq m) and 120 persons (2.7 Sq m) per meal" },
      { label: "Frame Material", value: "Heavy Galvanized MS Pipe structure" },
      { label: "Certifications", value: "MSME Approved Solar Equipment" }
    ],
    applications: [
      "Cooking rice, dal, and vegetables for school Mid-Day Meal schemes",
      "Boiling milk and preparing tea in rural dairy centers and cooperatives",
      "Preparing community meals (Langar) in Gurudwaras and temples",
      "Eco-tourism resorts and off-grid lodges seeking green cooking solutions",
      "Water boiling and purification in off-grid rural communities"
    ],
    benefits: [
      "100% fuel savings, shielding rural schools from volatile LPG pricing",
      "Protects cooks and staff from toxic smoke inhalation caused by wood firewood",
      "Extremely fast heating, boiling 15 liters of water in under 30 minutes",
      "High durability construction built to last over 10 years in open weather",
      "MSME-approved status makes it eligible for educational and rural development grants"
    ],
    industries: ["School Education Departments", "NGOs & Community Trusts", "Temples & Religious Places", "Hospitality & Eco-Resorts", "Rural Cooperatives"],
    faqs: [
      {
        question: "How much LPG can the Solar Parabolic Cooker save monthly?",
        answer:
          "In school hostels and community kitchens, the 2.7 Sq meter model can cook meals for up to 100-120 people. By using solar power for daytime boiling and cooking, institutions save up to 3 to 4 commercial LPG cylinders every month, recovering their investment in less than a year."
      },
      {
        question: "How does the tracking work during cooking?",
        answer:
          "The cooker dish features a smooth manual gear mechanism. The user rotates a handwheel every 35-40 minutes to keep the dish aligned with the sun, keeping the high-temperature focal point focused on the bottom of the black cooking pot."
      },
      {
        question: "Can it cook on windy or cold winter days?",
        answer:
          "Yes. Solar parabolic cookers work on direct solar radiation, not ambient air temperature. As long as there is clear sunlight, the dish will concentrate heat to 250°C+ even in cold winter months in North India."
      }
    ],
    relatedSlugs: ["parabolic-disc", "solar-dryer"],
    seoTitle: "Solar Parabolic Cooker India | Mid-Day Meal Cooking | Radha Solar",
    seoDescription:
      "Radha Solar Parabolic Cooker — zero-fuel solar concentrator for school mid-day meals, temples, and ashrams. Replaces LPG, reaches 250°C-350°C. MSME approved.",
    keywords: [
      "solar parabolic cooker price India",
      "community solar cooker for school",
      "mid day meal solar cooker price",
      "large scale institutional solar cooker",
      "solar cooker manufacturer Ludhiana"
    ]
  },
  {
    id: "cow-dung-log-machine",
    slug: "cow-dung-log-machine",
    name: "Cow Dung Log Extruder Machine",
    shortName: "Cow Dung Log Machine",
    image: "/cow-dung-log-machine.png",
    gallery: [
      "/cow-dung-log-machine.png",
      "/biomass_processing_equipment_1779596747506.png"
    ],
    description: "Extrusion machine processing wet cow dung into wood substitute logs (Gomaya wood) for gaushalas and eco-friendly cremations in India.",
    tags: ["Gaushala Waste to Wealth", "Gomaya Funeral Logs", "Replaces Firewood", "High Return on Investment"],
    capacity: "500 kg - 1500 kg / Hour",
    heroTagline: "Convert gaushala cow dung into high-demand 'Go-Wood' logs. Save trees and generate steady income from dairy waste.",
    overview:
      "Managing wet cow dung is a massive operational headache for Indian gaushalas (cow shelters) and dairy farms. The Radha Solar Cow Dung Log Extruder Machine solves this by converting raw dung and crop waste into dense, high-durability logs. Known in India as 'Gomaya wood' or 'Go-wood', these logs serve as a direct replacement for forest wood in traditional cremations (saving 2 to 3 trees per cremation) and industrial boilers. This creates a highly profitable waste-to-wealth business model for gaushalas, helping them achieve financial self-reliance.",
    features: [
      "High-torque gear drive and wear-resistant alloy steel extruder screw",
      "Interchangeable log dies to produce logs of 2-inch, 3-inch, and 4-inch diameters",
      "Heavy-duty electric motor (7.5 HP to 15 HP) built for continuous gaushala operations",
      "Automatic log cutting system to maintain uniform lengths",
      "Extruded logs have a high density, ensuring clean and slow combustion",
      "Integrates with Radha Solar Dryers to dry extruded logs in less than 24 hours"
    ],
    specs: [
      { label: "Production Output", value: "500 kg/hr - 1500 kg/hr (High Yield)" },
      { label: "Motor Specifications", value: "7.5 HP / 10 HP / 15 HP (Three-Phase AC)" },
      { label: "Log Diameter Output", value: "50mm, 75mm, 100mm (Changeable Dies)" },
      { label: "Material Mix", value: "Raw Cow Dung (60-80%) + Dry Straw/Husk (20-40%)" },
      { label: "Press Mechanism", value: "Continuous high-torque screw extrusion" },
      { label: "Chamber Feed Hopper", value: "Wide-mouth gravity hopper with safety shield" },
      { label: "Project Payback", value: "Less than 10-12 months for commercial gaushalas" }
    ],
    applications: [
      "Manufacturing eco-friendly 'Go-Wood' logs for traditional cremation ghats",
      "Producing firewood substitute logs for industrial brick kilns",
      "Generating profitable daily income streams for gaushalas and dairy farms",
      "Producing eco-friendly fuels for local boilers and stoves",
      "Creating organic agricultural planting pots for plant nurseries"
    ],
    benefits: [
      "Provides a clean, sustainable sanitation solution for wet dairy manure",
      "Saves forest cover by replacing traditional firewood used in crematoriums",
      "Cow dung logs burn with up to 60% less dark particulate smoke than wet wood",
      "Creates local employment and high profit margins from zero-cost raw manure",
      "Heavy-duty industrial construction built to work under tough gaushala environments"
    ],
    industries: ["Gaushalas & Cow Shelters", "Dairy Cooperatives", "Municipal Crematoriums", "Biomass Processing Units", "Brick Kiln Owners"],
    faqs: [
      {
        question: "How do cow dung logs help in Hindu cremations (Shmashan Ghats)?",
        answer:
          "Traditional cremations in India consume about 350-400 kg of forest wood, causing significant deforestation. Cow dung logs (Gomaya wood) are a direct, culturally accepted substitute. They burn completely, generate minimal smoke, and one cremation using cow dung logs saves 2 to 3 fully grown trees."
      },
      {
        question: "What raw materials do I need to mix with the cow dung?",
        answer:
          "You use raw cow dung (30-40% moisture content). To improve the log's binding strength and increase its heat output, we recommend mixing in dry organic waste such as wheat husk, sawdust, sugarcane bagasse, or dry crop straw."
      },
      {
        question: "Can we get government grants for Gaushalas to buy this machine?",
        answer:
          "Yes. Gaushalas and dairy entrepreneurs are eligible for green technology grants, organic waste management subsidies, and animal husbandry grants from state governments in India."
      }
    ],
    relatedSlugs: ["cow-dung-pellet-machine", "cow-dung-briquette-machine", "solar-dryer"],
    seoTitle: "Cow Dung Log Machine India | Gaushala Waste to Wealth | Radha Solar",
    seoDescription:
      "Convert cow dung into eco-friendly 'Go-Wood' funeral logs. Radha Solar's Cow Dung Log Extruder Machine processes up to 1.5 tons/hr. Perfect for gaushalas.",
    keywords: [
      "cow dung log machine price in India",
      "gaushala waste management machine",
      "gomaya log making machine price",
      "cow dung wood making machine price",
      "eco friendly cremation cow dung logs"
    ]
  },
  {
    id: "cow-dung-pellet-machine",
    slug: "cow-dung-pellet-machine",
    name: "Cow Dung Pellet Maker Machine",
    shortName: "Cow Dung Pellet Machine",
    image: "/cow-dung-pellet-machine.png",
    gallery: [
      "/cow-dung-pellet-machine.png",
      "/biomass_processing_equipment_1779596747506.png"
    ],
    description: "Precision pellet mill converting manure into slow-release organic fertilizer pellets (Jaivik Khad) for Indian farms and nurseries.",
    tags: ["Organic Fertilizer Maker", "Jaivik Khad Pellets", "Flat Die System", "High Nursery Demand"],
    capacity: "200 kg - 800 kg / Hour",
    heroTagline: "Turn cattle manure into premium organic fertilizer pellets. Uniform size, easy to sow, high profit margins.",
    overview:
      "The Cow Dung Pellet Maker Machine is designed to process pulverised cattle dung, organic waste, and poultry manure into compact, slow-release bio-fertilizer pellets. In Indian agriculture, chemical fertilizers have depleted soil health. These organic pellets (Jaivik Khad) restore soil carbon and microbial activity. Their uniform size makes them perfect for mechanical sowing with seed drills, creating high commercial demand among organic farmers, tea gardens in Assam, and urban plant nurseries.",
    features: [
      "Horizontal alloy steel flat die system with interchangeable pellet sizes (6mm, 8mm, 10mm)",
      "Heavy-duty dual roller assembly maximizing compression without adding chemical binders",
      "Integrated automatic oil lubrication for gears, ensuring reliable 24/7 factory output",
      "Compact floor-standing unit with high-volume feed hopper and safety overload switch",
      "Adjustable pellet cutter to control pellet length to match market specifications",
      "Robust gear drive ensuring constant torque and eliminating belt slippage issues"
    ],
    specs: [
      { label: "Production Output", value: "200 kg/hr - 800 kg/hr" },
      { label: "Pellet Dimensions", value: "6mm, 8mm, 10mm Diameters" },
      { label: "Die Configuration", value: "Horizontal Flat Die (Alloy Steel)" },
      { label: "Drive Configuration", value: "Heavy-duty helical gear transmission" },
      { label: "Power Specifications", value: "10 HP - 20 HP Three-Phase Motor" },
      { label: "Raw Feed Moisture", value: "Optimal moisture range of 12% - 18%" },
      { label: "Lubrication Setup", value: "Continuous automatic oil pump" }
    ],
    applications: [
      "Manufacturing high-nutrient organic fertilizer pellets for farming",
      "Producing biomass fuel pellets for domestic pellet heating stoves",
      "Processing custom agricultural soil conditioners for nurseries",
      "Blending cow dung with neem cake and bio-char for organic pest control"
    ],
    benefits: [
      "Uniform organic pellets are easy to pack, store, transport, and distribute",
      "Restores soil organic carbon (SOC) and improves soil moisture retention capacity",
      "Slow-release formulation reduces nutrient leaching during monsoon irrigation",
      "Allows gaushalas to retail premium branded organic fertilizers at high margins",
      "High-durability components result in low replacement costs per ton of pellets"
    ],
    industries: ["Agriculture & Organic Farming", "Fertilizer Manufacturing Units", "Horticulture & Plant Nurseries", "Gaushalas & Cooperatives", "Biomass Fuel Suppliers"],
    faqs: [
      {
        question: "Why are cow dung pellets better than raw manure for Indian farms?",
        answer:
          "Raw manure is bulky, expensive to transport, contains weed seeds, and cannot be used in mechanical sowing machines. Cow dung pellets are heat-treated during extrusion, eliminating weed seeds and pathogens. Their uniform size allows them to be sown using standard seed drills, and they release nutrients slowly, ensuring better crop absorption."
      },
      {
        question: "What is the moisture requirement for making pellets?",
        answer:
          "The cow dung powder fed into the hopper should have a moisture level of 12% to 18%. If it is too dry, it won't bind; if it is too wet, it will turn into paste. Dry raw dung can be mixed with fresh dung to achieve this perfect moisture range."
      },
      {
        question: "Can we add other organic inputs like Neem or Bio-char?",
        answer:
          "Yes. You can blend cow dung with neem cake (for pest resistance), bio-char (for carbon binding), rock phosphate, or bentonite clay to manufacture premium, custom bio-fertilizer formulations."
      }
    ],
    relatedSlugs: ["cow-dung-log-machine", "cow-dung-briquette-machine", "solar-dryer"],
    seoTitle: "Cow Dung Pellet Maker Machine India | Organic Fertilizer Pellets | Radha Solar",
    seoDescription:
      "Convert raw manure into slow-release organic fertilizer pellets (Jaivik Khad). Radha Solar's Cow Dung Pellet Maker Machine handles up to 800 kg/hr. Ideal for FPOs.",
    keywords: [
      "cow dung pellet making machine price",
      "organic fertilizer pelletizer India",
      "manure pellet machine price Punjab",
      "flat die biomass pellet mill price",
      "how to make organic fertilizer pellets"
    ]
  },
  {
    id: "cow-dung-briquette-machine",
    slug: "cow-dung-briquette-machine",
    name: "Cow Dung Briquette Press Machine",
    shortName: "Cow Dung Briquette Press",
    image: "/cow-dung-briquette-machine.png",
    gallery: [
      "/cow-dung-briquette-machine.png",
      "/biomass_processing_equipment_1779596747506.png"
    ],
    description: "Industrial briquette press converting cow dung and paddy straw (Parali) into bio-coal to replace coal in Indian factories.",
    tags: ["Solves Parali Burning", "Biomass Co-Firing NTPC", "Replaces Industrial Coal", "High-Pressure Press"],
    capacity: "1000 kg - 2500 kg / Hour",
    heroTagline: "Solve Punjab & Haryana's paddy straw burning problem. Convert crop residue and cow dung into bio-coal for industrial boilers.",
    overview:
      "Paddy straw burning (Parali) in Punjab and Haryana causes extreme air pollution in the Delhi-NCR region. The Radha Solar Cow Dung Briquette Press Machine offers a profitable solution. By mixing parali (paddy straw), sugarcane bagasse, or sawdust with dry cow dung, this high-pressure mechanical press generates dense bio-coal briquettes. These briquettes directly replace polluting fossil coal. They are in massive demand by Indian power plants (complying with the NTPC mandate for 5-10% biomass co-firing), brick kilns, paper mills, and textile boilers, offering a highly profitable green business model.",
    features: [
      "Heavy-duty mechanical crankshaft press delivering tons of binding force",
      "Advanced oil cooling system built for continuous 24/7 industrial runs",
      "Produces solid or hollow-center briquettes to optimize combustion airflow",
      "Dies made of wear-resistant alloy steel with easily replaceable sleeves",
      "6-meter stabilization cooling line track included with the press machine",
      "Automated screw feeder with variable frequency inverter to prevent material blockages"
    ],
    specs: [
      { label: "Production Output", value: "1000 kg/hr - 2500 kg/hr" },
      { label: "Briquette Dimensions", value: "60mm, 70mm, 80mm, 90mm Diameters" },
      { label: "Main Drive Motor", value: "30 HP / 40 HP / 50 HP (Three-Phase)" },
      { label: "Briquette Density", value: "1.1 - 1.4 g/cm³ (High Density)" },
      { label: "Feed System", value: "Twin-screw pre-compressing hopper feed" },
      { label: "Calorific Value Output", value: "3200 - 4200 Kcal/kg (Depending on biomass mix)" },
      { label: "Required Feed Moisture", value: "8% - 12% moisture range" }
    ],
    applications: [
      "Manufacturing bio-coal briquettes for thermal power plant co-firing",
      "Fuel production for textile mills, paper plants, and food processors",
      "Supplying high-density fuel to brick manufacturing kilns",
      "Large-scale waste processing for district municipal waste boards"
    ],
    benefits: [
      "Direct substitute for commercial coal, reducing fuel costs by up to 50%",
      "High density allows efficient long-distance transportation and compact storage",
      "Burns with extremely low sulfur emission compared to industrial coal",
      "Processes multiple types of biomass (paddy straw, sawdust, sugarcane bagasse) alongside cow dung",
      "Robust industrial design built for heavy 24/7 factory operations"
    ],
    industries: ["Heavy Manufacturing & Boilers", "Thermal Power Generation (NTPC Co-firing)", "Textile & Paper Processing Mills", "Brick Manufacturing Kilns", "Biomass Supply Entrepreneurs"],
    faqs: [
      {
        question: "How does this machine help solve the paddy straw (Parali) burning problem?",
        answer:
          "Instead of burning crop stubble in the fields, farmers and entrepreneurs can collect paddy straw, shred it, mix it with cow dung, and feed it into our briquette press. The machine uses high pressure to compress this biomass into dense bio-coal briquettes. This stops field burning, reduces winter smog, and creates a highly profitable fuel product."
      },
      {
        question: "What is the NTPC mandate for biomass co-firing in India?",
        answer:
          "The Ministry of Power and NTPC have mandated that coal-fired thermal power plants in India must co-fire 5% to 10% biomass briquettes alongside fossil coal to reduce carbon emissions. This has created a massive, guaranteed institutional market for bio-coal briquette manufacturers."
      },
      {
        question: "Do I need to add chemical binders to make the briquettes?",
        answer:
          "No. The extreme mechanical pressure and temperature generated inside the die cause the natural lignin present in the cow dung and agricultural residue to melt and act as a natural binding agent, forming solid, dense briquettes naturally."
      }
    ],
    relatedSlugs: ["cow-dung-log-machine", "cow-dung-pellet-machine", "solar-dryer"],
    seoTitle: "Cow Dung Briquette Machine India | Paddy Straw Parali Briquetting | Radha Solar",
    seoDescription:
      "Process cow dung and paddy straw (parali) into dense bio-coal briquettes. Radha Solar's Briquette Press Machine produces up to 2.5 tons/hr, replacing industrial coal.",
    keywords: [
      "cow dung briquette making machine price",
      "biomass briquetting press machine price",
      "parali briquette machine Punjab Haryana",
      "bio coal briquette press manufacturer",
      "biomass co firing NTPC briquettes"
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
