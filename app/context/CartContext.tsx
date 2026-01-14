"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "./AuthContext";
import { db } from "../../lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  restaurant: string;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: any) => { success: boolean; error?: string };
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { user } = useAuth();

  // 1. LOAD CART (Nested Path)
  useEffect(() => {
    if (!user) { setCart([]); return; }

    const loadCart = async () => {
      try {
        // Path: users/{uid}/cart/default
        const docRef = doc(db, "users", user.uid, "cart", "default");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setCart(docSnap.data().items || []);
        }
      } catch (error) { console.error("Error loading cart:", error); }
    };
    loadCart();
  }, [user]);

  // 2. SAVE CART (Nested Path)
  useEffect(() => {
    if (!user || cart.length === 0) return;

    const saveCart = async () => {
      try {
        const docRef = doc(db, "users", user.uid, "cart", "default");
        await setDoc(docRef, { items: cart, updatedAt: new Date() });
      } catch (error) { console.error("Error saving cart:", error); }
    };
    
    const timeout = setTimeout(saveCart, 500);
    return () => clearTimeout(timeout);
  }, [cart, user]);


  // --- ACTIONS ---

  const addToCart = (product: any) => {
    // Single Restaurant Restriction
    if (cart.length > 0) {
      const existingRestaurant = cart[0].restaurant;
      if (existingRestaurant && product.restaurant !== existingRestaurant) {
        return { 
          success: false, 
          error: `Your cart contains items from "${existingRestaurant}". Reset your cart to add items from "${product.restaurant}"?` 
        };
      }
    }

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    return { success: true };
  };

  const decreaseQuantity = (id: string) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prev.filter((item) => item.id !== id);
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    if (user) {
       // Clear in Firestore too
       const docRef = doc(db, "users", user.uid, "cart", "default");
       setDoc(docRef, { items: [] });
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}