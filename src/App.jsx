import "./App.css";
import { useState } from "react";
import ArtEntry from "./components/artEntry";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <body className="w-full  bg-amber-50">
      <nav className="w-full fixed bg-amber-50 z-100">
        <div className="flex items-center px-10">
          <img src="/catdefault.jpg" className="w-10 rounded-full"></img>
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

      {page === "Home" && (
        <div className="w-full mt-20">
          <div className="relative w-full">
            <p
              className="absolute place-self-center-safe font-bold font-mono text-white border-3 md:text-2xl border-white p-3 rounded-xl hover:p-4 hover:text-2xl transition-all left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={() => {
                setPage("Artworks");
              }}
            >
              RAINE'S JOURNEY
            </p>
            <img src="/banner3.jpg" className="w-full"></img>
          </div>

          <div className="md:flex md:w-1/2 place-self-center my-10">
            <p className="border-l-3 border-gray-400 text-left p-4 md:my-8 font-mono w-[90%] place-self-center md:w-1/2  text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos,
              rem tenetur accusantium alias earum porro. Vitae amet, illo odio
              eaque repellat molestiae velit quibusdam tenetur sed consequatur
              suscipit sit! Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Inventore harum labore nulla quam distinctio nesciunt
              necessitatibus omnis itaque possimus, laboriosam incidunt culpa
              reiciendis amet beatae at. Hic sit quisquam qui? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Tempore fugit sint hic,
              nisi exercitationem debitis reprehenderit id voluptatibus
              molestiae optio quia aspernatur voluptatem amet ut. Blanditiis est
              mollitia alias accusantium? lore
            </p>
            <img
              src="/homeart2.jpg"
              className="md:w-1/2 object-cover p-4"
            ></img>
          </div>

          <div className="mb-20 place-self-center md:flex items-center p-6 border-3 rounded-2xl md:w-1/2 border-gray-400 mx-4 ">
            <img
              src="avatar.png"
              className="md:w-50 md:h-50 w-20 h-20 rounded-full m-8 place-self-center"
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
        <div className="mt-20 w-[90%] space-y-8 flex-col mb-8 place-self-center text-sm">
          {/**artmodal */}
          <div>
            <div className="p-4">
              <img src="/artworks/c2A.jpg"></img>
            </div>

            <div className="flex items-center justify-between px-6">
              <div className="flex items-center gap-2">
                <img src="/pfp.jpg" className="w-10 h-10 rounded-full"></img>
                <p className="font-mono md:text-xl text-md font-bold">
                  Location
                </p>
              </div>

              <div>
                <p className="font-mono">01/01/01</p>
              </div>
            </div>

            <div className=" px-4 font-serif md:flex gap-4 mt-2 text-xs md:text-sm">
              <p className="md:border-none border-l-2 border-gray-400 md:w-1/2 px-4 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident unde voluptate debitis eum ab quam eius, pariatur,
                accusamus laboriosam non nesciunt mollitia quasi sunt totam
                praesentium aspernatur reprehenderit vitae nostrum? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Omnis, aperiam
                officiis? Perspiciatis id voluptas totam amet iure tenetur harum
                beatae corrupti! Quidem vero debitis mollitia hic error iste
                quisquam accusantium!
              </p>
              <div className="border-r-2"></div>

              <p className="md:w-1/2 px-4 md:border-none border-l-2 border-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident unde voluptate debitis eum ab quam eius, pariatur,
                accusamus laboriosam non nesciunt mollitia quasi sunt totam
                praesentium aspernatur reprehenderit vitae nostrum? Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Facilis eveniet
                maiores eligendi repellendus laborum quis odio veniam dolor
                adipisci quia. Hic atque harum dicta quod odio earum
                consequuntur laudantium fugiat.
              </p>
            </div>
          </div>
          {/** */}

          <ArtEntry
            title={"test"}
            desc1={"lorem"}
            desc2={"lorem"}
            imgUrl={"/artworks/c2B.jpg"}
            date={"00/01/02"}
          ></ArtEntry>
        </div>
      )}
    </body>
  );
}

export default App;
