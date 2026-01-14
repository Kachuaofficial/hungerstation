(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/sampleData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/sampleData.ts
__turbopack_context__.s([
    "menus",
    ()=>menus,
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
        image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/KFC_logo.svg/1200px-KFC_logo.svg.png",
        cover: "https://unsplash.com/photos/a-neon-sign-that-says-its-finger-lickingood-AUuOz9mQDYM"
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
];
const menus = {
    // GORAKHPUR
    "baatichokha": [
        {
            id: "b1",
            name: "Special Thali",
            price: 250,
            desc: "2 Baati, Chokha, Dal, Ghee",
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=200"
        },
        {
            id: "b2",
            name: "Sattu Paratha",
            price: 120,
            desc: "Stuffed with sattu",
            image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=200"
        }
    ],
    "rangrezza": [
        {
            id: "r1",
            name: "Paneer Butter Masala",
            price: 320,
            desc: "Creamy tomato gravy",
            image: "https://images.unsplash.com/photo-1563104306-6927593c6629?q=80&w=200"
        },
        {
            id: "r2",
            name: "Chicken Biryani",
            price: 350,
            desc: "Lucknowi style",
            image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=200"
        }
    ],
    "zunoon": [
        {
            id: "z1",
            name: "Hakka Noodles",
            price: 180,
            desc: "Veg noodles",
            image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=200"
        },
        {
            id: "z2",
            name: "Chilli Chicken",
            price: 280,
            desc: "Spicy starter",
            image: "https://images.unsplash.com/photo-1615297926180-410766047333?q=80&w=200"
        }
    ],
    // BRANDS
    "dominos": [
        {
            id: "d1",
            name: "Margherita",
            price: 200,
            desc: "Classic Cheese",
            image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=200"
        },
        {
            id: "d2",
            name: "Peppy Paneer",
            price: 280,
            desc: "Spicy Paneer",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200"
        },
        {
            id: "d3",
            name: "Garlic Bread",
            price: 110,
            desc: "Stuffed Garlic Bread",
            image: "https://images.unsplash.com/photo-1573140247632-f84660f67627?q=80&w=200"
        }
    ],
    "kfc": [
        {
            id: "k1",
            name: "Zinger Burger",
            price: 180,
            desc: "Crispy Chicken",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200"
        },
        {
            id: "k2",
            name: "Hot Wings (4pc)",
            price: 150,
            desc: "Spicy Wings",
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=200"
        }
    ],
    "mcdonalds": [
        {
            id: "mc1",
            name: "Big Mac",
            price: 220,
            desc: "Double Patty",
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200"
        },
        {
            id: "mc2",
            name: "McFlurry",
            price: 110,
            desc: "Oreo Dessert",
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=200"
        }
    ],
    "burgerking": [
        {
            id: "bk1",
            name: "Whopper",
            price: 199,
            desc: "Flame Grilled",
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=200"
        }
    ],
    "subway": [
        {
            id: "s1",
            name: "Veggie Delite",
            price: 150,
            desc: "Fresh Subs",
            image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=200"
        }
    ],
    // DUMMY
    "1": [
        {
            id: "m1",
            name: "Butter Chicken",
            price: 220,
            desc: "Rich Gravy",
            image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=200"
        },
        {
            id: "m2",
            name: "Roti",
            price: 20,
            desc: "Tandoori Roti",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=200"
        }
    ],
    "2": [
        {
            id: "m3",
            name: "Alfredo Pasta",
            price: 250,
            desc: "White Sauce",
            image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=200"
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/restaurants/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RestaurantMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.js [app-client] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sampleData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sampleData.ts [app-client] (ecmascript)");
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
function RestaurantMenu() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const { addToCart, cartCount, clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])(); // Get clearCart too
    const [addedItems, setAddedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const id = params?.id ? Array.isArray(params.id) ? params.id[0] : params.id : "";
    const restaurant = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sampleData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["restaurants"].find((r)=>r.id === id);
    const menuItems = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sampleData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["menus"][id] || [];
    // --- MODIFIED ADD HANDLER ---
    const handleAdd = (item)=>{
        const itemToAdd = {
            ...item,
            image: item.image,
            restaurant: restaurant?.name
        };
        const result = addToCart(itemToAdd);
        if (result.success) {
            // Success Animation
            setAddedItems((prev)=>[
                    ...prev,
                    item.id
                ]);
            setTimeout(()=>setAddedItems((prev)=>prev.filter((i)=>i !== item.id)), 1000);
        } else {
            // Conflict Detected!
            // Show standard Browser Confirm Dialog (Simplest way)
            const shouldReset = window.confirm(result.error);
            if (shouldReset) {
                clearCart(); // 1. Clear old cart
                addToCart(itemToAdd); // 2. Add new item
                // Success Animation
                setAddedItems((prev)=>[
                        ...prev,
                        item.id
                    ]);
                setTimeout(()=>setAddedItems((prev)=>prev.filter((i)=>i !== item.id)), 1000);
            }
        }
    };
    if (!restaurant) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Not found"
        }, void 0, false, {
            fileName: "[project]/app/restaurants/[id]/page.tsx",
            lineNumber: 51,
            columnNumber: 29
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-slate-50 pb-24",
        children: [
            cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/cart",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-orange-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform border-2 border-white",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/app/restaurants/[id]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold text-lg",
                                children: [
                                    cartCount,
                                    " items"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/restaurants/[id]/page.tsx",
                                lineNumber: 63,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/restaurants/[id]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/restaurants/[id]/page.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/restaurants/[id]/page.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-72 lg:h-96 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: restaurant.cover,
                        alt: restaurant.name,
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/app/restaurants/[id]/page.tsx",
                        lineNumber: 71,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-all z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/app/restaurants/[id]/page.tsx",
                            lineNumber: 73,
                            columnNumber: 168
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/restaurants/[id]/page.tsx",
                        lineNumber: 73,
                        columnNumber: 10
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full p-6 lg:p-10 text-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl font-black mb-2",
                            children: restaurant.name
                        }, void 0, false, {
                            fileName: "[project]/app/restaurants/[id]/page.tsx",
                            lineNumber: 76,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/restaurants/[id]/page.tsx",
                        lineNumber: 75,
                        columnNumber: 10
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/restaurants/[id]/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8 max-w-4xl space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-black text-slate-800 border-b border-slate-200 pb-4",
                        children: "Menu"
                    }, void 0, false, {
                        fileName: "[project]/app/restaurants/[id]/page.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group bg-white p-4 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex justify-between gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg text-slate-900",
                                            children: item.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/restaurants/[id]/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-black text-slate-800 text-lg mt-1",
                                            children: [
                                                "₹",
                                                item.price
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/restaurants/[id]/page.tsx",
                                            lineNumber: 90,
                                            columnNumber: 18
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-500 text-sm mt-2 line-clamp-2",
                                            children: item.desc
                                        }, void 0, false, {
                                            fileName: "[project]/app/restaurants/[id]/page.tsx",
                                            lineNumber: 91,
                                            columnNumber: 18
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/restaurants/[id]/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-36 h-32 flex-shrink-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: item.image,
                                            alt: item.name,
                                            fill: true,
                                            className: "object-cover rounded-2xl shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/app/restaurants/[id]/page.tsx",
                                            lineNumber: 95,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleAdd(item),
                                            className: `absolute -bottom-3 left-1/2 -translate-x-1/2 shadow-xl rounded-xl font-bold border w-28 h-10 flex items-center justify-center transition-all active:scale-95 ${addedItems.includes(item.id) ? "bg-green-600 text-white border-green-600" : "bg-white text-green-600 border-slate-200 hover:bg-green-50"}`,
                                            children: addedItems.includes(item.id) ? "ADDED" : "ADD"
                                        }, void 0, false, {
                                            fileName: "[project]/app/restaurants/[id]/page.tsx",
                                            lineNumber: 98,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/restaurants/[id]/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/app/restaurants/[id]/page.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/restaurants/[id]/page.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/restaurants/[id]/page.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
_s(RestaurantMenu, "6K1N15jJU4sk2hwLU+Z4ktaw9/I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = RestaurantMenu;
var _c;
__turbopack_context__.k.register(_c, "RestaurantMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_974b85d9._.js.map