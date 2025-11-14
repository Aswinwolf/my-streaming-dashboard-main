import { fetchMovieById, fetchByGenre } from "@/lib/tmdb";
import MovieDetailsClient from "./MovieDetailsClient";

export default async function MoviePage({ params }: { params: Promise<{ id: string }> }) {
  // 🔥 Fix Next.js 16 dynamic params
  const { id } = await params;

  // 🔥 Fetch movie details
  const movie = await fetchMovieById(id);

  // 🔥 Fetch similar movies (based on first genre)
  let similar = [];
  if (movie?.genres?.length > 0) {
    similar = await fetchByGenre(movie.genres[0].id);
  }

  // Pass data to your client component
  return <MovieDetailsClient movie={movie} similar={similar.results || []} />;
}
