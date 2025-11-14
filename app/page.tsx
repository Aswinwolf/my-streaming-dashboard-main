// app/page.tsx
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import {
  fetchPopular,
  fetchTrending,
  fetchTopRated,
  fetchNowPlaying,
  fetchUpcoming,
  fetchByGenre,
} from "@/lib/tmdb";

export default async function HomePage() {
  // parallel fetch
  const [
    popularData,
    trendingData,
    topRatedData,
    nowPlayingData,
    upcomingData,
    actionData,
    horrorData,
    comedyData,
    romanceData,
    documentaryData,
  ] = await Promise.all([
    fetchPopular(),
    fetchTrending(),
    fetchTopRated(),
    fetchNowPlaying(),
    fetchUpcoming(),
    fetchByGenre(28), // Action
    fetchByGenre(27), // Horror
    fetchByGenre(35), // Comedy
    fetchByGenre(10749), // Romance
    fetchByGenre(99), // Documentary
  ]);

  const heroMovie = popularData.results?.[0];

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {/* live cinematic backdrop handled in HeroBanner or page-level if desired */}
      {heroMovie && <HeroBanner movie={heroMovie} />}

      <div className="space-y-12 mt-10">
        <MovieRow movies={popularData.results} categoryTitle="Popular" />
        <MovieRow movies={trendingData.results} categoryTitle="Trending This Week" />
        <MovieRow movies={topRatedData.results} categoryTitle="Top Rated" />
        <MovieRow movies={nowPlayingData.results} categoryTitle="Now Playing" />
        <MovieRow movies={upcomingData.results} categoryTitle="Upcoming" />
        <MovieRow movies={actionData.results} categoryTitle="Action" />
        <MovieRow movies={horrorData.results} categoryTitle="Horror" />
        <MovieRow movies={comedyData.results} categoryTitle="Comedy" />
        <MovieRow movies={romanceData.results} categoryTitle="Romance" />
        <MovieRow movies={documentaryData.results} categoryTitle="Documentary" />
      </div>
    </main>
  );
}
