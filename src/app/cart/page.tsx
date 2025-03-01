// src/app/cart/page.tsx
'use client';

import { useCart } from '@/contexts/CartContext';
import CheckoutButton from '@/components/CheckoutButton';
import CartItem from '@/components/CartItem';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CartPage() {
  const { state, dispatch } = useCart();
  
  // Calculate shipping fee
  const shipping = state.subtotal > 50 ? 0 : 5.99;
  
  // Total
  const total = state.subtotal + shipping;
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {state.items.length === 0 ? (
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
                
                {state.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              
              <div className="mt-4 flex justify-between">
                <Link href="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
                  ← Continue Shopping
                </Link>
                <button 
                  onClick={() => dispatch({ type: 'CLEAR_CART' })}
                  className="text-red-600 hover:text-red-800 flex items-center"
                >
                  Clear Cart
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
                    <span>${state.subtotal.toFixed(2)}</span>
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
                
                <CheckoutButton />
                
                <div className="mt-6">
                  <h3 className="font-semibold mb-2">We Accept</h3>
                  <div className="flex space-x-2">
                    <img src="/images/payments/visa.svg" alt="Visa" className="h-8" />
                    <img src="/images/payments/mastercard.svg" alt="Mastercard" className="h-8" />
                    <img src="/images/payments/paypal.svg" alt="PayPal" className="h-8" />
                    <img src="/images/payments/applepay.svg" alt="Apple Pay" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}