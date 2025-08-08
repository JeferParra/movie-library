import image from "../images/section.new_index.background_1.jpg";

function Welcome() {
  return (
    <section>
      <div className="min-h-[300px] w-full bg-[url('../images/section.new_index.background_1.jpg')] bg-cover bg-center flex flex-col justify-center">
        <div className="px-10 py-8 flex flex-col">
          <div>
            <h1 className="text-[48px] text-white font-bold h-13">Welcome.</h1>
            <h2 className="text-[32px] text-white font-semibold">
              Millions of movies, TV shows and people to discover. Explore now.
            </h2>
          </div>
          <div>
            <div className="bg-white h-[46px] w-full rounded-3xl flex overflow-hidden mt-9">
              <input
                type="text"
                placeholder="Search for a movie, tv show, person......"
                className="flex-1 px-5 py-2.5 outline-none"
              />
              <button className="bg-gradient-to-r from-[rgba(30,213,169,1)] to-[rgba(1,180,228,1)] h-full py-2.5 px-6.5 text-white font-medium cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
