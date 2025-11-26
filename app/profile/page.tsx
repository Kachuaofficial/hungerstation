"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { db } from "../../lib/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { LogOut, MapPin, Package, Star, Calendar } from "lucide-react";

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();
  
  const [orders, setOrders] = useState<any[]>([]);
  const [addresses, setAddresses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { router.push("/"); } 
    else { fetchUserData(); }
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;
    
    try {
      // 1. FETCH ADDRESSES (users/{uid}/addresses)
      const addressesRef = collection(db, "users", user.uid, "addresses");
      const addressSnap = await getDocs(addressesRef);
      setAddresses(addressSnap.docs.map(doc => doc.data()));

      // 2. FETCH ORDERS (users/{uid}/orders)
      const ordersRef = collection(db, "users", user.uid, "orders");
      const orderSnap = await getDocs(ordersRef);
      setOrders(orderSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      
    } catch (error) { console.error(error); } 
    finally { setLoading(false); }
  };

  const createDummyData = async () => {
    if(!user) return;
    // Mock Address
    await addDoc(collection(db, "users", user.uid, "addresses"), { type: "Home", text: "Gorakhpur Hostel" });
    fetchUserData();
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-black text-slate-800">My Profile</h1>
            <button onClick={() => { logout(); router.push("/"); }} className="text-red-600 font-bold hover:bg-red-50 px-4 py-2 rounded-full">Logout</button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
            {/* User Info */}
            <div className="space-y-6">
                <div className="bg-white p-6 rounded-3xl text-center shadow-sm">
                    <img src={user.photoURL || ""} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-slate-100" />
                    <h2 className="text-xl font-bold">{user.displayName}</h2>
                    <p className="text-slate-500 text-sm">{user.email}</p>
                </div>
                <div className="bg-white p-6 rounded-3xl shadow-sm">
                    <h3 className="font-bold mb-4 flex gap-2"><MapPin className="text-orange-600"/> Addresses</h3>
                    {addresses.length === 0 ? <button onClick={createDummyData} className="text-blue-500 text-sm">+ Add Mock Address</button> : 
                      addresses.map((a, i) => <div key={i} className="bg-slate-50 p-3 rounded-lg mb-2 text-sm">{a.text}</div>)
                    }
                </div>
            </div>

            {/* Orders */}
            <div className="md:col-span-2 bg-white p-6 rounded-3xl shadow-sm">
                <h3 className="font-bold text-xl mb-6 flex gap-2"><Package className="text-orange-600"/> Recent Orders</h3>
                {loading ? <div>Loading...</div> : orders.length === 0 ? <div>No orders yet.</div> : (
                    <div className="space-y-4">
                        {orders.map((order) => (
                            <div key={order.id} className="border border-slate-100 rounded-2xl p-4">
                                <div className="flex justify-between mb-2">
                                    <h4 className="font-bold text-lg">{order.restaurant}</h4>
                                    <span className="font-bold">₹{order.total}</span>
                                </div>
                                <div className="text-slate-500 text-sm">
                                    {order.items?.map((i:any) => `${i.qty}x ${i.name}`).join(", ")}
                                </div>
                                <div className="text-xs text-slate-400 mt-2 pt-2 border-t flex gap-2">
                                    <span className="bg-green-100 text-green-700 px-2 rounded font-bold">{order.status}</span>
                                    <span>{order.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}