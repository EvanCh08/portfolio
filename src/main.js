export default function Main() {
  return (
    <div className="flex flex-col bg-black xsm:h-full xl:h-full">
      <div className="flex flex-row items-center w-full h-20 bg-black/30 fixed ">
        <div className="flex flex-row justify-between items-center w-full h-16 xl:m-32 m-5">
          <div className="mt-10">
            <span className="text-white font-bold text-xl font-lato">
              Evan's Portfolio
            </span>
          </div>
          <div className="xl:space-x-28 mt-10 font-bold space-x-5">
            <a href="/" className="text-white text-xl">
              Home
            </a>
            <a href="/contact" className="text-white text-xl">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black xl:my-4 mt-[100px] m-5">
        <div className="flex flex-col xl:flex-row xl:my-32 my-10">
          <div className=" w-[350px] h-[350px] bg-slate-500 xl:w-[500px] xl:h-[500px] xl:mx-32 rounded-full self-center">
            <text>halo</text>
          </div>
          <div className="xsm:mt-10 xl:self-center text-white flex flex-col xl:mx-12">
            <text className="text-white text-2xl font-bold">Hello, I am</text>
            <text className="text-5xl font-bold ">Evan Darren Christanto</text>
            <text className="font-bold text-2xl">A Frontend Developer Studying at NUS</text>
            <text className="my-3 text-xl">I am a web and app developer with experienced for over 1 year </text>
            <text className="text-xl">I have been developing websites and mobile application! Do check it out here! </text>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl xl:w-50 xl:mx-32 h-1 xsm: m-5">
        
      </div>
      <div className="xl:mx-32 my-auto xl:m-0 xsm: m-5 flex flex-col">
        <text className="text-white font-bold text-2xl font-lato">About me</text>
        <text className="text-white">halo</text>
        
      </div>
    </div>
  );
}
