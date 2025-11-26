// components/MenuItem.tsx
import { useCart } from "./CartProvider";

export default function MenuItem({ item }: { item: any }) {
  const { addItem } = useCart();
  return (
    <div className="card flex justify-between items-center">
      <div>
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-sm text-gray-500">₹{item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button className="px-3 py-1 border rounded text-sm" onClick={() => addItem(item)}>Add</button>
      </div>
    </div>
  );
}
