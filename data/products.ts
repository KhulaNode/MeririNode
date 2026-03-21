import { Product } from "@/types/product";

// TODO: Replace this mock data with Supabase queries
// Example Supabase query structure:
// const { data, error } = await supabase
//   .from('products')
//   .select('*')
//   .eq('stockStatus', 'In Stock')

export const mockProducts: Product[] = [
  // Human Hair Wigs - Premium Collection
  {
    id: "hhw-001",
    name: "Luxe Body Wave Wig",
    category: "Human Hair Wig",
    texture: "Body Wave",
    lengthInInches: 14,
    laceType: "HD",
    priceZAR: 2499,
    stockStatus: "In Stock",
    images: [
      "/products/body-wave-14-1.jpg",
      "/products/body-wave-14-2.jpg",
      "/products/body-wave-14-3.jpg",
    ],
    shortDescription: "Soft, natural movement. HD lace melts into any skin tone. Pure luxury.",
    careNotes: "Wash weekly with sulfate-free shampoo. Air dry on wig stand. Use heat protectant before styling. Can be colored by professional.",
  },
  {
    id: "hhw-002",
    name: "Luxe Body Wave Wig",
    category: "Human Hair Wig",
    texture: "Body Wave",
    lengthInInches: 18,
    laceType: "HD",
    priceZAR: 2899,
    stockStatus: "In Stock",
    images: [
      "/products/body-wave-18-1.jpg",
      "/products/body-wave-18-2.jpg",
    ],
    shortDescription: "Longer length, same softness. HD lace for seamless blend.",
    careNotes: "Wash weekly with sulfate-free shampoo. Air dry on wig stand. Use heat protectant before styling. Can be colored by professional.",
  },
  {
    id: "hhw-003",
    name: "Deep Wave Bombshell Wig",
    category: "Human Hair Wig",
    texture: "Deep Wave",
    lengthInInches: 16,
    laceType: "Transparent",
    priceZAR: 2699,
    stockStatus: "Limited",
    images: [
      "/products/deep-wave-16-1.jpg",
      "/products/deep-wave-16-2.jpg",
    ],
    shortDescription: "Big, bouncy waves that hold all day. Transparent lace.",
    careNotes: "Condition every wash. Detangle gently when wet. Sleep in silk bonnet. Heat styling up to 180°C.",
  },
  {
    id: "hhw-004",
    name: "Sleek Straight Wig",
    category: "Human Hair Wig",
    texture: "Straight",
    lengthInInches: 12,
    laceType: "HD",
    priceZAR: 2299,
    stockStatus: "In Stock",
    images: [
      "/products/straight-12-1.jpg",
      "/products/straight-12-2.jpg",
      "/products/straight-12-3.jpg",
    ],
    shortDescription: "Clean, elegant, timeless. Perfect for everyday confidence.",
    careNotes: "Minimal maintenance. Brush daily. Wash every 2 weeks. Apply light oil to ends.",
  },
  {
    id: "hhw-005",
    name: "Kinky Curly Wig",
    category: "Human Hair Wig",
    texture: "Kinky Curly",
    lengthInInches: 14,
    laceType: "Brown",
    priceZAR: 2799,
    stockStatus: "In Stock",
    images: [
      "/products/kinky-curly-14-1.jpg",
      "/products/kinky-curly-14-2.jpg",
    ],
    shortDescription: "Natural African texture. Soft, full, and authentic.",
    careNotes: "Finger detangle only. Deep condition weekly. Co-wash preferred. No heat styling.",
  },

  // Synthetic Wigs - Budget Friendly
  {
    id: "sw-001",
    name: "Jerry Curl Synthetic Wig",
    category: "Synthetic Wig",
    texture: "Jerry Curl",
    lengthInInches: 12,
    laceType: "Transparent",
    priceZAR: 899,
    stockStatus: "In Stock",
    images: [
      "/products/jerry-curl-12-1.jpg",
      "/products/jerry-curl-12-2.jpg",
    ],
    shortDescription: "Affordable bounce. Heat-safe up to 150°C. Great value, always in stock.",
    careNotes: "Do not exceed 150°C. Wash with cold water. Air dry only. No chemical processing.",
  },
  {
    id: "sw-002",
    name: "Body Wave Synthetic Wig",
    category: "Synthetic Wig",
    texture: "Body Wave",
    lengthInInches: 14,
    laceType: "HD",
    priceZAR: 999,
    stockStatus: "In Stock",
    images: [
      "/products/syn-body-wave-14-1.jpg",
      "/products/syn-body-wave-14-2.jpg",
    ],
    shortDescription: "Soft waves that last. Pre-styled, ready to wear.",
    careNotes: "Pre-styled, minimal maintenance. Wash every 3-4 wears. Use synthetic wig shampoo.",
  },
  {
    id: "sw-003",
    name: "Straight Bob Synthetic Wig",
    category: "Synthetic Wig",
    texture: "Straight",
    lengthInInches: 10,
    laceType: "HD",
    priceZAR: 799,
    stockStatus: "In Stock",
    images: [
      "/products/syn-straight-10-1.jpg",
      "/products/syn-straight-10-2.jpg",
    ],
    shortDescription: "Quick chic. Short, sleek, and ready in 2 minutes.",
    careNotes: "Shake to style. Wash every 5-6 wears. Store on wig stand.",
  },

  // Frontals
  {
    id: "front-001",
    name: "Body Wave Frontal",
    category: "Frontal",
    texture: "Body Wave",
    lengthInInches: 14,
    laceType: "HD",
    priceZAR: 1499,
    stockStatus: "In Stock",
    images: [
      "/products/frontal-body-wave-14-1.jpg",
      "/products/frontal-body-wave-14-2.jpg",
    ],
    shortDescription: "13x4 frontal. Natural hairline. Bleach knots ready.",
    careNotes: "Can be dyed. Use got2b glue or tape. Re-install every 2-3 weeks. Store flat.",
  },
  {
    id: "front-002",
    name: "Straight Frontal",
    category: "Frontal",
    texture: "Straight",
    lengthInInches: 16,
    laceType: "Transparent",
    priceZAR: 1699,
    stockStatus: "Limited",
    images: [
      "/products/frontal-straight-16-1.jpg",
      "/products/frontal-straight-16-2.jpg",
    ],
    shortDescription: "13x4 transparent lace. Versatile parting.",
    careNotes: "Customize parting. Use ghost bond adhesive. Wash while installed or removed.",
  },
  {
    id: "front-003",
    name: "Deep Wave Frontal",
    category: "Frontal",
    texture: "Deep Wave",
    lengthInInches: 18,
    laceType: "HD",
    priceZAR: 1799,
    stockStatus: "Pre-Order",
    images: [
      "/products/frontal-deep-wave-18-1.jpg",
    ],
    shortDescription: "13x6 HD frontal. Extra versatility. Pre-order for 7 days.",
    careNotes: "Larger parting space. Can be bleached. Deep condition after installation.",
  },

  // Closures
  {
    id: "clos-001",
    name: "Body Wave Closure",
    category: "Closure",
    texture: "Body Wave",
    lengthInInches: 12,
    laceType: "HD",
    priceZAR: 899,
    stockStatus: "In Stock",
    images: [
      "/products/closure-body-wave-12-1.jpg",
    ],
    shortDescription: "4x4 closure. Middle part. Natural hairline.",
    careNotes: "Sew-in or glue installation. Lasts 4-6 weeks. Use wig cap underneath.",
  },
];

// Helper functions for filtering
// TODO: Replace with Supabase filtering queries

export const getProductById = (id: string): Product | undefined => {
  // TODO: const { data } = await supabase.from('products').select('*').eq('id', id).single()
  return mockProducts.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  // TODO: const { data } = await supabase.from('products').select('*').eq('category', category)
  return mockProducts.filter((p) => p.category === category);
};

export const getInStockProducts = (): Product[] => {
  // TODO: const { data } = await supabase.from('products').select('*').in('stockStatus', ['In Stock', 'Limited'])
  return mockProducts.filter((p) => 
    p.stockStatus === "In Stock" || p.stockStatus === "Limited"
  );
};

export const getFeaturedProducts = (): Product[] => {
  // TODO: const { data } = await supabase.from('products').select('*').eq('featured', true).limit(4)
  // For now, return first 4 in-stock human hair wigs
  return mockProducts
    .filter((p) => p.category === "Human Hair Wig" && p.stockStatus === "In Stock")
    .slice(0, 4);
};
