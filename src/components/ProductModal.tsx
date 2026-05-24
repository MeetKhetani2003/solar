"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Download, Send } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
  tags: string[];
  capacity: string;
  overview: string;
  features: string[];
  specs: { label: string; value: string }[];
}

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  // Lock website scroll when modal is open
  useEffect(() => {
    if (!product) return;

    const originalOverflow = document.body.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.touchAction = originalTouchAction;
    };
  }, [product]);

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal Wrapper */}
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4  mt-24 lg:p-8 overflow-hidden">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                relative
                w-full
                max-w-[1600px]
                h-[95vh]
                bg-white
                rounded-[2rem]
                overflow-hidden
                shadow-[0_50px_150px_rgba(0,0,0,0.25)]
                flex
                flex-col
                lg:flex-row
              "
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="
                  absolute
                  top-6
                  right-6
                  z-50
                  w-12
                  h-12
                  rounded-full
                  bg-white
                  border
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <X size={20} />
              </button>

              {/* Left Side */}
              <div
                className="
                  w-full
                  lg:w-[55%]
                  h-[350px]
                  lg:h-full
                  bg-neutral-50
                  relative
                  flex
                  items-center
                  justify-center
                  p-8
                  lg:p-20
                  shrink-0
                "
              >
                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Side */}
              <div
                className="
                  w-full
                  lg:w-[45%]
                  h-full
                  overflow-y-auto
                  overscroll-contain
                  px-6
                  sm:px-10
                  lg:px-16
                  py-10
                "
                onWheel={(e) => e.stopPropagation()}
              >
                <div className="max-w-xl mx-auto">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-orange-100
                          text-orange-600
                          text-xs
                          font-semibold
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h2 className="text-5xl font-bold mb-6">
                    {product.name}
                  </h2>

                  {/* Overview */}
                  <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
                    {product.overview}
                  </p>

                  {/* Features */}
                  <div className="mb-14">
                    <h3 className="text-2xl font-bold mb-6">
                      Key Features
                    </h3>

                    <div className="space-y-4">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex gap-3">
                          <CheckCircle
                            className="text-orange-500 mt-1"
                            size={20}
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="mb-14">
                    <h3 className="text-2xl font-bold mb-6">
                      Technical Specs
                    </h3>

                    <div className="border-t">
                      {product.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="
                            flex
                            justify-between
                            py-4
                            border-b
                          "
                        >
                          <span>{spec.label}</span>
                          <span className="font-medium">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4 pb-10">
                    <button
                      className="
                        flex-1
                        bg-orange-600
                        text-white
                        rounded-full
                        py-4
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <Send size={18} />
                      Request Quote
                    </button>

                    <button
                      className="
                        flex-1
                        border
                        rounded-full
                        py-4
                        font-semibold
                        flex
                        items-center
                        justify-center
                        gap-2
                      "
                    >
                      <Download size={18} />
                      Brochure
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}