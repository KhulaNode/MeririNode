"use client";

import React from "react";
import { useProductStore } from "@/store/productStore";
import { ProductCategory, HairTexture } from "@/types/product";

interface FilterBarProps {
  availableLengths: number[];
  availableCategories: ProductCategory[];
  availableTextures: HairTexture[];
}

export function FilterBar({
  availableLengths,
  availableCategories,
  availableTextures,
}: FilterBarProps) {
  const { filters, setFilters, clearFilters } = useProductStore();

  const hasActiveFilters =
    filters.category || filters.texture || filters.lengthInInches;

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-neutral-900">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-sm text-neutral-600 hover:text-neutral-900 underline"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Type Filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">
          Type
        </label>
        <select
          value={filters.category || ""}
          onChange={(e) =>
            setFilters({
              category: e.target.value
                ? (e.target.value as ProductCategory)
                : undefined,
            })
          }
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pinkDark min-h-[44px]"
        >
          <option value="">All Types</option>
          {availableCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Length Filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">
          Length
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilters({ lengthInInches: undefined })}
            className={`px-4 py-2 rounded-lg border-2 transition-all min-h-[44px] ${
              !filters.lengthInInches
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-300 hover:border-neutral-400"
            }`}
          >
            All
          </button>
          {availableLengths.map((length) => (
            <button
              key={length}
              onClick={() => setFilters({ lengthInInches: length })}
              className={`px-4 py-2 rounded-lg border-2 transition-all min-h-[44px] ${
                filters.lengthInInches === length
                  ? "border-neutral-900 bg-neutral-900 text-white"
                  : "border-neutral-300 hover:border-neutral-400"
              }`}
            >
              {length}"
            </button>
          ))}
        </div>
      </div>

      {/* Texture Filter */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">
          Texture
        </label>
        <select
          value={filters.texture || ""}
          onChange={(e) =>
            setFilters({
              texture: e.target.value ? (e.target.value as HairTexture) : undefined,
            })
          }
          className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-pinkDark min-h-[44px]"
        >
          <option value="">All Textures</option>
          {availableTextures.map((texture) => (
            <option key={texture} value={texture}>
              {texture}
            </option>
          ))}
        </select>
      </div>

      {/* Stock Filter */}
      <div className="flex items-center gap-2 pt-2">
        <input
          type="checkbox"
          id="inStock"
          checked={filters.inStockOnly || false}
          onChange={(e) => setFilters({ inStockOnly: e.target.checked })}
          className="w-5 h-5 rounded border-neutral-300 text-neutral-900 focus:ring-2 focus:ring-accent-pinkDark"
        />
        <label htmlFor="inStock" className="text-sm text-neutral-700 cursor-pointer">
          In stock only
        </label>
      </div>
    </div>
  );
}
