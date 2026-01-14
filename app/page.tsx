import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Clock, Star, ShoppingBag, Heart, Code2, Database, Paintbrush, Terminal } from "lucide-react";
import Header from "@/components/Header"; 
import AddToCartBtn from "@/components/AddToCartBtn"; 
import { restaurants } from "@/lib/sampleData"; 
import RestaurantFeed from "@/components/RestaurantFeed";

// --- TEAM DATA (Updated for Correct Gender Representation) ---
const TEAM_MEMBERS = [
 
  { 
    name: "Moshiq Siddiqui", 
    role: "Backend Wizard", 
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Jocelyn&backgroundType=gradientLinear&backgroundColor=c0aede" 
  },
  { 
    name: "Shivendra Patel", 
    role: "UI/UX Designer", 
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Valentina&backgroundType=gradientLinear&backgroundColor=d1d4f9" 
  },
   { 
    name: "Shivam Kumar Mishra", 
    role: "Full Stack Dev", 
    // Using 'Felix' seed often generates a cool male avatar if 'Shivam' feels ambiguous
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=George&backgroundType=gradientLinear&backgroundColor=ffdfbf" 
  },
  { 
    name: "Vaishnavi Gupta", 
    role: "Frontend Dev", 
    // 'Vaishnavi' seed usually generates long hair/female features
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Aidan&backgroundType=gradientLinear&backgroundColor=ffd5dc" 
  },
  { 
    name: "Ankit Maurya", 
    role: "Database Engineer", 
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Riley&backgroundType=gradientLinear&backgroundColor=b6e3f4" 
  },
];

