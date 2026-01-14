"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // To navigate on click
import { Search, ShoppingBag, MapPin, Loader2, X } from "lucide-react";
import { useCart } from "@/app/context/CartContext";
import { useAuth } from "@/app/context/AuthContext";
import { seedDatabase } from "@/lib/seed";

// --- FIRESTORE IMPORTS ---
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function Header() {
  const { cartCount } = useCart();
  const { user, login } = useAuth();
  const router = useRouter();

  // Location State
  const [location, setLocation] = useState("Lucknow, UP");
  const [locLoading, setLocLoading] = useState(false);

  // --- SEARCH STATE ---
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [allRestaurants, setAllRestaurants] = useState<any[]>([]); // Cache data here
  const [dataLoaded, setDataLoaded] = useState(false);
  
  // Close dropdown when clicking outside
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setIsSearching(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- 1. FETCH DATA ONCE (On Focus) ---
  const handleSearchFocus = async () => {
    setIsSearching(true);
    if (dataLoaded) return; // Don't fetch if already loaded

    try {
      const q = query(collection(db, "restaurants"), orderBy("name"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllRestaurants(data);
      setDataLoaded(true);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  // --- 2. FILTER LOGIC ---
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }

    const lowerQ = query.toLowerCase();
    
    // Filter by Name, Cuisine, or Tags
    const filtered = allRestaurants.filter((res: any) => 
      res.name?.toLowerCase().includes(lowerQ) || 
      res.cuisine?.toLowerCase().includes(lowerQ) ||
      (res.tags && res.tags.some((tag: string) => tag.toLowerCase().includes(lowerQ)))
    );

    setSearchResults(filtered.slice(0, 5)); // Show top 5 results
  };

  // --- 3. HANDLE NAVIGATION ---
  const handleResultClick = (id: string) => {
    router.push(`/restaurants/${id}`);
    setIsSearching(false);
    setSearchQuery("");
  };

  // Location Logic (Existing)
  const detectLocation = () => {
    setLocLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        try {
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
          const data = await res.json();
          const city = data.address.city || data.address.town || "Gorakhpur";
          setLocation(city);
        } catch (e) { setLocation("Lucknow"); }
        finally { setLocLoading(false); }
      });
    } else {
      setLocLoading(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-yellow-400 text-white font-black text-2xl p-1 rounded group-hover:rotate-12 transition-transform">N</div>
          <div className="font-bold text-2xl text-slate-800">Hunger<span className="text-orange-600">Station</span></div>
        </Link>

        {/* --- SEARCH BAR SECTION (Modified) --- */}
        <div 
          ref={searchContainerRef}
          className="hidden lg:flex flex-col relative"
        >
          {/* Input Field */}
          <div className="flex items-center bg-slate-100 rounded-full px-4 py-2 w-96 gap-2 border border-transparent focus-within:border-orange-200 transition-colors z-20 relative">
            <button onClick={detectLocation} className="flex items-center gap-1 text-xs font-bold text-slate-600 border-r border-slate-300 pr-3 hover:text-orange-600 whitespace-nowrap min-w-fit">
              {locLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <MapPin className="w-3 h-3 text-orange-600" />}
              {location}
            </button>
            
            <input 
              type="text" 
              value={searchQuery}
              onFocus={handleSearchFocus}
              onChange={handleSearchInput}
              placeholder="Search for food..." 
              className="bg-transparent text-sm outline-none w-full text-slate-700 placeholder:text-slate-400" 
            />
            
            {searchQuery ? (
              <X onClick={() => {setSearchQuery(""); setSearchResults([]);}} className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
            ) : (
              <Search className="w-4 h-4 text-slate-400" />
            )}
          </div>

          {/* --- SEARCH DROPDOWN RESULTS --- */}
          {isSearching && searchQuery && (
            <div className="absolute top-12 left-0 right-0 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in fade-in slide-in-from-top-2">
              {searchResults.length > 0 ? (
                <ul>
                  {searchResults.map((res) => (
                    <li 
                      key={res.id} 
                      onClick={() => handleResultClick(res.id)}
                      className="flex items-center gap-3 p-3 hover:bg-orange-50 cursor-pointer transition-colors border-b border-slate-50 last:border-none"
                    >
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200">
                        {/* Using Image component safely */}
                         <img src={res.image || "/default_cover.jpg"} alt={res.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{res.name}</h4>
                        <p className="text-[10px] text-slate-500 uppercase">{res.cuisine} • {res.deliveryTime}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 text-center text-sm text-slate-400">
                  No restaurants found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

       

        {/* Icons */}
        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ShoppingBag className="w-6 h-6 text-slate-700" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in">
                {cartCount}
              </span>
            )}
          </Link>
          {user ? (
            <Link href="/profile">
              <Image src={user.photoURL || "/default.png"} alt="User" width={38} height={38} className="rounded-full border-2 border-white shadow-sm hover:border-orange-500 transition-colors" />
            </Link>
          ) : (
            <button onClick={login} className="px-6 py-2 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}