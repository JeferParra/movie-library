import movies from "../../movies";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Trending() {
  return (
    <div className="pt-7.5 h-[414.6px]">
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
      <div className="flex-nowrap py-5 ml-10">
        <img
          src="https://media.themoviedb.org/t/p/w220_and_h330_face/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg"
          alt="Weaponds"
          className="h-[225px] rounded-lg"
        />
        <div className="flex flex-col items-start text pt-6.5 px-2.5 w-37.5 transform -translate-y-11">
          <div className="flex justify-start">
            <CircularProgressbar
              value={77}
              text="77%"
              className="h-9.5"
              background
              styles={buildStyles({
                pathColor: `rgba(62, 152, 199, ${77 / 100})`,
                textColor: "#fff",
                trailColor: "#d6d6d6",
                backgroundColor: "#081c22",
                trailColor: "#5dd82030",
                pathColor: "#5dd820",
                textSize: "35px",
              })}
            />
          </div>

          <h2 className="font-bold">Weapons</h2>
          <p className="text-[rgba(0,0,0,0.6)]">Aug 07, 2025</p>
        </div>
      </div>
    </div>
  );
}

export default Trending;
