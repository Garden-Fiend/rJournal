import Nav from "../components/nav";
export default function Landing() {
  return (
    <div className="w-full  pb-1   items-center">
      <div className="relative w-full">
        <Nav></Nav>
        <div className="p-4 pt-14">
          <img src="/tod3.jpg" className="w-full rounded-2xl"></img>
        </div>
      </div>
      <main className="flex md:w-2/3 place-self-center p-4">
        <div className="md:w-3/4 space-y-10 p-5">
          <section className="md:flex">
            <div className="md:w-1/2 p-2">
              <h2 className="md:text-3xl text-xl font-merriweather font-bold">
                Some Stuff about my art
              </h2>

              <p className="text-left  pl-2 pr-4  font-mono  place-self-center   text-sm">
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

            <img src="/homeart2.jpg" className="md:w-1/2 object-cover"></img>
          </section>

          <div className="md:flex items-center p-3 border-3 border-gray-300 rounded-2xl">
            <img
              src="avatar.png"
              className="md:w-40 md:h-40 w-20 h-20 rounded-full m-8 place-self-center  md:p-4 bg-white"
            ></img>
            <div>
              <h2 className="text-left font-bold text-lg md:text-3xl font-merriweather mb-2">
                Who the heck is this guy ?
              </h2>
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

          <div className="justify-center  items-center space-y-5">
            <img src="/ActualBanner.jpg" className="mb-4"></img>
            <h2 className="text-3xl font-merriweather font-bold">
              Another Section
            </h2>
            <div className="font-mono text-sm">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
                repudiandae rerum delectus nostrum tenetur laborum quaerat modi
                dolores, qui minima beatae aliquam ratione omnis earum cumque
                itaque ex, officiis dolorum.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
                ex eveniet quia, nisi non debitis unde? Dolor velit voluptatum
                impedit repudiandae unde ad et aspernatur nemo quidem quibusdam,
                porro fugiat?Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Ducimus porro facere, quas quaerat praesentium eligendi
                incidunt impedit iste quod officia consequatur laudantium
                cupiditate eum nemo maxime tempora ipsum consequuntur quibusdam.
              </p>
            </div>
          </div>

          <section className="border-2 border-gray-300 p-5 rounded-2xl">
            <div className="flex gap-4">
              <div className="w-1/4 space-y-4">
                <img src="/blur3.jpg"></img>
                <img src="/blur1.jpg"></img>
              </div>
              <div className="w-3/4 space-y-5">
                <h2 className="font-merriweather font-bold text-3xl">
                  Random Pictures
                </h2>
                <p className="font-mono text-sm">
                  Sometimes I take random pictures of things I find interesiting
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  assumenda maxime cumque perspiciatis laudantium inventore,
                  exercitationem quidem, beatae dolore obcaecati at esse
                  consequuntur ex impedit atque dolor! Nostrum, maiores
                  minima?Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Iste omnis itaque ullam, repellat illo alias nisi,
                  voluptatibus sunt aliquid neque fuga amet, porro nesciunt
                  delectus? Iste quibusdam ratione quae consectetur.
                </p>

                <p className="font-mono text-sm">
                  Sometimes I take random pictures of things I find interesiting
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  assumenda maxime cumque perspiciatis laudantium inventore,
                  exercitationem quidem, beatae dolore obcaecati at esse
                  consequuntur ex impedit atque dolor! Nostrum, maiores
                  minima?Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Iste omnis itaque ullam, repellat illo alias nisi,
                  voluptatibus sunt aliquid neque fuga amet, porro nesciunt
                  delectus? Iste quibusdam ratione quae consectetur.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="font-merriweather font-bold text-3xl">Sketching</h2>
            <p className="font-mono text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestiae sequi accusamus necessitatibus deserunt? A hic totam qui
              ipsa impedit minus odio, deleniti maiores eos pariatur dolorum
              ratione et molestiae expedita?Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Alias quas ab eaque ea fugit quidem
              sapiente facere autem eos, corrupti ex porro earum voluptatum.
              Culpa placeat eius in eaque velit Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed cum ipsam, nesciunt nam ea modi
              expedita totam necessitatibus, in officia architecto voluptate?
              Saepe praesentium rerum totam laudantium a dolore tenetur.
            </p>

            <div className="grid grid-cols-3 gap-2">
              <img src="/sketches/s1.JPG"></img>

              <img src="/sketches/s2.JPG"></img>

              <img src="/sketches/s3.JPG"></img>
            </div>
            <p className="font-mono text-gray-600 text-sm">
              Designs from the hests concept, you can see the final output of
              this at the artworks page
            </p>
          </section>

          <section>
            <div className="flex">
              <img src="/mecha.png" className="bg-blue-950 w-1/2"></img>

              <div className="px-4 space-y-4">
                <h2 className="font-merriweather font-bold text-3xl">
                  My Chaos of Detail
                </h2>
                <p className="font-mono text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis quia minus blanditiis voluptatem odit iure aliquam
                  saepe ullam impedit facere nostrum perferendis assumenda quam
                  quis delectus dolores suscipit, laborum in!
                </p>

                 <p className="font-mono text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis quia minus blanditiis voluptatem odit iure aliquam
                  saepe ullam impedit facere nostrum perferendis assumenda quam
                  quis delectus dolores suscipit, laborum in!
                </p>
              </div>
            </div>
          </section>
        </div>

        <aside className="w-1/4  flex flex-col items-center p-5">
          <div className="sticky top-20">
            <h2 className="font-bold font-mono text-xl border-b-2 w-full">
              Table of Contents
            </h2>
            <div className="font-mono mt-4 space-y-2 text-sm">
              <p>Stuff About My art</p>
              <p>About the artist</p>
              <p>More stuff</p>
            </div>
          </div>
        </aside>
      </main>

      <footer className="border-t-2 border-gray-300 py-15 mt-10 flex justify-center">
        <div className="flex w-1/2 items-center justify-between">
          <div className="w-1/4">
            <h3 className="font-mono text-2xl font-bold border-b-2 mb-1">
              Footer Stuff
            </h3>
            <p className="font-mono mt-1">
              little bit of text goes here along with some other stuff
            </p>
          </div>

          <div className="font-mono font-bold flex justify-evenly w-1/2 place-self-center">
            <p className="border-b-2 hover:bg-black hover:text-white hover:p-2.5 transition-normal duration-300">
              Facebook
            </p>
            <p className="border-b-2 hover:bg-black hover:text-white hover:p-2.5 transition-normal duration-300">
              Instagram
            </p>

            <p className="border-b-2 hover:bg-black hover:text-white hover:p-2.5 transition-normal duration-300">
              Pinterest
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
