import movies from "../../movies";
import Card from "./Card";

import { useState } from "react";

function Popular() {
  const [typeSelected, setTypeSelected] = useState("Streaming");

  return (
    <div className="pt-7.5 w-screen max-w-[1300px] select-none focus:outline-none">
      <div className="px-10 flex flex-row">
        <span className="text-2xl font-bold mr-5">What's Popular</span>
        <div className="flex items-center text-[#032541] font-semibold border-solid border-1 rounded-full">
          <div
            className={`py-1 px-5 transition-all duration-300 ease-in-out rounded-full ${
              typeSelected === "Streaming"
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
              Streaming
            </span>
          </div>
          <div
            className={`py-1 px-5 transition-all duration-300 ease-in-out rounded-full ${
              typeSelected === "On TV"
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
              On TV
            </span>
          </div>
          <div
            className={`py-1 px-5 transition-all duration-300 ease-in-out rounded-full ${
              typeSelected === "For Rent"
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
              For Rent
            </span>
          </div>
          <div
            className={`py-1 px-5 transition-all duration-300 ease-in-out rounded-full ${
              typeSelected === "In Theaters"
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
              In Theaters
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

export default Popular;
