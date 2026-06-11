"use client";

import React, { useState, useEffect } from "react";
import { productsData } from "@/lib/products";
import { 
  UploadCloud, 
  Trash2, 
  Plus, 
  Image as ImageIcon, 
  Film, 
  Loader2, 
  ExternalLink,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Helper to extract YouTube video ID for previewing
function getYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

interface DBImage {
  fileId: string;
  filename: string;
  uploadDate: string;
  url: string;
}

export default function AdminPage() {
  const [activeSlug, setActiveSlug] = useState(productsData[0]?.slug || "");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [youtubeUrls, setYoutubeUrls] = useState<string[]>([]);
  const [images, setImages] = useState<DBImage[]>([]);
  
  // Loading states
  const [loadingMedia, setLoadingMedia] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [addingVideo, setAddingVideo] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Status notifications
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const activeProduct = productsData.find((p) => p.slug === activeSlug);

  // Fetch product media
  useEffect(() => {
    if (!activeSlug) return;
    
    const fetchMedia = async () => {
      setLoadingMedia(true);
      try {
        const res = await fetch(`/api/admin/media?productSlug=${activeSlug}`);
        const data = await res.json();
        if (res.ok) {
          setYoutubeUrls(data.youtubeUrls || []);
          setImages(data.images || []);
        } else {
          showNotification("error", data.error || "Failed to load product media");
        }
      } catch {
        showNotification("error", "Error contacting server to load media");
      } finally {
        setLoadingMedia(false);
      }
    };

    fetchMedia();
  }, [activeSlug]);

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Upload image to GridFS
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    if (!file.type.startsWith("image/")) {
      showNotification("error", "Only image files are allowed");
      return;
    }

    setUploadingImage(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("productSlug", activeSlug);

    try {
      const res = await fetch("/api/admin/media", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setImages(data.images || []);
        showNotification("success", `Successfully uploaded image: ${file.name}`);
      } else {
        showNotification("error", data.error || "Failed to upload image");
      }
    } catch {
      showNotification("error", "Network error uploading image");
    } finally {
      setUploadingImage(false);
      // Reset input
      e.target.value = "";
    }
  };

  // Add YouTube Video URL
  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!youtubeUrl.trim()) return;

    const ytId = getYouTubeId(youtubeUrl);
    if (!ytId) {
      showNotification("error", "Invalid YouTube URL format");
      return;
    }

    setAddingVideo(true);
    const formData = new FormData();
    formData.append("productSlug", activeSlug);
    formData.append("youtubeUrl", youtubeUrl.trim());

    try {
      const res = await fetch("/api/admin/media", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setYoutubeUrls(data.youtubeUrls || []);
        setYoutubeUrl("");
        showNotification("success", "YouTube URL added successfully");
      } else {
        showNotification("error", data.error || "Failed to add video");
      }
    } catch {
      showNotification("error", "Network error adding video");
    } finally {
      setAddingVideo(false);
    }
  };

  // Delete media item
  const handleDeleteMedia = async (type: "image" | "video", value: string) => {
    if (!confirm(`Are you sure you want to delete this ${type === "image" ? "image" : "video Link"}?`)) {
      return;
    }

    setDeletingId(value);
    try {
      const payload: { productSlug: string; fileId?: string; youtubeUrl?: string } = { productSlug: activeSlug };
      if (type === "image") {
        payload.fileId = value;
      } else {
        payload.youtubeUrl = value;
      }

      const res = await fetch("/api/admin/media/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setImages(data.images || []);
        setYoutubeUrls(data.youtubeUrls || []);
        showNotification("success", `Successfully deleted ${type}`);
      } else {
        showNotification("error", data.error || `Failed to delete ${type}`);
      }
    } catch {
      showNotification("error", `Network error deleting ${type}`);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background text-foreground pt-32 pb-20 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 border-b border-border/40 pb-8">
            <div>
              <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-2">Internal Portal</p>
              <h1 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
                Product Media Admin
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                Manage YouTube video reels and custom gallery images for each product.
              </p>
            </div>
            <div>
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border/80 hover:border-primary text-foreground hover:text-primary rounded-full transition-all text-sm font-semibold font-sans shadow-sm"
              >
                View Public Gallery
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Floating Notifications */}
          {notification && (
            <div className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl backdrop-blur-md border animate-bounce ${
              notification.type === "success" 
                ? "bg-green-500/10 border-green-500/30 text-green-400" 
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}>
              {notification.type === "success" ? <CheckCircle className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
              <span className="font-sans text-sm font-semibold">{notification.message}</span>
            </div>
          )}

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Sidebar: Product Navigation Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-3.5">
              <p className="font-mono text-muted-foreground text-xs uppercase tracking-widest px-2">Select Product</p>
              <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 gap-2 scrollbar-none">
                {productsData.map((prod) => (
                  <button
                    key={prod.slug}
                    onClick={() => setActiveSlug(prod.slug)}
                    className={`text-left px-5 py-4 rounded-xl border font-sans text-sm font-semibold transition-all shrink-0 flex items-center justify-between ${
                      prod.slug === activeSlug
                        ? "bg-primary/10 border-primary/40 text-primary shadow-sm"
                        : "bg-foreground/[0.01] border-border/40 hover:border-border/80 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{prod.shortName}</span>
                    <span className="hidden lg:inline text-[10px] font-mono opacity-50 bg-foreground/5 px-2 py-0.5 rounded-md">
                      {prod.slug === "cow-dung-log-machine" ? "4 seeded" : "manage"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Dashboard Area */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              
              {/* Product Info Glass Box */}
              {activeProduct && (
                <div className="rounded-2xl border border-border/40 bg-foreground/[0.01] p-6 backdrop-blur-sm shadow-sm flex flex-col sm:flex-row gap-5 items-center">
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border border-border/40 bg-muted">
                    <Image
                      src={activeProduct.image}
                      alt={activeProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="font-mono text-xs font-bold text-primary tracking-widest uppercase bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20">
                      Active Target
                    </span>
                    <h2 className="font-heading text-xl sm:text-2xl font-bold mt-2">{activeProduct.name}</h2>
                    <p className="font-sans text-xs text-muted-foreground line-clamp-2 mt-1">{activeProduct.description}</p>
                  </div>
                </div>
              )}

              {/* Uploads Panel Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* 1. Photo Uploader Box */}
                <div className="rounded-2xl border border-border/40 bg-foreground/[0.01] p-6 flex flex-col">
                  <h3 className="font-heading text-lg font-bold flex items-center gap-2 mb-4">
                    <ImageIcon className="w-5 h-5 text-primary" />
                    Upload Photo (GridFS)
                  </h3>
                  
                  <label className="flex-1 min-h-[160px] rounded-xl border border-dashed border-border/80 hover:border-primary/60 cursor-pointer flex flex-col items-center justify-center gap-3 p-6 text-center transition-all bg-foreground/[0.005] hover:bg-primary/[0.01] group">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageUpload}
                      disabled={uploadingImage}
                      className="hidden" 
                    />
                    {uploadingImage ? (
                      <>
                        <Loader2 className="w-10 h-10 text-primary animate-spin" />
                        <p className="font-sans text-sm font-medium">Uploading to GridFS...</p>
                      </>
                    ) : (
                      <>
                        <UploadCloud className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                        <div>
                          <p className="font-sans text-sm font-semibold">Choose image or drag here</p>
                          <p className="font-mono text-[10px] text-muted-foreground mt-1">PNG, JPG, WEBP up to 10MB</p>
                        </div>
                      </>
                    )}
                  </label>
                </div>

                {/* 2. YouTube Video Link Form */}
                <div className="rounded-2xl border border-border/40 bg-foreground/[0.01] p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-bold flex items-center gap-2 mb-4">
                      <Film className="w-5 h-5 text-primary" />
                      Add YouTube Reel/Video
                    </h3>
                    
                    <form onSubmit={handleAddVideo} className="flex flex-col gap-3">
                      <div className="relative">
                        <input
                          type="text"
                          value={youtubeUrl}
                          onChange={(e) => setYoutubeUrl(e.target.value)}
                          placeholder="Paste YouTube or Shorts URL..."
                          disabled={addingVideo}
                          className="w-full px-4 py-3 bg-foreground/[0.02] border border-border/80 hover:border-border rounded-xl font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={addingVideo || !youtubeUrl.trim()}
                        className="w-full py-3 bg-primary text-primary-foreground font-sans font-bold text-sm rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-40 disabled:hover:bg-primary shadow-sm"
                      >
                        {addingVideo ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                        Add Video Link
                      </button>
                    </form>
                  </div>
                  <p className="font-mono text-[9px] text-muted-foreground leading-relaxed mt-4">
                    Supports standard URLs: youtube.com/watch?v=..., youtu.be/... or mobile Shorts shorts/...
                  </p>
                </div>

              </div>

              {/* Media Managers (Lists of Uploaded Items) */}
              <div className="flex flex-col gap-8 mt-4">
                
                {/* 1. YouTube Videos List */}
                <div className="rounded-2xl border border-border/40 bg-foreground/[0.01] p-6">
                  <h3 className="font-heading text-lg font-bold flex items-center gap-2 mb-5">
                    <Film className="w-5 h-5 text-primary" />
                    YouTube Media Gallery ({youtubeUrls.length})
                  </h3>

                  {loadingMedia ? (
                    <div className="py-12 flex items-center justify-center gap-2 text-muted-foreground text-sm font-sans">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" /> Loading media...
                    </div>
                  ) : youtubeUrls.length === 0 ? (
                    <div className="py-10 border border-border/30 rounded-xl bg-background flex flex-col items-center justify-center text-center p-6 text-muted-foreground text-sm font-sans">
                      No YouTube videos added yet for this product. Use the form above to add some.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {youtubeUrls.map((url, idx) => {
                        const ytId = getYouTubeId(url);
                        const thumbUrl = ytId 
                          ? `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`
                          : "/globe.svg";

                        return (
                          <div 
                            key={idx} 
                            className="group relative border border-border/40 rounded-xl overflow-hidden bg-background/50 flex flex-col justify-between"
                          >
                            <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
                              {ytId ? (
                                <Image
                                  src={thumbUrl}
                                  alt="YouTube Video Thumbnail"
                                  fill
                                  className="object-cover opacity-80"
                                />
                              ) : (
                                <div className="text-[10px] text-muted-foreground break-all px-4">{url}</div>
                              )}
                              <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all"
                                title="Watch on YouTube"
                              >
                                <span className="p-2.5 bg-primary rounded-full text-white shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                                  <ExternalLink className="w-4 h-4" />
                                </span>
                              </a>
                            </div>
                            <div className="p-3.5 flex items-center justify-between gap-3 border-t border-border/30 bg-background/90">
                              <span className="font-sans text-[11px] font-semibold truncate flex-1 text-muted-foreground">
                                {url}
                              </span>
                              <button
                                onClick={() => handleDeleteMedia("video", url)}
                                disabled={deletingId === url}
                                className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors shrink-0"
                                title="Delete Link"
                              >
                                {deletingId === url ? (
                                  <Loader2 className="w-4 h-4 animate-spin" />
                                ) : (
                                  <Trash2 className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 2. GridFS Custom Images List */}
                <div className="rounded-2xl border border-border/40 bg-foreground/[0.01] p-6">
                  <h3 className="font-heading text-lg font-bold flex items-center gap-2 mb-5">
                    <ImageIcon className="w-5 h-5 text-primary" />
                    Uploaded Database Photos ({images.length})
                  </h3>

                  {loadingMedia ? (
                    <div className="py-12 flex items-center justify-center gap-2 text-muted-foreground text-sm font-sans">
                      <Loader2 className="w-5 h-5 animate-spin text-primary" /> Loading media...
                    </div>
                  ) : images.length === 0 ? (
                    <div className="py-10 border border-border/30 rounded-xl bg-background flex flex-col items-center justify-center text-center p-6 text-muted-foreground text-sm font-sans">
                      No custom photos uploaded to GridFS yet. Upload a photo in the dropzone above.
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {images.map((img) => (
                        <div 
                          key={img.fileId} 
                          className="group relative aspect-square border border-border/40 rounded-xl overflow-hidden bg-background"
                        >
                          <Image
                            src={img.url}
                            alt={img.filename}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-all">
                            <button
                              onClick={() => handleDeleteMedia("image", img.fileId)}
                              disabled={deletingId === img.fileId}
                              className="p-3 bg-red-500/90 text-white rounded-full hover:bg-red-600 transition-colors shadow-md hover:scale-105"
                              title="Delete Photo"
                            >
                              {deletingId === img.fileId ? (
                                <Loader2 className="w-4.5 h-4.5 animate-spin" />
                              ) : (
                                <Trash2 className="w-4.5 h-4.5" />
                              )}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
