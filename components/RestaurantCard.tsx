// components/RestaurantCard.tsx
import Link from "next/link";

export default function RestaurantCard({ r }: { r: any }) {
  return (
    <Link href={`/restaurant/${r.id}`} className="card flex gap-4 hover:shadow-md transition">
      <div className="w-28 h-20 bg-gray-100 rounded-md flex items-center justify-center text-gray-500">Img</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{r.name}</h3>
        <p className="text-sm text-gray-500">{r.cuisine}</p>
        <div className="mt-2 flex items-center gap-2 text-sm">
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded">{r.rating} ★</span>
          <span className="text-gray-400">• 30-40 min</span>
        </div>
      </div>
    </Link>
  );
}
