import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES } from "../utils/constants";
import { addTopRatedMovies } from "../Redux/moviesSlice";
import { useSelector } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
