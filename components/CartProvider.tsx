// components/CartProvider.tsx
"use client";
import React, { createContext, useContext, useState } from "react";

type Item = { id: string; name: string; price: number; qty?: number };
type CartContextType = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (item: Item) => {
    setItems(prev => {
      const found = prev.find(i => i.id === item.id);
      if (found) return prev.map(i => i.id === item.id ? { ...i, qty: (i.qty || 1) + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeItem = (id: string) => setItems(prev => prev.filter(i => i.id !== id));
  const updateQty = (id: string, qty: number) => setItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  const clear = () => setItems([]);
  const total = items.reduce((s, i) => s + i.price * (i.qty || 1), 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQty, clear, total }}>
      {children}
    </CartContext.Provider>
  );
}
