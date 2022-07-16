import React from "react";
import ImageHero from "../img/header.png";

function Hero() {
  return (
    <div className="container">
      <div className="flex flex-wrap">
        <div className="self-center w-full px-4 lg:w-1/2">
          <h1 className="text-base font-semibold text-primary md:text-xl">
            Welcome guys... 👋,
            <span className="block mt-1 text-4xl font-bold text-dark">
              Selamat Datang di Movie Watch
            </span>
          </h1>
          <h2 className="mb-5 text-lg font-medium text-secondary lg:text-2xl">
            Silahkan menonton dengan nyaman,
          </h2>
          <p className="mb-10 font-medium leading-relaxed text-slate-400">
            Banyak film keren yang menunggu
            <span className="font-semibold text-dark"> kamu nih.....</span>
          </p>
          <button
            href=""
            className="px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out rounded-full bg-primary hover:shadow-lg hover:opacity-90"
          >
            Klik Untuk Melanjutkan
          </button>
        </div>
        <div className="self-center w-full px-4 lg:w-1/2 mb-10">
          <div className="relative mt-10 lg:mt-0 lg:right-0">
            <img
              src={ImageHero}
              alt=""
              width="500"
              height="500"
              className="max-w-full mx-auto"
            />
            <span className="absolute -translate-x-1/2 -translate-y-20 -bottom-0 -z-10 left-1/2 md:scale-125">
              <svg
                width="400"
                height="400"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#14b8a6"
                  d="M64.9,-23.4C70.1,-4.9,50.8,19.2,26.2,37.5C1.5,55.7,-28.4,68.1,-46.1,56.8C-63.7,45.6,-68.9,10.7,-59.2,-14C-49.5,-38.7,-24.7,-53.2,2.5,-54.1C29.8,-54.9,59.6,-42,64.9,-23.4Z"
                  transform="translate(100 100) scale(1.2)"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
