import { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";
import genAI from "../utils/geminiAI";
import { API_OPTIONS, TMDB_SEARCH_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovieData } from "../Redux/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(TMDB_SEARCH_API + movie + "&page=1", API_OPTIONS);

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value);

    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });

    const gptResults = await model.generateContent(gptQuery);
    const response = await gptResults.response;
    const text = response.text();

    // "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan"
    // console.log(text);

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
    const gptMoviesName = text.split(", ");
    // console.log(gptMovies);

    // For each gptMovies i will search TMDB API data

    // [Promise, Promise, Promise, Promise, Promise]
    const promiseArray = gptMoviesName.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    // console.log(tmdbResults);

    dispatch(
      addGptMovieData({ movieNames: gptMoviesName, movieResults: tmdbResults }),
    );
  };

  return (
    <div className="pt-[34%] md:pt-[15%] xl:pt-[8%] flex justify-center">
      <form
        className="bg-black m-2 w-full xl:w-1/2 rounded-lg grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="py-2 px-4 m-3 md:m-4 border border-black rounded-lg col-span-10 text-xs md:text-base font-medium"
          type="text"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button
          className="my-3 md:my-4 mx-1 md:mx-3 bg-red-600 text-white rounded-lg col-span-2 font-medium hover:bg-red-700 text-sm md:text-base"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
