// Product Types
// TODO: These types are structured for easy Supabase integration later

export type ProductCategory = "Synthetic Wig" | "Human Hair Wig" | "Frontal" | "Closure";

export type HairTexture = 
  | "Body Wave" 
  | "Jerry Curl" 
  | "Straight" 
  | "Deep Wave"
  | "Kinky Curly";

export type LaceType = "Transparent" | "HD" | "Brown";

export type StockStatus = "In Stock" | "Limited" | "Pre-Order" | "Out of Stock";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  texture: HairTexture;
  lengthInInches: number;
  laceType?: LaceType; // Optional for frontals/wigs only
  priceZAR: number;
  stockStatus: StockStatus;
  images: string[]; // Array of image URLs
  shortDescription: string;
  careNotes: string;
  // TODO: Add these fields when connecting to Supabase
  // created_at?: string;
  // updated_at?: string;
  // featured?: boolean;
  // sale_price?: number;
}

// Filter Types
export interface ProductFilters {
  category?: ProductCategory;
  texture?: HairTexture;
  lengthInInches?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
}

// Cart Types (for future implementation)
export interface CartItem {
  product: Product;
  quantity: number;
}

// WhatsApp Message Types
export interface WhatsAppOrderData {
  productName: string;
  length: number;
  texture: string;
  price: number;
  deliveryMethod?: "Collection" | "Delivery";
}
