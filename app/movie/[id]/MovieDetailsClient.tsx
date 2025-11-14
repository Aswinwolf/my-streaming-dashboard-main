"use client";

import StarRating from "@/app/components/StarRating";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MovieDetail, Movie } from "@/types/movie";

interface Props {
  movie: MovieDetail;
  similar: Movie[];
}

const formatNumber = (num?: number) => {
  if (!num) return "N/A";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function MovieDetailsClient({ movie, similar }: Props) {
  const backdrop =
    movie.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : "/placeholder.jpg";

  const poster =
    movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "/placeholder.jpg";

  return (
    <div className="relative min-h-screen bg-black text-white">

      {/* BACKDROP IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={backdrop}
          alt={movie?.title ?? "Backdrop"}
          fill
          priority
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* POSTER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={poster}
              alt={movie?.title ?? "Movie Poster"}
              width={420}
              height={630}
              className="rounded-xl shadow-2xl"
            />
          </motion.div>

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>

            <p className="text-gray-300 mb-6 leading-relaxed text-lg">
              {movie.overview}
            </p>

            {/* RATING */}
            <div className="flex items-center gap-3 mt-4">
              <span className="text-gray-400">Rating:</span>
              <StarRating rating={movie.vote_average || 0} />
              <span className="text-sm text-gray-400">
                ({movie.vote_average?.toFixed(1)}/10)
              </span>
            </div>

            {/* META DETAILS */}
            <div className="space-y-2 text-gray-300 mt-4">
              <p><span className="text-gray-500">Status:</span> {movie.status}</p>
              <p><span className="text-gray-500">Released:</span> {movie.release_date}</p>
              <p><span className="text-gray-500">Budget:</span> ${formatNumber(movie.budget)}</p>
              <p><span className="text-gray-500">Revenue:</span> ${formatNumber(movie.revenue)}</p>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-lg font-semibold">
                ▶ Play
              </button>
              <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 transition rounded-lg font-semibold">
                + My List
              </button>
            </div>
          </motion.div>
        </div>

        {/* SIMILAR MOVIES */}
        {similar.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-4">Similar Movies</h2>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-700">
              {similar.map((m) => (
                <Link
                  key={m.id}
                  href={`/movie/${m.id}`}
                  className="min-w-[150px] block hover:scale-105 transition"
                >
                  <Image
                    src={
                      m.poster_path
                        ? `https://image.tmdb.org/t/p/w300${m.poster_path}`
                        : "/placeholder.jpg"
                    }
                    alt={m.title ?? "Similar Movie"}
                    width={150}
                    height={225}
                    className="rounded-lg"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
