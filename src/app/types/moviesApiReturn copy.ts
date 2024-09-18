import { Ship } from "./ship";

export type ShipsApiReturn = {
  count: number;
  next: number | null
  previous: number | null
  results: Ship[];
};
