// components/Header.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, signInWithGoogle, logout } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";

export default function Header() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => onAuthStateChanged(auth, u => setUser(u)), []);
  const path = usePathname();
  const { items } = useCart();

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">F</div>
          <div>
            <h1 className="text-xl font-semibold">Foodie</h1>
            <p className="text-xs text-gray-500">College Demo</p>
          </div>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/restaurants" className={`px-3 py-2 rounded-md ${path.startsWith("/restaurants") ? "bg-gray-100" : ""}`}>Restaurants</Link>
          <Link href="/cart" className="px-3 py-2 rounded-md flex items-center gap-2">
            Cart
            <span className="text-sm bg-gray-100 px-2 py-0.5 rounded-full">{items.length}</span>
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <img src={user.photoURL} alt="avatar" className="w-9 h-9 rounded-full object-cover" />
              <span className="text-sm">{user.displayName?.split(" ")[0]}</span>
              <button className="btn" onClick={() => logout()}>Logout</button>
            </div>
          ) : (
            <button className="btn" onClick={() => signInWithGoogle()}>Sign in</button>
          )}
        </nav>
      </div>
    </header>
  );
}
