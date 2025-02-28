"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter, Star, ShoppingCart } from "lucide-react"

// Product type definition
type Product = {
  id: number
  name: string
  category: string
  price: number
  rating: number
  image: string
  description: string
}

export default function ProductsPage() {
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Hydrating Facial Cleanser",
      category: "Cleansers",
      price: 18.99,
      rating: 5,
      image: "/placeholder.svg",
      description: "Gentle, effective formula suitable for all skin types"
    },
    {
      id: 2,
      name: "Brightening Serum",
      category: "Serums",
      price: 24.99,
      rating: 4.5,
      image: "/placeholder.svg",
      description: "Vitamin C enriched formula to revitalize your complexion"
    },
    {
      id: 3,
      name: "Rejuvenating Night Cream",
      category: "Moisturizers",
      price: 22.99,
      rating: 4.8,
      image: "/placeholder.svg",
      description: "Nourish and repair your skin while you sleep"
    },
    {
      id: 4,
      name: "Exfoliating Scrub",
      category: "Exfoliators",
      price: 19.99,
      rating: 4.7,
      image: "/placeholder.svg",
      description: "Gently remove dead skin cells for a radiant glow"
    },
    {
      id: 5,
      name: "Hydrating Face Mask",
      category: "Masks",
      price: 15.99,
      rating: 4.9,
      image: "/placeholder.svg",
      description: "Intense hydration treatment for dry and tired skin"
    },
    {
      id: 6,
      name: "Calming Toner",
      category: "Toners",
      price: 16.99,
      rating: 4.6,
      image: "/placeholder.svg",
      description: "Alcohol-free formula to balance and soothe skin"
    },
    {
      id: 7,
      name: "Anti-Aging Eye Cream",
      category: "Eye Care",
      price: 27.99,
      rating: 4.8,
      image: "/placeholder.svg",
      description: "Reduce fine lines and dark circles around the eyes"
    },
    {
      id: 8,
      name: "Moisturizing Lip Balm",
      category: "Lip Care",
      price: 9.99,
      rating: 4.7,
      image: "/placeholder.svg",
      description: "Keep your lips soft and protected all day"
    },
    {
      id: 9,
      name: "Skin Protection SPF 30",
      category: "Sunscreen",
      price: 21.99,
      rating: 4.9,
      image: "/placeholder.svg",
      description: "Lightweight sunscreen for daily protection"
    }
  ]

  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string>("featured")

  // Get unique categories
  const categories = ["All", ...new Set(products.map(product => product.category))]

  // Filter and sort products
  const filteredProducts = selectedCategory && selectedCategory !== "All"
    ? products.filter(product => product.category === selectedCategory)
    : products

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price
    if (sortBy === "price-desc") return b.price - a.price
    if (sortBy === "rating") return b.rating - a.rating
    return 0 // Default: featured
  })

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            SkinGlow
          </Link>
          <nav className="hidden md:flex space-x-6">
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
        </div>
      </header>

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Our Products</h1>
          
          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <div className="flex items-center">
                  <Filter className="mr-2 h-5 w-5 text-gray-500" />
                  <span className="font-medium">Filter by:</span>
                </div>
          
          {/* Pagination */}
          <div className="mt-10 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-l-md text-gray-700 hover:bg-gray-50">
                Previous
              </button>
              <button className="px-4 py-2 border border-gray-300 bg-blue-600 text-sm font-medium text-white hover:bg-blue-700">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                2
              </button>
              <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                3
              </button>
              <button className="px-4 py-2 border border-gray-300 bg-white text-sm font-medium rounded-r-md text-gray-700 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </main>

      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">SkinGlow</h3>
              <p className="text-sm">Discover your natural beauty with our organic skincare products.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/products" className="hover:text-blue-200">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-200">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-200">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p className="text-sm">
                123 Skincare Lane
                <br />
                Beauty City, ST 12345
                <br />
                contact@skinglow.com
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-700 text-center text-sm">
            &copy; 2025 SkinGlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
                <div className="flex flex-wrap gap-2 mt-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-3 py-1 text-sm rounded-full ${
                        selectedCategory === category
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                      onClick={() => setSelectedCategory(category === "All" ? null : category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="sort" className="font-medium mr-2">
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="border rounded-md px-2 py-1"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link href={`/products/${product.id}`}>
                  <div className="h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
                      <span className="text-sm text-gray-500">{product.category}</span>
                    </div>
                    <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
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
                      className="flex-1 text-center px-3 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    >
                      View Details
                    </Link>
                    <button className="flex items-center justify-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>