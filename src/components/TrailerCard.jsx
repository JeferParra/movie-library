function TrailerCard({ movie }) {
  const backgroundImage =
    "https://image.tmdb.org/t/p/w1920_and_h427_multi_faces/s94NjfKkcSczZ1FembwmQZwsuwY.jpg";

  const imagenURL = `https://image.tmdb.org/t/p/w710_and_h400_multi_faces`;
  return (
    <div className="ml-5 w-75 flex-shrink-0">
      <div className="image relative cursor-pointer">
        <img
          src={`${imagenURL}${movie.backdrop_path}`}
          alt="nombre de la pelicula"
          className="rounded-lg"
        />
        <div className="play absolute inset-0 flex items-center justify-center">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="white"
              className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
            </svg>
          </span>
        </div>
      </div>
      <div className="content flex flex-col text-white w-full items-center mt-2.5 h-auto leading-none">
        <h2 className="font-semibold text-[19.2px]">
          {movie.name || movie.title}
        </h2>
        <h3>Silver Surfer - Pendiente</h3>
        {/*Se saca de la informacion del video*/}
      </div>
    </div>
  );
}

export default TrailerCard;
