import { MovieData } from "./MovieData";

export interface DataRequest {
  page?: number;
  results: Array<MovieData>;
  total_pages?: number;
  total_results?: number;
}