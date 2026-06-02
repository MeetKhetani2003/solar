"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageCarousel({ images, alt }: { images: string[], alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [images.length, goToNext]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full group rounded-2xl overflow-hidden border border-border/40 bg-foreground/5 shadow-lg">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.preventDefault(); goToPrevious(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.preventDefault(); goToNext(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background/80 focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentIndex ? "bg-primary w-6" : "bg-white/50 w-2 hover:bg-white/80"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
