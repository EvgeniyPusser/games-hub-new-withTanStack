import { Genre } from "../model/fetch-genre-types";
import useData from "./useData";

export default function useGenres() {
  return useData<Genre>("/genres");
}
