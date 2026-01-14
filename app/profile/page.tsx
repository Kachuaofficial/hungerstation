"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { db } from "../../lib/firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { MapPin, LogOut, Receipt, Clock, CheckCircle2, ChevronRight, ShoppingBag, LocateFixed, Loader2 } from "lucide-react";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // State for Address
  const [currentAddress, setCurrentAddress] = useState<string>("Detecting location...");
  const [isLocating, setIsLocating] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else {
      fetchOrders();
      detectLocation(); // Page load hote hi location detect karega
    }
  }, [user]);

  // --- 1. DETECT LIVE GPS LOCATION ---
  const detectLocation = () => {
    if (!navigator.geolocation) {
      setCurrentAddress("Geolocation is not supported by your browser.");
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          // OpenStreetMap API (Free) to convert Co-ords to Address
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          
          // Address ko clean format mein set karna
          if (data && data.display_name) {
             setCurrentAddress(data.display_name);
          } else {
             setCurrentAddress("Location found, but address not available.");
          }
        } catch (error) {
          console.error("Error fetching address:", error);
          setCurrentAddress("Failed to fetch address details.");
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        setIsLocating(false);
        // Error handling
        if (error.code === 1) setCurrentAddress("Location permission denied.");
        else if (error.code === 2) setCurrentAddress("Location unavailable.");
        else setCurrentAddress("Timeout fetching location.");
      },
      { enableHighAccuracy: true } // Better accuracy for mobile/college campus
    );
  };

  // --- 2. FETCH ORDERS ---
  const fetchOrders = async () => {
    if (!user) return;
    try {
      const q = query(
        collection(db, "orders"),
        where("userId", "==", user.uid),
        orderBy("createdAt", "desc")
      );
      const snapshot = await getDocs(q);
      setOrders(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } finally {
      setTimeout(() => setLoading(false), 600);
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* DECORATIVE BACKGROUND BLOBS */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">
              My Profile
            </h1>
            <p className="text-slate-500 mt-2 font-medium">
              Manage your account and view past orders
            </p>
          </div>
          <button
            onClick={() => { logout(); router.push("/"); }}
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-white border border-red-100 text-red-600 font-bold shadow-sm hover:bg-red-50 hover:shadow-md transition-all duration-300"
          >
            <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            Logout
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* LEFT PANEL (User Info) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* PROFILE CARD */}
            <div className="group bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-8 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-400 to-red-400 rounded-full blur opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="relative w-32 h-32 p-1 bg-white rounded-full">
                  <img
                    src={user.photoURL || "/default.png"}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 border-[3px] border-white rounded-full flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-slate-800">
                {user.displayName || "Foodie User"}
              </h2>
              <p className="text-slate-500 font-medium mt-1 mb-6">
                {user.email}
              </p>

              <div className="grid grid-cols-2 gap-3">
                 <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                    <span className="block text-2xl font-black text-slate-800">{orders.length}</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Orders</span>
                 </div>
                 <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100">
                    <span className="block text-2xl font-black text-slate-800">4.9</span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Rating</span>
                 </div>
              </div>
            </div>

            {/* LIVE LOCATION ADDRESS CARD */}
            <div className="bg-white/60 backdrop-blur border border-white/60 rounded-[2rem] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                  <h3 className="flex items-center gap-2 font-bold text-slate-800">
                    <MapPin className="w-5 h-5 text-orange-500 fill-orange-500/20" />
                    Current Location
                  </h3>
                  {/* Refresh Location Button */}
                  <button 
                    onClick={detectLocation}
                    disabled={isLocating}
                    className="p-2 hover:bg-orange-100 rounded-full text-orange-600 transition-colors disabled:opacity-50" 
                    title="Refresh Location"
                  >
                    {isLocating ? <Loader2 className="w-4 h-4 animate-spin" /> : <LocateFixed className="w-4 h-4" />}
                  </button>
              </div>
              
              <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm relative overflow-hidden group min-h-[100px] flex flex-col justify-center">
                <div className="absolute top-0 right-0 px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-bold rounded-bl-xl uppercase tracking-wider animate-pulse">
                  Live GPS
                </div>
                <p className="text-sm font-medium text-slate-600 leading-relaxed mt-2">
                  {isLocating ? (
                     <span className="flex items-center gap-2 text-slate-400">
                        <Loader2 className="w-3 h-3 animate-spin" /> Fetching satellite data...
                     </span>
                  ) : (
                     currentAddress
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL (Orders) */}
          <div className="lg:col-span-8">
            <div className="bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full min-h-[500px]">
              <div className="flex items-center justify-between mb-8">
                <h3 className="flex items-center gap-3 text-2xl font-black text-slate-800">
                  <ShoppingBag className="w-6 h-6 text-slate-400" />
                  Order History
                </h3>
              </div>

              {loading ? (
                // SKELETON LOADER
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse flex items-center justify-between p-5 rounded-3xl bg-slate-50 border border-slate-100">
                      <div className="h-14 w-14 bg-slate-200 rounded-2xl" />
                      <div className="flex-1 px-4 space-y-2">
                        <div className="h-4 bg-slate-200 rounded w-1/3" />
                        <div className="h-3 bg-slate-200 rounded w-1/4" />
                      </div>
                      <div className="h-8 w-20 bg-slate-200 rounded-full" />
                    </div>
                  ))}
                </div>
              ) : orders.length === 0 ? (
                // EMPTY STATE
                <div className="h-96 flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                    <Receipt className="w-10 h-10 text-orange-300" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">No orders yet?</h4>
                  <p className="text-slate-500 max-w-xs mx-auto mb-8">
                    Looks like you haven't discovered our delicious menu yet.
                  </p>
                  <button
                    onClick={() => router.push("/")}
                    className="px-8 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-orange-600 hover:scale-105 transition-all shadow-lg shadow-orange-500/20"
                  >
                    Start Ordering
                  </button>
                </div>
              ) : (
                // ORDERS LIST
               <div className="space-y-4">
  {orders.map((order) => (
    <div
      key={order.id}
      // ✅ CHANGE 1: Click event to navigate to Tracking Page
      onClick={() => router.push(`/order/${order.id}`)}
      // ✅ CHANGE 2: Added 'cursor-pointer' so user knows it's clickable
      className="group relative bg-white hover:bg-orange-50/50 border border-slate-100 hover:border-orange-100 rounded-3xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl group-hover:bg-white group-hover:scale-110 transition-transform shadow-sm">
            🍔
          </div>
          <div>
            <h4 className="font-bold text-lg text-slate-800 group-hover:text-orange-700 transition-colors">
              {order.restaurant || "Campus Canteen"}
            </h4>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mt-1">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> {order.date}
              </span>
              <span>•</span>
              <span>#{order.id.slice(0, 6)}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto mt-2 sm:mt-0">
          <div className="text-right">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide border ${
                order.status === "Delivered"
                  ? "bg-green-50 text-green-700 border-green-100"
                  : "bg-blue-50 text-blue-700 border-blue-100"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  order.status === "Delivered" ? "bg-green-500" : "bg-blue-500"
                }`}
              />
              {order.status}
            </span>
          </div>
          <div className="text-right min-w-[80px]">
            <p className="text-lg font-black text-slate-900">₹{order.total}</p>
            <p className="text-[10px] text-slate-400 font-bold uppercase">
              Paid Online
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-colors" />
        </div>
      </div>
      <div className="my-4 border-t border-dashed border-slate-200 group-hover:border-orange-200" />
      <div className="flex flex-wrap gap-2">
        {order.items?.map((item: any, i: number) => (
          <span
            key={i}
            className="inline-block px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-xs font-semibold text-slate-600 group-hover:bg-white transition-colors"
          >
            {item.qty || 1} x {item.name || item}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}