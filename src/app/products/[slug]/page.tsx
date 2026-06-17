import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productsData, getProductBySlug, getRelatedProducts } from "@/lib/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import ProductImageViewer from "@/components/ProductImageViewer";
import InquiryForm from "@/components/InquiryForm";
import { CheckCircle, ArrowUpRight, ChevronRight, MessageSquare } from "lucide-react";
import mongoose from "mongoose";
import { connectDB } from "@/lib/db";
import ProductMedia from "@/lib/models/ProductMedia";

function getYouTubeId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

function parseInlineStyle(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderOverview(overview: string) {
  return overview.split("\n").map((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={index} className="h-2" />;

    // Handle Headings
    if (trimmed.startsWith("###")) {
      return (
        <h3 key={index} className="font-heading text-lg md:text-xl font-bold text-foreground mt-6 mb-3">
          {parseInlineStyle(trimmed.replace(/^###\s*/, ""))}
        </h3>
      );
    }
    if (trimmed.startsWith("##")) {
      return (
        <h2 key={index} className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-4">
          {parseInlineStyle(trimmed.replace(/^##\s*/, ""))}
        </h2>
      );
    }

    // Handle List Items
    if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
      return (
        <div key={index} className="flex items-start gap-2.5 my-1.5 pl-4">
          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
          <span className="font-sans text-sm text-muted-foreground leading-relaxed">
            {parseInlineStyle(trimmed.replace(/^[-*]\s*/, ""))}
          </span>
        </div>
      );
    }

    // Regular Paragraph
    return (
      <p key={index} className="font-sans text-base text-muted-foreground leading-relaxed mb-3">
        {parseInlineStyle(trimmed)}
      </p>
    );
  });
}

// ─── Static Params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return productsData.map((p) => ({ slug: p.slug }));
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    keywords: product.keywords,
    alternates: { canonical: `/products/${slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `/products/${slug}`,
      images: [{ url: product.image, alt: product.name }],
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ProductSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug);

  // Fetch dynamic media from database
  let dbYoutubeUrls: string[] = [];
  let dbImages: string[] = [];
  try {
    await connectDB();
    
    // Fetch YouTube URLs
    const mediaDoc = await ProductMedia.findOne({ productSlug: slug });
    if (mediaDoc) {
      dbYoutubeUrls = mediaDoc.youtubeUrls || [];
    }

    // Fetch GridFS images
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db!, {
      bucketName: "product_images",
    });
    const files = await bucket.find({ "metadata.productSlug": slug }).toArray();
    dbImages = files.map((file) => `/api/media/${file._id}`);
  } catch (error) {
    console.error("Error loading dynamic product media:", error);
  }

  const combinedGallery = [...(product.gallery || [product.image]), ...dbImages];

  // Product JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    image: `https://radhasolar.com${product.image}`,
    brand: { "@type": "Brand", name: "Radha Solar / Radha Solar Energy Cell" },
    manufacturer: {
      "@type": "Organization",
      name: "Radha Solar Energy Cell",
      address: { "@type": "PostalAddress", addressLocality: "Ludhiana", addressRegion: "Punjab", addressCountry: "IN" },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@type": "Organization", name: "Radha Solar Energy Cell" },
    },
    keywords: product.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="bg-background text-foreground overflow-hidden">
        <LenisProvider />

        {/* ── Hero ──────────────────────────────────────────── */}
        <div className="relative w-full min-h-[60vh] bg-foreground overflow-hidden flex flex-col justify-end">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover opacity-20 filter grayscale hover:grayscale-0 transition-all duration-1000"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/85 to-foreground/45" />
          </div>

          {/* Glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(234,88,12,0.18)_0%,transparent_55%)] pointer-events-none z-10" />

          <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-20 pb-12 md:pb-16 pt-36">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-sans text-sm text-background/55 flex-wrap">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-background/30" /></li>
                <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
                <li aria-hidden="true"><ChevronRight className="w-3 h-3 text-background/30" /></li>
                <li aria-current="page" className="text-primary font-semibold">{product.shortName}</li>
              </ol>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mb-4">
              {product.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] font-bold text-primary tracking-widest uppercase px-3 py-1 border border-primary/30 rounded-full bg-primary/10">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold text-background tracking-tight leading-[1.1] mb-5 max-w-4xl">
              {product.name}
            </h1>
            <p className="font-sans text-lg md:text-xl text-background/65 leading-relaxed max-w-3xl mb-6">
              {product.heroTagline}
            </p>

            {/* Capacity pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-background/10 border border-background/20 backdrop-blur-sm">
              <span className="font-mono text-[10px] text-background/50 uppercase tracking-wider">Thermal Output</span>
              <span className="font-heading text-base font-bold text-background">{product.capacity}</span>
            </div>
          </div>
        </div>

        {/* ── Product Details & Image Viewer ─────────────────── */}
        <section className="py-20 md:py-28 border-b border-border/40">
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Sticky Product Image Viewer */}
              <div className="lg:col-span-6 lg:sticky lg:top-32">
                <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Product Gallery</p>
                <ProductImageViewer images={combinedGallery} alt={product.name} />
              </div>

              {/* Right Column: Detailed Product Information & Inquiry */}
              <div className="lg:col-span-6 flex flex-col gap-8">
                {/* About / Overview */}
                <div>
                  <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Description</p>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight mb-5">
                    System Overview
                  </h2>
                  <div className="font-sans text-base text-muted-foreground leading-relaxed">
                    {renderOverview(product.overview)}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
                  <div className="flex-1 w-full">
                    <InquiryForm productName={product.name} />
                  </div>
                  <a
                    href={`https://wa.me/919888897248?text=${encodeURIComponent(`Hello! I'd like a quote for the ${product.name} from Radha Solar.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 w-full py-4 border border-border/80 hover:border-primary hover:text-primary text-foreground font-sans font-bold text-sm rounded-full transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <MessageSquare className="w-4 h-4 text-primary" aria-hidden="true" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Technical Specifications & Features ─────────────── */}
        <section className="py-20 md:py-28 border-b border-border/40 bg-foreground/[0.01]">
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              
              {/* Left Column: Specifications table */}
              <div className="lg:col-span-5">
                <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Specifications</p>
                <h2 className="font-heading text-3xl font-bold text-foreground tracking-tight leading-tight mb-6">
                  Technical Specifications
                </h2>
                <div className="rounded-2xl border border-border/40 overflow-hidden">
                  {product.specs.map((spec, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between px-5 py-3.5 ${i % 2 === 0 ? "bg-foreground/[0.02]" : "bg-background"} border-b border-border/30 last:border-b-0`}
                    >
                      <span className="font-sans text-sm font-semibold text-muted-foreground">{spec.label}</span>
                      <span className="font-sans text-sm font-bold text-foreground text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Key Features */}
              <div className="lg:col-span-7">
                <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Features</p>
                <h2 className="font-heading text-3xl font-bold text-foreground tracking-tight leading-tight mb-6">
                  Key Design Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {product.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/30 hover:border-primary/20 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="font-sans text-sm text-foreground/80 leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Video Demonstrations ────────────────────────── */}
        {dbYoutubeUrls.length > 0 && (
          <section className="py-20 md:py-28 border-b border-border/40 bg-foreground/[0.01]">
            <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
              <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center">Video Gallery</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight mb-10 text-center">
                System Demonstrations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {dbYoutubeUrls.map((url, i) => {
                  const ytId = getYouTubeId(url);
                  if (!ytId) return null;
                  return (
                    <div key={i} className="group relative rounded-2xl border border-border/40 bg-background overflow-hidden aspect-video shadow-md hover:shadow-lg transition-all hover:border-primary/30 animate-fade-in">
                      <iframe
                        src={`https://www.youtube.com/embed/${ytId}`}
                        title={`${product.shortName} Video Demo ${i + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        className="w-full h-full border-0 absolute inset-0"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Applications & Benefits ────────────────────────── */}
        <section className="py-20 md:py-28 bg-foreground border-b border-background/10">
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Applications */}
              <div>
                <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Applications</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background tracking-tight leading-tight mb-6">
                  Industrial Implementation
                </h2>
                <div className="flex flex-col gap-1">
                  {product.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-3 py-3.5 border-b border-background/10 last:border-b-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="font-sans text-sm text-background/70">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Benefits</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background tracking-tight leading-tight mb-6">
                  Operational Advantages
                </h2>
                <div className="flex flex-col gap-3.5">
                  {product.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background/5 border border-background/10 hover:border-primary/30 transition-all duration-300">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="font-sans text-sm text-background/70 leading-relaxed">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="mt-14 pt-14 border-t border-background/10">
              <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-5">Target Industries</p>
              <div className="flex flex-wrap gap-2.5">
                {product.industries.map((ind) => (
                  <span key={ind} className="px-4 py-2 rounded-full border border-background/20 font-sans text-sm text-background/60 hover:border-primary/40 hover:text-primary transition-colors">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ──────────────────────────────────────────── */}
        <section className="py-20 md:py-28 border-b border-border/40">
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
            <div className="max-w-3xl mx-auto">
              <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4 text-center">FAQ</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight mb-10 text-center">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-4">
                {product.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-border/40 bg-foreground/[0.02] overflow-hidden transition-all duration-300"
                  >
                    <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-sans font-semibold text-foreground text-sm list-none gap-4 hover:text-primary transition-colors">
                      <span>{faq.question}</span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" aria-hidden="true" />
                    </summary>
                    <div className="px-5 pb-4">
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Products ───────────────────────────────── */}
        {related.length > 0 && (
          <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
              <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">Complementary systems</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground tracking-tight leading-tight mb-10">
                Related Solar Solutions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/products/${rel.slug}`}
                    className="group flex flex-col rounded-2xl border border-border/40 bg-foreground/[0.02] overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                      <div className="flex flex-wrap gap-2">
                        {rel.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="font-mono text-[9px] font-bold text-primary uppercase tracking-widest">{tag}</span>
                        ))}
                      </div>
                      <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">{rel.name}</h3>
                      <p className="font-sans text-xs text-muted-foreground line-clamp-2 leading-relaxed">{rel.description}</p>
                      <div className="mt-3 flex items-center gap-2 text-primary font-sans text-xs font-semibold">
                        View Details <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
