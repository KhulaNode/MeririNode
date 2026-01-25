"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ImageGallery } from "@/components/products/ImageGallery";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getProductById } from "@/data/products";
import { formatPrice, getStockUrgencyMessage } from "@/lib/products";
import { generateWhatsAppOrderLink, openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  const product = getProductById(params.id as string);

  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">
            Product Not Found
          </h1>
          <Button onClick={() => router.push("/shop")}>Back to Shop</Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const url = generateWhatsAppOrderLink({
      productName: product.name,
      length: product.lengthInInches,
      texture: product.texture,
      price: product.priceZAR,
    });
    openWhatsApp(url);
  };

  const stockVariant =
    product.stockStatus === "Limited"
      ? "warning"
      : product.stockStatus === "In Stock"
      ? "success"
      : product.stockStatus === "Pre-Order"
      ? "info"
      : "default";

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.back()}
          className="text-sm text-neutral-600 hover:text-neutral-900 mb-6 flex items-center gap-2"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageGallery images={product.images} productName={product.name} />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <div className="mb-3">
                <Badge variant={stockVariant} size="md">
                  {product.stockStatus}
                </Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-neutral-600">
                {getStockUrgencyMessage(product.stockStatus)}
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-neutral-900">
                {formatPrice(product.priceZAR)}
              </span>
            </div>

            {/* Specs Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">{product.category}</Badge>
              <Badge variant="default">{product.lengthInInches}"</Badge>
              <Badge variant="default">{product.texture}</Badge>
              {product.laceType && (
                <Badge variant="default">{product.laceType} Lace</Badge>
              )}
            </div>

            {/* Why Women Love This */}
            <div className="bg-white rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-medium text-neutral-900">
                Why Women Love This
              </h2>
              <p className="text-neutral-700 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Specs Accordion */}
            <div className="bg-white rounded-lg overflow-hidden">
              <button
                onClick={() => setIsSpecsOpen(!isSpecsOpen)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-medium text-neutral-900">
                  Care Instructions
                </span>
                <span className="text-neutral-600">
                  {isSpecsOpen ? "−" : "+"}
                </span>
              </button>
              {isSpecsOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="px-6 pb-4"
                >
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {product.careNotes}
                  </p>
                </motion.div>
              )}
            </div>

            {/* WhatsApp Order Button - Sticky on mobile */}
            <div className="sticky bottom-4 lg:static">
              <Button
                size="lg"
                fullWidth
                onClick={handleWhatsAppOrder}
                className="bg-green-600 hover:bg-green-700 shadow-lg"
                disabled={product.stockStatus === "Out of Stock"}
              >
                {product.stockStatus === "Out of Stock"
                  ? "Out of Stock"
                  : "Order on WhatsApp"}
              </Button>
              <p className="text-xs text-neutral-500 text-center mt-2">
                We'll answer questions and arrange collection/delivery
              </p>
            </div>

            {/* TODO: Add related products section when implementing recommendations */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
