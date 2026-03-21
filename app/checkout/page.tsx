"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/productStore";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/products";
import { openYocoPopup } from "@/lib/yoco";
import { ShippingDetails } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

const PROVINCES = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "Northern Cape",
  "North West",
  "Western Cape",
];

const emptyShipping: ShippingDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  province: "",
  postalCode: "",
};

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const total = getTotalPrice();
  const totalInCents = Math.round(total * 100);

  const [shipping, setShipping] = useState<ShippingDetails>(emptyShipping);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Redirect to cart if empty
  useEffect(() => {
    if (items.length === 0) {
      router.replace("/cart");
    }
  }, [items, router]);

  const handleField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setShipping((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isShippingComplete = Object.values(shipping).every(
    (v) => v.trim() !== ""
  );

  const handlePay = () => {
    if (!isShippingComplete) {
      setError("Please complete all shipping details before paying.");
      return;
    }
    setError(null);
    setLoading(true);

    openYocoPopup({
      amountInCents: totalInCents,
      name: "Meriri",
      description: `Hair purchase (${items.length} item${items.length > 1 ? "s" : ""})`,
      callback: async (result) => {
        if (result.error) {
          setError(result.error.message ?? "Payment cancelled.");
          setLoading(false);
          return;
        }

        try {
          const res = await fetch("/api/checkout", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              token: result.id,
              amountInCents: totalInCents,
              items,
              shipping,
            }),
          });

          const data = await res.json();

          if (!res.ok || data.error) {
            setError(data.error ?? "Payment processing failed.");
            setLoading(false);
            return;
          }

          clearCart();
          router.push(`/order-confirmation?orderId=${data.orderId}`);
        } catch {
          setError("Something went wrong. Please try again.");
          setLoading(false);
        }
      },
    });
  };

  if (items.length === 0) return null;

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-10 max-w-5xl">
        <div className="mb-8">
          <Link
            href="/cart"
            className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            ← Back to Cart
          </Link>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mt-4">
            Checkout
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-5">
                Shipping Details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={shipping.firstName}
                    onChange={handleField}
                    placeholder="Aisha"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={shipping.lastName}
                    onChange={handleField}
                    placeholder="Dlamini"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={shipping.email}
                    onChange={handleField}
                    placeholder="aisha@example.com"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={shipping.phone}
                    onChange={handleField}
                    placeholder="071 000 0000"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={shipping.address}
                    onChange={handleField}
                    placeholder="123 Main Road"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={shipping.city}
                    onChange={handleField}
                    placeholder="Johannesburg"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Province
                  </label>
                  <select
                    name="province"
                    value={shipping.province}
                    onChange={handleField}
                    className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent bg-white"
                  >
                    <option value="">Select province</option>
                    {PROVINCES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    value={shipping.postalCode}
                    onChange={handleField}
                    placeholder="2001"
                    className="w-full border border-neutral-300 rounded-lg px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-2">
                Payment
              </h2>
              <p className="text-sm text-neutral-600 mb-4">
                Secured by{" "}
                <span className="font-semibold text-neutral-800">Yoco</span>.
                Your card details are never stored on our servers.
              </p>
              <div className="flex items-center gap-3 text-neutral-500 text-xs">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  SSL Encrypted
                </span>
                <span>· Visa, Mastercard accepted</span>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
                {error}
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24 space-y-4">
              <h2 className="text-lg font-semibold text-neutral-900">
                Order Summary
              </h2>

              <div className="space-y-3">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-3">
                    <div className="relative w-14 h-18 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-neutral-900 leading-tight truncate">
                        {product.name}
                      </p>
                      <p className="text-xs text-neutral-500">Qty: {quantity}</p>
                      <p className="text-sm font-semibold text-neutral-900">
                        {formatPrice(product.priceZAR * quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-neutral-100 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping</span>
                  <span className="text-neutral-400">Calculated after</span>
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-4 flex justify-between">
                <span className="font-semibold text-neutral-900">Total</span>
                <span className="font-bold text-xl text-neutral-900">
                  {formatPrice(total)}
                </span>
              </div>

              <Button
                size="lg"
                fullWidth
                onClick={handlePay}
                disabled={loading}
              >
                {loading ? "Processing…" : `Pay ${formatPrice(total)}`}
              </Button>

              <p className="text-xs text-center text-neutral-400">
                By placing your order you agree to our terms of service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
