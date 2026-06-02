import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { productsData, getProductBySlug, getRelatedProducts } from "@/lib/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import ProductImageViewer from "@/components/ProductImageViewer";
import { CheckCircle, ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";

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

  // Product JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    image: `https://radheysolar.com${product.image}`,
    brand: { "@type": "Brand", name: "Radhey Solar / Radha Energy Cell" },
    manufacturer: {
      "@type": "Organization",
      name: "Radha Energy Cell",
      address: { "@type": "PostalAddress", addressLocality: "Ludhiana", addressRegion: "Punjab", addressCountry: "IN" },
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      seller: { "@type": "Organization", name: "Radha Energy Cell" },
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
        <div className="relative w-full min-h-[70vh] bg-foreground overflow-hidden flex flex-col justify-end">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover opacity-25"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/30" />
          </div>

          {/* Glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(234,88,12,0.15)_0%,transparent_55%)] pointer-events-none z-10" />

          <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-20 pb-16 md:pb-24 pt-36">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-sans text-sm text-background/40 flex-wrap">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
                <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
                <li aria-hidden="true"><ChevronRight className="w-3 h-3" /></li>
                <li aria-current="page" className="text-primary font-semibold">{product.name}</li>
              </ol>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-5">
              {product.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs font-bold text-primary tracking-widest uppercase px-3 py-1 border border-primary/30 rounded-full bg-primary/10">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-bold text-background tracking-tight leading-[1.05] mb-6 max-w-4xl">
              {product.name}
            </h1>
            <p className="font-sans text-xl md:text-2xl text-background/60 leading-relaxed max-w-2xl mb-8">
              {product.heroTagline}
            </p>

            {/* Capacity pill */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background/10 border border-background/20 backdrop-blur-sm">
              <span className="font-mono text-xs text-background/40 uppercase tracking-wider">Capacity</span>
              <span className="font-heading text-lg font-bold text-background">{product.capacity}</span>
            </div>
          </div>
        </div>

        {/* ── Product Details & Image Viewer ─────────────────── */}
        <section className="py-24 md:py-32 border-b border-border/40">
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              {/* Left Column: Sticky Product Image Viewer */}
              <div className="lg:col-span-6 lg:sticky lg:top-32">
                <p className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5">Product Gallery</p>
                <ProductImageViewer images={product.gallery || [product.image]} alt={product.name} />
              </div>

              {/* Right Column: Detailed Product Information */}
              <div className="lg:col-span-6 flex flex-col gap-12">
                {/* About / Overview */}
                <div>
                  <p className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5">Overview</p>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-6">
                    About this product
                  </h2>
                  <p className="font-sans text-lg text-muted-foreground leading-relaxed mb-8">
                    {product.overview}
                  </p>

                  {/* Features */}
                  <div className="flex flex-col gap-3">
                    {product.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                        <span className="font-sans text-sm text-foreground/80">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs table */}
                <div>
                  <p className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5">Specifications</p>
                  <div className="rounded-2xl border border-border/40 overflow-hidden">
                    {product.specs.map((spec, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-foreground/[0.03]" : "bg-background"} border-b border-border/30 last:border-b-0`}
                      >
                        <span className="font-sans text-sm font-semibold text-muted-foreground">{spec.label}</span>
                        <span className="font-sans text-sm font-bold text-foreground text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="flex-1 px-8 py-4 bg-primary text-white font-sans font-bold text-sm rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      Request a Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                    <a
                      href={`https://wa.me/911234567890?text=${encodeURIComponent(`Hello! I'd like a quote for the ${product.name} from Radhey Solar.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-8 py-4 border border-border/60 text-foreground font-sans font-bold text-sm rounded-full hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Applications & Benefits ────────────────────────── */}
        <section className="py-24 md:py-32 bg-foreground border-b border-background/10">
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Applications */}
              <div>
                <p className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5">Applications</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background tracking-tight leading-tight mb-8">
                  Where it&apos;s used
                </h2>
                <div className="flex flex-col gap-3">
                  {product.applications.map((app, i) => (
                    <div key={i} className="flex items-center gap-3 py-3 border-b border-background/10 last:border-b-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="font-sans text-sm text-background/70">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <p className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5">Benefits</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-background tracking-tight leading-tight mb-8">
                  Why choose this product
                </h2>
                <div className="flex flex-col gap-4">
                  {product.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-background/5 border border-background/10 hover:border-primary/30 transition-colors">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="font-sans text-sm text-background/70">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="mt-16 pt-16 border-t border-background/10">
              <p className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-6">Industries Served</p>
              <div className="flex flex-wrap gap-3">
                {product.industries.map((ind) => (
                  <span key={ind} className="px-5 py-2.5 rounded-full border border-background/20 font-sans text-sm text-background/60 hover:border-primary/40 hover:text-primary transition-colors">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ──────────────────────────────────────────── */}
        <section className="py-24 md:py-32 border-b border-border/40">
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
            <div className="max-w-3xl mx-auto">
              <p className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5 text-center">FAQ</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-12 text-center">
                Common questions about the {product.shortName}
              </h2>
              <div className="flex flex-col gap-4">
                {product.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-2xl border border-border/40 bg-foreground/[0.03] overflow-hidden"
                  >
                    <summary className="flex items-center justify-between px-6 py-5 cursor-pointer font-sans font-semibold text-foreground text-base list-none gap-4 hover:text-primary transition-colors">
                      <span>{faq.question}</span>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" aria-hidden="true" />
                    </summary>
                    <div className="px-6 pb-5">
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
          <section className="py-24 md:py-32">
            <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
              <p className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5">Explore More</p>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight mb-12">
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/products/${rel.slug}`}
                    className="group flex flex-col rounded-2xl border border-border/40 bg-foreground/[0.03] overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
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
                    <div className="p-6 flex flex-col gap-2">
                      <div className="flex flex-wrap gap-2">
                        {rel.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="font-mono text-[10px] font-bold text-primary uppercase tracking-widest">{tag}</span>
                        ))}
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">{rel.name}</h3>
                      <p className="font-sans text-sm text-muted-foreground line-clamp-2">{rel.description}</p>
                      <div className="mt-3 flex items-center gap-2 text-primary font-sans text-sm font-semibold">
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
