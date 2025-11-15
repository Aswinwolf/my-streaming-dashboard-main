"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "@/types/movie";

interface HeroBannerProps {
  movies: Movie[];
}

export default function HeroBanner({ movies }: HeroBannerProps) {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [movies.length]);

  const movie = movies[index];

  const backdrop = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/placeholder.jpg";

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">

      {/* Fade Transition */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        <Image
          key={backdrop}
          src={backdrop}
          alt={movie?.title || "Movie"}
          fill
          priority
          className="object-cover object-top brightness-[0.55]"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute left-10 bottom-16 md:bottom-20 w-full max-w-2xl text-white space-y-4 animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg leading-tight">
          {movie?.title || "Untitled Movie"}
        </h1>

       <p className="text-base md:text-lg text-gray-200 max-w-xl leading-relaxed drop-shadow-md hidden md:block">
          {movie?.overview
            ? movie.overview.slice(0, 150) + "..."
            : "No description available."}
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition shadow-xl">
            ▶ Play
          </button>

          <button className="bg-white/20 border border-white/30 px-6 py-3 rounded-md font-semibold hover:bg-white/30 transition backdrop-blur-sm shadow-xl">
            + My List
          </button>
        </div>
      </div>
    </section>
  );
}
