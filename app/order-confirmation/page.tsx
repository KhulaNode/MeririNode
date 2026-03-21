import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface Props {
  searchParams: Promise<{ orderId?: string }>;
}

export default async function OrderConfirmationPage({ searchParams }: Props) {
  const { orderId } = await searchParams;

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Success Icon */}
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <div>
          <h1 className="text-3xl font-display font-bold text-neutral-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-neutral-600">
            Thank you for your order. We&apos;re getting it ready for you.
          </p>
        </div>

        {orderId && (
          <div className="bg-white rounded-xl shadow-sm p-4 text-sm">
            <p className="text-neutral-500 mb-1">Order reference</p>
            <p className="font-mono font-semibold text-neutral-900 break-all">
              {orderId}
            </p>
          </div>
        )}

        {/* What Happens Next */}
        <div className="bg-white rounded-xl shadow-sm p-6 text-left space-y-4">
          <h2 className="font-semibold text-neutral-900">What happens next</h2>
          <ol className="space-y-3 text-sm text-neutral-700">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                1
              </span>
              <span>
                You&apos;ll receive a confirmation email with your order details.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                2
              </span>
              <span>
                We&apos;ll pack your order and arrange courier collection.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                3
              </span>
              <span>
                You&apos;ll receive a tracking number once your order is
                dispatched.
              </span>
            </li>
          </ol>
        </div>

        <Link href="/shop">
          <Button size="lg" fullWidth>
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
