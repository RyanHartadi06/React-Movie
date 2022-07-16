import React from "react";
import ImageHero from "../../img/header.png";

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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
