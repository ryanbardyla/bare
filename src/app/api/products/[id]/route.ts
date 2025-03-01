// src/app/api/products/[id]/route.ts
import { NextResponse } from 'next/server';

// Mock product database (replace with real DB later)
const products = [
  {
    id: 1,
    name: "Hydrating Facial Cleanser",
    category: "Cleansers",
    price: 18.99,
    rating: 5,
    image: "/images/products/cleanser.jpg",
    description: "Gentle, effective formula suitable for all skin types",
    longDescription: "Our Hydrating Facial Cleanser is specially formulated...",
    ingredients: "Water, Glycerin, Sodium Cocoyl Isethionate...",
    directions: "Apply to damp skin, massage gently, rinse thoroughly."
  },
  // ... other products
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id, 10);
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(product);
}