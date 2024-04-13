import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-32 md:w-36 xl:w-40 cursor-pointer">
      <img
        className="rounded-md border border-gray-700"
        alt="movie-card"
        src={IMG_CDN_URL + posterPath}
      />
    </div>
  );
};

export default MovieCard;
