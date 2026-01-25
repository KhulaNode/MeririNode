import { Product, ProductFilters } from "@/types/product";

/**
 * Filters products based on provided criteria
 * TODO: Replace with Supabase queries for better performance
 */
export function filterProducts(
  products: Product[],
  filters: ProductFilters
): Product[] {
  return products.filter((product) => {
    // Category filter
    if (filters.category && product.category !== filters.category) {
      return false;
    }

    // Texture filter
    if (filters.texture && product.texture !== filters.texture) {
      return false;
    }

    // Length filter
    if (
      filters.lengthInInches &&
      product.lengthInInches !== filters.lengthInInches
    ) {
      return false;
    }

    // Price filter
    if (filters.maxPrice && product.priceZAR > filters.maxPrice) {
      return false;
    }

    // Stock filter
    if (
      filters.inStockOnly &&
      product.stockStatus !== "In Stock" &&
      product.stockStatus !== "Limited"
    ) {
      return false;
    }

    return true;
  });
}

/**
 * Searches products by name or description
 * TODO: Replace with Supabase full-text search
 */
export function searchProducts(products: Product[], query: string): Product[] {
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery) return products;

  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(lowerQuery) ||
      product.shortDescription.toLowerCase().includes(lowerQuery) ||
      product.texture.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
    );
  });
}

/**
 * Formats price in South African Rand
 */
export function formatPrice(price: number): string {
  return `R${price.toLocaleString("en-ZA")}`;
}

/**
 * Gets stock urgency message for UI
 */
export function getStockUrgencyMessage(status: Product["stockStatus"]): string {
  switch (status) {
    case "Limited":
      return "Only a few left in Cape Town";
    case "Pre-Order":
      return "Pre-order now • 7 day delivery";
    case "Out of Stock":
      return "Out of stock";
    case "In Stock":
    default:
      return "In stock • Ready to collect";
  }
}

/**
 * Gets unique values for filters from product array
 */
export function getUniqueFilterValues(products: Product[]) {
  const categories = new Set(products.map((p) => p.category));
  const textures = new Set(products.map((p) => p.texture));
  const lengths = new Set(products.map((p) => p.lengthInInches));

  return {
    categories: Array.from(categories).sort(),
    textures: Array.from(textures).sort(),
    lengths: Array.from(lengths).sort((a, b) => a - b),
  };
}
