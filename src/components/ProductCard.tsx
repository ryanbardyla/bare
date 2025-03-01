'use client'

// components/ProductCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star } from 'lucide-react'
import { useCartStore, CartItem } from '../lib/store/cartStore'
import React from 'react'

// Define Product type that extends CartItem
type Product = CartItem & {
  category: string;
  description: string;
  rating: number;
}

type ProductCardProps = {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, 1)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform hover:scale-[1.01]">
      <Link href={`/products/${product.id}`} className="h-48 overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Link>
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start">
          <div>
            <Link href={`/products/${product.id}`}>
              <h2 className="text-lg font-semibold mb-1 hover:text-blue-600 transition">
                {product.name}
              </h2>
            </Link>
            <span className="text-sm text-gray-500">{product.category}</span>
          </div>
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 mt-2 text-sm line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center mt-2">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">{product.rating}/5</span>
        </div>
        <div className="mt-4 flex space-x-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 text-center px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
          >
            View Details
          </Link>
          <button 
            className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}