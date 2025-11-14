// Basic movie info used in lists (home page rows)
export interface Movie {
  id: number;
  title?: string;
  name?: string; // for TV series (sometimes TMDB uses `name`)
  poster_path?: string | null;
  backdrop_path?: string | null;
  overview?: string;
  release_date?: string;
  vote_average?: number;
}

// API response for lists (popular, trending, now playing, etc.)
export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// Detailed movie information used on the Movie Detail page
export interface MovieDetail extends Movie {
  budget?: number;
  revenue?: number;
  status?: string;
  genres?: { id: number; name: string }[];
  runtime?: number;
  tagline?: string;
}
