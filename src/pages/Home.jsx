import Welcome from "../components/Welcome";
import Trending from "../components/Trending";

function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <Welcome />
      <Trending />
    </div>
  );
}

export default Home;
