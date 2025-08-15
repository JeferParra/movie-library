import Welcome from "../components/Welcome";
import Trending from "../components/Trending";
import Trailers from "../components/Trailers";

function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <Welcome />
      <Trending />
      <Trailers />
    </div>
  );
}

export default Home;
