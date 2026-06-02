"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  X, 
  RotateCcw,
  Maximize2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductImageViewerProps {
  images: string[];
  alt: string;
}

export default function ProductImageViewer({ images, alt }: ProductImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  
  // Lightbox Zoom and Pan State
  const [lightboxScale, setLightboxScale] = useState(1);
  const lightboxImageRef = useRef<HTMLDivElement>(null);

  const totalImages = images?.length || 0;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft" && totalImages > 1) {
        handlePrev();
        resetLightboxZoom();
      } else if (e.key === "ArrowRight" && totalImages > 1) {
        handleNext();
        resetLightboxZoom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, totalImages, handlePrev, handleNext]);

  // Handle hover zoom position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  // Lightbox Zoom functions
  const handleZoomIn = () => {
    setLightboxScale((prev) => Math.min(prev + 0.5, 4));
  };

  const handleZoomOut = () => {
    setLightboxScale((prev) => {
      const nextScale = Math.max(prev - 0.5, 1);
      return nextScale;
    });
  };

  const resetLightboxZoom = () => {
    setLightboxScale(1);
  };

  const openLightbox = () => {
    resetLightboxZoom();
    setIsLightboxOpen(true);
  };

  const handleThumbnailClick = (idx: number) => {
    setCurrentIndex(idx);
    resetLightboxZoom();
  };

  if (totalImages === 0) {
    return (
      <div className="relative aspect-square w-full rounded-2xl bg-muted flex items-center justify-center border border-border/40">
        <span className="text-muted-foreground text-sm">No image available</span>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-4">
      {/* ── Main Viewport ────────────────────────────────── */}
      <div className="relative aspect-square w-full rounded-2xl border border-border/40 bg-foreground/[0.03] overflow-hidden group shadow-md transition-shadow hover:shadow-lg">
        {/* Hover Magnifier Container */}
        <div 
          className="relative w-full h-full cursor-zoom-in overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={openLightbox}
        >
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
            style={{
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
              scale: isHovering ? 2 : 1,
            }}
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} - Image ${currentIndex + 1}`}
              fill
              priority
              className="object-cover transition-all"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>

        {/* Hover Overlays */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Zoom Overlay indicator button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            openLightbox();
          }}
          className="absolute right-4 top-4 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center shadow-md backdrop-blur-sm transition-all hover:scale-105"
          title="Zoom View"
        >
          <Maximize2 className="w-5 h-5" />
        </button>

        {/* Arrow Navigation */}
        {totalImages > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:scale-105"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 hover:bg-background text-foreground flex items-center justify-center shadow-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:scale-105"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Indicator Pill */}
        {totalImages > 1 && (
          <div className="absolute bottom-4 right-4 px-3 py-1 text-xs font-mono bg-background/85 backdrop-blur-sm text-foreground rounded-full border border-border/40 shadow-sm">
            {currentIndex + 1} / {totalImages}
          </div>
        )}
      </div>

      {/* ── Thumbnails Strip ─────────────────────────────── */}
      {totalImages > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-border scrollbar-track-transparent">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => handleThumbnailClick(idx)}
              className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                idx === currentIndex
                  ? "border-primary shadow-sm scale-95"
                  : "border-border/40 opacity-70 hover:opacity-100 hover:border-border"
              }`}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}

      {/* ── Lightbox Portal (Modal) ────────────────────────── */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-6"
          >
            {/* Top Bar Controls */}
            <div className="w-full flex items-center justify-between text-white relative z-10">
              <span className="font-heading text-sm md:text-base font-semibold tracking-wide truncate max-w-[60%]">
                {alt}
              </span>
              
              <div className="flex items-center gap-2 md:gap-4 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                <button
                  onClick={handleZoomOut}
                  disabled={lightboxScale <= 1}
                  className="p-1.5 hover:text-primary transition-colors disabled:opacity-30 disabled:hover:text-white"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>
                <span className="font-mono text-xs w-12 text-center select-none">
                  {Math.round(lightboxScale * 100)}%
                </span>
                <button
                  onClick={handleZoomIn}
                  disabled={lightboxScale >= 4}
                  className="p-1.5 hover:text-primary transition-colors disabled:opacity-30 disabled:hover:text-white"
                  title="Zoom In"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>
                {lightboxScale > 1 && (
                  <button
                    onClick={resetLightboxZoom}
                    className="p-1.5 hover:text-primary transition-colors border-l border-white/10 pl-2"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:rotate-90"
                aria-label="Close Viewer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Interactive Screen */}
            <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden my-4">
              {totalImages > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-4 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition-all hover:scale-105"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
              )}

              {/* Draggable and Zoomable Image Wrapper */}
              <div 
                ref={lightboxImageRef}
                className="relative w-full max-w-5xl h-full flex items-center justify-center"
              >
                <motion.div
                  key={`${currentIndex}-${lightboxScale}`}
                  drag={lightboxScale > 1}
                  dragConstraints={{ left: -400 * (lightboxScale - 1), right: 400 * (lightboxScale - 1), top: -250 * (lightboxScale - 1), bottom: 250 * (lightboxScale - 1) }}
                  dragElastic={0.1}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: lightboxScale }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative aspect-square md:aspect-[4/3] w-full max-h-[70vh] cursor-grab active:cursor-grabbing flex items-center justify-center"
                >
                  <Image
                    src={images[currentIndex]}
                    alt={`${alt} - Full view`}
                    fill
                    className="object-contain pointer-events-none select-none"
                    sizes="100vw"
                    priority
                  />
                </motion.div>
              </div>

              {totalImages > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-4 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition-all hover:scale-105"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              )}
            </div>

            {/* Bottom Bar: Thumbnails and Status */}
            <div className="w-full flex flex-col items-center gap-4 relative z-10">
              {totalImages > 1 && (
                <div className="flex gap-2 max-w-full overflow-x-auto py-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleThumbnailClick(idx)}
                      className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                        idx === currentIndex
                          ? "border-primary scale-95"
                          : "border-white/10 opacity-50 hover:opacity-100 hover:border-white/30"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`lightbox thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="60px"
                      />
                    </button>
                  ))}
                </div>
              )}
              
              <div className="font-mono text-xs text-white/50">
                Image {currentIndex + 1} of {totalImages}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
