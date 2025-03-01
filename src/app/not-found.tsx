// app/not-found.jsx
import Link from 'next/link'
import { Search, Home, HelpCircle } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="text-8xl font-bold text-blue-600">404</div>
              <HelpCircle className="absolute top-2 -right-6 h-10 w-10 text-blue-400" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
          </p>
          
          {/* Search */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search our site..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="absolute left-3 top-3 text-gray-400">
                <Search className="h-5 w-5" />
              </div>
            </div>
          </div>
          
          {/* Suggestions */}
          <div className="mb-8 text-left">
            <h2 className="text-xl font-semibold mb-4">You might want to check out:</h2>
            <ul className="space-y-2 text-blue-600">
              <li>
                <Link href="/" className="hover:underline flex items-center">
                  <Home className="h-4 w-4 mr-2" /> Homepage
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Return Button */}
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}