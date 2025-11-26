"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star, Plus, Minus, Clock, ShoppingBag } from "lucide-react";
import { useParams } from "next/navigation";
import { useCart } from "../context/CartContext";
// 1. IMPORT DATA
import { restaurants, menus } from "@/lib/sampleData"; 

export default function RestaurantMenu() {
  const params = useParams();
  const { addToCart, cartCount } = useCart();
  const [addedItems, setAddedItems] = useState<string[]>([]);

  // 2. FIND DATA
  const id = params?.id ? (Array.isArray(params.id) ? params.id[0] : params.id) : "";
  const restaurant = restaurants.find((r) => r.id === id);
  const menuItems = menus[id] || []; // Get menu or empty array

  const handleAdd = (item: any) => {
    addToCart({ ...item, image: item.image }); // Ensure image is passed
    setAddedItems((prev) => [...prev, item.id]);
    setTimeout(() => setAddedItems((prev) => prev.filter((i) => i !== item.id)), 1000);
  };

  // 3. Handle Not Found
  if (!restaurant) {
     return <div className="h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold">Restaurant not found 😔</h2>
        <Link href="/" className="text-orange-600 underline mt-4">Go Back Home</Link>
     </div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Floating Cart (Mobile) */}
      {cartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4">
          <div className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform">
             <ShoppingBag className="w-5 h-5" />
             <span className="font-bold text-lg">{cartCount} items</span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-72 lg:h-96 w-full">
        <Image src={restaurant.cover} alt={restaurant.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <Link href="/" className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all z-10">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-10 text-white">
           <h1 className="text-4xl md:text-6xl font-black mb-3">{restaurant.name}</h1>
           <div className="flex flex-wrap gap-4 text-sm font-medium">
              <span className="bg-green-600 px-2 py-0.5 rounded flex items-center gap-1">
                {restaurant.rating} <Star className="w-3 h-3 fill-current" />
              </span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {restaurant.deliveryTime} delivery</span>
              <span>• {restaurant.tags.join(", ")}</span>
              <span>• {restaurant.address}</span>
           </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
        <h2 className="text-2xl font-bold text-slate-800 border-b border-slate-200 pb-2">Full Menu</h2>
        
        {menuItems.length === 0 ? (
          <div className="text-center py-10 text-slate-500">Menu items coming soon!</div>
        ) : (
          menuItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex justify-between gap-4">
              <div className="flex-1">
                 <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                 <div className="font-bold text-slate-700 text-lg mt-1">₹{item.price}</div>
                 <p className="text-slate-500 text-sm mt-2 line-clamp-2">{item.desc}</p>
              </div>
              <div className="relative w-32 h-32 flex-shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover rounded-xl" />
                <button 
                  onClick={() => handleAdd(item)}
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 shadow-lg rounded-lg font-bold border w-24 h-9 flex items-center justify-center transition-all active:scale-95 ${
                    addedItems.includes(item.id) 
                      ? "bg-green-600 text-white border-green-600" 
                      : "bg-white text-green-600 border-slate-200 hover:bg-green-50"
                  }`}
                >
                  {addedItems.includes(item.id) ? "ADDED" : "ADD"}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}