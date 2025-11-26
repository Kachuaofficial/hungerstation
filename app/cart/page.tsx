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
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

// Firebase
import { db } from "../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function CartPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const { user, login } = useAuth();
  const router = useRouter();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // --- CALCULATIONS ---
  const DELIVERY_FEE = cartTotal > 500 ? 0 : 40; // Free delivery above 500
  const TAX = cartTotal * 0.05; // 5% GST
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
      // 1. Save Order to Firestore
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        items: cart.map(item => item.name), // Saving item names
        total: FINAL_TOTAL,
        status: "Preparing", // Initial status
        date: new Date().toLocaleDateString(),
        restaurant: cart[0]?.restaurant || "Mixed Order", // Simplified restaurant name
        createdAt: serverTimestamp()
      });

      // 2. Clear Cart & Redirect
      clearCart();
      router.push("/profile"); // Send user to profile to see their new order
      
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  // --- EMPTY STATE ---
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
        <div className="bg-white p-6 rounded-full shadow-lg mb-6 animate-in zoom-in duration-500">
          <ShoppingBag className="w-16 h-16 text-slate-300" />
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-2">Your Cart is Empty</h1>
        <p className="text-slate-500 mb-8 max-w-md">
          Looks like you haven't added anything yet. Go ahead and explore our delicious menu!
        </p>
        <Link 
          href="/" 
          className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-200 hover:bg-orange-700 transition-all hover:-translate-y-1 flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" /> Browse Restaurants
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
           <Link href="/" className="p-2 bg-white rounded-full border border-slate-200 hover:bg-slate-100 transition-colors">
              <ChevronLeft className="w-6 h-6 text-slate-600" />
           </Link>
           <h1 className="text-3xl font-black text-slate-900">My Cart</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* --- LEFT: CART ITEMS --- */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 transition-all hover:shadow-md">
                
                {/* Image */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-slate-100 rounded-2xl overflow-hidden">
                   <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                {/* Info */}
                <div className="flex-1">
                   <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">{item.name}</h3>
                   <div className="text-slate-500 text-sm font-medium">₹{item.price}</div>
                </div>

                {/* Controls */}
                <div className="flex flex-col items-end gap-3">
                   {/* Quantity */}
                   <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-1">
                      <button 
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-600 hover:text-orange-600 active:scale-95 transition-all"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-black text-slate-900 w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => addToCart(item)}
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-slate-600 hover:text-green-600 active:scale-95 transition-all"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                   </div>
                   {/* Remove */}
                   <button 
                     onClick={() => removeFromCart(item.id)}
                     className="text-xs font-bold text-red-500 flex items-center gap-1 hover:underline"
                   >
                     <Trash2 className="w-3 h-3" /> Remove
                   </button>
                </div>

              </div>
            ))}
          </div>

          {/* --- RIGHT: BILL SUMMARY --- */}
          <div className="lg:col-span-1">
             <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-lg sticky top-24">
                <h2 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                   <CreditCard className="w-5 h-5 text-orange-600" /> Bill Details
                </h2>

                <div className="space-y-3 mb-6">
                   <div className="flex justify-between text-slate-600">
                      <span>Item Total</span>
                      <span className="font-bold">₹{cartTotal.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between text-slate-600">
                      <span className="flex items-center gap-1">Delivery Fee {cartTotal > 500 && <span className="bg-green-100 text-green-700 text-[10px] px-1 rounded font-bold">FREE</span>}</span>
                      <span className="font-bold">₹{DELIVERY_FEE}</span>
                   </div>
                   <div className="flex justify-between text-slate-600">
                      <span>GST & Taxes (5%)</span>
                      <span className="font-bold">₹{TAX.toFixed(2)}</span>
                   </div>
                </div>

                <div className="border-t border-dashed border-slate-300 my-4 pt-4 flex justify-between items-center">
                   <span className="text-lg font-bold text-slate-900">To Pay</span>
                   <span className="text-2xl font-black text-slate-900">₹{FINAL_TOTAL.toFixed(2)}</span>
                </div>

                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-xl shadow-slate-200 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isCheckingOut ? "Placing Order..." : "Place Order"} 
                  {!isCheckingOut && <ArrowRight className="w-5 h-5" />}
                </button>

                <div className="mt-4 text-center">
                   <p className="text-xs text-slate-400">
                      By placing an order, you agree to our Terms & Conditions.
                   </p>
                </div>

             </div>
          </div>

        </div>
      </div>
    </div>
  );
}