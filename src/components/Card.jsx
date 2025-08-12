import { useEffect, useState } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Card({ movie }) {
  const releaseDate = movie.release_date;
  const date = new Date(releaseDate);

  const format = { month: "short", day: "2-digit", year: "numeric" };
  const formatDate = date.toLocaleDateString("en-Us", format);

  const [voteAverage, setVoteAverage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVoteAverage(movie.vote_average * 10);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <img
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
        alt="Weaponds"
        className="h-[225px] rounded-lg"
      />
      <div className="flex flex-col items-start text pt-6.5 px-2.5 w-37.5 transform -translate-y-11">
        <div className="flex justify-start">
          <CircularProgressbar
            value={voteAverage}
            text={`${Math.round(movie.vote_average * 10)}%`}
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

        <h2 className="font-bold">{movie.title}</h2>
        <p className="text-[rgba(0,0,0,0.6)]">{formatDate}</p>
      </div>
    </div>
  );
}

export default Card;
