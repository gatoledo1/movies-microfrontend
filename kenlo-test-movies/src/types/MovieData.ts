export interface MovieData {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget?: number;
  genres?: Array<{
    id: number;
    name: string;
  }>;
  genre_ids?: number[];
  homepage?: string;
  id: number;
  imdb_id?: string;
  original_language: string;
  original_title: string;
  overview?: string;
  popularity: number;
  poster_path: string;
  production_companies?: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries?: Array<{
    iso_3166_1?: string;
    name: string;
  }>;
  providers?: {
    link: string;
    flatrate?: Array<{
      logo_path: string;
      provider_id: number;
      provider_name: string;
      display_priority: number;
    }>;
    buy?: Array<{
      logo_path: string;
      provider_id: number;
      provider_name: string;
      display_priority: number;
    }>;
  };
  release_date: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status?: string;
  tagline?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
