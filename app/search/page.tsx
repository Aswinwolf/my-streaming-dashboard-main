import { searchMovies } from "@/lib/tmdb";
import MovieCard from "../components/MovieCard";
import { Movie } from "@/types/movie";  // ✅ ADD THIS

interface SearchPageProps {
  searchParams: Promise<{ query?: string }>;
}

export default async function SearchPage(props: SearchPageProps) {
  const searchParams = await props.searchParams;
  const query = searchParams.query || "";

  if (!query.trim()) {
    return (
      <div className="text-white text-center mt-24 text-2xl">
        Type something to search movies...
      </div>
    );
  }

  const results = await searchMovies(query);

  return (
    <div className="px-8 md:px-14 py-28 text-white bg-black min-h-screen">
      {/* PAGE TITLE */}
      <h1 className="text-4xl font-bold mb-10">
        Results for: <span className="text-red-500">{query}</span>
      </h1>

      {/* NO RESULTS */}
      {results.length === 0 && (
        <p className="text-gray-400 text-xl mt-10">No movies found.</p>
      )}

      {/* MOVIE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {results.map((movie: Movie) => (    // ✅ FIX HERE
          <div
            key={movie.id}
            className="transform hover:scale-105 transition duration-300"
          >
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
}
