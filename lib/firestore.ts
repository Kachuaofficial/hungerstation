import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore();

export const createOrder = async (order: any) => {
  const docRef = await addDoc(collection(db, "orders"), order);
  return docRef.id;
};
