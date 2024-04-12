import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES } from "../utils/constants";
import { addUpComingMovies } from "../Redux/moviesSlice";
import { useSelector } from "react-redux";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const upComingMovies = useSelector((store) => store.movies.upComingMovies);

  const getUpComingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !upComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
