"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { getFeaturedProducts } from "@/data/products";
import { generateWhatsAppInquiryLink, openWhatsApp } from "@/lib/whatsapp";
import { motion } from "framer-motion";

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  const handleWhatsAppClick = () => {
    const url = generateWhatsAppInquiryLink("Hi! I'd like to browse your collection.");
    openWhatsApp(url);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-accent-pink via-background to-neutral-100 overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 text-balance"
            >
              Jozi prices.
              <br />
              Cape Town stock.
              <br />
              <span className="text-neutral-600">No waiting.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-neutral-600 mb-8 text-balance"
            >
              Premium wigs that move with you. Soft textures that feel real.
              Confidence you can wear every day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/shop">
                <Button size="lg" className="w-full sm:w-auto">
                  Shop Hair
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto"
              >
                Order on WhatsApp
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl mb-2">📍</div>
              <h3 className="font-medium text-neutral-900 mb-1">Cape Town Based</h3>
              <p className="text-sm text-neutral-600">
                Ready to collect or deliver locally
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">✨</div>
              <h3 className="font-medium text-neutral-900 mb-1">Premium Quality</h3>
              <p className="text-sm text-neutral-600">
                100% human hair & premium synthetic options
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-medium text-neutral-900 mb-1">WhatsApp Orders</h3>
              <p className="text-sm text-neutral-600">
                Quick, easy ordering via WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
              Women Love These
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our most popular pieces. Soft textures, natural movement, and
              all-day confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/shop">
              <Button size="lg" variant="outline">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-12 text-center">
              Why Meriri?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-900">
                  Movement Matters
                </h3>
                <p className="text-neutral-600">
                  We don't sell stiff, lifeless hair. Every piece is chosen for how
                  it flows, bounces, and moves naturally. Because you deserve hair
                  that acts like hair.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-900">
                  Honest Pricing
                </h3>
                <p className="text-neutral-600">
                  No games. No inflated prices. We source at Jozi prices and keep
                  our margins fair. Premium hair shouldn't require a loan.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-900">
                  Local Stock
                </h3>
                <p className="text-neutral-600">
                  Everything is in Cape Town. No waiting weeks for imports. Order
                  today, wear tomorrow. Simple.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium text-neutral-900">
                  WhatsApp Easy
                </h3>
                <p className="text-neutral-600">
                  No complicated checkouts. Just WhatsApp us what you want. We'll
                  sort out collection or delivery. Done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-pink">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
            Ready to Transform?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Browse our collection and order on WhatsApp. We'll answer questions,
            send more photos, and arrange everything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg">Browse Collection</Button>
            </Link>
            <Button size="lg" variant="outline" onClick={handleWhatsAppClick}>
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