// --- STATIC DATA ---
const BRANDS = [
  { id: "dominos", name: "Domino's", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/200px-Domino%27s_pizza_logo.svg.png" },
  { id: "mcdonalds", name: "McDonald's", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/200px-McDonald%27s_Golden_Arches.svg.png" },
  { id: "kfc", name: "KFC", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/200px-KFC_logo.svg.png" },
  { id: "starbucks", name: "Starbucks", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/200px-Starbucks_Corporation_Logo_2011.svg.png" },
  { id: "subway", name: "Subway", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subway_2016_logo.svg/200px-Subway_2016_logo.svg.png" },
  { id: "burgerking", name: "Burger King", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Burger_King_2020.svg/200px-Burger_King_2020.svg.png" },
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-20">
      <Header />

      {/* --- HERO BANNER --- */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-amber-400 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-xl">
           <div className="relative z-10 max-w-lg text-center md:text-left">
             <span className="bg-white/30 backdrop-blur-sm text-amber-900 font-bold px-3 py-1 rounded-full text-xs uppercase mb-4 inline-block">Free Delivery</span>
             <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 drop-shadow-sm">
               TASTE OF <br/><span className="text-amber-100">LUCKNOW</span>
             </h1>
             <p className="text-amber-900 font-medium text-lg mb-8">Order from Baati Chokha, Rangrezza, Zunoon and 20+ more.</p>
             <Link href="#nearby" className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-orange-700 transition-all inline-flex items-center gap-2 hover:-translate-y-1">
               Order Now <ArrowRight className="w-5 h-5" />
             </Link>
           </div>
           
           <div className="mt-8 md:mt-0 md:absolute md:-right-20 md:-bottom-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px]">
             <Image 
               src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000" 
               alt="Food" 
               fill 
               className="object-cover rounded-full shadow-2xl" 
               priority 
               sizes="(max-width: 768px) 100vw, 50vw"
             />
           </div>
        </div>
      </section>

      {/* --- NATIONAL BRANDS --- */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-center font-bold text-slate-400 text-sm uppercase tracking-wider mb-6">National Brands</h3>
        <div className="flex flex-wrap justify-center gap-6">
           {BRANDS.map(b => (
             <Link key={b.id} href={`/restaurants/${b.id}`} className="w-20 h-20 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center p-4 hover:scale-110 hover:border-orange-200 transition-all cursor-pointer relative">
               <Image src={b.logo} alt={b.name} fill className="object-contain p-2" sizes="80px" unoptimized={true}  />
             </Link>
           ))}
        </div>
      </section>

      {/* --- PROMO BANNERS --- */}
      <section id="menu" className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {PROMO_BANNERS.map((item) => (
             <div key={item.id} className={`${item.color} rounded-[2rem] h-64 relative overflow-hidden p-6 group cursor-pointer transition-transform hover:-translate-y-2`}>
                <h3 className="text-white font-black text-2xl leading-tight w-2/3 relative z-10">{item.title}</h3>
                <div className="mt-4 inline-flex items-center gap-1 text-white text-sm font-bold underline decoration-2 underline-offset-4 relative z-10">
                  Order Now <ArrowRight className="w-4 h-4" />
                </div>
                <div className="absolute -right-8 -bottom-8 w-48 h-48 transition-transform group-hover:scale-110 group-hover:rotate-6">
                   <Image src={item.img} alt={item.title} fill className="object-cover rounded-full shadow-2xl" sizes="(max-width: 768px) 100vw, 25vw"/>
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
                   <Image src={item.img} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 20vw" />
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
                   <AddToCartBtn item={item} />
                </div>
             </div>
           ))}
        </div>
      </section>

      <RestaurantFeed />

      {/* --- FOOTER (TEAM & INFO) --- */}
      <section id="contact" className="mt-12 pt-16 pb-8 bg-gradient-to-b from-orange-50 to-white rounded-t-[3rem] border-t border-orange-100">
         <div className="container mx-auto px-4 text-center">
            
            {/* Mission Statement */}
            <div className="flex flex-col items-center mb-16">
               <div className="bg-white p-4 rounded-full shadow-lg mb-6 animate-bounce">
                  <div className="bg-orange-100 p-3 rounded-full">
                     <Heart className="w-6 h-6 text-orange-600 fill-current" />
                  </div>
               </div>
               <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Built with Love & Code</h2>
               <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
                  "Made with ❤️, ☕ and a lot of {"<Code />"}" <br/>
                  Designed and developed by the Second Year students of <b>RRGI</b>.
               </p>
            </div>

            {/* TEAM GRID */}
            <div className="mb-16">
               <h3 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-10">Meet The Team</h3>
               
               <div className="flex flex-wrap justify-center gap-10 md:gap-14">
                  {TEAM_MEMBERS.map((member, idx) => (
                     <div key={idx} className="flex flex-col items-center group cursor-pointer">
                        <div className="w-28 h-28 relative mb-5 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                           {/* Decorative Ring */}
                           <div className="absolute -inset-2 bg-gradient-to-tr from-orange-200 to-amber-200 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500" />
                           <img 
                              src={member.avatar} 
                              alt={member.name}
                              className="w-full h-full rounded-full bg-slate-50 border-4 border-white shadow-lg object-cover relative z-10"
                           />
                        </div>
                        <h4 className="font-bold text-slate-900 text-lg group-hover:text-orange-600 transition-colors">
                           {member.name}
                        </h4>
                        <span className="flex items-center gap-1.5 mt-2 px-3 py-1 bg-white border border-slate-100 rounded-full shadow-sm text-xs font-bold text-slate-500 uppercase tracking-wide">
                            {/* Assigning random icons based on role for fun visual */}
                           {member.role.includes("Design") ? <Paintbrush className="w-3 h-3" /> : 
                            member.role.includes("Data") ? <Database className="w-3 h-3" /> :
                            <Terminal className="w-3 h-3" />}
                           {member.role}
                        </span>
                     </div>
                  ))}
               </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm font-medium">
               <p>&copy; 2026 Hunger Station Project. All rights reserved.</p>
               <div className="flex gap-4 mt-4 md:mt-0">
                  <span className="hover:text-orange-600 cursor-pointer transition-colors">Privacy Policy</span>
                  <span className="hover:text-orange-600 cursor-pointer transition-colors">Terms of Service</span>
               </div>
            </div>

         </div>
      </section>
    </main>
  );
}