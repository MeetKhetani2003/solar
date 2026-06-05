"use client";

import React, { useState, useTransition, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, X, FileText } from "lucide-react";
import { submitInquiryAction, InquiryResult } from "@/app/actions/inquiry";
import { motion, AnimatePresence } from "framer-motion";

interface InquiryFormProps {
  productName: string;
}

export default function InquiryForm({ productName }: InquiryFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<InquiryResult | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(null);

    const formData = new FormData(event.currentTarget);
    formData.append("product", productName);

    startTransition(async () => {
      const response = await submitInquiryAction(null, formData);
      setResult(response);
      if (response.success) {
        (event.target as HTMLFormElement).reset();
        // Close modal after success notification has been shown
        setTimeout(() => {
          setIsOpen(false);
          setResult(null);
        }, 2200);
      }
    });
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-4 bg-primary text-white font-sans font-bold text-sm rounded-full hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50 group"
      >
        Request a Quote / Send Inquiry
        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
      </button>

      {/* Modal Portal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] bg-black/75 backdrop-blur-md cursor-pointer"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Box Container */}
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-hidden pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-lg bg-background border border-border/80 rounded-3xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] pointer-events-auto flex flex-col gap-4"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-5 right-5 w-8 h-8 rounded-full border border-border/60 hover:border-primary hover:text-primary flex items-center justify-center transition-colors text-muted-foreground"
                  aria-label="Close Inquiry Form"
                >
                  <X className="w-4 h-4" />
                </button>

                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Product Inquiry
                  </h3>
                  <p className="font-sans text-xs text-muted-foreground">
                    Submit a query for <strong className="text-foreground">{productName}</strong> below.
                  </p>
                </div>

                {result && result.success && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 font-sans text-sm mb-2 animate-fadeIn">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Inquiry Sent Successfully!</p>
                      <p className="text-xs text-green-500/80 mt-1">{result.message}</p>
                    </div>
                  </div>
                )}

                {result && !result.success && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive font-sans text-sm mb-2 animate-fadeIn">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Submission Failed</p>
                      <p className="text-xs text-destructive/80 mt-1">{result.error}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-sans text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      disabled={isPending}
                      className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground/30 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="font-sans text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      disabled={isPending}
                      className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground/30 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                    />
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="phone" className="font-sans text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        disabled={isPending}
                        className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground/30 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="company" className="font-sans text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company Ltd."
                        disabled={isPending}
                        className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground/30 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1">
                    <label htmlFor="message" className="font-sans text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                      Inquiry Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={3}
                      disabled={isPending}
                      defaultValue={`Hello, I would like to request detailed pricing, specifications, and layout support for the ${productName}. Please get back to me.`}
                      className="w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border text-foreground placeholder:text-muted-foreground/30 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-3 bg-primary text-primary-foreground font-sans font-bold text-sm rounded-xl hover:bg-primary/95 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-75 disabled:cursor-not-allowed group"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        Send Lead Inquiry
                        <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
