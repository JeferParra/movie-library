import logo from "../images/movie-library-colorfull-background-transparent.PNG";

function NavBar() {
  const styles = {
    backgroundColor: "rgba(3, 37, 65, 1)",
  };

  return (
    <div className="text-white h-16 flex items-center" style={styles}>
      <div className="content px-10 w-full flex justify-between">
        <div className="sub-media flex flex-row">
          <a href="/" aria-label="Home">
            <img
              src={logo}
              alt="Movie Library"
              width="auto"
              className="h-16 w-auto"
            />
          </a>
          <ul className="flex flex-row items-center font-semibold">
            <li className="p-2 m-2 cursor-pointer">Movies</li>
            <li className="p-2 m-2 cursor-pointer">TV Shows</li>
            <li className="p-2 m-2 cursor-pointer">People</li>
            <li className="p-2 m-2 cursor-pointer">More</li>
          </ul>
        </div>
        <div className="nav_wrapper flex flex-row items-center">
          <ul className="flex flex-row">
            {/*plus*/}
            <li className="flex items-center p-2 m-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </li>
            {/*languege*/}
            <li className="flex items-center p-2 m-2">
              <span className="cursor-pointer border-1 border-solid px-2 rounded-md">
                EN
              </span>
            </li>
            {/*bell*/}
            <li className="flex items-center p-2 m-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </li>
            {/*profile*/}
            <li className="flex items-center justify-center rounded-full w-10 h-10 bg-pink-600 p-2 m-2 cursor-pointer">
              <span className="cursor-pointer">P</span>
            </li>
            {/*search*/}
            <li className="flex items-center p-2 m-2 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
