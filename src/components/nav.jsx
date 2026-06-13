export default function Nav() {
  return (
    <nav className="w-full fixed bg-transparent z-100">
      <div className="flex items-center px-6">
        <img
          src="/fis.png"
          className="active:rotate-360 transition-transform duration-200 w-10 rounded-full"
          onClick={() => {}}
        ></img>
        <div className="flex justify-end w-full p-4 md:space-x-5 gap-4 font-mono font-bold items-center md:text-lg text-sm">
          <p
            onClick={() => {}}
            className="hover:border-b-2 transition-all duration-50"
          >
            Home
          </p>
          <p
            onClick={() => {}}
            className="hover:border-b-2 transition-all duration-50"
          >
            Artworks
          </p>
        </div>
      </div>
    </nav>
  );
}
