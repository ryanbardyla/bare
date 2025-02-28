"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react"

type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export default function CartPage() {
  // Sample cart data
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Hydrating Facial Cleanser",
      price: 18.99,
      quantity: 1,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Brightening Serum",
      price: 24.99,
      quantity: 2,
      image: "/placeholder.svg"
    }
  ])

  // Update quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, quantity: newQuantity } 
          : item
      )
    )
  }

  // Remove item
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 
    0
  )
  
  // Shipping fee
  const shipping = subtotal > 50 ? 0 : 5.99
  
  // Total
  const total = subtotal + shipping

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link 
              href="/products" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Continue Shopping <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b text-sm font-medium">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-2 text-center">Price</div>
                  <div className="col-span-2 text-center">Quantity</div>
                  <div className="col-span-2 text-center">Total</div>
                </div>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 border-b last:border-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                    <div className="md:col-span-6 flex items-center">
                      <div className="w-20 h-20 mr-4 relative">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-sm text-red-600 flex items-center mt-1"
                        >
                          <Trash2 className="h-3 w-3 mr-1" /> Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 text-center">
                      <div className="md:hidden inline font-medium mr-2">Price:</div>
                      ${item.price.toFixed(2)}
                    </div>
                    
                    <div className="md:col-span-2 flex items-center justify-center">
                      <div className="md:hidden inline font-medium mr-2">Quantity:</div>
                      <div className="flex items-center border rounded">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-10 text-center border-x focus:outline-none py-1"
                        />
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 text-center font-medium">
                      <div className="md:hidden inline font-medium mr-2">Total:</div>
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 flex justify-between">
                <Link href="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
                  ← Continue Shopping
                </Link>
                <button 
                  onClick={() => setCartItems([])}
                  className="text-red-600 hover:text-red-800 flex items-center"
                >
                  <Trash2 className="h-4 w-4 mr-1" /> Clear Cart
                </button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  {shipping > 0 && (
                    <div className="text-sm text-gray-500">
                      Free shipping on orders over $50
                    </div>
                  )}
                  <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700">
                  Proceed to Checkout
                </button>
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">We Accept</h3>
                  <div className="flex space-x-2">
                    <img src="/placeholder.svg" alt="Visa" className="h-8" />
                    <img src="/placeholder.svg" alt="Mastercard" className="h-8" />
                    <img src="/placeholder.svg" alt="PayPal" className="h-8" />
                    <img src="/placeholder.svg" alt="Apple Pay" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}