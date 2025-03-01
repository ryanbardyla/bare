// src/app/api/products/route.ts
import { NextResponse } from 'next/server';

// You'll want to replace this with a database call eventually
const products = [
  {
    id: 1,
    name: "Hydrating Facial Cleanser",
    category: "Cleansers",
    price: 18.99,
    rating: 5,
    image: "/images/products/cleanser.jpg",
    description: "Gentle, effective formula suitable for all skin types"
  },
  // ... other products
];

export async function GET() {
  return NextResponse.json(products);
}