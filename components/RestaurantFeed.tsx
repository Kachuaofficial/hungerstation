"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Star, Loader2, ArrowDown } from "lucide-react";
import { collection, query, limit, startAfter, getDocs, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase"; // Ensure this matches your firebase config path

const ITEMS_PER_PAGE = 6;

export default function RestaurantFeed() {
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [lastDoc, setLastDoc] = useState<any>(null); // For pagination cursor
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // 1. Initial Fetch
  useEffect(() => {
    const fetchInitial = async () => {
      setLoading(true);
      try {
        // Order by 'name' ensures consistent pagination
        const q = query(
            collection(db, "restaurants"), 
            orderBy("name"), 
            limit(ITEMS_PER_PAGE)
        );
        const snapshot = await getDocs(q);
        
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRestaurants(data);
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
        
        if (snapshot.docs.length < ITEMS_PER_PAGE) setHasMore(false);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
      setLoading(false);
    };

    fetchInitial();
  }, []);

  // 2. Load More Function
  const loadMore = async () => {
    if (!lastDoc || loading) return;
    setLoading(true);

    try {
      const q = query(
        collection(db, "restaurants"),
        orderBy("name"),
        startAfter(lastDoc),
        limit(ITEMS_PER_PAGE)
      );
      const snapshot = await getDocs(q);
      
      const newBatch = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      if (newBatch.length < ITEMS_PER_PAGE) setHasMore(false);
      
      setRestaurants(prev => [...prev, ...newBatch]);
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    } catch (error) {
      console.error("Error loading more:", error);
    }
    setLoading(false);
  };

  return (
    <section id="nearby" className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
         <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
           <MapPin className="w-6 h-6 text-orange-600" /> Restaurants Near You
         </h2>
         <div className="text-slate-400 text-sm font-medium">
            {restaurants.length} Loaded
         </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {restaurants.map((res: any) => (
           <Link key={res.id} href={`/restaurants/${res.id}`} className="group block bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
             <div className="relative h-56 w-full bg-slate-100">
               <Image 
                  src={res.image || "/placeholder-food.jpg"} 
                  alt={res.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized={true}
               />
               <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm text-slate-700">
                  <Clock className="w-3 h-3 text-slate-400" /> {res.deliveryTime}
               </div>
               <div className="absolute bottom-4 left-4 bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-lg">
                  {res.rating} <Star className="w-3 h-3 fill-current" />
               </div>
             </div>
             
             <div className="p-5">
               <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate">{res.name}</h3>
               <p className="text-slate-500 text-sm mb-3 truncate">
                  {Array.isArray(res.tags) ? res.tags.join(", ") : res.tags} • {res.address}
               </p>
               <div className="flex items-center gap-2 mt-4">
                  {Array.isArray(res.tags) && res.tags.slice(0, 2).map((tag: string, i: number) => (
                     <span key={i} className="text-[10px] uppercase font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                  <span className="text-xs font-bold text-orange-600 ml-auto group-hover:underline">View Menu</span>
               </div>
             </div>
           </Link>
         ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center mt-12">
          <button 
            onClick={loadMore} 
            disabled={loading}
            className="bg-slate-900 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all flex items-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <ArrowDown className="w-5 h-5" />}
            {loading ? "Loading..." : "Load More Restaurants"}
          </button>
        </div>
      )}
      
      {!hasMore && restaurants.length > 0 && (
         <p className="text-center text-slate-400 mt-8 text-sm font-medium">You've reached the end of the list!</p>
      )}
    </section>
  );
}