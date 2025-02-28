"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Search, User } from "lucide-react"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-blue-800 text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            SkinGlow
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/products" className="hover:text-blue-200">
              Products
            </Link>
            <Link href="/about" className="hover:text-blue-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-200">
              Contact
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="hover:text-blue-200">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/account" className="hover:text-blue-200">
              <User className="h-5 w-5" />
            </Link>
            <Link href="/cart" className="hover:text-blue-200">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link href="/cart" className="hover:text-blue-200">
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-3 py-3">
              <Link
                href="/products"
                className="hover:bg-blue-700 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/about"
                className="hover:bg-blue-700 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:bg-blue-700 px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/account"
                className="hover:bg-blue-700 px-3 py-2 rounded flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5 mr-2" /> My Account
              </Link>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-lg px-4 py-2 focus:outline-none text-gray-800"
                />
                <button className="absolute right-3 top-2 text-gray-600">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}