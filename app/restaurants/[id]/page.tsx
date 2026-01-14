"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Star, Plus, Minus, Clock, ShoppingBag, MapPin, Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useCart } from "../../context/CartContext";
// import { menus, restaurants } from "@/lib/sampleData"; // REMOVED: Static data
import { db } from "@/lib/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export default function RestaurantMenu() {
  const params = useParams();
  const { addToCart, cartCount, clearCart } = useCart();
  const [addedItems, setAddedItems] = useState<string[]>([]);

  // State for dynamic data
  const [restaurant, setRestaurant] = useState<any>(null);
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const id = params?.id ? (Array.isArray(params.id) ? params.id[0] : params.id) : "";

  // --- FETCH DATA FROM FIRESTORE ---
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        // 1. Fetch Restaurant Details
        const resRef = doc(db, "restaurants", id);
        const resSnap = await getDoc(resRef);

        if (resSnap.exists()) {
          setRestaurant({ id: resSnap.id, ...resSnap.data() });

          // 2. Fetch Menu Subcollection
          const menuRef = collection(db, "restaurants", id, "menu");
          const menuSnap = await getDocs(menuRef);

          const items = menuSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setMenuItems(items);
        } else {
          console.log("No such restaurant!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Helper to clean dirty URLs from database
const sanitizeUrl = (url: any) => {
  if (!url) return "/default_cover.jpg";
  const stringUrl = url.toString();
  // Remove square brackets, quotes, and extra spaces
  return stringUrl.replace(/[\[\]"]/g, "").trim();
};

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <Loader2 className="w-10 h-10 animate-spin text-orange-600" />
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-500">
        <h2 className="text-xl font-bold">Restaurant not found</h2>
        <Link href="/" className="text-orange-600 hover:underline mt-2">Go Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-24">

      {/* Floating Cart Button */}
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

      {/* Hero Section */}
      <div className="relative h-72 lg:h-96 w-full">
<Image 
  src={sanitizeUrl(restaurant.cover || restaurant.image)} 
  alt={restaurant.name} 
  fill 
  className="object-cover" 
  priority 
/>        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <Link href="/" className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all z-10"><ArrowLeft className="w-6 h-6" /></Link>

        <div className="absolute bottom-0 left-0 w-full p-6 lg:p-10 text-white">
          <h1 className="text-4xl font-black mb-2">{restaurant.name}</h1>
          <div className="flex items-center gap-4 text-sm font-medium opacity-90">
            <span className="bg-green-600 px-2 py-0.5 rounded text-white flex items-center gap-1">
              {restaurant.rating} <Star className="w-3 h-3 fill-current" />
            </span>
            <span>• {restaurant.time || "30-40 min"}</span>
            <span>• {restaurant.price || "₹200 for two"}</span>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
        <h2 className="text-2xl font-black text-slate-800 border-b border-slate-200 pb-4">Menu</h2>

        {menuItems.length === 0 ? (
          <div className="text-center py-10 text-slate-400">No menu items found.</div>
        ) : (
          menuItems.map((item) => (
            <div key={item.id} className="group bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex justify-between gap-4">

              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-lg text-slate-900">{item.name}</h3>
                <div className="font-black text-slate-800 text-lg mt-1">₹{item.price}</div>
                <p className="text-slate-500 text-sm mt-2 line-clamp-2">{item.desc}</p>
              </div>

              <div className="relative w-36 h-32 flex-shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover rounded-2xl shadow-sm" />

                {/* BUTTON */}
                <button
                  onClick={() => handleAdd(item)}
                  className={`absolute -bottom-3 left-1/2 -translate-x-1/2 shadow-xl rounded-xl font-bold border w-28 h-10 flex items-center justify-center transition-all active:scale-95 ${addedItems.includes(item.id)
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