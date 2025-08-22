import { useState, useEffect } from "react";
import logo from "/images/movie-library-colorfull-background-transparent.PNG";

function NavBar() {
  const styles = {
    backgroundColor: "rgba(3, 37, 65, 1)",
  };

  const [isPlusHover, setPlusIsHover] = useState(false);
  const [isLanguageHover, setIsLanguageHover] = useState(false);
  const [isBellHover, setIsBellHover] = useState(false);
  const [isSearchHover, setIsSearchHover] = useState(false);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        setShowNav(false);
      } else {
        // scrolling up → show navbar
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`text-white h-16 flex items-center w-full justify-center fixed top-0 left-0 w-full z-50 transition-transform duration-600 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
      style={styles}
    >
      <div className="content px-10 flex justify-between  w-[1300px]">
        <div className="sub-media flex flex-row list-none font-medium">
          <a href="/" aria-label="Home">
            <img
              src={logo}
              alt="Movie Library"
              width="auto"
              className="h-16 w-auto"
            />
          </a>
          <li className="p-2 m-2 group cursor-pointer">
            <span>Movies</span>
            <ul className="absolute hidden group-hover:block mt-2 w-38 rounded-xl border border-black/5 bg-gray-200 p-1 text-sm text-black shadow-lg">
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/popular" className="flex">
                  Popular
                </a>
              </li>
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/now-playing" className="flex">
                  Now Playing
                </a>
              </li>
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/upcoming" className="flex">
                  Upcoming
                </a>
              </li>
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/top-rated" className="flex">
                  Top Rated
                </a>
              </li>
            </ul>
          </li>
          <li className="p-2 m-2 group relative cursor-pointer">
            <span>TV Shows</span>
            <ul className="absolute hidden group-hover:block mt-2 w-38 rounded-xl border border-black/5 bg-gray-200 p-1 text-sm text-black shadow-lg">
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/tv-popular" className="flex">
                  Popular
                </a>
              </li>
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/airing-today" className="flex">
                  Airing Today
                </a>
              </li>
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/on-tv" className="flex">
                  On Tv
                </a>
              </li>
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/tv-top-rated" className="flex">
                  Top Rated
                </a>
              </li>
            </ul>
          </li>
          <li className="p-2 m-2 group relative cursor-pointer">
            <span>People</span>
            <ul className="absolute hidden group-hover:block mt-2 w-38 rounded-xl border border-black/5 bg-gray-200 p-1 text-sm text-black shadow-lg">
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/popular-people" className="flex">
                  Popular People
                </a>
              </li>
            </ul>
          </li>
          <li className="p-2 m-2 group relative cursor-pointer">
            <span>More</span>
            <ul className="absolute hidden group-hover:block mt-2 w-38 rounded-xl border border-black/5 bg-gray-200 p-1 text-sm text-black shadow-lg">
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/discussions" className="flex">
                  Discussions
                </a>
              </li>
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/leaderboard" className="flex">
                  Leaderboard
                </a>
              </li>
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/support" className="flex">
                  Support
                </a>
              </li>
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/API-documentation" className="flex">
                  API Documentation
                </a>
              </li>
              <li className="px-3 py-1.5 hover:bg-blue-100">
                <a href="/API-business" className="flex">
                  API for Business
                </a>
              </li>
            </ul>
          </li>
        </div>
        <div className="nav_wrapper flex flex-row items-center">
          <ul className="flex flex-row">
            {/*plus*/}
            <li
              className={`flex items-center p-2 m-2 rounded-full w-10 h-10 cursor-pointer border-1 border-solid rounded-full w-10 h-10 transition duration-300 ease-in-out ${
                isPlusHover && "bg-white"
              }`}
              onMouseEnter={() => setPlusIsHover(true)}
              onMouseLeave={() => setPlusIsHover(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={4}
                stroke={isPlusHover ? "rgba(3, 37, 65, 1)" : "currentColor"}
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
            <li
              className={`flex justify-center items-center p-2 m-2 border-1 border-solid rounded-full w-10 h-10 px-2 font-bold transition duration-300 ease-in-out ${
                isLanguageHover && "bg-white"
              } ${isLanguageHover && "text-slate-900"}`}
              onMouseEnter={() => setIsLanguageHover(true)}
              onMouseLeave={() => setIsLanguageHover(false)}
            >
              <span className="cursor-pointer">EN</span>
            </li>
            {/*bell*/}
            <li
              className={`flex items-center p-2 m-2 cursor-pointer border-1 border-solid rounded-full w-10 h-10 transition duration-300 ease-in-out ${
                isBellHover && "bg-white"
              }`}
              onMouseEnter={() => setIsBellHover(true)}
              onMouseLeave={() => setIsBellHover(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={isBellHover ? "rgba(3, 37, 65, 1)" : "currentColor"}
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
            <li
              className={`flex items-center p-2 m-2 cursor-pointer border-1 border-solid rounded-full w-10 h-10 transition duration-300 ease-in-out ${
                isSearchHover && "bg-white"
              }`}
              onMouseEnter={() => setIsSearchHover(true)}
              onMouseLeave={() => setIsSearchHover(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={isSearchHover ? "rgba(3, 37, 65, 1)" : "currentColor"}
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
