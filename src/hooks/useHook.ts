// src/hooks/useProducts.ts
import { useState, useEffect } from 'react';

// Sample product data
const sampleProducts = [
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
  // Add more sample products as needed
];

export function useProducts() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Simulate API call with a delay
    const fetchProducts = async () => {
      try {
        // In a real app, this would be a fetch call to your API
        // const response = await fetch('/api/products');
        // const data = await response.json();
        
        // Using sample data for now
        setTimeout(() => {
          setProducts(sampleProducts);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, isLoading, isError };
}

export function useProduct(id: string | number) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Simulate API call with a delay
    const fetchProduct = async () => {
      try {
        // In a real app, this would be a fetch call to your API
        // const response = await fetch(`/api/products/${id}`);
        // const data = await response.json();
        
        // Using sample data for now
        setTimeout(() => {
          const productId = typeof id === 'string' ? parseInt(id, 10) : id;
          const foundProduct = sampleProducts.find(p => p.id === productId);
          
          if (foundProduct) {
            setProduct(foundProduct);
          } else {
            setIsError(true);
          }
          
          setIsLoading(false);
        }, 500);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return { product, isLoading, isError };
}