import ArtEntry from "../components/artEntry";

export default function Artworks() {
  return (
    <div>

    <div>
        <img src="./artpagebanner.jpg" className="mt-15"></img>
    </div>
      <div>
        <div className="w-2/3 place-self-center flex gap-5 mb-5">
          <p className="font-mono py-4">Raine's Journey</p>
          <p className="font-mono py-4">Mewford gets lost</p>
        </div>

        <section className="space-y-15">
          <div className="flex w-2/3 place-self-center">
            <section className="flex flex-col space-y-2 w-2/3">
              <div>
                <img src="/artworks/c2A.jpg"></img>
              </div>

              <div>
                <img src="/artworks/c2B.jpg"></img>
              </div>

              <div>
                <img src="/artworks/c2C.jpg"></img>
              </div>

              <div>
                <img src="/artworks/c2D.jpg"></img>
              </div>
            </section>

            <section className="w-1/3 pl-2">
              <div className="space-y-4">
                <p className="font-mono text-xl font-bold">The skies Beyond</p>
                <p className="font-lora text-sm">
                  Raine ventures out of her walled town and finally sees the
                  entirety of the skies she always looked at lore
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <img src="/public/sketches/c1sa.jpg"></img>
                  <img src="/public/sketches/c1sb.jpg"></img>
                </div>
              </div>
            </section>
          </div>

          <div className="flex w-2/3 place-self-center">
            <section className="flex flex-col space-y-2 w-2/3">
              <div>
                <img src="/artworks/c5A.jpg"></img>
              </div>

              <div>
                <img src="/artworks/c5B.jpg"></img>
              </div>

              <div>
                <img src="/artworks/c5C.jpg"></img>
              </div>

              <div>
                <img src="/artworks/c5D.jpg"></img>
              </div>
            </section>

            <section className="w-1/3 pl-2">
              <div className="space-y-4">
                <p className="font-mono text-xl font-bold">
                  Souls are kind of cute
                </p>
                <p className="font-lora text-sm">
                  {" "}
                  She meets a Hests a kind of magic user specializing in sould
                  alchemy. He currently aims to guide the lost souls of
                  inanimate objects towards the proper resting place. Apparently
                  things loved enough develop life, much like the abandoned
                  house at this forest.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <img src="/public/sketches/c5sa.jpg"></img>
                  <img src="/public/sketches/c5sb.jpg"></img>

                  <img src="/public/sketches/c5sc.jpg"></img>

                  <img src="/public/sketches/c5sd.jpg"></img>

                  <img src="/public/sketches/c5se.jpg"></img>

                  <img src="/public/sketches/c5sf.jpg"></img>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
