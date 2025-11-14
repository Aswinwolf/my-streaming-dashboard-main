// app/components/MovieRow.tsx
"use client";

import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

export default function MovieRow({
  movies,
  categoryTitle,
}: {
  movies: Movie[];
  categoryTitle: string;
}) {
  return (
    <section className="mt-6">
      <div className="px-10 flex items-center justify-between mb-3">
        <h2 className="text-2xl font-semibold text-white">{categoryTitle}</h2>
      </div>

      <div className="px-10">
        <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x snap-mandatory">
          {movies.map((movie) => (
            <div key={movie.id} className="snap-start">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
