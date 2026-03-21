"use client";

import { useCartStore } from "@/store/productStore";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { formatPrice } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  const total = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-2xl font-display font-bold text-neutral-900 mb-3">
            Your cart is empty
          </h1>
          <p className="text-neutral-600 mb-8">
            Discover our collection and find your perfect match.
          </p>
          <Link href="/shop">
            <Button size="lg">Browse Collection</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-8">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence>
              {items.map(({ product, quantity }) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-xl shadow-sm p-4 flex gap-4"
                >
                  {/* Image */}
                  <div className="relative w-24 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="font-medium text-neutral-900 leading-tight">
                          {product.name}
                        </h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          <Badge variant="default" size="sm">
                            {product.lengthInInches}&quot;
                          </Badge>
                          <Badge variant="default" size="sm">
                            {product.texture}
                          </Badge>
                          {product.laceType && (
                            <Badge variant="default" size="sm">
                              {product.laceType} Lace
                            </Badge>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-neutral-400 hover:text-red-500 transition-colors flex-shrink-0 p-1"
                        aria-label="Remove item"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-neutral-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() =>
                            quantity > 1
                              ? updateQuantity(product.id, quantity - 1)
                              : removeItem(product.id)
                          }
                          className="px-3 py-1.5 text-neutral-600 hover:bg-neutral-100 transition-colors text-lg leading-none"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="px-3 py-1.5 text-sm font-medium text-neutral-900 min-w-[2rem] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(product.id, quantity + 1)
                          }
                          className="px-3 py-1.5 text-neutral-600 hover:bg-neutral-100 transition-colors text-lg leading-none"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Line Total */}
                      <span className="font-semibold text-neutral-900">
                        {formatPrice(product.priceZAR * quantity)}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800 transition-colors mt-2"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24 space-y-4">
              <h2 className="text-lg font-semibold text-neutral-900">
                Order Summary
              </h2>

              <div className="divide-y divide-neutral-100">
                {items.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex justify-between py-2 text-sm"
                  >
                    <span className="text-neutral-600 truncate mr-2">
                      {product.name}{" "}
                      <span className="text-neutral-400">× {quantity}</span>
                    </span>
                    <span className="text-neutral-900 font-medium flex-shrink-0">
                      {formatPrice(product.priceZAR * quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-200 pt-4 flex justify-between">
                <span className="font-semibold text-neutral-900">Total</span>
                <span className="font-bold text-xl text-neutral-900">
                  {formatPrice(total)}
                </span>
              </div>

              <p className="text-xs text-neutral-500">
                Shipping calculated at checkout.
              </p>

              <Link href="/checkout" className="block">
                <Button size="lg" fullWidth>
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
