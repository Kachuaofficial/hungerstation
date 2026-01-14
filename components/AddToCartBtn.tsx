"use client";
import { Plus } from "lucide-react";
import { useCart } from "@/app/context/CartContext";

export default function AddToCartBtn({ item }: { item: any }) {
  const { addToCart } = useCart();
  
  return (
    <button 
      onClick={() => addToCart({ ...item, desc: "Discounted Item" })}
      className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 flex items-center gap-1 active:scale-95"
    >
      Add <Plus className="w-3 h-3" />
    </button>
  );
}