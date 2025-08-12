import logo from "/images/movie-library-colorfull-background-transparent.PNG";

function Footer() {
  const styles = {
    backgroundColor: "rgba(3, 37, 65, 1)",
  };

  return (
    <>
      <footer className="text-white h-80" style={styles}>
        <nav className="flex flex-row justify-center py-20 container mx-auto md:flex-row h-full">
          <div className="user mr-10">
            <img src={logo} alt="logo" height={94} width={130} />
          </div>
          <div className="mr-10">
            <h3 className="text-xl font-bold">THE BASICS</h3>
            <ul className="text-lg font-normal">
              <li>
                <a href="#">About ML</a>
              </li>
              <li>
                <a href="#">Constact Us</a>
              </li>
              <li>
                <a href="#">Suport Forums</a>
              </li>
              <li>
                <a href="#">API Documentation</a>
              </li>
              <li>
                <a href="#">Sistem Status</a>
              </li>
            </ul>
          </div>
          <div className="mr-10">
            <h3 className="text-xl font-bold">GET INVOLVED</h3>
            <ul className="text-lg font-normal">
              <li>
                <a href="#">Contribution bible</a>
              </li>
              <li>
                <a href="#">Add New Movie</a>
              </li>
              <li>
                <a href="#">Add New TV Show</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">COMMUNITY</h3>
            <ul className="text-lg font-normal">
              <li>
                <a href="#">Guidelines</a>
              </li>
              <li>
                <a href="#">Discussions</a>
              </li>
              <li>
                <a href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
