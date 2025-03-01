// lib/data/products.ts
import { CartItem } from '../store/cartStore';

export type Product = CartItem & {
  category: string;
  description: string;
  rating: number;
  featured?: boolean;
}

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Hydrating Facial Cleanser",
    category: "Cleansers",
    price: 18.99,
    rating: 5,
    image: "/images/products/cleanser.jpg",
    description: "Gentle, effective formula suitable for all skin types. This daily cleanser removes impurities without stripping your skin's natural moisture.",
    quantity: 0,
    featured: true
  },
  {
    id: 2,
    name: "Brightening Serum",
    category: "Serums",
    price: 24.99,
    rating: 4.5,
    image: "/images/products/serum.jpg",
    description: "Vitamin C enriched formula to revitalize your complexion. This powerful serum targets dark spots and uneven skin tone for a radiant glow.",
    quantity: 0,
    featured: true
  },
  {
    id: 3,
    name: "Rejuvenating Night Cream",
    category: "Moisturizers",
    price: 22.99,
    rating: 4.8,
    image: "/images/products/night-cream.jpg",
    description: "Nourish and repair your skin while you sleep. Our night cream works overnight to hydrate, plump, and restore your skin's natural barrier.",
    quantity: 0,
    featured: true
  },
  {
    id: 4,
    name: "Exfoliating Scrub",
    category: "Exfoliators",
    price: 19.99,
    rating: 4.7,
    image: "/images/products/scrub.jpg",
    description: "Gently remove dead skin cells for a radiant glow. Our natural exfoliant reveals smoother, brighter skin without harsh chemicals or microbeads.",
    quantity: 0
  },
  {
    id: 5,
    name: "Hydrating Face Mask",
    category: "Masks",
    price: 15.99,
    rating: 4.9,
    image: "/images/products/mask.jpg",
    description: "Intense hydration treatment for dry and tired skin. This weekly treatment delivers deep moisture and restores skin's natural balance.",
    quantity: 0
  },
  {
    id: 6,
    name: "Calming Toner",
    category: "Toners",
    price: 16.99,
    rating: 4.6,
    image: "/images/products/toner.jpg",
    description: "Alcohol-free formula to balance and soothe skin. Our gentle toner removes any remaining impurities while preparing your skin for serums and moisturizers.",
    quantity: 0
  },
  {
    id: 7,
    name: "Anti-Aging Eye Cream",
    category: "Eye Care",
    price: 27.99,
    rating: 4.8,
    image: "/images/products/eye-cream.jpg",
    description: "Reduce fine lines and dark circles around the eyes. Specially formulated for the delicate eye area, this cream hydrates and brightens while fighting signs of aging.",
    quantity: 0
  },
  {
    id: 8,
    name: "Moisturizing Lip Balm",
    category: "Lip Care",
    price: 9.99,
    rating: 4.7,
    image: "/images/products/lip-balm.jpg",
    description: "Keep your lips soft and protected all day. Made with natural oils and butters, this lip balm provides long-lasting hydration for dry, chapped lips.",
    quantity: 0
  },
  {
    id: 9,
    name: "Skin Protection SPF 30",
    category: "Sunscreen",
    price: 21.99,
    rating: 4.9,
    image: "/images/products/sunscreen.jpg",
    description: "Lightweight sunscreen for daily protection. Our non-greasy formula shields your skin from harmful UV rays while providing antioxidant protection.",
    quantity: 0
  }
];

// Utility functions for product data
export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter(product => product.featured);
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}