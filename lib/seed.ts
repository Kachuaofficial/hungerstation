import { db } from "@/lib/firebase";
import { collection, doc, setDoc, writeBatch } from "firebase/firestore";
import { restaurants } from "@/lib/sampleData";
import { menus } from "@/lib/menuData"; 

export const seedDatabase = async (user: any) => {
  if (!user) {
    alert("You must be logged in to upload data!");
    return;
  }

  console.log("🚀 Starting Safe Data Upload...");

  try {
    let successCount = 0;
    let menuCount = 0;

    // Loop through all Restaurants
    for (const res of restaurants) {
      // 1. Create a mini-batch for THIS restaurant only
      const batch = writeBatch(db);

      // 2. Set Restaurant Data
      const resRef = doc(db, "restaurants", res.id.toString());
      batch.set(resRef, {
        ...res,
        createdAt: new Date(),
        updatedBy: user.uid
      });

      // 3. Find Matching Menu
      // We trim() the ID just in case there are hidden spaces
      const menuItems = menus[res.id.toString().trim()]; 

      if (menuItems && menuItems.length > 0) {
        console.log(`🍔 Found ${menuItems.length} menu items for: ${res.name}`);
        
        menuItems.forEach((item) => {
          const menuRef = doc(db, "restaurants", res.id.toString(), "menu", item.id);
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