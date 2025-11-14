const BASE = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY;

// COMMON FETCH WRAPPER
async function tmdbFetch(path: string) {
  const connector = path.includes("?") ? "&" : "?";
  const url = `${BASE}${path}${connector}api_key=${API_KEY}`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    console.log("TMDB ERROR URL:", url);
    console.log("API_KEY at runtime:", API_KEY);
    throw new Error("Failed to fetch from TMDB: " + path);
  }

  return res.json();
}

// HOME PAGE FUNCTIONS
export const fetchPopular = () =>
  tmdbFetch(`/movie/popular?language=en-US&page=1`);

export const fetchTrending = () =>
  tmdbFetch(`/trending/movie/week?language=en-US`);

export const fetchTopRated = () =>
  tmdbFetch(`/movie/top_rated?language=en-US&page=1`);

export const fetchNowPlaying = () =>
  tmdbFetch(`/movie/now_playing?language=en-US&page=1`);

export const fetchUpcoming = () =>
  tmdbFetch(`/movie/upcoming?language=en-US&page=1`);

export const fetchByGenre = (genreId: number) =>
  tmdbFetch(
    `/discover/movie?with_genres=${genreId}&language=en-US&sort_by=popularity.desc&page=1`
  );

// MOVIE DETAILS
export const fetchMovieById = (id: string) =>
  tmdbFetch(`/movie/${id}?language=en-US`);


export async function searchMovies(query: string) {
  console.log("🔥 SEARCH QUERY:", query);

  try {
    const data = await tmdbFetch(
      `/search/movie?query=${encodeURIComponent(query)}&language=en-US`
    );

    console.log("🔥 SEARCH RESULT COUNT:", data.results?.length);
    return data.results || [];
  } catch (err) {
    console.log("❌ SEARCH ERROR:", err);
    return [];
  }
}

