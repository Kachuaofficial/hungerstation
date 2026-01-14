"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Minus, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  ChevronLeft, 
  CreditCard 
} from "lucide-react";

// Contexts
import { useCart } from "@/app/context/CartContext"; // Ensure path is correct
import { useAuth } from "@/app/context/AuthContext"; // Ensure path is correct

// Firebase
import { db } from "@/lib/firebase"; // Ensure path is correct
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// 👇 THIS LINE IS CRITICAL (DEFAULT EXPORT)
export default function CartPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const { user, login } = useAuth();
  const router = useRouter();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // --- CALCULATIONS ---
  const DELIVERY_FEE = cartTotal > 500 ? 0 : 40; 
  const TAX = cartTotal * 0.05; 
  const FINAL_TOTAL = cartTotal + DELIVERY_FEE + TAX;

  // --- CHECKOUT HANDLER ---
  const handleCheckout = async () => {
    if (!user) {
      alert("Please login to place an order!");
      login();
      return;
    }

    setIsCheckingOut(true);

    try {
      const orderData = {
        userId: user.uid,
        items: cart.map(item => ({
          name: item.name,
          price: item.price,
          qty: item.quantity || 1 
        })), 
        total: FINAL_TOTAL,
        status: "Preparing",
        date: new Date().toLocaleDateString(),
        restaurant: cart[0]?.restaurant || "HungerStation Order", 
        createdAt: serverTimestamp()
      };

      console.log("🚀 Uploading order:", orderData);

      await addDoc(collection(db, "orders"), orderData);
      
      clearCart();
      router.push("/profile"); 
      
    } catch (error: any) {
      console.error("❌ Checkout Error:", error);
      if (error.code === "permission-denied") {
        alert("Permission Error: Check Firebase Rules.");
      } else {
        alert(`Order Failed: ${error.message}`);
      }
    } finally {
      setIsCheckingOut(false);
    }
  };

  // --- EMPTY STATE ---
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-white p-6 rounded-full shadow-lg mb-6">
          <ShoppingBag className="w-16 h-16 text-slate-300" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Your Cart is Empty</h1>
        <Link href="/" className="mt-6 bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-700 transition-all flex items-center gap-2">
          <ChevronLeft className="w-5 h-5" /> Browse Restaurants
        </Link>
      </div>
    );
  }

  // --- MAIN CART UI ---
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="flex items-center gap-4 mb-8">
           <Link href="/" className="p-2 bg-white rounded-full border hover:bg-slate-100">
              <ChevronLeft className="w-6 h-6 text-slate-600" />
           </Link>
           <h1 className="text-3xl font-black text-slate-900">My Cart</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* ITEMS LIST */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 bg-slate-100 rounded-2xl overflow-hidden">
                   <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                   <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
                   <div className="text-slate-500 text-sm font-medium">₹{item.price}</div>
                </div>
                <div className="flex flex-col items-end gap-3">
                   <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-1">
                      <button onClick={() => decreaseQuantity(item.id)} className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:text-orange-600"><Minus className="w-4 h-4" /></button>
                      <span className="font-black text-slate-900 w-4 text-center">{item.quantity}</span>
                      <button onClick={() => addToCart(item)} className="w-8 h-8 flex items-center justify-center bg-white rounded-lg hover:text-green-600"><Plus className="w-4 h-4" /></button>
                   </div>
                   <button onClick={() => removeFromCart(item.id)} className="text-xs font-bold text-red-500 flex items-center gap-1"><Trash2 className="w-3 h-3" /> Remove</button>
                </div>
              </div>
            ))}
          </div>

          {/* BILL SUMMARY */}
          <div className="lg:col-span-1">
             <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg sticky top-24">
                <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2"><CreditCard className="w-5 h-5 text-orange-600" /> Bill Details</h2>
                
                <div className="space-y-3 mb-6">
                   <div className="flex justify-between text-slate-600"><span>Item Total</span><span className="font-bold">₹{cartTotal.toFixed(2)}</span></div>
                   <div className="flex justify-between text-slate-600"><span>Delivery Fee</span><span className="font-bold">₹{DELIVERY_FEE}</span></div>
                   <div className="flex justify-between text-slate-600"><span>Taxes (5%)</span><span className="font-bold">₹{TAX.toFixed(2)}</span></div>
                </div>

                <div className="border-t border-dashed border-slate-300 my-4 pt-4 flex justify-between items-center">
                   <span className="text-lg font-bold text-slate-900">To Pay</span>
                   <span className="text-2xl font-black text-slate-900">₹{FINAL_TOTAL.toFixed(2)}</span>
                </div>

                <button onClick={handleCheckout} disabled={isCheckingOut} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-xl flex items-center justify-center gap-2 disabled:opacity-70">
                   {isCheckingOut ? "Processing..." : "Place Order"} {!isCheckingOut && <ArrowRight className="w-5 h-5" />}
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}