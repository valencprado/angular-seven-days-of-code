import { Movie } from "./movie";

export type MoviesApiReturn = {
  count: number;
  next: number | null
  previous: number | null
  results: Movie[];
};
