"use client";

import React, { useState, useEffect } from "react";
import { productsData } from "@/lib/products";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Play, 
  X, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  ImageIcon,
  Film,
  Maximize2
} from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Helper to extract YouTube ID
function getYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

interface MediaItem {
  id: string;
  type: "image" | "youtube" | "video";
  url: string;
  thumbnail?: string;
  productSlug: string;
  productName: string;
  title: string;
}

// Default local MP4 videos matching each product
const localVideos = [
  {
    productSlug: "parabolic-trough",
    url: "/client products/videos for hero/Parabolic_trough.mp4",
    title: "Parabolic Trough Working Video"
  },
  {
    productSlug: "solar-dryer",
    url: "/client products/videos for hero/solardryer10kg.mp4",
    title: "10kg Solar Dryer Demo"
  },
  {
    productSlug: "solar-cooker",
    url: "/client products/videos for hero/solarcooker.mp4",
    title: "Solar Cooker Operational Video"
  },
  {
    productSlug: "cow-dung-log-machine",
    url: "/client products/videos for hero/cowdunglogextractor.mp4",
    title: "Cow Dung Log Machine In Action"
  },
  {
    productSlug: "cow-dung-pellet-machine",
    url: "/client products/videos for hero/Cow_dung_pellet_machine.mp4",
    title: "Cow Dung Pellet Maker Demonstration"
  },
  {
    productSlug: "cow-dung-briquette-machine",
    url: "/client products/videos for hero/Briquette_press_compressing.mp4",
    title: "Biomass Briquette Press Compression"
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<{ type: "youtube" | "video"; url: string } | null>(null);
  
  // Lightbox Zoom State
  const [lightboxScale, setLightboxScale] = useState(1);

  // Fetch all media (static + database dynamic)
  useEffect(() => {
    const loadAllMedia = async () => {
      setLoading(true);
      try {
        // 1. Initialize with static gallery images from products.ts
        const staticMedia: MediaItem[] = [];
        
        productsData.forEach((prod) => {
          // Add main image
          staticMedia.push({
            id: `static-main-${prod.slug}`,
            type: "image",
            url: prod.image,
            productSlug: prod.slug,
            productName: prod.shortName,
            title: `${prod.shortName} Overview Image`
          });

          // Add gallery images
          if (prod.gallery) {
            prod.gallery.forEach((img, idx) => {
              // Avoid duplicates of main image
              if (img !== prod.image) {
                staticMedia.push({
                  id: `static-gal-${prod.slug}-${idx}`,
                  type: "image",
                  url: img,
                  productSlug: prod.slug,
                  productName: prod.shortName,
                  title: `${prod.shortName} Details Image ${idx + 1}`
                });
              }
            });
          }

          // Add local MP4 videos
          const videoMatch = localVideos.find((v) => v.productSlug === prod.slug);
          if (videoMatch) {
            staticMedia.push({
              id: `static-vid-${prod.slug}`,
              type: "video",
              url: videoMatch.url,
              productSlug: prod.slug,
              productName: prod.shortName,
              title: videoMatch.title
            });
          }
        });

        // 2. Fetch database dynamic media (GridFS + YouTube links) for all products
        const dbMediaPromises = productsData.map(async (prod) => {
          try {
            const res = await fetch(`/api/admin/media?productSlug=${prod.slug}`);
            if (res.ok) {
              const data = await res.json();
              
              const dbImages: MediaItem[] = (data.images || []).map((img: { fileId: string; url: string }) => ({
                id: `db-img-${img.fileId}`,
                type: "image" as const,
                url: img.url,
                productSlug: prod.slug,
                productName: prod.shortName,
                title: `${prod.shortName} Customer Photo`
              }));

              const dbVideos: MediaItem[] = (data.youtubeUrls || []).map((ytUrl: string, idx: number) => {
                const ytId = getYouTubeId(ytUrl);
                return {
                  id: `db-yt-${prod.slug}-${idx}`,
                  type: "youtube" as const,
                  url: ytUrl,
                  thumbnail: ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : undefined,
                  productSlug: prod.slug,
                  productName: prod.shortName,
                  title: `${prod.shortName} Video Reel ${idx + 1}`
                };
              });

              return [...dbImages, ...dbVideos];
            }
          } catch (err) {
            console.error(`Error loading DB media for ${prod.slug}:`, err);
          }
          return [];
        });

        const dbMediaResults = await Promise.all(dbMediaPromises);
        const combinedDbMedia = dbMediaResults.flat();

        // Combine and save state
        setMediaItems([...staticMedia, ...combinedDbMedia]);
      } catch (err) {
        console.error("Error building gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    loadAllMedia();
  }, []);

  // Filter media items based on tab
  const filteredItems = activeTab === "all" 
    ? mediaItems 
    : mediaItems.filter((item) => item.productSlug === activeTab);

  // Image items subset for lightbox navigation
  const imageItems = filteredItems.filter((item) => item.type === "image");

  // Handle lightbox slide navigation
  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    setLightboxScale(1);
    setSelectedImageIndex((prev) => (prev === 0 ? imageItems.length - 1 : prev! - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    setLightboxScale(1);
    setSelectedImageIndex((prev) => (prev === imageItems.length - 1 ? 0 : prev! + 1));
  };

  // Keyboard controls for lightbox
  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImageIndex(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxScale(1);
        setSelectedImageIndex((prev) => (prev === 0 ? imageItems.length - 1 : prev! - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxScale(1);
        setSelectedImageIndex((prev) => (prev === imageItems.length - 1 ? 0 : prev! + 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, imageItems]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground pt-36 pb-24 relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(234,88,12,0.08)_0%,transparent_70%)] pointer-events-none z-0" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
          
          {/* Page Title Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-3">Multimedia Portal</p>
            <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight mb-4">
              Integrated Media Gallery
            </h1>
            <p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed">
              Explore dynamic product demonstrations, site photos, and field installations. Select tabs below to filter by product systems.
            </p>
          </div>

          {/* Product Tabs Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`relative px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all border ${
                activeTab === "all"
                  ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-foreground/[0.02] border-border/40 hover:border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              All Systems
            </button>
            {productsData.map((prod) => (
              <button
                key={prod.slug}
                onClick={() => setActiveTab(prod.slug)}
                className={`relative px-5 py-2.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all border ${
                  activeTab === prod.slug
                    ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-foreground/[0.02] border-border/40 hover:border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {prod.shortName}
              </button>
            ))}
          </div>

          {/* Gallery Media Grid */}
          {loading ? (
            <div className="py-32 flex flex-col items-center justify-center gap-4 text-muted-foreground font-sans">
              <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
              <span>Loading media portfolio...</span>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="py-24 border border-border/40 rounded-3xl bg-foreground/[0.01] backdrop-blur-sm flex flex-col items-center justify-center text-center p-6 text-muted-foreground font-sans max-w-3xl mx-auto">
              No media uploads found for this product tab yet.
            </div>
          ) : (
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => {
                  const isImage = item.type === "image";
                  
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4 }}
                      onClick={() => {
                        if (isImage) {
                          // Find index inside imageItems subset
                          const imgIdx = imageItems.findIndex((x) => x.id === item.id);
                          if (imgIdx !== -1) setSelectedImageIndex(imgIdx);
                        } else {
                          setSelectedVideo({ type: item.type as "youtube" | "video", url: item.url });
                        }
                      }}
                      className="group relative aspect-square border border-border/40 rounded-2xl overflow-hidden bg-foreground/[0.01] shadow-sm hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer"
                    >
                      {/* Media Card Render */}
                      <div className="relative w-full h-full overflow-hidden">
                        {isImage ? (
                          <Image
                            src={item.url}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        ) : item.type === "youtube" && item.thumbnail ? (
                          <Image
                            src={item.thumbnail}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          />
                        ) : (
                          // Local MP4 Video preview loading/rendering
                          <div className="w-full h-full bg-black flex items-center justify-center relative">
                            <video 
                              src={item.url} 
                              muted 
                              playsInline 
                              className="w-full h-full object-cover opacity-80"
                            />
                          </div>
                        )}
                        
                        {/* Play Icon overlay for Videos */}
                        {!isImage && (
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                            <span className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg transition-transform scale-90 group-hover:scale-100 duration-300">
                              <Play className="w-6 h-6 fill-current ml-1" />
                            </span>
                          </div>
                        )}

                        {/* Badges Overlay */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <span className="font-mono text-[9px] font-bold text-white bg-black/60 border border-white/10 px-2 py-0.5 rounded-md uppercase tracking-wider backdrop-blur-sm">
                            {item.productName}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className={`p-1.5 rounded-full text-white backdrop-blur-sm shadow-sm ${
                            isImage ? "bg-primary/80" : "bg-black/60"
                          }`}>
                            {isImage ? <ImageIcon className="w-3.5 h-3.5" /> : <Film className="w-3.5 h-3.5" />}
                          </span>
                        </div>

                        {/* Title Info Hover Panel */}
                        <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/85 via-black/45 to-transparent text-white flex flex-col justify-end translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <p className="font-mono text-[9px] font-bold text-primary uppercase tracking-widest mb-1">
                            {isImage ? "Photo Asset" : item.type === "youtube" ? "YouTube Clip" : "Product Demonstration"}
                          </p>
                          <h4 className="font-heading text-sm font-semibold truncate leading-tight">
                            {item.title}
                          </h4>
                          <span className="font-sans text-[10px] text-white/50 flex items-center gap-1.5 mt-2">
                            <Maximize2 className="w-3 h-3" /> Click to open
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Lightbox Modal for Images */}
          <AnimatePresence>
            {selectedImageIndex !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 md:p-6"
              >
                {/* Header Controls */}
                <div className="w-full flex items-center justify-between text-white relative z-10">
                  <span className="font-heading text-sm md:text-base font-semibold tracking-wide truncate max-w-[60%]">
                    {imageItems[selectedImageIndex]?.title}
                  </span>
                  
                  <div className="flex items-center gap-2 md:gap-4 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
                    <button
                      onClick={() => setLightboxScale((prev) => Math.max(prev - 0.5, 1))}
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
                      onClick={() => setLightboxScale((prev) => Math.min(prev + 0.5, 4))}
                      disabled={lightboxScale >= 4}
                      className="p-1.5 hover:text-primary transition-colors disabled:opacity-30 disabled:hover:text-white"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                    {lightboxScale > 1 && (
                      <button
                        onClick={() => setLightboxScale(1)}
                        className="p-1.5 hover:text-primary transition-colors border-l border-white/10 pl-2"
                        title="Reset Zoom"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedImageIndex(null)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all hover:rotate-90"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Main Lightbox Screen */}
                <div className="flex-1 w-full flex items-center justify-center relative overflow-hidden my-4">
                  {imageItems.length > 1 && (
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-2 md:left-4 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition-all hover:scale-105"
                      aria-label="Previous Image"
                    >
                      <ChevronLeft className="w-8 h-8" />
                    </button>
                  )}

                  {/* Drag-Zoomable wrapper */}
                  <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
                    <motion.div
                      key={`${selectedImageIndex}-${lightboxScale}`}
                      drag={lightboxScale > 1}
                      dragConstraints={{ left: -400 * (lightboxScale - 1), right: 400 * (lightboxScale - 1), top: -250 * (lightboxScale - 1), bottom: 250 * (lightboxScale - 1) }}
                      dragElastic={0.1}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: lightboxScale }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="relative aspect-square md:aspect-[4/3] w-full max-h-[70vh] cursor-grab active:cursor-grabbing flex items-center justify-center"
                    >
                      {imageItems[selectedImageIndex] && (
                        <Image
                          src={imageItems[selectedImageIndex].url}
                          alt={imageItems[selectedImageIndex].title}
                          fill
                          className="object-contain pointer-events-none select-none"
                          sizes="100vw"
                          priority
                        />
                      )}
                    </motion.div>
                  </div>

                  {imageItems.length > 1 && (
                    <button
                      onClick={handleNextImage}
                      className="absolute right-2 md:right-4 z-10 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 flex items-center justify-center transition-all hover:scale-105"
                      aria-label="Next Image"
                    >
                      <ChevronRight className="w-8 h-8" />
                    </button>
                  )}
                </div>

                {/* Bottom Status bar */}
                <div className="w-full flex flex-col items-center gap-4 relative z-10">
                  <div className="font-mono text-xs text-white/50">
                    Photo {selectedImageIndex + 1} of {imageItems.length}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Video Modal Player */}
          <AnimatePresence>
            {selectedVideo !== null && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
              >
                <div className="relative w-full max-w-5xl aspect-video rounded-2xl border border-white/10 bg-black overflow-hidden shadow-2xl">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="absolute right-4 top-4 z-50 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-all hover:rotate-90"
                    aria-label="Close Video Player"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Player Frame rendering */}
                  {selectedVideo.type === "youtube" ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.url)}?autoplay=1`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <video
                      src={selectedVideo.url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </main>
      <Footer />
    </>
  );
}
