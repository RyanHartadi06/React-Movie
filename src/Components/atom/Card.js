import React, { useEffect, useState } from "react";
import axios from "axios";
const Card = () => {
  const [movie, setMovie] = useState([]);
  const [user, setUser] = useState([]);
  const [Loading, isLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL}/movie/popular?api_key=b3d25a13cfc040b3812a0afbc7ff5c32`
      )
      .then((response) => {
        setMovie(response.data.results);
        isLoading(false);
      })
      .catch((e) => console.log(e.message));
  }, []);

  const getUser = async () => {
    await axios
      .get("https://pokeapi.co/api/v2/version/9")
      .then((response) => {
        console.log(response.data.names);
        setUser(response.data.names);
      })
      .catch((e) => console.log(e.message));
  };
  getUser();

  return (
    <div className="container px-6 mx-auto font-inter sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
      {Loading ? "Loading...." : ""}
      {movie.map((result, index) => {
        return (
          <div
            className="mb-10 overflow-hidden bg-white rounded-md shadow-lg sm:w-64 md:w-80 sm:mb-0 lg:w-72"
            key={index}
          >
            <img
              src={`${process.env.REACT_APP_TMDB_IMG}/${result.backdrop_path}`}
              alt=""
              className="w-full"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold text-slate-700">
                {result.original_title}
              </div>
              <p className="text-sm text-slate-600">{result.overview}</p>
            </div>
          </div>
        );
      })}
      {user.map((res, index) => {
        return (
          <div key={index} className="flex-1 flex-wrap">
            <div className="border border-lg rounded-md border-slate-800 p-6 hover:bg-teal-800 hover:text-dark">
              <h2 className="text-3xl font-semibold text-primary ">
                {res.name}
              </h2>
              <h2 className="text-lg font-semibold text-dark">
                {res.language.url}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
