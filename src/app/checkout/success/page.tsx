// app/checkout/success/page.jsx
import Link from 'next/link'
import { CheckCircle, Home, ShoppingBag } from 'lucide-react'

export const metadata = {
  title: 'Order Successful | SkinGlow',
  description: 'Thank you for your order!',
}

export default function CheckoutSuccessPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your purchase. Your order has been received and is being processed.
            You will receive an email confirmation shortly.
          </p>
          
          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 text-left mb-8">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-medium">#SG{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-medium">Credit Card</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping Method:</span>
                <span className="font-medium">Standard Shipping</span>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-bold">
                <span>Order Total:</span>
                <span>${(Math.random() * 100 + 20).toFixed(2)}</span>
              </div>
            </div>
          </div>
          
          {/* Next Steps */}
          <div className="text-left mb-8">
            <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  1
                </span>
                <span>You'll receive an order confirmation email with details of your purchase.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  2
                </span>
                <span>Once your order ships, we'll send you a shipping confirmation email with tracking info.</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                  3
                </span>
                <span>Most orders arrive within 3-5 business days of shipping.</span>
              </li>
            </ul>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              <Home className="mr-2 h-4 w-4" />
              Return to Homepage
            </Link>
            <Link
              href="/products"
              className="flex items-center justify-center border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
