export default function Home() {
  return (
    <div className="justify-center  h-screen w-full ">
      <div className="px-70 pt-30 grid grid-rows-2 grid-cols-3 gap-2">
        <div className="col-1 row-1">
          <img src="/blanksketch.png" className="bg-[#FFBD76]"></img>
        </div>

        <div className="col-1 row-2">
          <img src="/SketchyBanner.png" className="bg-[#FFBD76] h-full object-cover"></img>
        </div>

        <div className="row-span-2 col-span-2 ">
          <img
            src="/bannerbannerbanner.png"
            className=" bg-[#FFBD76] object-cover"
          ></img>
        </div>
      </div>

      <div className="p-5 w-full px-70 place-self-center">
        <h1 className="text-3xl font-mono font-bold">Mewford the Scribbler</h1>

        <p className="font-lora">
         I think of myself more as a Scribler rather than an actual artist, though I understand the term encompasses so many things. I just think it's more representative of my work. I would love for you to explore around, maybe my art could resonate with, it's chill if it doesn't just glad ya'll are here
        </p>
      </div>
    </div>
  );
}
