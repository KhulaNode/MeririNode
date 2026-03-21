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

// Cart Types
export interface CartItem {
  product: Product;
  quantity: number;
}

// Order / Checkout Types
export interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
}

export interface Order {
  orderId: string;
  items: CartItem[];
  shipping: ShippingDetails;
  totalInCents: number;
  status: "pending" | "paid" | "failed";
  createdAt: string;
}
