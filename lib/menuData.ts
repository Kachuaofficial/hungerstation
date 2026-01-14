export type MenuItem = {
  id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
  isVeg: boolean;
};

export const menus: Record<string, MenuItem[]> = {
  // --- NATIONAL BRANDS ---
  "kfc": [
    { id: "k1", name: "Zinger Burger", price: 180, desc: "Classic crispy chicken burger", isVeg: false, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200" },
    { id: "k2", name: "Chicken Bucket (8pc)", price: 650, desc: "Hot & Crispy chicken", isVeg: false, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=200" },
    { id: "k3", name: "Popcorn Chicken", price: 220, desc: "Bite sized chicken snacks", isVeg: false, image: "https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&w=200" },
  ],
  "dominos": [
    { id: "d1", name: "Farmhouse Pizza", price: 450, desc: "Onion, Capsicum, Tomato, Mushroom", isVeg: true, image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=200" },
    { id: "d2", name: "Peppy Paneer", price: 380, desc: "Paneer cubes & paprika", isVeg: true, image: "https://images.unsplash.com/photo-1593560708920-639843547177?q=80&w=200" },
    { id: "d3", name: "Choco Lava Cake", price: 99, desc: "Molten chocolate filling", isVeg: true, image: "https://images.unsplash.com/photo-1606313564200-e75d5e304abd?q=80&w=200" },
  ],
  "mcd": [
    { id: "m1", name: "McAloo Tikki", price: 65, desc: "Classic potato patty burger", isVeg: true, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=200" },
    { id: "m2", name: "McSpicy Chicken", price: 175, desc: "Spicy chicken fillet", isVeg: false, image: "https://images.unsplash.com/photo-1615297926180-410766047333?q=80&w=200" },
    { id: "m3", name: "Large Fries", price: 110, desc: "Golden crispy fries", isVeg: true, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=200" },
  ],
  "starbucks": [
    { id: "s1", name: "Java Chip Frappuccino", price: 350, desc: "Coffee with choco chips", isVeg: true, image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=200" },
    { id: "s2", name: "Cappuccino", price: 280, desc: "Rich espresso with foam", isVeg: true, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=200" },
  ],

  // --- LOCAL FAVORITES (Gorakhpur) ---
  "res-1": [ // Royal Darbar
    { id: "rd1", name: "Shahi Paneer", price: 280, desc: "Rich creamy gravy", isVeg: true, image: "https://images.unsplash.com/photo-1563104306-6927593c6629?q=80&w=200" },
    { id: "rd2", name: "Butter Naan", price: 40, desc: "Tandoori bread with butter", isVeg: true, image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=200" },
    { id: "rd3", name: "Dal Makhani", price: 240, desc: "Slow cooked black lentils", isVeg: true, image: "https://images.unsplash.com/photo-1585937421612-70a008356f36?q=80&w=200" },
  ],
  "res-2": [ // Spicy Wok
    { id: "sw1", name: "Veg Hakka Noodles", price: 180, desc: "Stir fried noodles", isVeg: true, image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=200" },
    { id: "sw2", name: "Chilli Chicken", price: 290, desc: "Spicy chinese starter", isVeg: false, image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=200" },
  ],
  "res-3": [ // Tandoori Nights
    { id: "tn1", name: "Chicken Biryani", price: 320, desc: "Aromatic basmati rice", isVeg: false, image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=200" },
    { id: "tn2", name: "Mutton Kebab", price: 350, desc: "Minced meat skewers", isVeg: false, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=200" },
  ],
  "res-4": [ // Dosa Plaza
    { id: "dp1", name: "Masala Dosa", price: 150, desc: "Crispy crepe with potato", isVeg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=200" },
    { id: "dp2", name: "Idli Sambar", price: 100, desc: "Steamed rice cakes", isVeg: true, image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=200" },
  ],
  "res-5": [ // Cake Walk
    { id: "cw1", name: "Black Forest Cake", price: 450, desc: "Chocolate sponge with cherries", isVeg: true, image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=200" },
    { id: "cw2", name: "Red Velvet Pastry", price: 120, desc: "Cream cheese frosting", isVeg: true, image: "https://images.unsplash.com/photo-1616031037011-087000171ea3?q=80&w=200" },
  ],
  "res-6": [ // Burger Singh
    { id: "bs1", name: "Udta Punjab Burger", price: 199, desc: "Tandoori flavored patty", isVeg: true, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200" },
    { id: "bs2", name: "Chicken Keema Fries", price: 150, desc: "Fries topped with keema", isVeg: false, image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=200" },
  ],
  "res-7": [ // Green Garden
    { id: "gg1", name: "Veg Deluxe Thali", price: 220, desc: "Paneer, Dal, Roti, Rice", isVeg: true, image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=200" },
  ],
  "res-8": [ // Chai Sutta Bar
    { id: "csb1", name: "Adrak Chai", price: 20, desc: "Ginger tea", isVeg: true, image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=200" },
    { id: "csb2", name: "Bun Maska", price: 40, desc: "Butter bun", isVeg: true, image: "https://images.unsplash.com/photo-1626074353765-5bf1d51cfc57?q=80&w=200" },
  ],
  "res-9": [ // Pasta La Vista
    { id: "plv1", name: "White Sauce Pasta", price: 240, desc: "Creamy alfredo", isVeg: true, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=200" },
  ],
  "res-10": [ // Sushi House
    { id: "sh1", name: "Veg California Roll", price: 350, desc: "Avocado & Cucumber", isVeg: true, image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=200" },
  ],
  "res-11": [ // Desi Tadka
    { id: "dt1", name: "Chole Bhature", price: 120, desc: "Spicy chickpea curry", isVeg: true, image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=200" },
  ],
  "res-12": [ // Wrap It Up
    { id: "wiu1", name: "Chicken Shawarma", price: 110, desc: "Grilled chicken roll", isVeg: false, image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=200" },
  ],
  "res-13": [ // Ice Cream Works
    { id: "icw1", name: "Chocolate Fudge", price: 180, desc: "Double scoop", isVeg: true, image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=200" },
  ],
  "res-14": [ // Grill Master
    { id: "gm1", name: "Grilled Chicken", price: 380, desc: "Full bird with seasoning", isVeg: false, image: "https://images.unsplash.com/photo-1529193591176-1da790181a82?q=80&w=200" },
  ],
  "res-15": [ // Salad Story
    { id: "ss1", name: "Caesar Salad", price: 250, desc: "Lettuce, croutons, parmesan", isVeg: true, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200" },
  ],
  "res-16": [ // Momos Hub
    { id: "mh1", name: "Steamed Veg Momos", price: 80, desc: "Served with red chutney", isVeg: true, image: "https://images.unsplash.com/photo-1619526881542-c81baff85fa4?q=80&w=200" },
  ],
  "res-17": [ // Haldiram's
    { id: "hr1", name: "Raj Kachori", price: 110, desc: "King of chats", isVeg: true, image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=200" },
  ],
  "res-18": [ // Waffle World
    { id: "ww1", name: "Nutella Waffle", price: 160, desc: "Loaded with hazelnut spread", isVeg: true, image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?q=80&w=200" },
  ],
  "res-19": [ // Biryani Blues
    { id: "bb1", name: "Hyderabadi Dum Biryani", price: 340, desc: "Slow cooked mutton", isVeg: false, image: "https://images.unsplash.com/photo-1630851840633-f96999247032?q=80&w=200" },
  ],
  "res-20": [ // Smoothie King
    { id: "sk1", name: "Berry Blast", price: 190, desc: "Mixed berries & yogurt", isVeg: true, image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?q=80&w=200" },
  ],
};