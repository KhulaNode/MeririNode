"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/Badge";
import { formatPrice, getStockUrgencyMessage } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const stockVariant =
    product.stockStatus === "Limited"
      ? "warning"
      : product.stockStatus === "In Stock"
      ? "success"
      : product.stockStatus === "Pre-Order"
      ? "info"
      : "default";

  return (
    <Link
      href={`/shop/${product.id}`}
      className="group block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        
        {/* Stock badge overlay */}
        <div className="absolute top-3 left-3">
          <Badge variant={stockVariant} size="sm">
            {product.stockStatus}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Name */}
        <h3 className="font-medium text-neutral-900 group-hover:text-neutral-700 transition-colors">
          {product.name}
        </h3>

        {/* Specs */}
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="default" size="sm">
            {product.lengthInInches}"
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

        {/* Description */}
        <p className="text-sm text-neutral-600 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Price and Stock */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-semibold text-neutral-900">
            {formatPrice(product.priceZAR)}
          </span>
          <span className="text-xs text-neutral-500">
            {getStockUrgencyMessage(product.stockStatus)}
          </span>
        </div>
      </div>
    </Link>
  );
}
