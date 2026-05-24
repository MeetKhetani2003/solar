"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ProductModal, { Product } from "./ProductModal";

const productsData: Product[] = [
  {
    id: "solar-dryer",
    name: "Standard Solar Dryer",
    image: "/solar_dryer_1779596613449.png",
    description: "Versatile industrial solar drying solution for diverse materials.",
    tags: ["Versatile", "Energy Efficient"],
    capacity: "50-500 kg/batch",
    overview: "Our standard industrial solar dryer provides an optimal balance of efficiency and footprint. Designed for continuous operation, it leverages advanced solar thermal technology to gently and consistently reduce moisture content while preserving product quality.",
    features: [
      "Automated temperature and humidity control",
      "Food-grade stainless steel construction",
      "Hybrid backup system for continuous operation",
      "Remote monitoring via smartphone app"
    ],
    specs: [
      { label: "Operating Temperature", value: "35°C - 85°C" },
      { label: "Power Consumption", value: "2.5 kW" },
      { label: "Footprint", value: "4m x 2.5m" },
      { label: "Warranty", value: "5 Years" }
    ]
  },
  {
    id: "solar-vegetable-dryer",
    name: "Vegetable Processing Unit",
    image: "/solar_vegetable_dryer_1779596639507.png",
    description: "Specialized solar drying system for agricultural produce.",
    tags: ["Agriculture", "Food Safe"],
    capacity: "100-1000 kg/batch",
    overview: "Engineered specifically for vegetable processing, this unit ensures rapid moisture extraction while maintaining nutritional value, color, and flavor. Ideal for large-scale agricultural operations looking to reduce post-harvest losses.",
    features: [
      "Precision airflow for uniform drying",
      "Nutrient retention technology",
      "Easy-clean modular trays",
      "Integrated UV sterilization"
    ],
    specs: [
      { label: "Operating Temperature", value: "40°C - 65°C" },
      { label: "Drying Time", value: "4 - 8 Hours" },
      { label: "Material", value: "SS304 / SS316" },
      { label: "Automation", value: "Fully Automated PLC" }
    ]
  },
  {
    id: "solar-fruit-dryer",
    name: "Fruit Dehydration System",
    image: "/solar_fruit_dryer_1779596657010.png",
    description: "Premium fruit drying machine preserving natural sugars and flavor.",
    tags: ["Food Processing", "High Yield"],
    capacity: "50-800 kg/batch",
    overview: "This advanced dehydration system is calibrated for delicate fruits, preventing caramelization while ensuring thorough drying. The result is a premium dried fruit product with superior market value and extended shelf life.",
    features: [
      "Gentle low-heat extraction",
      "Anti-stick tray surfaces",
      "Flavor-lock condensation system",
      "Multi-stage drying profiles"
    ],
    specs: [
      { label: "Operating Temperature", value: "45°C - 70°C" },
      { label: "Thermal Efficiency", value: "> 85%" },
      { label: "Backup Heating", value: "Electric / Biomass" },
      { label: "Control Interface", value: "10-inch Touchscreen" }
    ]
  },
  {
    id: "solar-herb-dryer",
    name: "Botanical & Herb Dryer",
    image: "/solar_herb_dryer_1779596674009.png",
    description: "Low-temperature drying system for sensitive herbs and spices.",
    tags: ["Pharmaceutical", "Botanicals"],
    capacity: "20-200 kg/batch",
    overview: "Sensitive botanicals require precise handling. Our herb dryer operates at lower temperatures with high-volume airflow to extract moisture without degrading volatile oils, aromas, or active pharmaceutical ingredients.",
    features: [
      "Ultra-low temperature capabilities",
      "Volatile oil preservation",
      "HEPA filtered air intake",
      "Dark-drying mode for light-sensitive herbs"
    ],
    specs: [
      { label: "Operating Temperature", value: "25°C - 50°C" },
      { label: "Air Filtration", value: "HEPA H13" },
      { label: "Sensors", value: "Precision RH & Temp" },
      { label: "Compliance", value: "GMP / ISO 9001" }
    ]
  },
  {
    id: "solar-sludge-dryer",
    name: "Industrial Sludge Processor",
    image: "/solar_sludge_dryer_1779596697756.png",
    description: "Heavy-duty solar drying for wastewater and industrial sludge.",
    tags: ["Waste Management", "Heavy Industry"],
    capacity: "1-10 Tons/day",
    overview: "Transform waste liability into manageable assets. This robust system drastically reduces the volume and weight of industrial and municipal sludge using zero-carbon solar thermal energy, cutting disposal costs by up to 80%.",
    features: [
      "Corrosion-resistant coating",
      "Automated sludge turning mechanism",
      "Odor control and air scrubbing",
      "High-torque processing components"
    ],
    specs: [
      { label: "Moisture Reduction", value: "From 85% to <10%" },
      { label: "Structural Material", value: "Epoxy-coated Steel" },
      { label: "Energy Source", value: "Direct Solar + Thermal" },
      { label: "Operation", value: "Continuous / Batch" }
    ]
  },
  {
    id: "solar-parabolic-cooker",
    name: "Parabolic Thermal Concentrator",
    image: "/solar_parabolic_cooker_1779596715146.png",
    description: "High-temperature solar concentrator for industrial heating.",
    tags: ["Thermal Energy", "Process Heat"],
    capacity: "10-100 kW Thermal",
    overview: "Generate process heat without fossil fuels. Our parabolic concentrators track the sun to deliver high-temperature thermal energy suitable for boiling, steam generation, cooking, and various industrial processes.",
    features: [
      "Dual-axis automated solar tracking",
      "High-reflectivity mirror segments",
      "Thermal fluid integration",
      "Wind-resistant structural design"
    ],
    specs: [
      { label: "Focal Temperature", value: "Up to 400°C" },
      { label: "Tracking Accuracy", value: "± 0.1 Degree" },
      { label: "Reflectivity", value: "94%" },
      { label: "Lifespan", value: "25+ Years" }
    ]
  },
  {
    id: "industrial-solar-dryer",
    name: "Massive Scale Drying Plant",
    image: "/industrial_solar_dryer_1779596730597.png",
    description: "Enterprise-grade solar drying facility for mass production.",
    tags: ["Enterprise", "Mass Production"],
    capacity: "10-50 Tons/batch",
    overview: "Designed for massive throughput, this plant-scale solution integrates solar collectors, advanced heat exchangers, and massive drying chambers. It provides the ultimate ROI for enterprise-level manufacturing and processing.",
    features: [
      "Modular expansion capability",
      "Integrated heat recovery systems",
      "Drive-in loading/unloading",
      "Centralized SCADA control system"
    ],
    specs: [
      { label: "Total Area", value: "Customizable" },
      { label: "Heat Recovery", value: "Up to 40% energy savings" },
      { label: "Logistics", value: "Pallet/Forklift compatible" },
      { label: "Deployment Time", value: "3-6 Months" }
    ]
  },
  {
    id: "biomass-equipment",
    name: "Biomass Processor",
    image: "/biomass_processing_equipment_1779596747506.png",
    description: "Converts agricultural waste into usable biofuel and briquettes.",
    tags: ["Renewable", "Biofuel"],
    capacity: "500-2000 kg/hour",
    overview: "Close the loop on agricultural waste. This equipment dries and processes biomass materials into high-energy briquettes or pellets, providing a sustainable fuel source that can even power backup heaters in our solar dryers.",
    features: [
      "Pre-drying solar integration",
      "High-pressure extrusion",
      "Dust extraction system",
      "Low maintenance drive system"
    ],
    specs: [
      { label: "Input Moisture", value: "Max 15% (after drying)" },
      { label: "Output Density", value: "1100-1300 kg/m³" },
      { label: "Motor Power", value: "45 kW - 90 kW" },
      { label: "Automation", value: "Semi to Fully Auto" }
    ]
  }
];

