import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES } from "../utils/constants";
import { addPoularMovies } from "../Redux/moviesSlice";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(POPULAR_MOVIES, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPoularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
