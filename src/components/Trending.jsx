import movies from "../../movies";
import Card from "./Card";

import { useState } from "react";

function Trending() {
  const [typeSelected, setTypeSelected] = useState("Today");

  return (
    <div className="pt-7.5 w-screen max-w-[1300px] select-none focus:outline-none">
      <div className="px-10 flex flex-row">
        <span className="text-2xl font-bold mr-5">Trending</span>
        <div className="flex items-center text-[#032541] font-semibold border-solid border-1 rounded-full">
          <div
            className={`py-1 px-5 transition-colors duration-300 ease-in-out ${
              typeSelected === "Today"
                ? "border-solid border-1 border-[#1ed5a9] rounded-full text-white bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                : "text-black border-transparent bg-transparent"
            }`}
          >
            <span
              className="cursor-pointer"
              onClick={(e) => {
                setTypeSelected(e.target.textContent);
              }}
            >
              Today
            </span>
          </div>
          <div
            className={`py-1 px-5 transition-colors duration-300 ease-in-out ${
              typeSelected === "This Week"
                ? "border-solid border-1 border-[#1ed5a9] rounded-full text-white bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]"
                : "text-black border-transparent bg-transparent"
            }`}
          >
            <span
              className="cursor-pointer"
              onClick={(e) => {
                setTypeSelected(e.target.textContent);
              }}
            >
              This Week
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

export default Trending;
