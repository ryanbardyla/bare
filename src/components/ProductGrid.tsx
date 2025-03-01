'use client'

import { useState, useMemo } from 'react'
import { Filter } from 'lucide-react'
import ProductCard from './ProductCard'
import { Product } from '../lib/data/products'

type ProductGridProps = {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string>("featured")

  // Get unique categories
  const categories = useMemo(() => {
    return ["All", ...Array.from(new Set(products.map(product => product.category)))];
  }, [products]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return selectedCategory && selectedCategory !== "All"
      ? products.filter(product => product.category === selectedCategory)
      : products;
  }, [products, selectedCategory]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // Default: featured
    });
  }, [filteredProducts, sortBy]);

  return (
    <div>
      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Filter className="mr-2 h-5 w-5 text-gray-500" />
              <span className="font-medium">Filter by:</span>
            </div>
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Show message if no products match filters */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No products found</h3>
          <p className="text-gray-500">Try adjusting your filters to find what you're looking for.</p>
        </div>
      )}
    </div>
  )
}