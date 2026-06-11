"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: "01",
    slug: "parabolic-trough",
    category: "Process Heat",
    headline: "Solar Parabolic Trough",
    subheadline: "Slash industrial boiler fuel bills by up to 80% with automated single-axis tracking process heat.",
    video: "/client products/videos for hero/Parabolic_trough.mp4",
    videoType: "video/mp4"
  },
  {
    id: "02",
    slug: "solar-dryer",
    category: "Solar Dehydration",
    headline: "Industrial Solar Dryer",
    subheadline: "Dry crops, spices, and herbs hygienically using zero-cost solar thermal collectors.",
    video: "/client products/videos for hero/solardryer10kg.mp4",
    videoType: "video/mp4"
  },
  {
    id: "03",
    slug: "solar-cooker",
    category: "Institutional Cooking",
    headline: "Solar Parabolic Cooker",
    subheadline: "Eliminate fuel costs in community kitchens, ashrams, and schools. Replaces commercial LPG cylinders.",
    video: "/client products/videos for hero/solarcooker.mp4",
    videoType: "video/mp4"
  },
  {
    id: "04",
    slug: "cow-dung-log-machine",
    category: "Waste to Wealth",
    headline: "Cow Dung Log Extruder",
    subheadline: "Convert gaushala cow dung into dense Gomaya wood logs, replacing traditional forest firewood.",
    video: "/client products/videos for hero/cowdunglogextractor.mp4",
    videoType: "video/mp4"
  },
  {
    id: "05",
    slug: "cow-dung-pellet-machine",
    category: "Organic Farming",
    headline: "Cow Dung Pellet Maker",
    subheadline: "Turn cattle manure into premium, slow-release organic fertilizer pellets to restore soil carbon.",
    video: "/client products/videos for hero/Cow_dung_pellet_machine.mp4",
    videoType: "video/mp4"
  },
  {
    id: "06",
    slug: "cow-dung-briquette-machine",
    category: "Bio-Coal Production",
    headline: "Cow Dung Briquette Press",
    subheadline: "Convert crop residue and cow dung into high-density bio-coal briquettes, replacing industrial fossil coal.",
    video: "/client products/videos for hero/Briquette_press_compressing.mp4",
    videoType: "video/mp4"
  }
];

const SLIDE_DURATION = 6000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yTransform = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }, SLIDE_DURATION);

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 100;
          return prev + (100 / (SLIDE_DURATION / 50));
        });
      }, 50);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentSlide, isPlaying]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  return (
    <section ref={heroRef} id="hero" aria-label="Radha Solar — Industrial Solar Drying Solutions showcase" className="relative w-full h-screen bg-foreground flex flex-col justify-end overflow-hidden">
      
      {/* Edge-to-Edge Video Background with Parallax */}
      <motion.div 
        style={{ y: yTransform }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] z-0"
      >
        <AnimatePresence mode="popLayout">
          <motion.video
            key={currentSlide}
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={slides[currentSlide].video} type={slides[currentSlide].videoType || "video/mp4"} />
          </motion.video>
        </AnimatePresence>
      </motion.div>

      {/* Light Black Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-[5] pointer-events-none" />

      {/* Main Content Area - Centered */}
      <div className="absolute inset-0 z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 pb-16 sm:pb-16 text-center pointer-events-none">
        
        {/* Text Content */}
        <div className="w-full max-w-5xl pointer-events-auto">
          {/* Visually-hidden static h1 for SSR/SEO — visible h1 is animated below */}
          <span className="sr-only">
            Radha Solar — Precision Industrial Solar Drying &amp; Thermal Solutions. 25+ Years of Excellence, 1000+ Installations Worldwide.
          </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              aria-live="polite"
              aria-atomic="true"
            >
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <span className="font-mono text-white font-bold text-sm sm:text-xl tracking-widest drop-shadow-md">{slides[currentSlide].id}</span>
                <span className="w-8 sm:w-16 h-px bg-white/50" />
                <span className="font-mono text-white font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[10px] sm:text-sm drop-shadow-md">
                  {slides[currentSlide].category}
                </span>
              </div>
              
              <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-black text-white leading-[1.05] tracking-tighter mb-6 sm:mb-8 drop-shadow-xl">
                {slides[currentSlide].headline}
              </h1>
              
              <p className="text-sm sm:text-lg md:text-2xl text-white/90 font-sans font-medium leading-relaxed max-w-3xl mx-auto tracking-wide px-2 sm:px-0 drop-shadow-lg">
                {slides[currentSlide].subheadline}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Action Area */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <Link 
              href={`/products/${slides[currentSlide].slug}`}
              className="px-8 py-4 bg-primary text-primary-foreground font-sans font-bold text-lg rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_30px_-5px_rgba(234,88,12,0.6)] flex items-center gap-3 pointer-events-auto"
            >
              Explore Product <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Edge-to-Edge Navigation Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-background/20 backdrop-blur-2xl border-t border-foreground/10 flex items-center justify-between px-6 md:px-16 lg:px-24 py-6 z-20">
        
        {/* Play/Pause Control */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          aria-pressed={isPlaying}
          className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-foreground/20 text-foreground hover:bg-foreground/10 transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" aria-hidden="true" /> : <Play className="w-5 h-5 ml-0.5" aria-hidden="true" />}
        </button>

        {/* Progress Indicators */}
        <div className="flex-1 flex items-center gap-4 max-w-3xl mx-auto ml-8">
          {slides.map((slide, idx) => (
            <div 
              key={idx} 
              onClick={() => handleSlideChange(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
              aria-current={currentSlide === idx ? "true" : undefined}
              onKeyDown={(e) => e.key === 'Enter' && handleSlideChange(idx)}
              className="relative flex-1 h-1.5 bg-foreground/20 rounded-full overflow-hidden cursor-pointer group"
            >
              {/* Hover Background */}
              <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              {/* Active Progress Fill */}
              {currentSlide === idx && (
                <motion.div 
                  className="absolute top-0 left-0 h-full bg-primary"
                  style={{ width: `${progress}%` }}
                  layoutId="activeProgressFull"
                />
              )}
              
              {/* Completed Fill */}
              {currentSlide > idx && (
                <div className="absolute top-0 left-0 h-full w-full bg-foreground/60" />
              )}
            </div>
          ))}
        </div>

        {/* Next Button Mobile */}
        <button 
          onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
          aria-label="Next slide"
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </button>

      </div>
    </section>
  );
}
