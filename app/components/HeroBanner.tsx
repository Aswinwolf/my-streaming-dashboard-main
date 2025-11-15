"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Movie } from "@/types/movie";
import TrailerModal from "./TrailerModal";
import { fetchMovieTrailer } from "@/lib/tmdb";

interface HeroBannerProps {
  movies: Movie[];
}

export default function HeroBanner({ movies }: HeroBannerProps) {
  const [index, setIndex] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  const movie = movies[index];

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [movies.length]);

  const backdrop = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/placeholder.jpg";

  // Open trailer popup
  async function openTrailer() {
    const trailer = await fetchMovieTrailer(movie.id);

    if (trailer && trailer.key) {
      setTrailerKey(trailer.key);
      setShowTrailer(true);
    } else {
      alert("No trailer available for this movie.");
    }
  }

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">

      {/* Background Image */}
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

      {/* Black Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* TEXT CONTENT */}
      <div className="absolute left-10 bottom-16 md:bottom-20 w-full max-w-2xl text-white space-y-4 animate-fadeIn">

        {/* Movie Title */}
        <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg leading-tight">
          {movie?.title || "Untitled Movie"}
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg text-gray-200 max-w-xl leading-relaxed drop-shadow-md hidden md:block">
          {movie?.overview
            ? movie.overview.slice(0, 150) + "..."
            : "No description available."}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={openTrailer}
            className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition shadow-xl"
          >
            ▶ Play
          </button>

          <button className="bg-white/20 border border-white/30 px-6 py-3 rounded-md font-semibold hover:bg-white/30 transition backdrop-blur-sm shadow-xl">
            + My List
          </button>
        </div>
      </div>

      {/* TRAILER MODAL */}
      {showTrailer && (
        <TrailerModal
          trailerKey={trailerKey}
          onClose={() => setShowTrailer(false)}
        />
      )}
    </section>
  );
}
