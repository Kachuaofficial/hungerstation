import { db } from "@/lib/firebase"; // Make sure path is correct
import { collection, doc, setDoc } from "firebase/firestore";
import { restaurants } from "@/lib/sampleData"; // Your static data

export const seedDatabase = async () => {
  console.log("Starting Seed...");
  const collectionRef = collection(db, "restaurants");

  for (const res of restaurants) {
    // ID ko 'res.id' se set kar rahe hain taaki duplicate na ho
    await setDoc(doc(collectionRef, res.id.toString()), res);
    console.log(`Uploaded: ${res.name}`);
  }
  console.log("Database Seeded Successfully!");
};