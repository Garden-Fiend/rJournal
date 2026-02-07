import { useState } from "react";
export default function ArtEntry({ imgUrl, desc1, desc2, title, date }) {
  
  const [logs,setLogs] = useState(false);
  
  return (
    <div>
      <div className="pb-4">
        <img src={imgUrl} className="shadow-md border-2 border-gray-300"></img>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/avatar.png" className="w-10 h-10 rounded-full"></img>
          <p className="font-mono md:text-xl text-md font-bold">{title}</p>
        </div>

        <div className="flex items-center gap-2">
          <p className="font-mono">{date}</p>

          <button className="border-2 rounded-lg p-1 active:scale-90 transition-transform"
          type="button"
          onClick={()=> setLogs(!logs)}
          >Read Logs</button>
        </div>
      </div>

      <div className=" px-4 font-serif md:flex gap-4 mt-2 text-xs md:text-sm bg-gray-300 p-1 shadow-md">
        {logs && <p className="md:border-none border-l-2 border-gray-400 px-4 mt-2 h-50 overflow-auto">
          {desc1}
        </p>}
      </div>
    </div>
  );
}
