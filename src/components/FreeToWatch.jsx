import movies from "../../movies";
import Card from "./Card";

import { useState } from "react";

function FreeToWatch() {
  const [typeSelected, setTypeSelected] = useState("Movies");

  return (
    <div className="pt-7.5 w-screen max-w-[1300px] select-none focus:outline-none">
      <div className="px-10 flex flex-row">
        <span className="text-2xl font-bold mr-5">Free To Watch</span>
        <div className="flex items-center text-[#032541] font-semibold border-solid border-1 rounded-full">
          <div
            className={`py-1 px-5 w-22 text-center transition-all duration-300 ease-in-out rounded-full ${
              typeSelected === "Movies"
                ? "text-white bg-[#032541]"
                : "text-black bg-transparent"
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
            className={`py-1 px-5 w-22 text-center transition-all duration-300 ease-in-out rounded-full ${
              typeSelected === "TV"
                ? "text-white bg-[#032541]"
                : "text-black bg-transparent"
            }`}
          >
            <span
              className="cursor-pointer"
              onClick={(e) => {
                setTypeSelected(e.target.textContent);
              }}
            >
              TV
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-5 py-5 mx-10 flex-nowrap overflow-hidden overflow-x-auto h-[356px]">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default FreeToWatch;
