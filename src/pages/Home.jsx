import Welcome from "../components/Welcome";
import Trending from "../components/Trending";
import Trailers from "../components/Trailers";
import Popular from "../components/Popular";

function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <Welcome />
      <Trending />
      <Trailers />
      <Popular />
    </div>
  );
}

export default Home;
