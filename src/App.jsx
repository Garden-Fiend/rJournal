import "./App.css";
import { useState } from "react";
import ArtEntry from "./components/artEntry";
import { Entries } from "../public/data/journalEntries";

function App() {
  const [page, setPage] = useState("Home");
  const [opacity, setOpacity] = useState(0);

  return (
    <div className="w-full  relative">
      {page === "Home" && (
        <div className="w-full  pb-1  ">
          <div className="relative w-full">
            <nav className="w-full fixed bg-transparent z-100">
              <div className="flex items-center px-6">
                <img
                  src="/fis.png"
                  className="active:rotate-360 transition-transform duration-200 w-10 rounded-full"
                  onClick={() => setPage("Home")}
                ></img>
                <div className="flex justify-end w-full p-4 md:space-x-20 gap-4 font-mono font-bold items-center md:text-lg text-sm">
                  <p
                    onClick={() => {
                      setPage("Home");
                    }}
                    className="hover:border-b-2 transition-all duration-50"
                  >
                    Home
                  </p>
                  <p
                    onClick={() => {
                      setPage("Artworks");
                    }}
                    className="hover:border-b-2 transition-all duration-50"
                  >
                    Artworks
                  </p>
                </div>
              </div>
            </nav>

            {/*<button
              className="absolute place-self-center-safe font-bold font-mono text-black text-sm md:border-5 border-3 md:text-4xl border-white md:p-5 p-3 rounded-xl hover:scale-105  transition-transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 active:scale-90 z-10 duration-100 shadow-2xl"
              onClick={() => {
                setTimeout(() => setPage("Artworks"), 120);
              }}
              type="button"
            >
              WORKS OF THE MEWFORD
            </button>*/}
            <img src="/SketchyBanner.png" className="w-full px-2 pt-12"></img>
          </div>

          <div className="md:flex md:w-1/2 place-self-center my-10">
            <div className="md:w-1/2 md:border-l-4 p-4">
              <h3 className="md:text-2xl text-xl font-mono font-bold mb-2">
                Some Stuff about my art
              </h3>

              <p className="text-left  md:mb-8 font-mono  place-self-center   text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                eos, rem tenetur accusantium alias earum porro. Vitae amet, illo
                odio eaque repellat molestiae velit quibusdam tenetur sed
                consequatur suscipit sit! Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Inventore harum labore nulla quam
                distinctio nesciunt necessitatibus omnis itaque possimus,
                laboriosam incidunt culpa reiciendis amet beatae at. Hic sit
                quisquam qui? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Tempore fugit sint hic, nisi exercitationem debitis
                reprehenderit id voluptatibus molestiae optio quia aspernatur
                voluptatem amet ut. Blanditiis est mollitia alias accusantium?
                lore
              </p>
            </div>

            <img
              src="/homeart2.jpg"
              className="md:w-1/2 object-cover p-4"
            ></img>
          </div>

          <div className="mb-20 place-self-center md:flex items-center p-6 border-3 rounded-2xl md:w-1/2  mx-4">
            <img
              src="avatar.gif"
              className="md:w-30 md:h-30 w-20 h-20 rounded-full m-8 place-self-center  md:p-4 bg-white"
            ></img>
            <div>
              <p className="text-left font-bold text-lg md:text-2xl font-mono mb-2">
                Who the heck is this guy ?
              </p>
              <p className="text-left text-sm font-mono">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum
                hic fuga pariatur! Culpa cumque suscipit alias non eius.
                Recusandae illum pariatur eius reprehenderit accusantium fuga
                temporibus veniam incidunt nesciunt optio! Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Rerum voluptatum
                accusantium consequuntur quod eum dolores eaque reprehenderit
                placeat, sint ullam, veniam, saepe similique debitis harum
                eveniet tempore repellendus voluptates fugiat.
              </p>
            </div>
          </div>
        </div>
      )}
      {page === "Artworks" && (
        <div className="relative flex-col  place-self-center text-sm bg-[#F5E7C6]">
          <nav className="w-full fixed bg-transparent z-100  top-0">
            <div className="flex items-center px-6">
              <img
                src="/fis.png"
                className="active:rotate-360 transition-transform duration-200 w-10 rounded-full"
                onClick={() => setPage("Home")}
              ></img>
              <div className="flex justify-end w-full p-4 md:space-x-20 gap-4 font-mono font-bold items-center md:text-lg text-sm">
                <p
                  onClick={() => {
                    setPage("Home");
                  }}
                  className="hover:border-b-2 transition-all duration-50"
                >
                  Home
                </p>
                <p
                  onClick={() => {
                    setPage("Artworks");
                  }}
                  className="hover:border-b-2 transition-all duration-50"
                >
                  Artworks
                </p>
              </div>
            </div>
          </nav>

          <div className="md:p-8 p-2 md:pt-30 pt-20 md:space-y-5 md:space-x-5 md:grid md:grid-cols-2">
            {Entries.map((entry) => (
              <ArtEntry
                key={entry.no}
                title={entry.title}
                desc1={entry.desc1}
                desc2={entry.desc2}
                imgUrl={entry.imgUrl}
                date={entry.no}
              ></ArtEntry>
            ))}
          </div>

          <div className="p-5"></div>
        </div>
      )}
    </div>
  );
}

export default App;
