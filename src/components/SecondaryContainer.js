import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black text-white">
      <div className="-mt-5 xl:-mt-48 pl-4 xl:pl-11 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upComingMovies} />
      </div>

      {/*
        movieList - Now Playing
          - movieCard * N
        movieList - Trending
        movieList - Upcoming
        movieList - Horror
     */}
    </div>
  );
};

export default SecondaryContainer;
