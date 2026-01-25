import { create } from "zustand";
import { Product, ProductFilters } from "@/types/product";

// TODO: When integrating Supabase:
// 1. Move product fetching to server components where possible
// 2. Use this store primarily for client-side filtering and cart state
// 3. Consider using Supabase Realtime for stock updates

interface ProductStore {
  // Filters
  filters: ProductFilters;
  setFilters: (filters: Partial<ProductFilters>) => void;
  clearFilters: () => void;
  
  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  
  // UI State
  isFilterOpen: boolean;
  toggleFilter: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  // Filters
  filters: {},
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  clearFilters: () => set({ filters: {} }),
  
  // Search
  searchQuery: "",
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  // UI State
  isFilterOpen: false,
  toggleFilter: () => set((state) => ({ isFilterOpen: !state.isFilterOpen })),
}));

// Cart Store (for future implementation)
// TODO: Integrate with Supabase for persistent cart
interface CartStore {
  items: Array<{ product: Product; quantity: number }>;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (product, quantity = 1) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.product.id === product.id);
      
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }
      
      return { items: [...state.items, { product, quantity }] };
    }),
  
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.product.id !== productId),
    })),
  
  updateQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      ),
    })),
  
  clearCart: () => set({ items: [] }),
  
  getTotalItems: () => {
    const state = get();
    return state.items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    const state = get();
    return state.items.reduce(
      (total, item) => total + item.product.priceZAR * item.quantity,
      0
    );
  },
}));
