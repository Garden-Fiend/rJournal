export default function ArtEntry({imgUrl,desc1,desc2,title,date}) {
  return (
    <div>
      <div className="p-4">
        <img src={imgUrl}></img>
      </div>

      <div className="flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <img src="/pfp.jpg" className="w-10 h-10 rounded-full"></img>
          <p className="font-mono md:text-xl text-md font-bold">{title}</p>
        </div>

        <div>
          <p className="font-mono">{date}</p>
        </div>
      </div>

      <div className=" px-4 font-serif md:flex gap-4 mt-2 text-xs md:text-sm">
        <p className="md:border-none border-l-2 border-gray-400 md:w-1/2 px-4 mt-2">
         {desc1}</p>
        <div className="border-r-2"></div>

        <p className="md:w-1/2 px-4 md:border-none border-l-2 border-gray-400">
          {desc2} </p>
      </div>
    </div>
  );
}
