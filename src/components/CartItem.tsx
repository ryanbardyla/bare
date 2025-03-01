// src/components/CartItem.tsx
'use client';

import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { CartItem as CartItemType } from "@/contexts/CartContext";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { dispatch } = useCart();

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return;
    
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: item.id, quantity: newQuantity }
    });
  };

  const removeItem = () => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id: item.id }
    });
  };

  return (
    <div className="p-4 border-b last:border-0 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
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
            onClick={removeItem}
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
            onClick={() => updateQuantity(item.quantity - 1)}
            className="px-2 py-1 text-gray-600 hover:bg-gray-100"
          >
            <Minus className="h-3 w-3" />
          </button>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => updateQuantity(parseInt(e.target.value) || 1)}
            className="w-10 text-center border-x focus:outline-none py-1"
          />
          <button 
            onClick={() => updateQuantity(item.quantity + 1)}
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
  );
}