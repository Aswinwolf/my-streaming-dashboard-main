"use client";
import { FaStar } from "react-icons/fa";

interface StarProps {
  rating: number;
}

export default function StarRating({ rating }: StarProps) {
  const full = Math.round(rating / 2); // Convert 10 → 5 stars

  return (
    <span className="flex items-center gap-1 text-yellow-400">
      {[...Array(full)].map((_, i) => (
        <FaStar key={i} />
      ))}
    </span>
  );
}
