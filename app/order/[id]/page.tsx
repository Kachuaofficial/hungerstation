"use client";

import { useState, useEffect, use } from "react"; 
import { useRouter } from "next/navigation";
import { db } from "@/lib/firebase"; // Make sure path is correct
import { doc, getDoc } from "firebase/firestore";
import { 
  ChevronLeft, Phone, MessageSquare, Clock, 
  ChefHat, Bike, Star, TicketPercent, Home, Store, 
  Loader2, MapPin, CheckCircle2, Receipt
} from "lucide-react";

// --- SMART ADDRESS MAPPER (Fallback if DB misses address) ---
const getRestaurantAddress = (name: string) => {
  const lowerName = name?.toLowerCase() || "";
  if (lowerName.includes("domino")) return "City Mall, Gorakhpur";
  if (lowerName.includes("kfc")) return "AD Mall, Golghar, Gorakhpur";
  if (lowerName.includes("rangrezza")) return "Golghar, Gorakhpur";
  if (lowerName.includes("baati")) return "Betiahata, Gorakhpur";
  if (lowerName.includes("zunoon")) return "Medical College Road, Gorakhpur";
  return "MMMUT Market, Gorakhpur"; // Default
};

export default function OrderTrackingPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params); 
  
  // --- STATE ---
  const [order, setOrder] = useState<any>(null); // Store fetched order
  const [loading, setLoading] = useState(true);
  
  const [eta, setEta] = useState(25); 
  const [userAddress, setUserAddress] = useState("Detecting location...");
  const [isLocating, setIsLocating] = useState(true);
  const [progressStep, setProgressStep] = useState(1); 

  // --- 1. FETCH ORDER FROM FIREBASE ---
  useEffect(() => {
    const fetchOrder = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "orders", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setOrder({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such order!");
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  // --- 2. DETECT USER LOCATION ---
  useEffect(() => {
    if (!navigator.geolocation) {
      setUserAddress("Location not supported");
      setIsLocating(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          if (data && data.display_name) {
            setUserAddress(data.display_name.split(",").slice(0, 3).join(", "));
          } else {
            setUserAddress("Gorakhpur, UP");
          }
        } catch (error) {
          setUserAddress("Gorakhpur, UP");
        } finally {
          setIsLocating(false);
        }
      },
      () => {
        setUserAddress("MMMUT Campus, Gorakhpur");
        setIsLocating(false);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-orange-600 animate-spin" />
      </div>
    );
  }

  // Fallback variables if order is null (safety)
  const restaurantName = order?.restaurant || "Campus Restaurant";
  const restaurantAddress = order?.restaurantAddress || getRestaurantAddress(restaurantName);
  const orderItems = order?.items?.map((i: any) => i.name).join(", ") || "Delicious Meal";

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* --- WEB HEADER --- */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <button 
                onClick={() => router.back()} 
                className="w-10 h-10 flex items-center justify-center hover:bg-slate-100 rounded-full transition-colors border border-slate-200"
              >
                <ChevronLeft className="w-5 h-5 text-slate-700" />
              </button>
              <div>
                <h1 className="text-xl font-black text-slate-900 tracking-tight">Order Tracking</h1>
                <p className="text-xs text-slate-500 font-medium">Order #{id ? id.slice(0, 8) : "..."}</p>
              </div>
           </div>
           
           <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors">
                 <Receipt className="w-4 h-4" /> View Invoice
              </button>
              <button className="text-sm font-bold text-orange-600 bg-orange-50 hover:bg-orange-100 px-6 py-2.5 rounded-full transition-colors">
                Help & Support
              </button>
           </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT GRID --- */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-12 gap-10">
          
          {/* --- LEFT COLUMN: DETAILS & STATUS (7 Cols) --- */}
          <div className="lg:col-span-7 space-y-8">
             
             {/* 1. STATUS CARD */}
             <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className="flex items-start justify-between mb-8">
                   <div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-bold uppercase tracking-wide mb-4 shadow-lg shadow-slate-200">
                         <Clock className="w-4 h-4 text-orange-400" /> Arriving in {eta} mins
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                         Preparing your Order
                      </h2>
                      {/* DYNAMIC RESTAURANT NAME */}
                      <p className="text-slate-500 font-medium mt-2 text-lg">
                         The chef at <span className="text-slate-900 font-bold">{restaurantName}</span> is crafting your meal.
                      </p>
                      <p className="text-sm text-slate-400 mt-1 line-clamp-1">Items: {orderItems}</p>
                   </div>
                   <div className="hidden sm:block p-4 bg-orange-50 rounded-full">
                      <ChefHat className="w-12 h-12 text-orange-600 animate-bounce" />
                   </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 rounded-full" />
                    <div className="absolute top-1/2 left-0 h-1 bg-orange-500 -translate-y-1/2 rounded-full transition-all duration-1000" style={{ width: '40%' }} />
                    
                    <div className="relative flex justify-between z-10">
                        {['Placed', 'Preparing', 'On Way', 'Delivered'].map((step, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 transition-all duration-500 ${
                                    idx <= progressStep 
                                    ? 'bg-orange-500 border-orange-100 text-white shadow-lg' 
                                    : 'bg-white border-slate-100 text-slate-300'
                                }`}>
                                   {idx < progressStep ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2.5 h-2.5 bg-current rounded-full" />}
                                </div>
                                <span className={`text-xs font-bold uppercase tracking-wider ${idx === progressStep ? 'text-slate-900' : 'text-slate-400'}`}>
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
             </div>

             {/* 2. DRIVER & COUPON GRID */}
             <div className="grid md:grid-cols-2 gap-6">
                
                {/* Driver Card */}
                <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between h-full">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="relative">
                            <img 
                                src="https://api.dicebear.com/9.x/avataaars/svg?seed=Raju" 
                                alt="Driver" 
                                className="w-16 h-16 rounded-2xl bg-slate-50 object-cover border-2 border-slate-100"
                            />
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></div>
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Raju Bhai</h4>
                            <div className="flex items-center gap-1.5 text-sm font-medium text-slate-500 mt-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" /> 4.8 Rating
                            </div>
                            <span className="text-[10px] font-bold text-slate-400 mt-1 block">Vehicle: UP 53 AB 9999</span>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-auto">
                         <button className="flex-1 h-12 rounded-xl bg-slate-50 flex items-center justify-center gap-2 text-slate-700 font-bold hover:bg-slate-900 hover:text-white transition-all">
                            <MessageSquare className="w-5 h-5" /> Chat
                         </button>
                         <button className="flex-1 h-12 rounded-xl bg-green-50 flex items-center justify-center gap-2 text-green-700 font-bold hover:bg-green-600 hover:text-white transition-all">
                            <Phone className="w-5 h-5" /> Call
                         </button>
                    </div>
                </div>

                {/* Coupon Card */}
                <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 text-white shadow-xl shadow-indigo-200 relative overflow-hidden flex flex-col justify-between h-full">
                    <div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10">
                        <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm mb-4">
                           <TicketPercent className="w-6 h-6 text-white" />
                        </div>
                        <p className="text-indigo-100 font-medium text-sm uppercase tracking-wide">Total Savings</p>
                        <p className="text-3xl font-black mt-1">₹45.00</p>
                    </div>
                    <div className="relative z-10 mt-6 pt-6 border-t border-white/20">
                        <p className="text-sm font-medium text-indigo-100">
                           Code <span className="bg-white text-indigo-700 px-2 py-0.5 rounded font-bold mx-1">MMMUT50</span> applied
                        </p>
                    </div>
                </div>
             </div>
          </div>

          {/* --- RIGHT COLUMN: LIVE ROUTE (5 Cols - Sticky) --- */}
          <div className="lg:col-span-5">
             <div className="sticky top-28 space-y-6">
                
                {/* Visual Route Card */}
                <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden min-h-[500px] flex flex-col">
                    <div className="absolute top-0 right-0 bg-orange-50 px-4 py-2 rounded-bl-3xl border-b border-l border-orange-100">
                        <span className="text-xs font-bold text-orange-700 uppercase tracking-wider flex items-center gap-2">
                           <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"/> Live Status
                        </span>
                    </div>

                    <h3 className="font-black text-slate-900 text-xl mb-8 flex items-center gap-2">
                        <MapPin className="w-6 h-6 text-slate-400" /> Route Details
                    </h3>

                    {/* Timeline Container */}
                    <div className="flex-1 relative pl-4">
                        <div className="absolute left-[27px] top-12 bottom-12 w-0.5 border-l-2 border-slate-300 border-dashed" />

                        {/* DYNAMIC RESTAURANT NODE */}
                        <div className="relative z-10 flex items-start gap-6 mb-12">
                            <div className="w-14 h-14 rounded-full bg-white border-4 border-orange-100 shadow-sm flex items-center justify-center shrink-0 z-20 relative">
                                <Store className="w-6 h-6 text-orange-600" />
                                {progressStep <= 1 && (
                                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center shadow-lg border-2 border-white z-30 animate-pulse">
                                        <Bike className="w-4 h-4 text-white" />
                                    </div>
                                )}
                            </div>
                            <div className="pt-2">
                                <h4 className="font-bold text-slate-900 text-lg">{restaurantName}</h4>
                                <p className="text-sm text-slate-500">{restaurantAddress}</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full">
                                    {progressStep <= 1 ? "Driver Waiting at Restaurant" : "Order Picked Up"}
                                </span>
                            </div>
                        </div>

                        {/* DYNAMIC MOVING BIKE */}
                        {progressStep === 2 && (
                            <div className="relative z-10 pl-3 mb-12 animate-bounce">
                                <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center shadow-lg transform -rotate-12">
                                    <Bike className="w-5 h-5 text-white" />
                                </div>
                            </div>
                        )}
                        {progressStep !== 2 && <div className="h-12 w-full" />}

                        {/* DYNAMIC USER NODE */}
                        <div className="relative z-10 flex items-start gap-6">
                            <div className="w-14 h-14 rounded-full bg-white border-4 border-green-100 shadow-sm flex items-center justify-center shrink-0 z-20">
                                <Home className="w-6 h-6 text-green-600" />
                            </div>
                            <div className="pt-2">
                                <h4 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                                    Your Location
                                    {isLocating && <Loader2 className="w-4 h-4 animate-spin text-slate-400"/>}
                                </h4>
                                <p className="text-sm text-slate-600 font-medium leading-relaxed max-w-[250px]">
                                    {userAddress}
                                </p>
                                <span className="inline-block mt-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full">
                                    Destination
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-100 rounded-3xl p-6 text-center border border-slate-200">
                    <p className="text-slate-500 text-sm font-medium">
                        Having trouble with this order?
                    </p>
                    <button className="text-slate-900 font-bold text-sm underline mt-1 hover:text-orange-600">
                        Contact Support
                    </button>
                </div>

             </div>
          </div>
        </div>
      </main>
    </div>
  );
}