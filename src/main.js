export default function Main() {
  return (
    <div className="flex flex-col  bg-black h-[600px]">
      <div className="flex flex-row items-center w-full h-16">
        <div className="flex flex-row justify-between items-center w-full h-16 m-5">
          <div>
            <span className="text-white font-bold text-xl">
              Evan's Portfolio
            </span>
          </div>
          <div className="space-x-3">
            <a href="/" className="text-white text-xl">
              Home
            </a>
            <a href="/contact" className="text-white text-xl">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <div className=" bg-slate-500 w-[650px] h-[500px] mx-10">
            <text className="text-white"> halo</text>
        </div>
        <div>
            <text className="text-white text-2xl font-bold">
                About Me
            </text>
        </div>
      </div>

      
    </div>
  );
}
