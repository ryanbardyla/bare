// src/app/products/[id]/page.tsx
'use client';

import { useProduct } from '@/hooks/useProducts';
import { useCart } from '@/contexts/CartContext';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorMessage from '@/components/ErrorMessage';
import { Star, ShoppingCart } from 'lucide-react';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { product, isLoading, isError } = useProduct(params.id);
  const { dispatch } = useCart();
  
  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage message="Failed to load product" />;
  if (!product) return <ErrorMessage message="Product not found" />;
  
  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image
      }
    });
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating) 
                    ? "text-yellow-400 fill-yellow-400" 
                    : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">{product.rating}/5</span>
          </div>
          
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{product.longDescription || product.description}</p>
          </div>
          
          {product.ingredients && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
              <p className="text-gray-700">{product.ingredients}</p>
            </div>
          )}
          
          {product.directions && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">How to Use</h2>
              <p className="text-gray-700">{product.directions}</p>
            </div>
          )}
          
          <button 
            onClick={handleAddToCart}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center justify-center hover:bg-blue-700 transition duration-300"
          >
            <ShoppingCart className="mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}