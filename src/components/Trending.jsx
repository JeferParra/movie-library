import movies from "../../movies";
import Card from "./Card";

function Trending() {
  return (
    <div className="pt-7.5 w-screen max-w-[1300px]">
      <div className="px-10 flex flex-row">
        <span className="text-2xl font-bold mr-5">Trending</span>
        <div className="flex items-center text-[#032541] font-semibold border-solid border-1 rounded-full">
          <div className="py-1 px-5">
            <span className="cursor-pointer">Today</span>
          </div>
          <div className="py-1 px-5">
            <span className="cursor-pointer">This Week</span>
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
