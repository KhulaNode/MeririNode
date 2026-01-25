import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-6xl">🤔</div>
        <h1 className="text-3xl font-display font-bold text-neutral-900">
          Page Not Found
        </h1>
        <p className="text-neutral-600">
          This page doesn't exist. Maybe it was a dream? Or maybe we moved it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link href="/shop">
            <Button size="lg" variant="outline">
              Browse Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
