import { useState } from "react";

import movies from "../../movies";
import TrailerCard from "./TrailerCard";

function Trailers() {
  const backgroundImage =
    "https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/s94NjfKkcSczZ1FembwmQZwsuwY.jpg";

  const imagen =
    "https://image.tmdb.org/t/p/w710_and_h400_multi_faces/s94NjfKkcSczZ1FembwmQZwsuwY.jpg";

  const [typeSelected, setTypeSelected] = useState("Movies");
  const [typeMovieSelected, setTypeMovieSelected] = useState("Now Playing");
  const [typeTVSerieSelected, setTypeTVSerieSelected] =
    useState("Airing Today");

  return (
    <section
      className="h-85 w-screen bg-[#032541bf] flex justify-center select-none focus:outline-none"
      style={{
        backgroundImage: `linear-gradient(rgba(3,37,65,0.75), rgba(3,37,65,0.75)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center w-full max-w-[1300px]">
        <div className="pt-8 flex flex-col w-full flex-nowrap overflow-hidden overflow-x-auto">
          <div className="px-10 flex flex-row justify-between">
            <div>
              <h2 className="text-2xl font-bold mr-5 text-white">Trailers</h2>
            </div>
            <div className="flex flex-row gap-5 text-center">
              <div className="flex items-center text-white font-semibold border-solid border-1 border-[#1ed5a9] rounded-full">
                <div
                  className={`py-1 px-5 transition-colors duration-300 ease-in-out ${
                    typeSelected === "Movies"
                      ? "border-solid border-1 border-[#1ed5a9] rounded-full text-black bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                      : "text-white border-transparent bg-transparent"
                  }`}
                >
                  <span
                    className="cursor-pointer"
                    onClick={(e) => {
                      setTypeSelected(e.target.textContent);
                    }}
                  >
                    Movies
                  </span>
                </div>
                <div
                  className={`py-1 px-5 transition-colors duration-300 ease-in-out ${
                    typeSelected === "TV Series"
                      ? "border-solid border-1 border-[#1ed5a9] rounded-full text-black bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                      : "text-white border-transparent bg-transparent"
                  }`}
                >
                  <span
                    className="cursor-pointer"
                    onClick={(e) => setTypeSelected(e.target.textContent)}
                  >
                    TV Series
                  </span>
                </div>
              </div>
              <div className="relative">
                <div
                  className={`inset-0 transition-opacity duration-1000 flex items-center text-white font-semibold border-solid border-1 border-[#1ed5a9] rounded-full ${
                    typeSelected !== "Movies"
                      ? "opacity-0 absolute pointer-events-none"
                      : "opacity-100"
                  }`}
                >
                  <div
                    className={`py-1 px-5 w-35  transition-colors duration-300 ease-in-out ${
                      typeMovieSelected === "Now Playing"
                        ? "border-solid border-1 border-[#1ed5a9] rounded-full text-black bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                        : "text-white border-transparent bg-transparent"
                    }`}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        setTypeMovieSelected(e.target.textContent);
                        console.log(typeMovieSelected);
                      }}
                    >
                      Now Playing
                    </span>
                  </div>
                  <div
                    className={`py-1 px-5 w-35  transition-colors duration-300 ease-in-out ${
                      typeMovieSelected === "Upcoming"
                        ? "border-solid border-1 border-[#1ed5a9] rounded-full text-black bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                        : "text-white border-transparent bg-transparent"
                    }`}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        setTypeMovieSelected(e.target.textContent);
                        console.log(typeMovieSelected);
                      }}
                    >
                      Upcoming
                    </span>
                  </div>
                  <div
                    className={`py-1 px-5 w-35  transition-colors duration-300 ease-in-out ${
                      typeMovieSelected === "Top Rated"
                        ? "border-solid border-1 border-[#1ed5a9] rounded-full text-black bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                        : "text-white border-transparent bg-transparent"
                    }`}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        setTypeMovieSelected(e.target.textContent);
                        console.log(typeMovieSelected);
                      }}
                    >
                      Top Rated
                    </span>
                  </div>
                  <div
                    className={`py-1 px-5 w-35  transition-colors duration-300 ease-in-out ${
                      typeMovieSelected === "Popular"
                        ? "border-solid border-1 border-[#1ed5a9] rounded-full text-black bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                        : "text-white border-transparent bg-transparent"
                    }`}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        setTypeMovieSelected(e.target.textContent);
                        console.log(typeMovieSelected);
                      }}
                    >
                      Popular
                    </span>
                  </div>
                </div>
                <div
                  className={`inset-0 transition-opacity duration-1000 flex items-center text-white font-semibold border-solid border-1 border-[#1ed5a9] rounded-full ${
                    typeSelected !== "TV Series"
                      ? "opacity-0 absolute pointer-events-none"
                      : "opacity-100"
                  }`}
                >
                  <div
                    className={`py-1 px-5 w-35  transition-colors duration-300 ease-in-out ${
                      typeTVSerieSelected === "Airing Today"
                        ? "border-solid border-1 border-[#1ed5a9] rounded-full text-black bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                        : "text-white border-transparent bg-transparent"
                    }`}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        setTypeTVSerieSelected(e.target.textContent);
                      }}
                    >
                      Airing Today
                    </span>
                  </div>
                  <div
                    className={`py-1 px-5 w-35  transition-colors duration-300 ease-in-out ${
                      typeTVSerieSelected === "On The Air"
                        ? "border-solid border-1 border-[#1ed5a9] rounded-full text-black bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                        : "text-white border-transparent bg-transparent"
                    }`}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        setTypeTVSerieSelected(e.target.textContent);
                      }}
                    >
                      On The Air
                    </span>
                  </div>
                  <div
                    className={`py-1 px-5 w-35  transition-colors duration-300 ease-in-out ${
                      typeTVSerieSelected === "Top Rated"
                        ? "border-solid border-1 border-[#1ed5a9] rounded-full text-black bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                        : "text-white border-transparent bg-transparent"
                    }`}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        setTypeTVSerieSelected(e.target.textContent);
                      }}
                    >
                      Top Rated
                    </span>
                  </div>
                  <div
                    className={`py-1 px-5 w-35  transition-colors duration-300 ease-in-out ${
                      typeTVSerieSelected === "Popular"
                        ? "border-solid border-1 border-[#1ed5a9] rounded-full text-black bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                        : "text-white border-transparent bg-transparent"
                    }`}
                  >
                    <span
                      className="cursor-pointer"
                      onClick={(e) => {
                        setTypeTVSerieSelected(e.target.textContent);
                      }}
                    >
                      Popular
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-5 pl-5 flex flex-row flex-nowrap overflow-hidden overflow-x-auto w-screen max-w-[1300px]">
            {movies.map((movie) => (
              <TrailerCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trailers;
