// lib/store/cartStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Define the types
export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category?: string;
  description?: string;
  rating?: number;
}

export type CartState = {
  items: CartItem[];
  addItem: (product: CartItem, quantity: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

// Create the store
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      // Add item to cart
      addItem: (product, quantity = 1) => {
        const items = get().items;
        const existingItem = items.find(item => item.id === product.id);
        
        if (existingItem) {
          // Update quantity if item already exists
          const updatedItems = items.map(item => 
            item.id === product.id 
              ? { ...item, quantity: item.quantity + quantity } 
              : item
          );
          set({ items: updatedItems });
        } else {
          // Add new item to cart
          set({ items: [...items, { ...product, quantity }] });
        }
      },
      
      // Remove item from cart
      removeItem: (productId) => {
        set({ items: get().items.filter(item => item.id !== productId) });
      },
      
      // Update item quantity
      updateQuantity: (productId, quantity) => {
        if (quantity < 1) return;
        
        set({
          items: get().items.map(item => 
            item.id === productId ? { ...item, quantity } : item
          )
        });
      },
      
      // Clear cart
      clearCart: () => set({ items: [] }),
      
      // Get cart total
      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + (item.price * item.quantity), 
          0
        );
      },
      
      // Get cart item count
      getItemCount: () => {
        return get().items.reduce(
          (count, item) => count + item.quantity, 
          0
        );
      }
    }),
    {
      name: 'cart-storage',
    }
  )
);