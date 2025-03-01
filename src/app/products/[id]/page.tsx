'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useCartStore } from '../../../lib/store/cartStore'
import { Star, ShoppingCart, Minus, Plus } from 'lucide-react'
import { getProductById, Product } from '../../../lib/data/products'

type ProductPageProps = {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1)
  const productId = parseInt(params.id)
  const product = getProductById(productId) as Product | undefined
  
  const addItem = useCartStore((state) => state.addItem)
  
  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)
  
  const handleAddToCart = () => {
    if (product) {
      addItem(product, quantity)
    }
  }
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <p>Sorry, the product you're looking for could not be found.</p>
      </div>
    )
  }
  
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative h-96 w-full border rounded-md overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Product Details */}
            <div className="space-y-4">
              <div>
                <h1 className="text-2xl font-medium mb-1">{product.name}</h1>
                <p className="text-sm text-gray-500">{product.category}</p>
              </div>
              
              {/* Ratings */}
              <div className="flex items-center">
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
                <span className="text-sm text-gray-500">({product.rating}/5)</span>
              </div>
              
              <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
              
              <p className="text-gray-600">{product.description}</p>
              
              {/* Quantity Selector */}
              <div className="mt-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex items-center border rounded-md w-32">
                  <button 
                    onClick={decrementQuantity} 
                    className="px-3 py-1 border-r text-gray-600 hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full text-center py-1 focus:outline-none"
                  />
                  <button 
                    onClick={incrementQuantity} 
                    className="px-3 py-1 border-l text-gray-600 hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Add to Cart Button */}
              <button 
                onClick={handleAddToCart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md flex items-center justify-center transition mt-6"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              
              {/* Additional Information */}
              <div className="mt-6 border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Product Details</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>100% natural ingredients</li>
                  <li>Dermatologist tested</li>
                  <li>Cruelty-free and vegan</li>
                  <li>Free from parabens, sulfates, and synthetic fragrances</li>
                  <li>Eco-friendly packaging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}