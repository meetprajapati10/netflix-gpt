import { lang } from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[9%] flex justify-center">
      <form className="bg-black w-1/2 rounded-lg grid grid-cols-12">
        <input
          className="py-2 px-4 m-4 border border-black rounded-lg col-span-10 font-medium"
          type="text"
          placeholder={lang[langKey].getSearchPlaceholder}
        />
        <button className="my-4 mx-3  bg-red-600 text-white rounded-lg col-span-2 font-medium hover:bg-red-700">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
