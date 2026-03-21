import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent-pink to-neutral-100 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
            Premium Hair.
            <br />
            Digitally Accessible.
            <br />
            <span className="text-neutral-600">Zero Nonsense.</span>
          </h1>
          <p className="text-lg text-neutral-700">
            We&apos;re a digital-first hair store making premium hair accessible to
            everyone in South Africa — browse, buy, and pay without leaving the
            app.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-8 text-center">
            Our Story
          </h2>

          <div className="space-y-6 text-neutral-700 leading-relaxed">
            <p>
              We started Meriri because we were tired of the same old problems:
              overpriced hair, endless waiting for orders to arrive, and shops that
              make you feel stupid for asking questions.
            </p>

            <p>
              So we built something different. We source directly at the best
              prices, keep stock ready to go, and sell through a clean, secure
              online experience because it&apos;s faster than any back-and-forth
              messaging.
            </p>

            <p>
              Every wig, frontal, and bundle we sell is something we'd wear
              ourselves. We test everything for movement, softness, and durability.
              If it doesn't meet our standards, we don't stock it.
            </p>

            <p className="font-medium text-neutral-900">
              Simple. Honest. No nonsense.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-12 text-center">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-medium text-neutral-900">
                Quality Over Hype
              </h3>
              <p className="text-neutral-700">
                We don't chase trends. We stock textures and styles that actually
                work for African women. Body wave that moves. Jerry curls that
                bounce. Straight hair that stays sleek.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-medium text-neutral-900">
                Honest Pricing
              </h3>
              <p className="text-neutral-700">
                No inflated markup. We source directly and pass the savings on to
                you. Premium hair shouldn't require a payment plan.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-medium text-neutral-900">
                Always In Stock
              </h3>
              <p className="text-neutral-700">
                Stock is ready to go. Order today, receive quickly. No waiting
                2–3 weeks for your hair to arrive. Your time matters.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 space-y-3">
              <h3 className="text-xl font-medium text-neutral-900">
                Real Support
              </h3>
              <p className="text-neutral-700">
                Have questions? Email us. We&apos;re here to help you choose the
                right hair, not just to make a sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-8 text-center">
            Get In Touch
          </h2>

          <div className="bg-neutral-50 rounded-lg p-8 text-center space-y-6">
            <div>
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-medium text-neutral-900 mb-2">
                South Africa
              </h3>
              <p className="text-neutral-700">
                We deliver nationwide. Order online and we&apos;ll handle the
                rest — wherever you are in South Africa.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-sm text-neutral-600 mb-1">Phone</p>
                <a
                  href="tel:+27123456789"
                  className="text-lg font-medium text-neutral-900 hover:text-neutral-700"
                >
                  +27 12 345 6789
                </a>
              </div>

              <div>
                <p className="text-sm text-neutral-600 mb-1">Email</p>
                <a
                  href="mailto:hello@meriri.co.za"
                  className="text-lg font-medium text-neutral-900 hover:text-neutral-700"
                >
                  hello@meriri.co.za
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent-pink">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-6">
            Ready to Shop?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Browse our collection, pay securely with Yoco, and have it delivered
            to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop">
              <Button size="lg">Browse Collection</Button>
            </Link>
            <Link href="/cart">
              <Button size="lg" variant="outline">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
