"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  ShoppingBag, 
  Star, 
  Plus, 
  ArrowRight, 
  MapPin, 
  Loader2, 
  Clock 
} from "lucide-react";
import { useCart } from "./context/CartContext";
import { useAuth } from "./context/AuthContext";
// 1. Import your centralized data
import { restaurants } from "@/lib/sampleData"; 

// --- STATIC VISUAL DATA (Keep these for Layout Design) ---
const BRANDS = [
  { id: "dominos", name: "Domino's", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png" },
  { id: "mcdonalds", name: "McDonald's", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png" },
  { id: "kfc", name: "KFC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png" },
  { id: "starbucks", name: "Starbucks", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" },
  { id: "subway", name: "Subway", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subway_2016_logo.svg/1200px-Subway_2016_logo.svg.png" },
  { id: "burgerking", name: "Burger King", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png" },
];

const PROMO_BANNERS = [
  { id: 1, title: "Grilled Double Cheese Burger", color: "bg-fuchsia-600", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400" },
  { id: 2, title: "Tasty Yummy Cheesy Pizza", color: "bg-amber-400", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=400" },
  { id: 3, title: "Galaxy Donuts Time!", color: "bg-rose-500", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=400" },
  { id: 4, title: "Fresh Veggie Sandwich", color: "bg-lime-400", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=400" },
];

const DISCOUNTED_GOODS = [
  { id: "d1", name: "Margherita Bliss", restaurant: "Domino's", price: 200, oldPrice: 400, rating: 4.5, img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=400" },
  { id: "d2", name: "Pepperoni Paradise", restaurant: "Pizza Hut", price: 250, oldPrice: 500, rating: 4.6, img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=400" },
  { id: "d3", name: "Veggie Delight", restaurant: "Subway", price: 150, oldPrice: 300, rating: 4.8, img: "https://images.unsplash.com/photo-1593560708920-639843547177?q=80&w=400" },
  { id: "d4", name: "Classic Beef Royale", restaurant: "Burger King", price: 199, oldPrice: 399, rating: 4.6, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400" },
  { id: "d5", name: "Spicy Chicken", restaurant: "KFC", price: 180, oldPrice: 360, rating: 4.7, img: "https://images.unsplash.com/photo-1615297926180-410766047333?q=80&w=400" },
];

// --- HEADER COMPONENT ---
function Header() {
  const { cartCount } = useCart();
  const { user, login } = useAuth();
  const [location, setLocation] = useState("Gorakhpur, UP"); // Default
  const [locLoading, setLocLoading] = useState(false);

  const detectLocation = () => {
    setLocLoading(true);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        try {
          // Free OpenStreetMap API to get City Name
          const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
          const data = await res.json();
          const city = data.address.city || data.address.town || data.address.suburb || "Gorakhpur";
          setLocation(city);
        } catch(e) { setLocation("Gorakhpur"); }
        finally { setLocLoading(false); }
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
           <div className="bg-yellow-400 text-white font-black text-2xl p-1 rounded">N</div>
           <div className="font-bold text-2xl text-slate-800">Good<span className="text-orange-600">Food</span></div>
        </Link>

        {/* Location & Search (Desktop) */}
        <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-96 gap-2 border border-transparent focus-within:border-orange-200 transition-colors">
           <button onClick={detectLocation} className="flex items-center gap-1 text-xs font-bold text-slate-600 border-r border-slate-300 pr-3 hover:text-orange-600 whitespace-nowrap min-w-fit">
              {locLoading ? <Loader2 className="w-3 h-3 animate-spin" /> : <MapPin className="w-3 h-3 text-orange-600" />}
              {location}
           </button>
           <input type="text" placeholder="Search for food..." className="bg-transparent text-sm outline-none w-full text-slate-700 placeholder:text-slate-400" />
           <Search className="w-4 h-4 text-slate-400" />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <Link 
  href="/cart" 
  className="relative p-2 hover:bg-slate-100 rounded-full transition-colors"
>
  <ShoppingBag className="w-6 h-6 text-slate-700" />
  {cartCount > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in">
      {cartCount}
    </span>
  )}
</Link>
          {user ? (
            <Link href="/profile">
               <Image 
                src={user.photoURL || "/default.png"} 
                alt="User" 
                width={38} 
                height={38} 
                className="rounded-full border-2 border-white shadow-sm hover:border-orange-500 transition-colors" 
               />
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

// --- MAIN PAGE ---
export default function Home() {
  const { addToCart } = useCart();

  return (
    <main className="min-h-screen bg-white pb-20">
      <Header />

      {/* --- HERO BANNER (Bento Style) --- */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-amber-400 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl">
           <div className="relative z-10 max-w-lg text-center md:text-left">
             <span className="bg-white/30 backdrop-blur-sm text-amber-900 font-bold px-3 py-1 rounded-full text-xs uppercase mb-4 inline-block">Free Delivery</span>
             <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-sm">
               TASTE OF <br/><span className="text-amber-100">GORAKHPUR</span>
             </h1>
             <p className="text-amber-900 font-medium text-lg mb-8">Order from Baati Chokha, Rangrezza, Zunoon and 20+ more.</p>
             <Link href="#nearby" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-700 transition-all inline-flex items-center gap-2 hover:-translate-y-1">
               Order Now <ArrowRight className="w-5 h-5" />
             </Link>
           </div>
           
           {/* Hero Image */}
           <div className="mt-8 md:mt-0 md:absolute md:-right-20 md:-bottom-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
              <Image src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000" alt="Food" fill className="object-cover rounded-full shadow-2xl" priority />
           </div>
        </div>
      </section>

      {/* --- NATIONAL BRANDS --- */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-center font-bold text-slate-400 text-sm uppercase tracking-wider mb-6">National Brands</h3>
        <div className="flex flex-wrap justify-center gap-6">
           {BRANDS.map(b => (
             <Link key={b.id} href={`/restaurants/${b.id}`} className="w-20 h-20 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center p-4 hover:scale-110 hover:border-orange-200 transition-all cursor-pointer">
               <div className="relative w-full h-full">
                  <Image src={b.logo} alt={b.name} fill className="object-contain" />
               </div>
             </Link>
           ))}
        </div>
      </section>

      {/* --- RESTAURANTS NEAR YOU (INTEGRATED WITH sampleData) --- */}
      <section id="nearby" className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
             <MapPin className="w-6 h-6 text-orange-600" /> Restaurants Near You
           </h2>
           <div className="text-slate-400 text-sm font-medium">{restaurants.length} outlets</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* Mapping over ALL restaurants from sampleData */}
           {restaurants.map((res) => (
             <Link key={res.id} href={`/restaurants/${res.id}`} className="group block bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
               {/* Card Image */}
               <div className="relative h-56 w-full bg-slate-100">
                  <Image src={res.image} alt={res.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm text-slate-700">
                     <Clock className="w-3 h-3 text-slate-400" /> {res.deliveryTime}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-lg">
                     {res.rating} <Star className="w-3 h-3 fill-current" />
                  </div>
               </div>
               
               {/* Card Content */}
               <div className="p-5">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate pr-2">{res.name}</h3>
                  </div>
                  <p className="text-slate-500 text-sm mb-3 truncate">{res.tags.join(", ")} • {res.address}</p>
                  
                  <div className="flex items-center gap-2 mt-4">
                     {res.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md">
                           {tag}
                        </span>
                     ))}
                     <span className="text-xs font-bold text-orange-600 ml-auto group-hover:underline">View Menu</span>
                  </div>
               </div>
             </Link>
           ))}
        </div>
      </section>

      {/* --- COLOR BANNERS --- */}
      <section id="menu" className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {PROMO_BANNERS.map((item) => (
             <div key={item.id} className={`${item.color} rounded-[2rem] h-64 relative overflow-hidden p-6 group cursor-pointer transition-transform hover:-translate-y-2`}>
                <h3 className="text-white font-black text-2xl leading-tight w-2/3 relative z-10">{item.title}</h3>
                <div className="mt-4 inline-flex items-center gap-1 text-white text-sm font-bold underline decoration-2 underline-offset-4 relative z-10">
                  Order Now <ArrowRight className="w-4 h-4" />
                </div>
                <div className="absolute -right-8 -bottom-8 w-48 h-48 transition-transform group-hover:scale-110 group-hover:rotate-6">
                   <Image src={item.img} alt={item.title} fill className="object-cover rounded-full shadow-2xl" />
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* --- DISCOUNTED GOODS --- */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-2 mb-8">
           <ShoppingBag className="w-6 h-6 text-slate-900" />
           <h2 className="text-2xl font-bold text-slate-900">Discounted Goods</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
           {DISCOUNTED_GOODS.map((item) => (
             <div key={item.id} className="bg-white rounded-3xl p-3 border border-slate-100 hover:shadow-xl transition-all group">
                <div className="relative h-40 w-full mb-3 rounded-2xl overflow-hidden bg-slate-50">
                   <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-2 right-2 bg-white px-1.5 py-0.5 rounded text-[10px] font-bold shadow-sm flex items-center gap-0.5">
                      <Star className="w-3 h-3 text-orange-500 fill-current" /> {item.rating}
                   </div>
                </div>
                
                <h3 className="font-bold text-slate-900 text-sm mb-1 truncate">{item.name}</h3>
                <p className="text-xs text-slate-400 mb-3">{item.restaurant}</p>
                
                <div className="flex items-center justify-between">
                   <div className="flex flex-col leading-none">
                      <span className="text-[10px] text-slate-400 line-through">₹{item.oldPrice}</span>
                      <span className="text-lg font-black text-slate-900">₹{item.price}</span>
                   </div>
                   <button 
                     onClick={() => addToCart({ ...item, id: item.id, desc: "Discounted Item" })}
                     className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 flex items-center gap-1 active:scale-95"
                   >
                     Add <Plus className="w-3 h-3" />
                   </button>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <section id="contact" className="mt-12 py-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-t-[3rem] border-t border-orange-100">
         <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <div className="bg-white p-3 rounded-full shadow-md mb-4">
               <div className="bg-orange-100 p-2 rounded-full">
                  <Star className="w-6 h-6 text-orange-600 fill-current" />
               </div>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Little Bite About Us</h2>
            <p className="text-slate-600 max-w-2xl leading-relaxed mb-8">
               We are a team of passionate foodies bringing you the best flavors from around the campus. 
               Fresh ingredients, bold tastes, and lightning-fast delivery right to your hostel door.
            </p>
            <div className="text-sm font-bold text-slate-400">&copy; 2025 GoodFood Project.</div>
         </div>
      </section>

    </main>
  );
}