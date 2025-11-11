import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchPopularMovies = () => {
  return api.get(`/movie/popular`);
  
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie_popular"],
    queryFn: fetchPopularMovies,
    suspense:true,
    select: (result) => result.data,
  });
};
