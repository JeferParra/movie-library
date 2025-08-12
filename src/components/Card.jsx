import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Card() {
  const movies = [
    {
      adult: false,
      backdrop_path: "/kyqM6padQzZ1eYxv84i9smNvZAG.jpg",
      id: 1078605,
      title: "Weapons",
      original_title: "Weapons",
      overview:
        "When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance.",
      poster_path: "/cpf7vsRZ0MYRQcnLWteD5jK9ymT.jpg",
      media_type: "movie",
      original_language: "en",
      genre_ids: [27, 9648],
      popularity: 249.1853,
      release_date: "2025-08-06",
      video: false,
      vote_average: 7.72,
      vote_count: 218,
    },
    {
      adult: false,
      backdrop_path: "/zNriRTr0kWwyaXPzdg1EIxf0BWk.jpg",
      id: 1234821,
      title: "Jurassic World Rebirth",
      original_title: "Jurassic World Rebirth",
      overview:
        "Five years after the events of Jurassic World Dominion, covert operations expert Zora Bennett is contracted to lead a skilled team on a top-secret mission to secure genetic material from the world's three most massive dinosaurs. When Zora's operation intersects with a civilian family whose boating expedition was capsized, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery that's been hidden from the world for decades.",
      poster_path: "/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg",
      media_type: "movie",
      original_language: "en",
      genre_ids: [878, 12, 28],
      popularity: 1127.7172,
      release_date: "2025-07-01",
      video: false,
      vote_average: 6.415,
      vote_count: 1397,
    },
  ];

  const releaseDate = movies[0].release_date;
  const date = new Date(releaseDate);

  const format = { month: "short", day: "2-digit", year: "numeric" };
  const formatDate = date.toLocaleDateString("en-Us", format);

  return (
    <div>
      <img
        src={`https://media.themoviedb.org/t/p/w220_and_h330_face${movies[0].poster_path}`}
        alt="Weaponds"
        className="h-[225px] rounded-lg"
      />
      <div className="flex flex-col items-start text pt-6.5 px-2.5 w-37.5 transform -translate-y-11">
        <div className="flex justify-start">
          <CircularProgressbar
            value={movies[0].vote_average * 10}
            text={`${Math.round(movies[0].vote_average * 10)}%`}
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

        <h2 className="font-bold">{movies[0].title}</h2>
        <p className="text-[rgba(0,0,0,0.6)]">{formatDate}</p>
      </div>
    </div>
  );
}

export default Card;
