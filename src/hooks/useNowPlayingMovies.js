import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIES } from "../utils/constants";
import { addNowPlayingMovies } from "../Redux/moviesSlice";
import { useSelector } from "react-redux";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_MOVIES, API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
