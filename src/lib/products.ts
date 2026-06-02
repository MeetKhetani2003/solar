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
    id: "solar-dryer",
    slug: "solar-dryer",
    name: "Solar Dryer",
    shortName: "Solar Dryer",
    image: "/solar_dryer_1779596613449.png",
    gallery: ["/solar_dryer_1779596613449.png", "/hero_solar_dryer_1779596596223.png"],
    description: "Versatile industrial solar drying solution for diverse materials.",
    tags: ["Versatile", "Energy Efficient"],
    capacity: "50-500 kg/batch",
    heroTagline: "The workhorse of industrial solar drying — reliable, efficient, and built to last.",
    overview:
      "Our Standard Industrial Solar Dryer provides an optimal balance of efficiency and footprint. Designed for continuous operation, it leverages advanced solar thermal technology to gently and consistently reduce moisture content while preserving product quality. With automated temperature and humidity control, food-grade stainless steel construction, and a hybrid backup system, this unit ensures zero production downtime.",
    features: [
      "Automated temperature and humidity control",
      "Food-grade stainless steel (SS304) construction",
      "Hybrid backup system for 24/7 continuous operation",
      "Remote monitoring via smartphone app",
      "Modular design for easy site installation",
      "Low maintenance — no fossil fuel dependency",
    ],
    specs: [
      { label: "Operating Temperature", value: "35°C - 85°C" },
      { label: "Power Consumption", value: "2.5 kW" },
      { label: "Footprint", value: "4m x 2.5m" },
      { label: "Warranty", value: "5 Years" },
      { label: "Capacity", value: "50-500 kg/batch" },
      { label: "Material", value: "SS304 Stainless Steel" },
    ],
    applications: [
      "Grain and cereal drying",
      "Spice and condiment processing",
      "Coffee and cocoa bean drying",
      "Dairy product processing",
      "Tobacco leaf curing",
    ],
    benefits: [
      "Reduce energy costs by up to 70% versus electric dryers",
      "5-year warranty with minimal maintenance requirements",
      "Preserve nutritional value and product quality",
      "Zero carbon emissions — powered entirely by solar",
      "Hybrid backup ensures production continuity on cloudy days",
      "Smartphone monitoring for real-time process control",
    ],
    industries: ["Agriculture", "Food Processing", "Spice Industry", "Dairy"],
    faqs: [
      {
        question: "What materials can the Standard Solar Dryer process?",
        answer:
          "The Standard Solar Dryer handles a wide range of materials including grains, spices, coffee beans, tobacco, and various agricultural produce. Its temperature range of 35°C–85°C makes it suitable for both delicate and robust materials.",
      },
      {
        question: "What happens on cloudy days or at night?",
        answer:
          "The integrated hybrid backup system automatically switches to electric or biomass heating when solar input drops below the required threshold, ensuring 24/7 continuous operation regardless of weather conditions.",
      },
      {
        question: "Is the dryer suitable for food processing standards?",
        answer:
          "Yes. The unit is constructed with food-grade SS304 stainless steel and designed to meet food processing hygiene standards. All contact surfaces are easy to clean and sanitize.",
      },
    ],
    relatedSlugs: ["solar-vegetable-dryer", "solar-fruit-dryer", "solar-herbs-dryer"],
    seoTitle: "Standard Industrial Solar Dryer | 50-500 kg/batch | Radhey Solar",
    seoDescription:
      "Radhey Solar's Standard Industrial Solar Dryer — 50 to 500 kg per batch, 35°C–85°C operating range, food-grade SS304, hybrid backup, 5-year warranty. Manufacturer in Ludhiana India.",
    keywords: [
      "industrial solar dryer",
      "solar dryer manufacturer India",
      "solar drying machine",
      "solar dryer Ludhiana",
    ],
  },
  {
    id: "solar-vegetable-dryer",
    slug: "solar-vegetable-dryer",
    name: "Solar Vegetable Dryer",
    shortName: "Vegetable Dryer",
    image: "/solar_vegetable_dryer_1779596639507.png",
    gallery: ["/solar_vegetable_dryer_1779596639507.png", "/hero_solar_dryer_1779596596223.png"],
    description: "Specialized solar drying system for agricultural produce.",
    tags: ["Agriculture", "Food Safe"],
    capacity: "100-1000 kg/batch",
    heroTagline: "Eliminate post-harvest losses. Dry more, waste less, earn more.",
    overview:
      "Engineered specifically for vegetable processing, this unit ensures rapid moisture extraction while maintaining nutritional value, color, and flavor. Ideal for large-scale agricultural operations looking to reduce post-harvest losses and access premium dried vegetable markets. The precision airflow system ensures uniform drying across every tray.",
    features: [
      "Precision airflow for uniform drying across all trays",
      "Nutrient retention technology",
      "Easy-clean modular tray system",
      "Integrated UV sterilization",
      "Fully automated PLC control system",
      "Multi-zone temperature control",
    ],
    specs: [
      { label: "Operating Temperature", value: "40°C - 65°C" },
      { label: "Drying Time", value: "4 - 8 Hours" },
      { label: "Material", value: "SS304 / SS316" },
      { label: "Automation", value: "Fully Automated PLC" },
      { label: "Capacity", value: "100-1000 kg/batch" },
      { label: "UV Sterilization", value: "Integrated" },
    ],
    applications: [
      "Onion and garlic drying",
      "Tomato and pepper processing",
      "Leafy vegetable dehydration",
      "Potato chip pre-processing",
      "Mushroom drying",
      "Ginger and turmeric processing",
    ],
    benefits: [
      "Reduce post-harvest losses by up to 90%",
      "Access premium export-quality dried vegetable markets",
      "Uniform color and texture retention",
      "Fully automated — minimal labor requirement",
      "UV sterilization ensures hygienic, contamination-free output",
      "Up to 1,000 kg per batch for high-volume operations",
    ],
    industries: ["Agriculture", "Food Export", "Retail Food Processing", "Contract Farming"],
    faqs: [
      {
        question: "Which vegetables can this unit process?",
        answer:
          "The unit is optimized for onion, garlic, tomato, pepper, mushroom, ginger, leafy vegetables, potato, and most common agricultural produce. Custom configurations are available for specialty crops.",
      },
      {
        question: "How does UV sterilization work in this system?",
        answer:
          "Integrated UV-C lamps irradiate the air supply before it enters the drying chamber, eliminating bacteria, mold spores, and pathogens. This ensures the dried output meets food safety standards without chemical treatment.",
      },
      {
        question: "What is the moisture reduction percentage?",
        answer:
          "The system typically reduces moisture content from 80–90% (fresh vegetables) to 8–12% (dried), achieving a weight reduction of 6:1 to 10:1 depending on the vegetable type.",
      },
    ],
    relatedSlugs: ["solar-dryer", "solar-fruit-dryer", "solar-herbs-dryer"],
    seoTitle: "Solar Vegetable Dryer | Onion Garlic Tomato Dehydrator | Radhey Solar",
    seoDescription:
      "Solar Vegetable Processing Unit by Radhey Solar. 100–1000 kg/batch capacity. Dry onion, garlic, tomato, mushroom, ginger. Fully automated PLC, UV sterilization.",
    keywords: [
      "solar vegetable dryer",
      "vegetable dehydrator machine",
      "onion dryer solar",
      "garlic drying machine",
    ],
  },
  {
    id: "solar-fruit-dryer",
    slug: "solar-fruit-dryer",
    name: "Solar Fruit Dryer",
    shortName: "Fruit Dryer",
    image: "/solar_fruit_dryer_1779596657010.png",
    gallery: ["/solar_fruit_dryer_1779596657010.png", "/hero_solar_dryer_1779596596223.png"],
    description: "Premium fruit drying machine preserving natural sugars and flavor.",
    tags: ["Food Processing", "High Yield"],
    capacity: "50-800 kg/batch",
    heroTagline: "Lock in nature's sweetness. Premium dried fruit that commands premium prices.",
    overview:
      "This advanced dehydration system is calibrated for delicate fruits, preventing caramelization while ensuring thorough drying. The result is a premium dried fruit product with superior market value and extended shelf life — retaining natural color, aroma, and sugar content. Multi-stage drying profiles allow precise control for each fruit variety.",
    features: [
      "Gentle low-heat extraction prevents caramelization",
      "Anti-stick tray surfaces for easy unloading",
      "Flavor-lock condensation recovery system",
      "Multi-stage drying profiles per fruit variety",
      "Color retention technology",
      "Aroma preservation through controlled airflow",
    ],
    specs: [
      { label: "Operating Temperature", value: "45°C - 70°C" },
      { label: "Thermal Efficiency", value: "> 85%" },
      { label: "Backup Heating", value: "Electric / Biomass" },
      { label: "Control Interface", value: "10-inch Touchscreen" },
      { label: "Capacity", value: "50-800 kg/batch" },
      { label: "Tray Material", value: "Food-grade HDPE / SS" },
    ],
    applications: [
      "Mango and papaya drying",
      "Grape to raisin processing",
      "Date and fig dehydration",
      "Amla and berry drying",
      "Banana chip production",
      "Apricot and plum processing",
    ],
    benefits: [
      "85%+ thermal efficiency — industry-leading performance",
      "Natural color, aroma, and sugar content preserved",
      "10-inch touchscreen interface for precision control",
      "Multi-stage profiles for 20+ fruit varieties",
      "Premium output commands 3–5x higher market price",
      "Extended shelf life of 12–18 months without preservatives",
    ],
    industries: ["Fruit Processing", "Export & Trade", "Snack Food Manufacturing", "Retail"],
    faqs: [
      {
        question: "How does the system prevent caramelization?",
        answer:
          "The system uses gentle low-heat circulation at controlled temperatures (45°C–70°C) with precise humidity management. This prevents the Maillard reaction that causes browning and caramelization, preserving the natural color and sugar profile of the fruit.",
      },
      {
        question: "Can the same machine process different fruit types?",
        answer:
          "Yes. The 10-inch touchscreen interface includes pre-programmed drying profiles for 20+ fruit varieties. Custom profiles can also be programmed. Simply select the fruit type and the system adjusts temperature, airflow, and duration automatically.",
      },
    ],
    relatedSlugs: ["solar-vegetable-dryer", "solar-herbs-dryer", "solar-dryer"],
    seoTitle: "Solar Fruit Dryer System | Mango Grape Amla Dehydrator | Radhey Solar",
    seoDescription:
      "Radhey Solar's Fruit Dehydration System — 50–800 kg/batch, 85%+ thermal efficiency, 10-inch touchscreen. Dry mango, grapes, amla, dates, banana. Premium quality output.",
    keywords: [
      "solar fruit dryer",
      "fruit dehydration machine",
      "mango dryer solar",
      "raisin making machine",
    ],
  },
  {
    id: "solar-herbs-dryer",
    slug: "solar-herbs-dryer",
    name: "Solar Herbs Dryer",
    shortName: "Herbs Dryer",
    image: "/solar_herb_dryer_1779596674009.png",
    gallery: ["/solar_herb_dryer_1779596674009.png", "/hero_solar_dryer_1779596596223.png"],
    description: "Low-temperature drying system for sensitive herbs and spices.",
    tags: ["Pharmaceutical", "Botanicals"],
    capacity: "20-200 kg/batch",
    heroTagline: "Pharmaceutical-grade drying for the most sensitive botanicals.",
    overview:
      "Sensitive botanicals require precise handling. Our herb dryer operates at lower temperatures with high-volume airflow to extract moisture without degrading volatile oils, aromas, or active pharmaceutical ingredients. Dark-drying mode protects light-sensitive compounds. GMP / ISO 9001 compliant for pharmaceutical and nutraceutical applications.",
    features: [
      "Ultra-low temperature capabilities (25°C–50°C)",
      "Volatile oil and active compound preservation",
      "HEPA H13 filtered air intake system",
      "Dark-drying mode for light-sensitive herbs",
      "Precision relative humidity and temperature sensors",
      "GMP compliant stainless steel interior",
    ],
    specs: [
      { label: "Operating Temperature", value: "25°C - 50°C" },
      { label: "Air Filtration", value: "HEPA H13" },
      { label: "Sensors", value: "Precision RH & Temp" },
      { label: "Compliance", value: "GMP / ISO 9001" },
      { label: "Capacity", value: "20-200 kg/batch" },
      { label: "Construction", value: "GMP-grade SS316" },
    ],
    applications: [
      "Medicinal herb drying (tulsi, ashwagandha, neem)",
      "Spice processing (cardamom, saffron, cloves)",
      "Pharmaceutical botanicals and extracts",
      "Essential oil feedstock preparation",
      "Ayurvedic product manufacturing",
      "Cannabis and hemp drying",
    ],
    benefits: [
      "Preserves volatile oils, terpenes, and active compounds",
      "HEPA H13 filtration — contamination-free drying",
      "GMP / ISO 9001 compliant for pharma applications",
      "Dark mode protects light-sensitive phytochemicals",
      "Precision sensors maintain ±1°C temperature accuracy",
      "Audit trail capability for pharmaceutical compliance",
    ],
    industries: ["Pharmaceuticals", "Nutraceuticals", "Ayurveda", "Essential Oils", "Herbal Export"],
    faqs: [
      {
        question: "Is this dryer suitable for pharmaceutical herb processing?",
        answer:
          "Yes. The Botanical & Herb Dryer is specifically designed for pharmaceutical-grade processing. It is GMP and ISO 9001:2008 compliant, features HEPA H13 air filtration, and maintains precision temperature control to preserve active pharmaceutical ingredients (APIs).",
      },
      {
        question: "What is dark-drying mode?",
        answer:
          "Dark-drying mode seals all light entry points into the drying chamber. Certain phytochemicals, terpenes, and light-sensitive compounds (such as chlorophyll and certain alkaloids) degrade rapidly when exposed to light. Dark mode preserves these compounds for maximum potency and yield.",
      },
    ],
    relatedSlugs: ["solar-dryer", "solar-fruit-dryer", "solar-vegetable-dryer"],
    seoTitle: "Solar Herbs Dryer | GMP Botanical & Pharmaceutical Dryer | Radhey Solar",
    seoDescription:
      "GMP-certified Solar Herbs & Botanical Dryer by Radhey Solar. 25°C–50°C, HEPA H13 filtration, dark-drying mode. Ideal for medicinal herbs, spices, pharma botanicals.",
    keywords: [
      "solar herb dryer",
      "botanical dryer pharmaceutical",
      "GMP herb drying machine",
      "medicinal herb dryer India",
    ],
  },
  {
    id: "solar-meat-dryer",
    slug: "solar-meat-dryer",
    name: "Solar Meat Dryer",
    shortName: "Meat Dryer",
    image: "/solar_dryer_1779596613449.png",
    gallery: ["/solar_dryer_1779596613449.png", "/hero_solar_dryer_1779596596223.png"],
    description: "Hygienic solar drying system for fish and meat processing.",
    tags: ["Food Processing", "Hygienic"],
    capacity: "50-500 kg/batch",
    heroTagline: "Safe, hygienic, and efficient drying for meat and seafood.",
    overview:
      "Our Solar Meat Dryer is designed to handle the rigorous hygiene and temperature requirements of meat and seafood dehydration. With rapid moisture extraction and integrated pest control, it ensures a contamination-free process. The unit operates at optimized temperatures to prevent bacterial growth while delivering a thoroughly dried, shelf-stable product.",
    features: [
      "Food-grade SS304/SS316 interior for easy washdown",
      "Pest and insect-proof enclosed design",
      "Rapid initial moisture extraction phase",
      "Odor control and ventilation management",
      "Hybrid backup for uninterrupted drying",
      "Hygienic drip collection system",
    ],
    specs: [
      { label: "Operating Temperature", value: "45°C - 75°C" },
      { label: "Capacity", value: "50-500 kg/batch" },
      { label: "Material", value: "SS304 / SS316" },
      { label: "Backup Heating", value: "Electric/Biomass" },
      { label: "Odor Control", value: "Integrated" },
      { label: "Warranty", value: "5 Years" },
    ],
    applications: [
      "Fish and seafood dehydration",
      "Beef jerky and biltong production",
      "Poultry drying",
      "Pet food manufacturing",
      "Meat powder processing",
      "Sausage curing",
    ],
    benefits: [
      "Eliminates contamination from open-air sun drying",
      "Meets stringent food safety and hygiene standards",
      "Significantly reduces drying time compared to traditional methods",
      "Prevents spoilage during unfavorable weather with hybrid backup",
      "Retains nutritional value and extends shelf life",
      "Reduces operational costs via solar thermal energy",
    ],
    industries: ["Meat Processing", "Aquaculture", "Pet Food", "Food Export"],
    faqs: [
      {
        question: "How does the system handle odors from meat and fish drying?",
        answer:
          "The dryer features an integrated ventilation and odor management system that safely exhausts air while maintaining internal temperatures. Optional scrubbers can be added for highly sensitive locations.",
      },
      {
        question: "Is it easy to clean after a batch of meat?",
        answer:
          "Yes, the entire interior and all trays are constructed from food-grade stainless steel, designed specifically for easy washdown and sanitization between batches to prevent cross-contamination.",
      },
    ],
    relatedSlugs: ["solar-dryer", "solar-vegetable-dryer", "solar-fruit-dryer"],
    seoTitle: "Solar Meat Dryer | Fish & Seafood Dehydrator | Radhey Solar",
    seoDescription:
      "Hygienic Solar Meat Dryer by Radhey Solar. Ideal for fish, seafood, and meat dehydration. 50-500 kg/batch, SS304 construction, pest-proof design.",
    keywords: [
      "solar meat dryer",
      "fish drying machine",
      "seafood dehydrator",
      "beef jerky dryer solar",
    ],
  },
  {
    id: "solar-sludge-dryer",
    slug: "solar-sludge-dryer",
    name: "Solar Sludge Dryer",
    shortName: "Sludge Dryer",
    image: "/solar_sludge_dryer_1779596697756.png",
    gallery: ["/solar_sludge_dryer_1779596697756.png", "/industrial_solar_dryer_1779596730597.png"],
    description: "Heavy-duty solar drying for wastewater and industrial sludge.",
    tags: ["Waste Management", "Heavy Industry"],
    capacity: "1-10 Tons/day",
    heroTagline: "Turn waste liability into zero-carbon value. Cut disposal costs by 80%.",
    overview:
      "Transform waste liability into manageable assets. This robust system drastically reduces the volume and weight of industrial and municipal sludge using zero-carbon solar thermal energy, cutting disposal costs by up to 80%. The automated sludge-turning mechanism ensures uniform drying while integrated odor control keeps the facility environment compliant.",
    features: [
      "Corrosion-resistant epoxy-coated steel construction",
      "Automated sludge turning mechanism for uniform drying",
      "Integrated odor control and air scrubbing system",
      "High-torque processing components for dense materials",
      "Leachate collection and management system",
      "Continuous operation mode available",
    ],
    specs: [
      { label: "Moisture Reduction", value: "From 85% to <10%" },
      { label: "Structural Material", value: "Epoxy-coated Steel" },
      { label: "Energy Source", value: "Direct Solar + Thermal" },
      { label: "Operation", value: "Continuous / Batch" },
      { label: "Capacity", value: "1-10 Tons/day" },
      { label: "Odor Control", value: "Integrated Scrubber" },
    ],
    applications: [
      "Municipal wastewater treatment plant sludge",
      "Industrial effluent sludge processing",
      "Paper mill waste reduction",
      "Textile industry sludge management",
      "Food processing wastewater sludge",
      "Mining and chemical plant waste",
    ],
    benefits: [
      "Reduces disposal volume by up to 80% — massive cost savings",
      "Zero-carbon solar energy replaces fossil fuel-based dryers",
      "Automated turning reduces manual labor requirements",
      "Integrated odor scrubbing maintains regulatory compliance",
      "Converts sludge into reusable compost or landfill material",
      "Continuous operation — no production downtime",
    ],
    industries: ["Municipal Water Treatment", "Industrial Wastewater", "Paper & Pulp", "Textiles", "Mining"],
    faqs: [
      {
        question: "What moisture levels can this system handle at input?",
        answer:
          "The Industrial Sludge Processor can handle input sludge with moisture content from 60% to 90%, reducing it to below 10% final moisture content. This achieves 6:1 to 9:1 volume reduction.",
      },
      {
        question: "How is odor managed during the drying process?",
        answer:
          "The system includes an integrated air scrubbing unit that captures and neutralizes odorous compounds (H2S, ammonia, VOCs) before venting. This keeps site emissions within regulatory limits.",
      },
    ],
    relatedSlugs: ["cow-dung-de-watering-machine", "solar-parabolic-cooker-2-7", "biomass-equipment"],
    seoTitle: "Industrial Solar Sludge Dryer | Wastewater Sludge Treatment | Radhey Solar",
    seoDescription:
      "Radhey Solar Industrial Sludge Processor — reduces moisture from 85% to under 10%, cuts disposal costs 80%. 1–10 tons/day. Odor control included. Zero-carbon solar energy.",
    keywords: [
      "solar sludge dryer",
      "industrial sludge dryer India",
      "wastewater sludge treatment",
      "sludge drying system",
    ],
  },
  {
    id: "solar-parabolic-cooker-1-4",
    slug: "solar-parabolic-cooker-1-4",
    name: "Solar Parabolic Cooker 1.4",
    shortName: "Parabolic Cooker 1.4",
    image: "/solar_parabolic_cooker_1779596715146.png",
    gallery: ["/solar_parabolic_cooker_1779596715146.png", "/hero_solar_dryer_1779596596223.png"],
    description: "Compact 1.4m diameter solar parabolic cooker for fast and efficient heating.",
    tags: ["Solar Cooking", "Thermal Energy"],
    capacity: "Suitable for 10-15 people",
    heroTagline: "Clean, fast, and highly efficient solar cooking for everyday use.",
    overview:
      "The Solar Parabolic Cooker 1.4 is a highly efficient, 1.4-meter diameter reflective dish designed to concentrate solar energy onto a focal point. It provides intense heat comparable to a standard gas burner, making it perfect for boiling, frying, and roasting without any fuel costs or emissions. Ideal for small institutions, eco-resorts, and rural applications.",
    features: [
      "1.4-meter diameter high-reflectivity parabolic dish",
      "Manual tracking mechanism with easy adjustment",
      "Sturdy, weather-resistant metallic frame",
      "Generates temperatures up to 250°C at the focal point",
      "Safe and easy to operate",
      "Zero fuel cost and zero carbon emissions",
    ],
    specs: [
      { label: "Dish Diameter", value: "1.4 Meters" },
      { label: "Focal Temperature", value: "Up to 250°C" },
      { label: "Tracking", value: "Manual" },
      { label: "Reflectivity", value: "90%+" },
      { label: "Capacity", value: "Cooks for 10-15 people" },
      { label: "Lifespan", value: "15+ Years" },
    ],
    applications: [
      "Small scale institutional cooking",
      "Eco-resort and campsite kitchens",
      "Rural and off-grid cooking",
      "Boiling water for purification",
      "Demonstration of renewable energy",
    ],
    benefits: [
      "Completely eliminates the need for firewood, LPG, or electricity",
      "Cooks meals quickly, reaching high temperatures in minutes",
      "Durable construction withstands outdoor weather conditions",
      "Easy manual tracking allows for continuous cooking throughout the day",
      "Environmentally friendly operation with zero smoke or pollution",
    ],
    industries: ["Hospitality", "Rural Development", "Institutions", "Eco-Tourism"],
    faqs: [
      {
        question: "How long does it take to boil water?",
        answer:
          "Under clear, sunny conditions, the 1.4m parabolic cooker can boil 2-3 liters of water in approximately 15-20 minutes.",
      },
      {
        question: "Does it require maintenance?",
        answer:
          "Maintenance is minimal. The reflective surface should be wiped clean regularly with a soft, damp cloth to maintain optimal reflectivity. The tracking mechanism may occasionally need light lubrication.",
      },
    ],
    relatedSlugs: ["solar-parabolic-cooker-2-7", "solar-parabolic-dish", "solar-parabolic-trough-rec-20"],
    seoTitle: "Solar Parabolic Cooker 1.4m | Efficient Solar Cooking | Radhey Solar",
    seoDescription:
      "1.4m Solar Parabolic Cooker by Radhey Solar. High efficiency solar cooking reaching up to 250°C. Perfect for small institutions and off-grid locations.",
    keywords: [
      "solar parabolic cooker",
      "1.4m solar cooker",
      "solar dish cooker",
      "renewable cooking",
    ],
  },
  {
    id: "solar-parabolic-cooker-2-7",
    slug: "solar-parabolic-cooker-2-7",
    name: "Solar Parabolic Cooker 2.7",
    shortName: "Parabolic Cooker 2.7",
    image: "/solar_parabolic_cooker_1779596715146.png",
    gallery: ["/solar_parabolic_cooker_1779596715146.png", "/hero_solar_dryer_1779596596223.png"],
    description: "Large 2.7m diameter solar parabolic cooker for community and institutional use.",
    tags: ["Solar Cooking", "Community Scale"],
    capacity: "Suitable for 40-50 people",
    heroTagline: "Community-scale solar cooking powered entirely by the sun.",
    overview:
      "The Solar Parabolic Cooker 2.7 offers double the diameter of our standard model, delivering significantly more thermal power. Designed for community kitchens, schools, and small industrial processes, this 2.7-meter dish concentrates sunlight to achieve extremely high temperatures rapidly. It can easily handle large cooking vessels, making it the ultimate solution for mass catering without fuel costs.",
    features: [
      "2.7-meter diameter for maximum solar capture",
      "Heavy-duty focal stand capable of supporting large vessels",
      "Geared manual tracking or optional automatic tracking",
      "High-grade reflective materials resistant to degradation",
      "Can be integrated into indoor kitchen setups via steam generation",
      "Rapid heating capabilities",
    ],
    specs: [
      { label: "Dish Diameter", value: "2.7 Meters" },
      { label: "Focal Temperature", value: "Up to 300°C" },
      { label: "Tracking", value: "Geared Manual / Auto" },
      { label: "Reflectivity", value: "92%+" },
      { label: "Capacity", value: "Cooks for 40-50 people" },
      { label: "Thermal Output", value: "Approx. 2.5 kW" },
    ],
    applications: [
      "School and ashram community kitchens",
      "Mid-day meal programs",
      "Military and remote camp catering",
      "Small scale industrial water heating",
      "Large scale roasting and frying",
    ],
    benefits: [
      "Drastically reduces LPG and commercial fuel expenses for large kitchens",
      "High thermal output allows for deep frying and rapid boiling",
      "Robust frame withstands heavy daily usage in institutional settings",
      "Smoke-free operation improves health and safety in cooking areas",
      "Excellent return on investment (ROI) within 1-2 years",
    ],
    industries: ["Community Kitchens", "Education", "Military", "Food Processing"],
    faqs: [
      {
        question: "Can this cooker be used indoors?",
        answer:
          "The dish itself must be placed outdoors in direct sunlight. However, it can be configured to heat a thermal fluid or generate steam, which is then piped into an indoor kitchen for cooking.",
      },
      {
        question: "How often does it need to be tracked?",
        answer:
          "With the geared manual tracking, it typically needs adjusting every 15-20 minutes to keep the focal point centered on the cooking vessel. An automatic tracking upgrade is available.",
      },
    ],
    relatedSlugs: ["solar-parabolic-cooker-1-4", "solar-parabolic-dish", "solar-parabolic-trough-rec-20"],
    seoTitle: "Solar Parabolic Cooker 2.7m | Institutional Solar Cooking | Radhey Solar",
    seoDescription:
      "2.7m Solar Parabolic Cooker by Radhey Solar. Designed for community kitchens, schools, and ashrams. Reaches up to 300°C with zero fuel costs.",
    keywords: [
      "large solar cooker",
      "2.7m parabolic cooker",
      "institutional solar cooker",
      "community solar kitchen",
    ],
  },
  {
    id: "solar-parabolic-trough-rec-20",
    slug: "solar-parabolic-trough-rec-20",
    name: "Solar Parabolic Trough Rec 20",
    shortName: "Parabolic Trough REC 20",
    image: "/solar_parabolic_cooker_1779596715146.png",
    gallery: ["/solar_parabolic_cooker_1779596715146.png", "/industrial_solar_dryer_1779596730597.png"],
    description: "Industrial grade parabolic trough for medium to high temperature process heat.",
    tags: ["Process Heat", "Industrial"],
    capacity: "Scalable Thermal Output",
    heroTagline: "Scalable solar process heat for industrial steam generation and thermic fluid heating.",
    overview:
      "The Solar Parabolic Trough REC 20 is an advanced linear concentrator designed to deliver medium to high-temperature process heat. By tracking the sun along one axis and focusing energy onto a receiver tube, it efficiently heats thermic fluids or generates steam. This system is modular and highly scalable, making it ideal for integration into existing industrial boiler systems to offset fossil fuel consumption.",
    features: [
      "Single-axis automated sun tracking system",
      "High-efficiency vacuum tube receivers",
      "Modular design for easy array expansion",
      "Integrates seamlessly with existing boiler networks",
      "Durable reflective mirrors with high weather resistance",
      "Automated stow mode for high winds and nights",
    ],
    specs: [
      { label: "Aperture Area", value: "Custom per module" },
      { label: "Operating Temp", value: "Up to 250°C" },
      { label: "Tracking", value: "Automated Single-Axis" },
      { label: "Heat Transfer Medium", value: "Thermic Fluid / Water" },
      { label: "Integration", value: "Heat Exchanger / Direct" },
      { label: "Wind Resistance", value: "High (Auto-Stow)" },
    ],
    applications: [
      "Industrial steam generation",
      "Thermic fluid heating for manufacturing",
      "Dairy pasteurization and processing",
      "Textile dyeing and bleaching",
      "Chemical and pharmaceutical process heat",
      "Large-scale space heating and cooling (VAM)",
    ],
    benefits: [
      "Provides massive fuel savings for energy-intensive industries",
      "Scalable architecture allows plants to start small and expand",
      "Automated tracking ensures peak efficiency throughout the day",
      "Reduces corporate carbon footprint and aids in sustainability compliance",
      "Reliable integration with existing fossil-fuel systems as a hybrid setup",
    ],
    industries: ["Textiles", "Dairy", "Chemical Processing", "Pharmaceuticals", "Manufacturing"],
    faqs: [
      {
        question: "How does the trough integrate with our current boiler?",
        answer:
          "The system typically integrates via a heat exchanger. The solar trough heats a thermic fluid, which then pre-heats the boiler feed water, significantly reducing the fuel required by the boiler to reach operating temperature.",
      },
      {
        question: "What happens during cloudy days?",
        answer:
          "The system operates in a hybrid mode alongside your existing conventional boiler. When solar radiation is insufficient, the conventional system seamlessly takes over to ensure uninterrupted industrial processes.",
      },
    ],
    relatedSlugs: ["solar-parabolic-dish", "industrial-solar-dryer", "solar-sludge-dryer"],
    seoTitle: "Solar Parabolic Trough REC 20 | Industrial Solar Process Heat | Radhey Solar",
    seoDescription:
      "Radhey Solar Parabolic Trough REC 20 for industrial steam and thermic fluid heating. Scalable, single-axis tracking, up to 250°C. Offset your boiler fuel costs.",
    keywords: [
      "solar parabolic trough",
      "solar process heat India",
      "industrial solar heating",
      "solar steam generator trough",
    ],
  },
  {
    id: "solar-parabolic-dish",
    slug: "solar-parabolic-dish",
    name: "Solar Parabolic Dish",
    shortName: "Parabolic Dish",
    image: "/solar_parabolic_cooker_1779596715146.png",
    gallery: ["/solar_parabolic_cooker_1779596715146.png", "/industrial_solar_dryer_1779596730597.png"],
    description: "High-temperature dual-axis tracking solar concentrator for industrial heating.",
    tags: ["High Temperature", "Process Heat"],
    capacity: "10-100 kW Thermal",
    heroTagline: "Pinpoint accuracy. Extreme temperatures. The pinnacle of solar thermal energy.",
    overview:
      "Our Solar Parabolic Dish systems are the ultimate solution for high-temperature industrial requirements. Utilizing dual-axis automated tracking, these dishes follow the sun perfectly from sunrise to sunset, concentrating energy to a precise focal point. Capable of reaching up to 400°C, they are deployed for direct steam generation, advanced chemical processing, and massive community cooking networks.",
    features: [
      "Dual-axis fully automated tracking for maximum efficiency",
      "Generates extreme focal temperatures up to 400°C",
      "94%+ reflectivity mirror facets",
      "Networkable design — connect multiple dishes to a central header",
      "Robust structural engineering to withstand harsh environments",
      "Low thermal inertia for rapid start-up every morning",
    ],
    specs: [
      { label: "Focal Temperature", value: "Up to 400°C" },
      { label: "Tracking Accuracy", value: "± 0.1 Degree (Dual Axis)" },
      { label: "Reflectivity", value: "94%+" },
      { label: "Lifespan", value: "25+ Years" },
      { label: "Thermal Output", value: "10-100 kW per dish" },
      { label: "Wind Resistance", value: "Up to 120 km/h" },
    ],
    applications: [
      "High-pressure industrial steam generation",
      "Direct process heat for chemical plants",
      "Centralized community cooking (via steam network)",
      "Solar power generation (Stirling engine integration)",
      "Advanced material testing and processing",
    ],
    benefits: [
      "Highest optical efficiency and temperature capability of all solar thermal systems",
      "Eliminate fossil fuel costs for high-heat process applications",
      "Dual-axis tracking ensures maximum energy yield regardless of season",
      "Modular design allows scaling from a single dish to a massive array",
      "25+ year lifespan provides exceptional long-term ROI",
    ],
    industries: ["Chemical Processing", "Large Scale Food Processing", "Power Generation", "Heavy Industry"],
    faqs: [
      {
        question: "What temperature can the parabolic dish achieve?",
        answer:
          "The Solar Parabolic Dish can achieve focal temperatures up to 400°C, making it suitable for high-pressure steam generation and industrial process heat that previously required fossil fuels.",
      },
      {
        question: "How does dual-axis tracking improve performance?",
        answer:
          "Dual-axis tracking ensures the dish is always pointed perfectly at the sun, both elevation and azimuth. This means the dish operates at peak efficiency all day, capturing significantly more energy than fixed or single-axis systems.",
      },
    ],
    relatedSlugs: ["solar-parabolic-trough-rec-20", "solar-parabolic-cooker-2-7", "industrial-solar-dryer"],
    seoTitle: "Solar Parabolic Dish | Dual-Axis 400°C Concentrator | Radhey Solar",
    seoDescription:
      "Radhey Solar Parabolic Dish — up to 400°C, 94% reflectivity, dual-axis tracking. 10–100 kW thermal output. Replace fossil fuel process heat. 25+ year lifespan.",
    keywords: [
      "solar parabolic dish",
      "dual axis solar concentrator",
      "high temperature solar thermal",
      "solar process heat",
    ],
  },
  {
    id: "cow-dung-de-watering-machine",
    slug: "cow-dung-de-watering-machine",
    name: "Cow Dung De-Watering Machine",
    shortName: "De-Watering Machine",
    image: "/biomass_processing_equipment_1779596747506.png",
    gallery: ["/biomass_processing_equipment_1779596747506.png", "/industrial_solar_dryer_1779596730597.png"],
    description: "Efficient solid-liquid separation machine for dairy farm waste management.",
    tags: ["Waste Management", "Agriculture"],
    capacity: "2-10 Tons/hour",
    heroTagline: "Transform dairy waste into valuable organic fertilizer instantly.",
    overview:
      "The Cow Dung De-Watering Machine (Screw Press Separator) is an essential tool for modern dairy farms and biogas plants. It efficiently separates solid fibrous material from liquid manure. The resulting dry solid fraction is odorless and perfect for composting, bedding, or sale as organic fertilizer, while the liquid fraction is easier to pump, store, and utilize for biogas or irrigation.",
    features: [
      "High-strength stainless steel screw and screen",
      "Adjustable pressure plates for desired moisture output",
      "Continuous operation with high throughput",
      "Compact design with small footprint",
      "Low power consumption high-torque motor",
      "Easy maintenance and self-cleaning screen design",
    ],
    specs: [
      { label: "Capacity", value: "2-10 Tons/hour" },
      { label: "Motor Power", value: "4 kW - 7.5 kW" },
      { label: "Material", value: "SS304 Contact Parts" },
      { label: "Output Moisture", value: "40% - 50%" },
      { label: "Screen Size", value: "0.5mm - 1.0mm" },
      { label: "Operation", value: "Continuous Screw Press" },
    ],
    applications: [
      "Dairy farm manure management",
      "Biogas plant feedstock preparation",
      "Poultry and piggery waste separation",
      "Organic fertilizer production",
      "Agricultural waste processing",
    ],
    benefits: [
      "Reduces manure volume by separating liquid, lowering storage costs",
      "Produces dry, odorless solids ready for sale as premium organic fertilizer",
      "Provides nutrient-rich liquid fraction ideal for biogas digestion",
      "Prevents crust formation and blockages in manure pits and pumps",
      "Improves overall farm hygiene and environmental compliance",
    ],
    industries: ["Dairy Farming", "Biogas & Renewable Energy", "Organic Fertilizer", "Agriculture"],
    faqs: [
      {
        question: "What is the moisture content of the solid output?",
        answer:
          "The machine can reduce the moisture content of the solid output to approximately 40%-50%, making it crumbly, stackable, and virtually odorless.",
      },
      {
        question: "Can it handle other types of manure?",
        answer:
          "Yes, the screw press separator is highly versatile and can process cow dung, pig manure, poultry waste, and various agricultural sludges.",
      },
    ],
    relatedSlugs: ["cow-dung-log-making-machine", "solar-sludge-dryer", "biomass-equipment"],
    seoTitle: "Cow Dung De-Watering Machine | Solid Liquid Separator | Radhey Solar",
    seoDescription:
      "High-efficiency Cow Dung De-Watering Machine by Radhey Solar. Separate solid and liquid manure for biogas and organic fertilizer. 2-10 Tons/hour capacity.",
    keywords: [
      "cow dung dewatering machine",
      "solid liquid separator manure",
      "dairy farm waste management",
      "screw press separator India",
    ],
  },
  {
    id: "cow-dung-log-making-machine",
    slug: "cow-dung-log-making-machine",
    name: "Cow Dung Log Making Machine",
    shortName: "Log Making Machine",
    image: "/biomass_processing_equipment_1779596747506.png",
    gallery: ["/biomass_processing_equipment_1779596747506.png", "/solar_dryer_1779596613449.png"],
    description: "Converts cow dung into eco-friendly, high-density fuel logs.",
    tags: ["Biofuel", "Eco-Friendly"],
    capacity: "200-1000 kg/hour",
    heroTagline: "Create eco-friendly fuel logs. Save trees, generate income.",
    overview:
      "The Cow Dung Log Making Machine is an innovative solution that compresses raw or de-watered cow dung mixed with agricultural waste into dense, uniform logs. These 'gokasth' logs serve as an excellent, eco-friendly replacement for traditional firewood in brick kilns, cremation grounds, and industrial boilers. A perfect tool for gaushalas (cow shelters) to become economically self-sustaining.",
    features: [
      "High compression extrusion technology",
      "Multiple die sizes for various log diameters",
      "Heavy-duty gearbox and continuous duty motor",
      "Hopper with agitator for smooth material flow",
      "Portable design on caster wheels",
      "Low maintenance, rugged construction",
    ],
    specs: [
      { label: "Capacity", value: "200-1000 kg/hour" },
      { label: "Log Diameter", value: "50mm - 100mm" },
      { label: "Motor Power", value: "3 kW - 10 kW" },
      { label: "Feedstock", value: "Cow dung + Agri waste" },
      { label: "Mobility", value: "Wheel-mounted" },
      { label: "Operation", value: "Extrusion" },
    ],
    applications: [
      "Producing 'Gokasth' (cow dung wood) for cremation",
      "Fuel log production for brick kilns and boilers",
      "Creating eco-friendly firewood for domestic heating",
      "Hawan and religious ceremony fuel",
      "Revenue generation for Gaushalas",
    ],
    benefits: [
      "Saves trees by providing a direct alternative to wood fuel",
      "Creates a sustainable revenue stream for cow shelters and dairy farms",
      "Produces logs that burn longer and cleaner than loose dung cakes",
      "Helps solve the problem of cow dung disposal and associated sanitation issues",
      "Simple to operate with minimal training required",
    ],
    industries: ["Gaushalas (Cow Shelters)", "Dairy Farming", "Biofuel Production", "Brick Kilns"],
    faqs: [
      {
        question: "Can agricultural waste be mixed with the cow dung?",
        answer:
          "Yes. In fact, mixing 10-20% dry agricultural waste (like sawdust, dry leaves, or straw) with the cow dung improves the binding, reduces drying time, and increases the calorific value of the final log.",
      },
      {
        question: "How long do the logs take to dry?",
        answer:
          "Freshly extruded logs contain moisture and need to be dried in the sun for 5-7 days depending on the weather. For faster and guaranteed drying, they can be processed in our Solar Dryers.",
      },
    ],
    relatedSlugs: ["cow-dung-de-watering-machine", "biomass-equipment", "solar-dryer"],
    seoTitle: "Cow Dung Log Making Machine | Gokasth Machine | Radhey Solar",
    seoDescription:
      "Cow Dung Log Making Machine by Radhey Solar. Convert cow dung into high-density eco-friendly firewood (Gokasth). Ideal for Gaushalas and dairy farms. 200-1000 kg/hr.",
    keywords: [
      "cow dung log making machine",
      "gokasth machine",
      "cow dung wood machine",
      "biomass briquette machine dung",
    ],
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
