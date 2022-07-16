import React from "react";
import thumbnail from "../img/thumbnail.png";
import thumbnail2 from "../img/Thumbnail-2.png";
import thumbnail3 from "../img/Thumbnail-3.png";
import thumbnail4 from "../img/Thumbnail-4.png";
import thumbnail5 from "../img/Thumbnail-5.png";

function Card() {
  return (
    <div className="container px-6 mx-auto font-inter sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
      <div className="mb-10 overflow-hidden bg-white rounded-md shadow-lg sm:w-64 md:w-80 sm:mb-0 lg:w-72">
        <img src={thumbnail} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-slate-700">
            Image Title
          </div>
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sit?
          </p>
        </div>
      </div>
      <div className="mb-10 overflow-hidden bg-white rounded-md shadow-lg sm:w-64 md:w-80 sm:mb-0 lg:w-72">
        <img src={thumbnail2} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-slate-700">
            Image Title
          </div>
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sit?
          </p>
        </div>
      </div>
      <div className="mb-10 overflow-hidden bg-white rounded-md shadow-lg sm:w-64 md:w-80 sm:mb-0 lg:w-72">
        <img src={thumbnail3} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-slate-700">
            Image Title
          </div>
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sit?
          </p>
        </div>
      </div>
      <div className="mb-10 overflow-hidden bg-white rounded-md shadow-lg sm:w-64 md:w-80 sm:mb-0 lg:w-72">
        <img src={thumbnail4} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-slate-700">
            Image Title
          </div>
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sit?
          </p>
        </div>
      </div>
      <div className="mb-10 overflow-hidden bg-white rounded-md shadow-lg sm:w-64 md:w-80 sm:mb-0 lg:w-72">
        <img src={thumbnail5} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-slate-700">
            Image Title
          </div>
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
            sit?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
