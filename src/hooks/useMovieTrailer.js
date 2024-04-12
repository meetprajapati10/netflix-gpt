import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../Redux/moviesSlice";
import { useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos",
      API_OPTIONS,
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer",
    );

    const trailer = filterData.length ? filterData[0] : json.results[0];

    // console.log(trailer);
    // setTrailerId(trailer.key);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
