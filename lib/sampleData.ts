// lib/sampleData.ts

export type Restaurant = {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  image: string; // Small card image
  cover: string; // Big banner image
  tags: string[];
  address: string;
};

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
};

// --- 1. RESTAURANTS DATA ---
export const restaurants: Restaurant[] = [
  // --- REAL LOCAL (GORAKHPUR) ---
  {
    id: "baatichokha",
    name: "Baati Chokha",
    cuisine: "Traditional, Desi",
    rating: 4.8,
    deliveryTime: "35 min",
    address: "Taramandal, Gorakhpur",
    tags: ["Desi", "Thali", "Pure Veg"],
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500",
    cover: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000",
  },
  {
    id: "rangrezza",
    name: "Rangrezza",
    cuisine: "Fine Dining, North Indian",
    rating: 4.5,
    deliveryTime: "45 min",
    address: "Civil Lines, Gorakhpur",
    tags: ["Premium", "Family", "Bar"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500",
    cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
  },
  {
    id: "zunoon",
    name: "Zunoon",
    cuisine: "Chinese, Continental",
    rating: 4.7,
    deliveryTime: "25 min",
    address: "Medical College Rd",
    tags: ["Chinese", "Snacks"],
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=500",
    cover: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000",
  },

  // --- NATIONAL BRANDS ---
  {
    id: "dominos",
    name: "Domino's Pizza",
    cuisine: "Pizza, Fast Food",
    rating: 4.5,
    deliveryTime: "30 min",
    address: "City Mall",
    tags: ["Pizza", "Beverages"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png",
    cover: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1000",
  },
  {
    id: "kfc",
    name: "KFC",
    cuisine: "Chicken, Burgers",
    rating: 4.2,
    deliveryTime: "25 min",
    address: "Golghar",
    tags: ["Chicken", "American"],
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
    cover: "https://images.unsplash.com/photo-1513639776629-7b611d124754?q=80&w=1000",
  },
  {
    id: "mcdonalds",
    name: "McDonald's",
    cuisine: "Burgers, Fries",
    rating: 4.3,
    deliveryTime: "20 min",
    address: "AD Mall",
    tags: ["Burgers", "Cafe"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
    cover: "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?q=80&w=1000",
  },
  {
    id: "subway",
    name: "Subway",
    cuisine: "Healthy, Subs",
    rating: 4.4,
    deliveryTime: "15 min",
    address: "Bank Road",
    tags: ["Healthy", "Salad"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subway_2016_logo.svg/1200px-Subway_2016_logo.svg.png",
    cover: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=1000",
  },
  {
    id: "burgerking",
    name: "Burger King",
    cuisine: "Burgers, American",
    rating: 4.6,
    deliveryTime: "35 min",
    address: "Orion Mall",
    tags: ["Burgers", "Whopper"],
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png",
    cover: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000",
  },
  {
    id: "starbucks",
    name: "Starbucks",
    cuisine: "Coffee, Bakery",
    rating: 4.8,
    deliveryTime: "25 min",
    address: "Airport Road",
    tags: ["Coffee", "Premium"],
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
    cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000",
  },
  {
    id: "pizzahut",
    name: "Pizza Hut",
    cuisine: "Pizza, Pasta",
    rating: 4.1,
    deliveryTime: "40 min",
    address: "Shastri Chowk",
    tags: ["Pizza", "Wings"],
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Pizza_Hut_logo.svg/1200px-Pizza_Hut_logo.svg.png",
    cover: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000",
  },

  // --- GENERIC / DUMMY RESTAURANTS ---
  { id: "1", name: "Tandoori Express", cuisine: "North Indian", rating: 4.4, deliveryTime: "30 min", address: "Main Market", tags: ["Curry", "Tandoor"], image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=500", cover: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000" },
  { id: "2", name: "Pasta Palace", cuisine: "Italian", rating: 4.2, deliveryTime: "35 min", address: "Food Court", tags: ["Pasta", "Pizza"], image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=500", cover: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000" },
  { id: "3", name: "Sushi Studio", cuisine: "Japanese", rating: 4.6, deliveryTime: "50 min", address: "High Street", tags: ["Sushi", "Asian"], image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500", cover: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000" },
  { id: "4", name: "Biryani Blues", cuisine: "Biryani, Mughlai", rating: 4.3, deliveryTime: "40 min", address: "Old City", tags: ["Biryani", "Rice"], image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500", cover: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000" },
  { id: "5", name: "Dosa Plaza", cuisine: "South Indian", rating: 4.5, deliveryTime: "20 min", address: "Station Road", tags: ["Dosa", "Idli"], image: "https://images.unsplash.com/photo-1589301760014-d92964560388?q=80&w=500", cover: "https://images.unsplash.com/photo-1589301760014-d92964560388?q=80&w=1000" },
  { id: "6", name: "Wok & Roll", cuisine: "Chinese, Thai", rating: 4.1, deliveryTime: "30 min", address: "Asian Square", tags: ["Noodles", "Wok"], image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500", cover: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000" },
  { id: "7", name: "Dessert Spot", cuisine: "Bakery, Desserts", rating: 4.8, deliveryTime: "15 min", address: "Corner Shop", tags: ["Cake", "Sweet"], image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500", cover: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000" },
  { id: "8", name: "Taco Bell", cuisine: "Mexican", rating: 4.0, deliveryTime: "25 min", address: "Mall Food Court", tags: ["Tacos", "Burritos"], image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Taco_Bell_2016.svg/1200px-Taco_Bell_2016.svg.png", cover: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000" },
  { id: "9", name: "Momos Point", cuisine: "Tibetan", rating: 4.2, deliveryTime: "20 min", address: "Student Corner", tags: ["Momos", "Spicy"], image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=500", cover: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=1000" },
  { id: "10", name: "Cafe Coffee Day", cuisine: "Cafe, Beverages", rating: 4.1, deliveryTime: "30 min", address: "Highway", tags: ["Coffee", "Sandwich"], image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Cafe_Coffee_Day_logo.svg/1200px-Cafe_Coffee_Day_logo.svg.png", cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000" },
];

// --- 2. MENUS DATA ---
export const menus: Record<string, MenuItem[]> = {
  // GORAKHPUR
  "baatichokha": [
    { id: "b1", name: "Special Thali", price: 250, desc: "2 Baati, Chokha, Dal, Ghee", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=200" },
    { id: "b2", name: "Sattu Paratha", price: 120, desc: "Stuffed with sattu", image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=200" },
  ],
  "rangrezza": [
    { id: "r1", name: "Paneer Butter Masala", price: 320, desc: "Creamy tomato gravy", image: "https://images.unsplash.com/photo-1563104306-6927593c6629?q=80&w=200" },
    { id: "r2", name: "Chicken Biryani", price: 350, desc: "Lucknowi style", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=200" },
  ],
  "zunoon": [
    { id: "z1", name: "Hakka Noodles", price: 180, desc: "Veg noodles", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=200" },
    { id: "z2", name: "Chilli Chicken", price: 280, desc: "Spicy starter", image: "https://images.unsplash.com/photo-1615297926180-410766047333?q=80&w=200" },
  ],

  // BRANDS
  "dominos": [
    { id: "d1", name: "Margherita", price: 200, desc: "Classic Cheese", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=200" },
    { id: "d2", name: "Peppy Paneer", price: 280, desc: "Spicy Paneer", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200" },
    { id: "d3", name: "Garlic Bread", price: 110, desc: "Stuffed Garlic Bread", image: "https://images.unsplash.com/photo-1573140247632-f84660f67627?q=80&w=200" },
  ],
  "kfc": [
    { id: "k1", name: "Zinger Burger", price: 180, desc: "Crispy Chicken", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200" },
    { id: "k2", name: "Hot Wings (4pc)", price: 150, desc: "Spicy Wings", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=200" },
  ],
  "mcdonalds": [
    { id: "mc1", name: "Big Mac", price: 220, desc: "Double Patty", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200" },
    { id: "mc2", name: "McFlurry", price: 110, desc: "Oreo Dessert", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=200" },
  ],
  "burgerking": [
    { id: "bk1", name: "Whopper", price: 199, desc: "Flame Grilled", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=200" },
  ],
  "subway": [
    { id: "s1", name: "Veggie Delite", price: 150, desc: "Fresh Subs", image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=200" },
  ],

  // DUMMY
  "1": [
    { id: "m1", name: "Butter Chicken", price: 220, desc: "Rich Gravy", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=200" },
    { id: "m2", name: "Roti", price: 20, desc: "Tandoori Roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=200" }
  ],
  "2": [
    { id: "m3", name: "Alfredo Pasta", price: 250, desc: "White Sauce", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=200" }
  ],
  // ... (You can add more if needed, but this covers all linked restaurants)
};