export default function ProductsShowcase() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className="relative w-full  bg-surface z-10 overflow-hidden" id="products">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
        {/* Header */}
        <div className="mb-16 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight"
          >
            Product Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Innovative Solar Processing Systems Engineered For Modern Industries. Minimalist design, maximum performance.
          </motion.p>
        </div>

        {/* Uniform CSS Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {productsData.map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              index={idx}
              onClick={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}

function ProductCard({ product, index, onClick }: { product: Product, index: number, onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="group relative w-full flex flex-col min-h-[450px] md:min-h-[550px] rounded-[2rem] bg-foreground/5 backdrop-blur-3xl border border-border/40 overflow-hidden cursor-pointer transition-all duration-700 hover:shadow-2xl hover:bg-background hover:border-primary/30"
      style={{
        transform: isHovered ? "translateY(-8px)" : "translateY(0px)",
      }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

      {/* Luxury Reflection Layer */}
      <motion.div
        animate={{ opacity: isHovered ? 0.4 : 0, x: isHovered ? '100%' : '-100%' }}
        transition={{ duration: 1, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 z-20 pointer-events-none"
      />

      {/* Top Image Container - Zero Padding Edge-to-Edge */}
      <div className="relative w-full h-[55%] bg-surface/30 overflow-hidden flex items-center justify-center p-0 m-0 z-10 transition-colors duration-500 group-hover:bg-transparent">
        <motion.div
          layoutId={`product-image-${product.id}`}
          className="relative w-full h-full transform transition-transform duration-1000 ease-out group-hover:scale-110"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover scale-[1.05] drop-shadow-xl filter brightness-95 group-hover:brightness-100 transition-all duration-700"
          />
        </motion.div>

        {/* Capacity Badge */}
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-border/30 px-3 py-1.5 rounded-full font-mono text-xs font-semibold text-foreground shadow-sm z-20">
          {product.capacity}
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-between z-10 w-full">
        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {product.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="text-[11px] font-sans font-bold text-primary uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="font-heading text-2xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-500">
            {product.name}
          </h3>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {product.description}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="font-sans text-xs font-semibold text-foreground uppercase tracking-wider relative overflow-hidden group-hover:text-primary transition-colors">
            View Details
            <span className="absolute bottom-0 left-0 w-full h-px bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
          </span>
          <div className="w-10 h-10 rounded-full bg-foreground/5 border border-border/30 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 transform group-hover:rotate-45 shadow-sm shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
