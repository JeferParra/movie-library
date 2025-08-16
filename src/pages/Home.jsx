import Welcome from "../components/Welcome";
import Trending from "../components/Trending";
import Trailers from "../components/Trailers";
import Popular from "../components/Popular";
import FreeToWatch from "../components/FreeToWatch";

function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <Welcome />
      <Trending />
      <Trailers />
      <Popular />
      <FreeToWatch />
    </div>
  );
}

export default Home;
