import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="absolute w-full aspect-video pt-[20%] px-16 bg-gradient-to-r from-black text-white">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-[17px] w-1/3">{description}</p>
      <div className="flex gap-3">
        <button className="bg-white text-black text-lg py-2 px-8 rounded-lg flex items-center gap-1 hover:bg-opacity-80">
          <FaPlay /> Play
        </button>
        <button className="bg-gray-600 text-white text-lg py-2 px-8 rounded-lg flex items-center gap-1 hover:bg-opacity-50">
          <IoIosInformationCircleOutline className="text-2xl" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
