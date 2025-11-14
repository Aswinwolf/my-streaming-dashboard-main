import Image from "next/image";
import { Movie } from "@/types/movie";

export default function HeroBanner({ movie }: { movie: Movie }) {
  const backdrop =
    movie?.backdrop_path
      ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
      : "/placeholder.jpg"; // using your existing local image

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      <Image
        src={backdrop}
        alt={movie?.title ?? "Movie"}
        fill
        priority
        className="object-cover object-top brightness-[0.55]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      <div className="absolute left-10 bottom-24 w-full max-w-2xl text-white space-y-5">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
          {movie?.title ?? "Untitled Movie"}
        </h1>

        <p className="text-lg text-gray-200 max-w-xl leading-relaxed drop-shadow-md hidden md:block">
          {movie?.overview
            ? movie.overview.slice(0, 120) + "..."
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
