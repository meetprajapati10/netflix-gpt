import { BACKGROUND_IMG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND_IMG} alt="background-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />

      {/*
       * - GPT Search Bar
       * - GPT Movie Suggestions
       */}
    </div>
  );
};

export default GptSearchPage;
