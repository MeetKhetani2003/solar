"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Pause } from "lucide-react";

const slides = [
  {
    id: "01",
    category: "Thermal Solutions",
    headline: "Precision Drying Technologies.",
    subheadline: "Advanced solar-powered thermal systems engineered for maximum industrial throughput.",
    video: "/solardryer.mp4"
  },
  {
    id: "02",
    category: "Agricultural Scale",
    headline: "Built For The Harvest.",
    subheadline: "Robust processing systems delivering unmatched performance and reliability at scale.",
    video: "/solar2.mp4"
  },
  {
    id: "03",
    category: "Global Innovation",
    headline: "25 Years Of Excellence.",
    subheadline: "Manufacturing world-class sustainable technology for modern industries worldwide.",
    video: "/solar3.mp4"
  },
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
    <section ref={heroRef} id="hero" className="relative w-full h-screen bg-foreground flex flex-col justify-end overflow-hidden">
      
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
            <source src={slides[currentSlide].video} type="video/mp4" />
          </motion.video>
        </AnimatePresence>
      </motion.div>

      {/* Light Black Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-[5] pointer-events-none" />

      {/* Main Content Area - Centered */}
      <div className="absolute inset-0 z-10 w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-16 lg:px-24 pb-16 sm:pb-16 text-center pointer-events-none">
        
        {/* Text Content */}
        <div className="w-full max-w-5xl pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
            <button className="px-8 py-4 bg-primary text-primary-foreground font-sans font-bold text-lg rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_30px_-5px_rgba(234,88,12,0.6)] flex items-center gap-3">
              Explore Systems <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-Edge Navigation Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-background/20 backdrop-blur-2xl border-t border-foreground/10 flex items-center justify-between px-6 md:px-16 lg:px-24 py-6 z-20">
        
        {/* Play/Pause Control */}
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full border border-foreground/20 text-foreground hover:bg-foreground/10 transition-colors"
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>

        {/* Progress Indicators */}
        <div className="flex-1 flex items-center gap-4 max-w-3xl mx-auto ml-8">
          {slides.map((slide, idx) => (
            <div 
              key={idx} 
              onClick={() => handleSlideChange(idx)}
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
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </section>
  );
}
