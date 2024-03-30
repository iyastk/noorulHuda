import React from "react";
import { VscLocation } from "react-icons/vsc";
import { TfiGallery } from "react-icons/tfi";
import { GoDownload } from "react-icons/go";

const icons = [
  { Img: <VscLocation />, Title: "Locate us", url: "/contactUs" },
  { Img: <TfiGallery />, Title: "Gallery", url: "/gallery" },
  { Img: <GoDownload />, Title: "Results", url: "/madrasa" },
];
const RippleBtn = () => {
  return icons.map((el, i) => {
    return (
      <a
        key={i}
        href={el.url}
        className="relative inline-flex items-center justify-center h-40 w-40 rounded-full  overflow-hidden font-mono font-medium tracking-tighter  bg-white group"
      >
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-800 opacity-10  rounded-full group-hover:w-56 group-hover:h-56"></span>
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
        <div className="flex flex-col justify-center items-center gap-2">
          <span className="relative  text-4xl">{el.Img}</span>
          <span className="relative text-lg">{el.Title}</span>
        </div>
      </a>
    );
  });
};

export default RippleBtn;
