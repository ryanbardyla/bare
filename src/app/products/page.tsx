// app/products/page.tsx
import React from 'react'
import { getAllProducts } from '../../lib/data/products'
import ProductGrid from '../../components/ProductGrid'

export const metadata = {
  title: 'Products | SkinGlow',
  description: 'Browse our collection of natural, organic skincare products.',
}

export default function ProductsPage() {
  const products = getAllProducts()
  
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        <ProductGrid products={products} />
      </div>
    </div>
  )
}