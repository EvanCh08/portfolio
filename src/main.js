export default function Main() {
  return (
    <div className="flex flex-col bg-black h-screen">
      <div className="flex flex-row items-center w-full h-20 bg-black/30 fixed">
        <div className="flex flex-row justify-between items-center w-full h-16 m-32">
          <div className="mt-10">
            <span className="text-white font-bold text-xl font-lato">
              Evan's Portfolio
            </span>
          </div>
          <div className="space-x-28 mt-10 font-bold">
            <a href="/" className="text-white text-xl">
              Home
            </a>
            <a href="/contact" className="text-white text-xl">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black my-4">
        <div className="flex flex-row my-32">
          <div className=" bg-slate-500 w-[500px] h-[500px] mx-32 rounded-full">
            
          </div>
          <div className="self-center text-white flex flex-col mx-12">
            <text className="text-white text-2xl font-bold">Hello, I am</text>
            <text className="text-5xl font-bold ">Evan Darren Christanto</text>
            <text className="font-bold text-2xl">A Frontend Developer Studying at NUS</text>
            <text className="my-3 text-xl">I am a web and app developer with experienced for over 1 year </text>
            <text className="text-xl">I have been developing websites and mobile application! Do check it out here! </text>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl w-50 mx-32 h-1 ">
        
      </div>
      <div className="mx-32 my-auto">
        <text className="text-white font-bold text-2xl font-lato">About me</text>
        
      </div>
    </div>
  );
}
