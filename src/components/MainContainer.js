import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies) return;

  const mainMovie = movies[19];
  //   console.log(mainMovie);

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[25%] bg-black md:pt-0">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
