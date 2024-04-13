import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute w-full aspect-video pt-[30%] xl:pt-[20%] px-6 xl:px-16 bg-gradient-to-r from-black text-white">
      <h1 className="text-xl md:text-2xl xl:text-4xl font-bold">{title}</h1>
      <p className="hidden xl:inline-block py-6 text-[17px] w-1/3">
        {description}
      </p>
      <div className="flex gap-3 my-2 md:my-4 xl:my-0">
        <button className="bg-white text-black xl:text-lg py-1 md:py-2 px-4 xl:px-8 rounded-lg flex items-center gap-1 hover:bg-opacity-80">
          <FaPlay className="md:text-sm" /> Play
        </button>
        <button className="hidden bg-gray-700 text-white xl:text-lg py-2 px-4 xl:px-8 rounded-lg md:flex items-center gap-1 hover:bg-opacity-50">
          <IoIosInformationCircleOutline className=" md:text-xl xl:text-2xl" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
