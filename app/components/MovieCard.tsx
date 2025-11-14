"use client";

import Image from "next/image";
import Link from "next/link";
import { Movie } from "@/types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
  const img = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder.jpg"; // using your placeholder.jpg

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="block min-w-[180px] transform transition-transform duration-300 will-change-transform"
    >
      <div className="rounded-xl overflow-hidden shadow-2xl hover:scale-110 hover:-translate-y-2">
        <Image
          src={img}
          alt={movie?.title ?? "Movie"}
          width={180}
          height={270}
          className="object-cover"
        />
      </div>
    </Link>
  );
}
