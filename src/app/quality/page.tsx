import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Award, Users, Clock, Settings } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LenisProvider from "@/components/LenisProvider";
import InquiryForm from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Quality Assurance & Client Satisfaction | Radha Solar",
  description:
    "Radha Solar is an ISO 9001:2008 certified firm. We perform strict quality control audits on finish, performance, and raw materials to ensure absolute client satisfaction.",
  alternates: { canonical: "/quality" },
  openGraph: {
    title: "Quality Assurance & Client Satisfaction | Radha Solar",
    description:
      "ISO 9001:2008 certified quality lab testing. Durable finish standards, high performance, and premium raw materials. Delivering guaranteed client satisfaction and flexible installations.",
    url: "/quality",
  },
};

export default function QualityPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-background text-foreground overflow-hidden">
        <LenisProvider />

        {/* ── Page Hero Banner ──────────────────────────────── */}
        <div className="relative w-full pt-36 pb-20 md:pt-44 md:pb-28 bg-foreground overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,88,12,0.15)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(234,88,12,0.08)_0%,transparent_55%)] pointer-events-none" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(253,252,249,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(253,252,249,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px] relative z-10">
            <p className="font-mono text-primary text-sm font-bold tracking-[0.3em] uppercase mb-5">
              Standards & Certification
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-[6rem] font-bold text-background tracking-tight leading-[1.05] mb-6">
              Quality <span className="text-primary">Assurance</span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-background/60 leading-relaxed max-w-3xl">
              ISO 9001:2008 certified manufacturing. Delivering high-performance, durable, and custom-engineered solar thermal systems globally.
            </p>
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mt-8">
              <ol className="flex items-center gap-2 font-sans text-sm text-background/40">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li aria-hidden="true" className="text-background/20">/</li>
                <li aria-current="page" className="text-primary font-semibold">Quality Assurance</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ── Section: Quality Assurance ────────────────────── */}
        <section className="py-24 md:py-32 border-b border-border/40" id="iso">
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* Left Column: Certification Intro */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                  ISO 9001:2008 Certified Excellence
                </h2>
                <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                  As an ISO 9001:2008 certified firm, quality is the very foundation of our organization. We recognize that industrial solar systems must withstand rigorous operating environments and competitive market pressure.
                </p>
                <p className="font-sans text-base text-muted-foreground leading-relaxed">
                  To achieve this, we have established a dedicated quality control lab where our experienced quality auditors conduct rigorous testing at each step of production before dispatch.
                </p>
              </div>

              {/* Right Column: Testing Parameters Grid */}
              <div className="lg:col-span-7 flex flex-col gap-10">
                <div>
                  <h3 className="font-mono text-xs font-bold text-primary tracking-[0.25em] uppercase mb-8">
                    Key Quality Parameters Checked
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Param 1 */}
                    <div className="p-6 rounded-2xl border border-border bg-foreground/[0.02] flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Settings className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading text-lg font-bold text-foreground">Durable Finish</h4>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        Ensuring all frames, mirrors, and tracking brackets are hot-dip galvanized and powder coated to prevent rust and chemical weathering.
                      </p>
                    </div>

                    {/* Param 2 */}
                    <div className="p-6 rounded-2xl border border-border bg-foreground/[0.02] flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <Award className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading text-lg font-bold text-foreground">High Performance</h4>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        Rigorous thermal load capacity testing to guarantee temperatures (up to 400°C) and boiler fuel savings are met continuously.
                      </p>
                    </div>

                    {/* Param 3 */}
                    <div className="p-6 rounded-2xl border border-border bg-foreground/[0.02] flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading text-lg font-bold text-foreground">Basic Material</h4>
                      <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                        Strict sourcing verification of structural components (SS304/SS316 stainless steel) and solar grade reflective silvered glass.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-primary/5 border border-primary/15 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                    Our quality auditors concentrate on improving product quality at every stage. They focus on continuous improvement in our production processes and product management systems to maintain Radha Solar&apos;s industry-leading goodwill.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section: Client Satisfaction ─────────────────── */}
        <section className="py-24 md:py-32 bg-foreground border-b border-background/10">
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7 flex flex-col gap-8">
                <div>
                  <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
                    Our Core Mission
                  </p>
                  <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-background leading-tight">
                    Dedicated to Client Satisfaction
                  </h2>
                </div>
                
                <p className="font-sans text-lg text-background/70 leading-relaxed">
                  We believe that retaining clients is the true measure of organizational success. For this, we commit to delivering fully quality-approved solar products to our clients within a guaranteed timeframe.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-background mb-1">Guaranteed Delivery</h4>
                      <p className="font-sans text-sm text-background/60 leading-relaxed">
                        Punctual project execution schedules and rapid logistics management to ensure your production timeline is maintained.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                      <Settings className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-background mb-1">Hassle-Free Installation</h4>
                      <p className="font-sans text-sm text-background/60 leading-relaxed">
                        Modularity designed for easy rooftop or ground placement with certified technician layout and integration support.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Commitments Card */}
              <div className="lg:col-span-5 p-8 rounded-3xl bg-background/5 border border-background/10 backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
                <h3 className="font-heading text-2xl font-bold text-background mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Client Alignment
                </h3>
                <p className="font-sans text-sm text-background/70 leading-relaxed mb-6">
                  Our engineering team makes sure to thoroughly analyze each client&apos;s facility, assess site-specific solar radiation indices, and understand thermal requirements before sizing the system.
                </p>
                <div className="flex flex-col gap-3">
                  {[
                    "Custom thermal output planning",
                    "Detailed solar radiation site surveys",
                    "Seamless boiler coupling & integration checks",
                    "Certified installation team deployment",
                    "Rigorous post-installation performance audits"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      <span className="font-sans text-xs text-background/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section: Call to Action Inquiry ──────────────── */}
        <section className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-[1600px]">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
              <div>
                <p className="font-mono text-primary text-xs font-bold tracking-[0.3em] uppercase mb-4">
                  Partner with Us
                </p>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                  Ready to Optimize Your Energy Grid?
                </h2>
              </div>
              <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-2xl">
                Get a customized technical layout and ROI analysis tailored for your factory rooftops or industrial facilities. Connect with our quality assurance engineers today.
              </p>
              <div className="w-full max-w-md">
                <InquiryForm productName="Radha Solar - Quality Standards Inquiry" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
