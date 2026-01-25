"use client";

import React, { useMemo } from "react";
import { ProductCard } from "@/components/products/ProductCard";
import { FilterBar } from "@/components/products/FilterBar";
import { mockProducts } from "@/data/products";
import { filterProducts, getUniqueFilterValues } from "@/lib/products";
import { useProductStore } from "@/store/productStore";
import { motion } from "framer-motion";

export default function ShopPage() {
  const { filters } = useProductStore();

  // Get unique filter values from all products
  const filterValues = useMemo(
    () => getUniqueFilterValues(mockProducts),
    []
  );

  // Apply filters to products
  const filteredProducts = useMemo(
    () => filterProducts(mockProducts, filters),
    [filters]
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-2">
            Shop All Hair
          </h1>
          <p className="text-neutral-600">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} available
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Sidebar on desktop, top on mobile */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <FilterBar
                availableLengths={filterValues.lengths}
                availableCategories={filterValues.categories}
                availableTextures={filterValues.textures}
              />
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-neutral-600 mb-4">
                  No products match your filters
                </p>
                <p className="text-sm text-neutral-500">
                  Try adjusting your filters to see more results
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
