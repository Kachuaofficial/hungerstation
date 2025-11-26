"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star, Plus, Minus, Clock, ShoppingBag, MapPin } from "lucide-react";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext";
import { menus, restaurants } from "@/lib/sampleData";
// Import the centralized data (Best Practice)

export default function RestaurantMenu() {
  const params = useParams();
  const { addToCart, cartCount, clearCart } = useCart(); // Get clearCart too
  const [addedItems, setAddedItems] = useState<string[]>([]);

  const id = params?.id ? (Array.isArray(params.id) ? params.id[0] : params.id) : "";
  const restaurant = restaurants.find((r) => r.id === id);
  const menuItems = menus[id] || [];

  // --- MODIFIED ADD HANDLER ---
  const handleAdd = (item: any) => {
    const itemToAdd = { 
      ...item, 
      image: item.image, 
      restaurant: restaurant?.name 
    };

    const result = addToCart(itemToAdd);

    if (result.success) {
      // Success Animation
      setAddedItems((prev) => [...prev, item.id]);
      setTimeout(() => setAddedItems((prev) => prev.filter((i) => i !== item.id)), 1000);
    } else {
      // Conflict Detected!
      // Show standard Browser Confirm Dialog (Simplest way)
      const shouldReset = window.confirm(result.error);
      
      if (shouldReset) {
        clearCart(); // 1. Clear old cart
        addToCart(itemToAdd); // 2. Add new item
        
        // Success Animation
        setAddedItems((prev) => [...prev, item.id]);
        setTimeout(() => setAddedItems((prev) => prev.filter((i) => i !== item.id)), 1000);
      }
    }
  };

  if (!restaurant) { return <div>Not found</div>; }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      
       {/* ... (Keep your Header/Hero/Floating Button code exactly as it was) ... */}
       {/* Just checking that floating button link is present from previous fix */}
       {cartCount > 0 && (
        <Link href="/cart">
          <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4">
            <div className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform border-2 border-white">
               <ShoppingBag className="w-5 h-5" />
               <span className="font-bold text-lg">{cartCount} items</span>
            </div>
          </div>
        </Link>
      )}

      {/* Hero Section (Keep existing code) */}
      <div className="relative h-72 lg:h-96 w-full">
         <Image src={restaurant.cover} alt={restaurant.name} fill className="object-cover" priority />
         {/* ... overlay code ... */}
         <Link href="/" className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all z-10"><ArrowLeft className="w-6 h-6" /></Link>
         {/* ... info code ... */}
         <div className="absolute bottom-0 left-0 w-full p-6 lg:p-10 text-white">
             <h1 className="text-4xl font-black mb-2">{restaurant.name}</h1>
             {/* ... rating/tags code ... */}
         </div>
      </div>

      {/* Menu List */}
      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
        <h2 className="text-2xl font-black text-slate-800 border-b border-slate-200 pb-4">Menu</h2>
        
        {menuItems.map((item) => (
            <div key={item.id} className="group bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex justify-between gap-4">
              
              <div className="flex-1 flex flex-col justify-center">
                 <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                 <div className="font-black text-slate-800 text-lg mt-1">₹{item.price}</div>
                 <p className="text-slate-500 text-sm mt-2 line-clamp-2">{item.desc}</p>
              </div>

              <div className="relative w-36 h-32 flex-shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover rounded-2xl shadow-sm" />
                
                {/* BUTTON WITH NEW LOGIC */}
                <button 
                  onClick={() => handleAdd(item)}
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 shadow-xl rounded-xl font-bold border w-28 h-10 flex items-center justify-center transition-all active:scale-95 ${
                    addedItems.includes(item.id) 
                      ? "bg-green-600 text-white border-green-600" 
                      : "bg-white text-green-600 border-slate-200 hover:bg-green-50"
                  }`}
                >
                  {addedItems.includes(item.id) ? "ADDED" : "ADD"}
                </button>
              </div>
            </div>
          ))}
      </div>

    </div>
  );
}