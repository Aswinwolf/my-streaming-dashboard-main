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
  // Parallel API fetches
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
    fetchByGenre(28),     // Action
    fetchByGenre(27),     // Horror
    fetchByGenre(35),     // Comedy
    fetchByGenre(10749),  // Romance
    fetchByGenre(99),     // Documentary
  ]);

  // Extract arrays safely
  const popular = popularData.results || [];
  const trending = trendingData.results || [];
  const topRated = topRatedData.results || [];
  const nowPlaying = nowPlayingData.results || [];
  const upcoming = upcomingData.results || [];
  const action = actionData.results || [];
  const horror = horrorData.results || [];
  const comedy = comedyData.results || [];
  const romance = romanceData.results || [];
  const documentary = documentaryData.results || [];

  return (
    <main className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      
      {/* HERO BANNER: Auto-sliding Netflix style */}
      {popular.length > 0 && <HeroBanner movies={popular} />}

      {/* MOVIE ROWS */}
      <div className="space-y-12 px-4 md:px-10 mt-10">
        <MovieRow movies={popular} categoryTitle="Popular" />
        <MovieRow movies={trending} categoryTitle="Trending This Week" />
        <MovieRow movies={topRated} categoryTitle="Top Rated" />
        <MovieRow movies={nowPlaying} categoryTitle="Now Playing" />
        <MovieRow movies={upcoming} categoryTitle="Upcoming" />
        <MovieRow movies={action} categoryTitle="Action" />
        <MovieRow movies={horror} categoryTitle="Horror" />
        <MovieRow movies={comedy} categoryTitle="Comedy" />
        <MovieRow movies={romance} categoryTitle="Romance" />
        <MovieRow movies={documentary} categoryTitle="Documentary" />
      </div>
    </main>
  );
}
