(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/sampleData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/sampleData.ts
__turbopack_context__.s([
    "restaurants",
    ()=>restaurants
]);
const restaurants = [
    // --- REAL LOCAL (GORAKHPUR) ---
    {
        id: "baatichokha",
        name: "Baati Chokha",
        cuisine: "Traditional, Desi",
        rating: 4.8,
        deliveryTime: "35 min",
        address: "Taramandal, Gorakhpur",
        tags: [
            "Desi",
            "Thali",
            "Pure Veg"
        ],
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000"
    },
    {
        id: "rangrezza",
        name: "Rangrezza",
        cuisine: "Fine Dining, North Indian",
        rating: 4.5,
        deliveryTime: "45 min",
        address: "Civil Lines, Gorakhpur",
        tags: [
            "Premium",
            "Family",
            "Bar"
        ],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000"
    },
    {
        id: "zunoon",
        name: "Zunoon",
        cuisine: "Chinese, Continental",
        rating: 4.7,
        deliveryTime: "25 min",
        address: "Medical College Rd",
        tags: [
            "Chinese",
            "Snacks"
        ],
        image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000"
    },
    // --- NATIONAL BRANDS ---
    {
        id: "dominos",
        name: "Domino's Pizza",
        cuisine: "Pizza, Fast Food",
        rating: 4.5,
        deliveryTime: "30 min",
        address: "City Mall",
        tags: [
            "Pizza",
            "Beverages"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Domino%27s_pizza_logo.svg/1200px-Domino%27s_pizza_logo.svg.png",
        cover: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=1000"
    },
    {
        id: "kfc",
        name: "KFC",
        cuisine: "Chicken, Burgers",
        rating: 4.2,
        deliveryTime: "25 min",
        address: "Golghar",
        tags: [
            "Chicken",
            "American"
        ],
        image: "/brands/kfc.jpg",
        cover: "https://images.unsplash.com/photo-1513639776629-7b611d124754?q=80&w=1000"
    },
    {
        id: "mcdonalds",
        name: "McDonald's",
        cuisine: "Burgers, Fries",
        rating: 4.3,
        deliveryTime: "20 min",
        address: "AD Mall",
        tags: [
            "Burgers",
            "Cafe"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png",
        cover: "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?q=80&w=1000"
    },
    {
        id: "subway",
        name: "Subway",
        cuisine: "Healthy, Subs",
        rating: 4.4,
        deliveryTime: "15 min",
        address: "Bank Road",
        tags: [
            "Healthy",
            "Salad"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subway_2016_logo.svg/1200px-Subway_2016_logo.svg.png",
        cover: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=1000"
    },
    {
        id: "burgerking",
        name: "Burger King",
        cuisine: "Burgers, American",
        rating: 4.6,
        deliveryTime: "35 min",
        address: "Orion Mall",
        tags: [
            "Burgers",
            "Whopper"
        ],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png",
        cover: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000"
    },
    {
        id: "starbucks",
        name: "Starbucks",
        cuisine: "Coffee, Bakery",
        rating: 4.8,
        deliveryTime: "25 min",
        address: "Airport Road",
        tags: [
            "Coffee",
            "Premium"
        ],
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
        cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000"
    },
    {
        id: "pizzahut",
        name: "Pizza Hut",
        cuisine: "Pizza, Pasta",
        rating: 4.1,
        deliveryTime: "40 min",
        address: "Shastri Chowk",
        tags: [
            "Pizza",
            "Wings"
        ],
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Pizza_Hut_logo.svg/1200px-Pizza_Hut_logo.svg.png",
        cover: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000"
    },
    // --- GENERIC / DUMMY RESTAURANTS ---
    {
        id: "1",
        name: "Tandoori Express",
        cuisine: "North Indian",
        rating: 4.4,
        deliveryTime: "30 min",
        address: "Main Market",
        tags: [
            "Curry",
            "Tandoor"
        ],
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000"
    },
    {
        id: "2",
        name: "Pasta Palace",
        cuisine: "Italian",
        rating: 4.2,
        deliveryTime: "35 min",
        address: "Food Court",
        tags: [
            "Pasta",
            "Pizza"
        ],
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000"
    },
    {
        id: "3",
        name: "Sushi Studio",
        cuisine: "Japanese",
        rating: 4.6,
        deliveryTime: "50 min",
        address: "High Street",
        tags: [
            "Sushi",
            "Asian"
        ],
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1000"
    },
    {
        id: "4",
        name: "Biryani Blues",
        cuisine: "Biryani, Mughlai",
        rating: 4.3,
        deliveryTime: "40 min",
        address: "Old City",
        tags: [
            "Biryani",
            "Rice"
        ],
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1000"
    },
    {
        id: "5",
        name: "Dosa Plaza",
        cuisine: "South Indian",
        rating: 4.5,
        deliveryTime: "20 min",
        address: "Station Road",
        tags: [
            "Dosa",
            "Idli"
        ],
        image: "https://images.unsplash.com/photo-1589301760014-d92964560388?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1589301760014-d92964560388?q=80&w=1000"
    },
    {
        id: "6",
        name: "Wok & Roll",
        cuisine: "Chinese, Thai",
        rating: 4.1,
        deliveryTime: "30 min",
        address: "Asian Square",
        tags: [
            "Noodles",
            "Wok"
        ],
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000"
    },
    {
        id: "7",
        name: "Dessert Spot",
        cuisine: "Bakery, Desserts",
        rating: 4.8,
        deliveryTime: "15 min",
        address: "Corner Shop",
        tags: [
            "Cake",
            "Sweet"
        ],
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000"
    },
    {
        id: "8",
        name: "Taco Bell",
        cuisine: "Mexican",
        rating: 4.0,
        deliveryTime: "25 min",
        address: "Mall Food Court",
        tags: [
            "Tacos",
            "Burritos"
        ],
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Taco_Bell_2016.svg/1200px-Taco_Bell_2016.svg.png",
        cover: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1000"
    },
    {
        id: "9",
        name: "Momos Point",
        cuisine: "Tibetan",
        rating: 4.2,
        deliveryTime: "20 min",
        address: "Student Corner",
        tags: [
            "Momos",
            "Spicy"
        ],
        image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=500",
        cover: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=1000"
    },
    {
        id: "10",
        name: "Cafe Coffee Day",
        cuisine: "Cafe, Beverages",
        rating: 4.1,
        deliveryTime: "30 min",
        address: "Highway",
        tags: [
            "Coffee",
            "Sandwich"
        ],
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Cafe_Coffee_Day_logo.svg/1200px-Cafe_Coffee_Day_logo.svg.png",
        cover: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1000"
    }
]; // --- 2. MENUS DATA ---
 // export const menus: Record<string, MenuItem[]> = {
 //   // GORAKHPUR
 //   "baatichokha": [
 //     { id: "b1", name: "Special Thali", price: 250, desc: "2 Baati, Chokha, Dal, Ghee", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=200" },
 //     { id: "b2", name: "Sattu Paratha", price: 120, desc: "Stuffed with sattu", image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=200" },
 //   ],
 //   "rangrezza": [
 //     { id: "r1", name: "Paneer Butter Masala", price: 320, desc: "Creamy tomato gravy", image: "https://images.unsplash.com/photo-1563104306-6927593c6629?q=80&w=200" },
 //     { id: "r2", name: "Chicken Biryani", price: 350, desc: "Lucknowi style", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=200" },
 //   ],
 //   "zunoon": [
 //     { id: "z1", name: "Hakka Noodles", price: 180, desc: "Veg noodles", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=200" },
 //     { id: "z2", name: "Chilli Chicken", price: 280, desc: "Spicy starter", image: "https://images.unsplash.com/photo-1615297926180-410766047333?q=80&w=200" },
 //   ],
 //   // BRANDS
 //   "dominos": [
 //     { id: "d1", name: "Margherita", price: 200, desc: "Classic Cheese", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=200" },
 //     { id: "d2", name: "Peppy Paneer", price: 280, desc: "Spicy Paneer", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200" },
 //     { id: "d3", name: "Garlic Bread", price: 110, desc: "Stuffed Garlic Bread", image: "https://images.unsplash.com/photo-1573140247632-f84660f67627?q=80&w=200" },
 //   ],
 //   "kfc": [
 //     { id: "k1", name: "Zinger Burger", price: 180, desc: "Crispy Chicken", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200" },
 //     { id: "k2", name: "Hot Wings (4pc)", price: 150, desc: "Spicy Wings", image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=200" },
 //   ],
 //   "mcdonalds": [
 //     { id: "mc1", name: "Big Mac", price: 220, desc: "Double Patty", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200" },
 //     { id: "mc2", name: "McFlurry", price: 110, desc: "Oreo Dessert", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=200" },
 //   ],
 //   "burgerking": [
 //     { id: "bk1", name: "Whopper", price: 199, desc: "Flame Grilled", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=200" },
 //   ],
 //   "subway": [
 //     { id: "s1", name: "Veggie Delite", price: 150, desc: "Fresh Subs", image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=200" },
 //   ],
 //   // DUMMY
 //   "1": [
 //     { id: "m1", name: "Butter Chicken", price: 220, desc: "Rich Gravy", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=200" },
 //     { id: "m2", name: "Roti", price: 20, desc: "Tandoori Roti", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=200" }
 //   ],
 //   "2": [
 //     { id: "m3", name: "Alfredo Pasta", price: 250, desc: "White Sauce", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=200" }
 //   ],
 //   // ... (You can add more if needed, but this covers all linked restaurants)
 // };
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/menuData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "menus",
    ()=>menus
]);
const menus = {
    // --- NATIONAL BRANDS ---
    "kfc": [
        {
            id: "k1",
            name: "Zinger Burger",
            price: 180,
            desc: "Classic crispy chicken burger",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200"
        },
        {
            id: "k2",
            name: "Chicken Bucket (8pc)",
            price: 650,
            desc: "Hot & Crispy chicken",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=200"
        },
        {
            id: "k3",
            name: "Popcorn Chicken",
            price: 220,
            desc: "Bite sized chicken snacks",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=200"
        }
    ],
    "dominos": [
        {
            id: "d1",
            name: "Farmhouse Pizza",
            price: 450,
            desc: "Onion, Capsicum, Tomato, Mushroom",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200"
        },
        {
            id: "d2",
            name: "Peppy Paneer",
            price: 380,
            desc: "Paneer cubes & paprika",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1593560708920-639843547177?q=80&w=200"
        },
        {
            id: "d3",
            name: "Choco Lava Cake",
            price: 99,
            desc: "Molten chocolate filling",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e304abd?q=80&w=200"
        }
    ],
    "mcd": [
        {
            id: "m1",
            name: "McAloo Tikki",
            price: 65,
            desc: "Classic potato patty burger",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=200"
        },
        {
            id: "m2",
            name: "McSpicy Chicken",
            price: 175,
            desc: "Spicy chicken fillet",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1615297926180-410766047333?q=80&w=200"
        },
        {
            id: "m3",
            name: "Large Fries",
            price: 110,
            desc: "Golden crispy fries",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=200"
        }
    ],
    "starbucks": [
        {
            id: "s1",
            name: "Java Chip Frappuccino",
            price: 350,
            desc: "Coffee with choco chips",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=200"
        },
        {
            id: "s2",
            name: "Cappuccino",
            price: 280,
            desc: "Rich espresso with foam",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=200"
        }
    ],
    // --- LOCAL FAVORITES (Gorakhpur) ---
    "res-1": [
        {
            id: "rd1",
            name: "Shahi Paneer",
            price: 280,
            desc: "Rich creamy gravy",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1563104306-6927593c6629?q=80&w=200"
        },
        {
            id: "rd2",
            name: "Butter Naan",
            price: 40,
            desc: "Tandoori bread with butter",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=200"
        },
        {
            id: "rd3",
            name: "Dal Makhani",
            price: 240,
            desc: "Slow cooked black lentils",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&w=200"
        }
    ],
    "res-2": [
        {
            id: "sw1",
            name: "Veg Hakka Noodles",
            price: 180,
            desc: "Stir fried noodles",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=200"
        },
        {
            id: "sw2",
            name: "Chilli Chicken",
            price: 290,
            desc: "Spicy chinese starter",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=200"
        }
    ],
    "res-3": [
        {
            id: "tn1",
            name: "Chicken Biryani",
            price: 320,
            desc: "Aromatic basmati rice",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=200"
        },
        {
            id: "tn2",
            name: "Mutton Kebab",
            price: 350,
            desc: "Minced meat skewers",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=200"
        }
    ],
    "res-4": [
        {
            id: "dp1",
            name: "Masala Dosa",
            price: 150,
            desc: "Crispy crepe with potato",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=200"
        },
        {
            id: "dp2",
            name: "Idli Sambar",
            price: 100,
            desc: "Steamed rice cakes",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=200"
        }
    ],
    "res-5": [
        {
            id: "cw1",
            name: "Black Forest Cake",
            price: 450,
            desc: "Chocolate sponge with cherries",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=200"
        },
        {
            id: "cw2",
            name: "Red Velvet Pastry",
            price: 120,
            desc: "Cream cheese frosting",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1616031037011-087000171ea3?q=80&w=200"
        }
    ],
    "res-6": [
        {
            id: "bs1",
            name: "Udta Punjab Burger",
            price: 199,
            desc: "Tandoori flavored patty",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200"
        },
        {
            id: "bs2",
            name: "Chicken Keema Fries",
            price: 150,
            desc: "Fries topped with keema",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=200"
        }
    ],
    "res-7": [
        {
            id: "gg1",
            name: "Veg Deluxe Thali",
            price: 220,
            desc: "Paneer, Dal, Roti, Rice",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200"
        }
    ],
    "res-8": [
        {
            id: "csb1",
            name: "Adrak Chai",
            price: 20,
            desc: "Ginger tea",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=200"
        },
        {
            id: "csb2",
            name: "Bun Maska",
            price: 40,
            desc: "Butter bun",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=200"
        }
    ],
    "res-9": [
        {
            id: "plv1",
            name: "White Sauce Pasta",
            price: 240,
            desc: "Creamy alfredo",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=200"
        }
    ],
    "res-10": [
        {
            id: "sh1",
            name: "Veg California Roll",
            price: 350,
            desc: "Avocado & Cucumber",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=200"
        }
    ],
    "res-11": [
        {
            id: "dt1",
            name: "Chole Bhature",
            price: 120,
            desc: "Spicy chickpea curry",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=200"
        }
    ],
    "res-12": [
        {
            id: "wiu1",
            name: "Chicken Shawarma",
            price: 110,
            desc: "Grilled chicken roll",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=200"
        }
    ],
    "res-13": [
        {
            id: "icw1",
            name: "Chocolate Fudge",
            price: 180,
            desc: "Double scoop",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=200"
        }
    ],
    "res-14": [
        {
            id: "gm1",
            name: "Grilled Chicken",
            price: 380,
            desc: "Full bird with seasoning",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1529193591176-1da790181a82?q=80&w=200"
        }
    ],
    "res-15": [
        {
            id: "ss1",
            name: "Caesar Salad",
            price: 250,
            desc: "Lettuce, croutons, parmesan",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200"
        }
    ],
    "res-16": [
        {
            id: "mh1",
            name: "Steamed Veg Momos",
            price: 80,
            desc: "Served with red chutney",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1619526881542-c81baff85fa4?q=80&w=200"
        }
    ],
    "res-17": [
        {
            id: "hr1",
            name: "Raj Kachori",
            price: 110,
            desc: "King of chats",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=200"
        }
    ],
    "res-18": [
        {
            id: "ww1",
            name: "Nutella Waffle",
            price: 160,
            desc: "Loaded with hazelnut spread",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=200"
        }
    ],
    "res-19": [
        {
            id: "bb1",
            name: "Hyderabadi Dum Biryani",
            price: 340,
            desc: "Slow cooked mutton",
            isVeg: false,
            image: "https://images.unsplash.com/photo-1630851840633-f96999247032?q=80&w=200"
        }
    ],
    "res-20": [
        {
            id: "sk1",
            name: "Berry Blast",
            price: 190,
            desc: "Mixed berries & yogurt",
            isVeg: true,
            image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=200"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/seed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seedDatabase",
    ()=>seedDatabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sampleData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sampleData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menuData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/menuData.ts [app-client] (ecmascript)");
;
;
;
;
const seedDatabase = async (user)=>{
    if (!user) {
        alert("You must be logged in to upload data!");
        return;
    }
    console.log("🚀 Starting Safe Data Upload...");
    try {
        let successCount = 0;
        let menuCount = 0;
        // Loop through all Restaurants
        for (const res of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sampleData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restaurants"]){
            // 1. Create a mini-batch for THIS restaurant only
            const batch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeBatch"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"]);
            // 2. Set Restaurant Data
            const resRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "restaurants", res.id.toString());
            batch.set(resRef, {
                ...res,
                createdAt: new Date(),
                updatedBy: user.uid
            });
            // 3. Find Matching Menu
            // We trim() the ID just in case there are hidden spaces
            const menuItems = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$menuData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menus"][res.id.toString().trim()];
            if (menuItems && menuItems.length > 0) {
                console.log(`🍔 Found ${menuItems.length} menu items for: ${res.name}`);
                menuItems.forEach((item)=>{
                    const menuRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "restaurants", res.id.toString(), "menu", item.id);
                    batch.set(menuRef, item);
                    menuCount++;
                });
            } else {
                console.warn(`⚠️ WARNING: No menu found for ${res.name} (ID: ${res.id})`);
            }
            // 4. Commit this restaurant immediately
            await batch.commit();
            successCount++;
            console.log(`✅ Uploaded Restaurant: ${res.name}`);
        }
        alert(`Success! Uploaded ${successCount} Restaurants and ${menuCount} Menu Items.`);
    } catch (error) {
        console.error("❌ Error uploading data:", error);
        alert("Error uploading data. See Console for details.");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)"); // To navigate on click
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seed.ts [app-client] (ecmascript)");
// --- FIRESTORE IMPORTS ---
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
function Header() {
    _s();
    const { cartCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { user, login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Location State
    const [location, setLocation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Lucknow, UP");
    const [locLoading, setLocLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // --- SEARCH STATE ---
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [allRestaurants, setAllRestaurants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Cache data here
    const [dataLoaded, setDataLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Close dropdown when clicking outside
    const searchContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            function handleClickOutside(event) {
                if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
                    setIsSearching(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Header.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    // --- 1. FETCH DATA ONCE (On Focus) ---
    const handleSearchFocus = async ()=>{
        setIsSearching(true);
        if (dataLoaded) return; // Don't fetch if already loaded
        try {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "restaurants"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("name"));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const data = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            setAllRestaurants(data);
            setDataLoaded(true);
        } catch (error) {
            console.error("Error fetching search data:", error);
        }
    };
    // --- 2. FILTER LOGIC ---
    const handleSearchInput = (e)=>{
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() === "") {
            setSearchResults([]);
            return;
        }
        const lowerQ = query.toLowerCase();
        // Filter by Name, Cuisine, or Tags
        const filtered = allRestaurants.filter((res)=>res.name?.toLowerCase().includes(lowerQ) || res.cuisine?.toLowerCase().includes(lowerQ) || res.tags && res.tags.some((tag)=>tag.toLowerCase().includes(lowerQ)));
        setSearchResults(filtered.slice(0, 5)); // Show top 5 results
    };
    // --- 3. HANDLE NAVIGATION ---
    const handleResultClick = (id)=>{
        router.push(`/restaurants/${id}`);
        setIsSearching(false);
        setSearchQuery("");
    };
    // Location Logic (Existing)
    const detectLocation = ()=>{
        setLocLoading(true);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (pos)=>{
                try {
                    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
                    const data = await res.json();
                    const city = data.address.city || data.address.town || "Gorakhpur";
                    setLocation(city);
                } catch (e) {
                    setLocation("Lucknow");
                } finally{
                    setLocLoading(false);
                }
            });
        } else {
            setLocLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 h-20 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "flex items-center gap-2 group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-yellow-400 text-white font-black text-2xl p-1 rounded group-hover:rotate-12 transition-transform",
                            children: "N"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-bold text-2xl text-slate-800",
                            children: [
                                "Hunger",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-orange-600",
                                    children: "Station"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 114,
                                    columnNumber: 68
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: searchContainerRef,
                    className: "hidden lg:flex flex-col relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center bg-slate-100 rounded-full px-4 py-2 w-96 gap-2 border border-transparent focus-within:border-orange-200 transition-colors z-20 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: detectLocation,
                                    className: "flex items-center gap-1 text-xs font-bold text-slate-600 border-r border-slate-300 pr-3 hover:text-orange-600 whitespace-nowrap min-w-fit",
                                    children: [
                                        locLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-3 h-3 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 125,
                                            columnNumber: 29
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            className: "w-3 h-3 text-orange-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Header.tsx",
                                            lineNumber: 125,
                                            columnNumber: 76
                                        }, this),
                                        location
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: searchQuery,
                                    onFocus: handleSearchFocus,
                                    onChange: handleSearchInput,
                                    placeholder: "Search for food...",
                                    className: "bg-transparent text-sm outline-none w-full text-slate-700 placeholder:text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                searchQuery ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    onClick: ()=>{
                                        setSearchQuery("");
                                        setSearchResults([]);
                                    },
                                    className: "w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "w-4 h-4 text-slate-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        isSearching && searchQuery && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-12 left-0 right-0 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-10 animate-in fade-in slide-in-from-top-2",
                            children: searchResults.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: searchResults.map((res)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        onClick: ()=>handleResultClick(res.id),
                                        className: "flex items-center gap-3 p-3 hover:bg-orange-50 cursor-pointer transition-colors border-b border-slate-50 last:border-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: res.image || "/default_cover.jpg",
                                                    alt: res.name,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Header.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 26
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 156,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-sm font-bold text-slate-800",
                                                        children: res.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 161,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-slate-500 uppercase",
                                                        children: [
                                                            res.cuisine,
                                                            " • ",
                                                            res.deliveryTime
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Header.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Header.tsx",
                                                lineNumber: 160,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, res.id, true, {
                                        fileName: "[project]/components/Header.tsx",
                                        lineNumber: 151,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 149,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 text-center text-sm text-slate-400",
                                children: [
                                    'No restaurants found for "',
                                    searchQuery,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 147,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this),
                user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedDatabase"])(user),
                    className: "bg-red-600 text-white px-4 py-2 rounded font-bold ml-4 text-xs",
                    children: "SEED"
                }, void 0, false, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/cart",
                            className: "relative p-2 hover:bg-slate-100 rounded-full transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                    className: "w-6 h-6 text-slate-700"
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this),
                                cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in",
                                    children: cartCount
                                }, void 0, false, {
                                    fileName: "[project]/components/Header.tsx",
                                    lineNumber: 191,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/profile",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: user.photoURL || "/default.png",
                                alt: "User",
                                width: 38,
                                height: 38,
                                className: "rounded-full border-2 border-white shadow-sm hover:border-orange-500 transition-colors"
                            }, void 0, false, {
                                fileName: "[project]/components/Header.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: login,
                            className: "px-6 py-2 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200",
                            children: "Login"
                        }, void 0, false, {
                            fileName: "[project]/components/Header.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Header.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Header.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Header.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_s(Header, "QQ0XkXCa4lgTc+C1jkrrqJQDN50=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AddToCartBtn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddToCartBtn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/CartContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AddToCartBtn({ item }) {
    _s();
    const { addToCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: ()=>addToCart({
                ...item,
                desc: "Discounted Item"
            }),
        className: "bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 flex items-center gap-1 active:scale-95",
        children: [
            "Add ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                className: "w-3 h-3"
            }, void 0, false, {
                fileName: "[project]/components/AddToCartBtn.tsx",
                lineNumber: 13,
                columnNumber: 11
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AddToCartBtn.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(AddToCartBtn, "YPx5musMedcmtt2OkzMtHcKllYw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = AddToCartBtn;
var _c;
__turbopack_context__.k.register(_c, "AddToCartBtn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/RestaurantFeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RestaurantFeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-down.js [app-client] (ecmascript) <export default as ArrowDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/firebase.ts [app-client] (ecmascript)"); // Ensure this matches your firebase config path
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ITEMS_PER_PAGE = 6;
function RestaurantFeed() {
    _s();
    const [restaurants, setRestaurants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lastDoc, setLastDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null); // For pagination cursor
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // 1. Initial Fetch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RestaurantFeed.useEffect": ()=>{
            const fetchInitial = {
                "RestaurantFeed.useEffect.fetchInitial": async ()=>{
                    setLoading(true);
                    try {
                        // Order by 'name' ensures consistent pagination
                        const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "restaurants"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("name"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(ITEMS_PER_PAGE));
                        const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
                        const data = snapshot.docs.map({
                            "RestaurantFeed.useEffect.fetchInitial.data": (doc)=>({
                                    id: doc.id,
                                    ...doc.data()
                                })
                        }["RestaurantFeed.useEffect.fetchInitial.data"]);
                        setRestaurants(data);
                        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
                        if (snapshot.docs.length < ITEMS_PER_PAGE) setHasMore(false);
                    } catch (error) {
                        console.error("Error fetching restaurants:", error);
                    }
                    setLoading(false);
                }
            }["RestaurantFeed.useEffect.fetchInitial"];
            fetchInitial();
        }
    }["RestaurantFeed.useEffect"], []);
    // 2. Load More Function
    const loadMore = async ()=>{
        if (!lastDoc || loading) return;
        setLoading(true);
        try {
            const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "restaurants"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("name"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAfter"])(lastDoc), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["limit"])(ITEMS_PER_PAGE));
            const snapshot = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])(q);
            const newBatch = snapshot.docs.map((doc)=>({
                    id: doc.id,
                    ...doc.data()
                }));
            if (newBatch.length < ITEMS_PER_PAGE) setHasMore(false);
            setRestaurants((prev)=>[
                    ...prev,
                    ...newBatch
                ]);
            setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
        } catch (error) {
            console.error("Error loading more:", error);
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "nearby",
        className: "container mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-black text-slate-900 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                className: "w-6 h-6 text-orange-600"
                            }, void 0, false, {
                                fileName: "[project]/components/RestaurantFeed.tsx",
                                lineNumber: 75,
                                columnNumber: 12
                            }, this),
                            " Restaurants Near You"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RestaurantFeed.tsx",
                        lineNumber: 74,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-slate-400 text-sm font-medium",
                        children: [
                            restaurants.length,
                            " Loaded"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/RestaurantFeed.tsx",
                        lineNumber: 77,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/RestaurantFeed.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: restaurants.map((res)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/restaurants/${res.id}`,
                        className: "group block bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-56 w-full bg-slate-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: res.image || "/placeholder-food.jpg",
                                        alt: res.name,
                                        fill: true,
                                        className: "object-cover group-hover:scale-105 transition-transform duration-700",
                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/RestaurantFeed.tsx",
                                        lineNumber: 87,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-4 right-4 bg-white/95 backdrop-blur px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm text-slate-700",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                className: "w-3 h-3 text-slate-400"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RestaurantFeed.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            res.deliveryTime
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RestaurantFeed.tsx",
                                        lineNumber: 95,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-4 left-4 bg-green-600 text-white px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 shadow-lg",
                                        children: [
                                            res.rating,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                className: "w-3 h-3 fill-current"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RestaurantFeed.tsx",
                                                lineNumber: 99,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RestaurantFeed.tsx",
                                        lineNumber: 98,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RestaurantFeed.tsx",
                                lineNumber: 86,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors truncate",
                                        children: res.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/RestaurantFeed.tsx",
                                        lineNumber: 104,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-slate-500 text-sm mb-3 truncate",
                                        children: [
                                            Array.isArray(res.tags) ? res.tags.join(", ") : res.tags,
                                            " • ",
                                            res.address
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RestaurantFeed.tsx",
                                        lineNumber: 105,
                                        columnNumber: 16
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mt-4",
                                        children: [
                                            Array.isArray(res.tags) && res.tags.slice(0, 2).map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase font-bold bg-slate-100 text-slate-500 px-2 py-1 rounded-md",
                                                    children: tag
                                                }, i, false, {
                                                    fileName: "[project]/components/RestaurantFeed.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 22
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-orange-600 ml-auto group-hover:underline",
                                                children: "View Menu"
                                            }, void 0, false, {
                                                fileName: "[project]/components/RestaurantFeed.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/RestaurantFeed.tsx",
                                        lineNumber: 108,
                                        columnNumber: 16
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/RestaurantFeed.tsx",
                                lineNumber: 103,
                                columnNumber: 14
                            }, this)
                        ]
                    }, res.id, true, {
                        fileName: "[project]/components/RestaurantFeed.tsx",
                        lineNumber: 85,
                        columnNumber: 12
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/RestaurantFeed.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: loadMore,
                    disabled: loading,
                    className: "bg-slate-900 text-white px-8 py-3 rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all flex items-center gap-2 disabled:opacity-50",
                    children: [
                        loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "w-5 h-5 animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/components/RestaurantFeed.tsx",
                            lineNumber: 127,
                            columnNumber: 24
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowDown$3e$__["ArrowDown"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/components/RestaurantFeed.tsx",
                            lineNumber: 127,
                            columnNumber: 71
                        }, this),
                        loading ? "Loading..." : "Load More Restaurants"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/RestaurantFeed.tsx",
                    lineNumber: 122,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/RestaurantFeed.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this),
            !hasMore && restaurants.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-center text-slate-400 mt-8 text-sm font-medium",
                children: "You've reached the end of the list!"
            }, void 0, false, {
                fileName: "[project]/components/RestaurantFeed.tsx",
                lineNumber: 134,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/RestaurantFeed.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(RestaurantFeed, "v52r9Fb42xv+9JJ8mSYvC1KEWN0=");
_c = RestaurantFeed;
var _c;
__turbopack_context__.k.register(_c, "RestaurantFeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_86872649._.js.map