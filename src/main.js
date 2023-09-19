import soft from "./software.webp";
import prof from "./profile.jpeg";

export default function Main() {
  return (
    <div className="flex flex-col bg-black xsm:h-full xl:h-full">
      <div className="flex flex-row items-center w-full h-20 bg-black/30 fixed">
        <div className="flex flex-row justify-between items-center w-full h-16 xl:m-32 m-5">
          <div className="mt-10">
            <span className="text-white font-bold text-xl font-lato">
              Evan Darren Christanto
            </span>
          </div>
          <div className="xl:space-x-28 mt-10 flex flex-row font-bold space-x-5">
            <div className="flex flex-col">
                <a href="/" className="text-white text-xl">
                    Home
                </a>
                <div className="bg-white rounded-xl h-1">
                    
                </div>
            </div>
            <a href="/contact" className="text-white text-xl">
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black xl:my-4 mt-[100px] m-5">
        <div className="flex flex-col xl:flex-row xl:mt-32 my-10">
          <div className=" w-[350px] h-[350px] bg-slate-500 xl:w-[550px] xl:h-[500px] xl:mx-32 rounded-full self-center">
            <img className="rounded-full xl:h-[500px] xl:w-[550px]"src={prof} alt="profile"/>
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
      <div className="grid xl:grid-cols-2">
        <div className="xl:mx-32 my-auto xl:m-0 xsm: m-5 flex flex-col">
          <text className="text-white font-bold text-3xl font-lato">About me</text>
          <text className="text-white mt-5 font-bold text-xl">My Skills</text>
          <p className="text-white mt-5 text-lg">
            In terms of technical skills, I excel in frontend and backend development with tech stacks include React JS, React Native, HTML, CSS, JavaScript, Python, Supabase, Tailwind CSS. Besides that I also have several experiences in communication skills, leaderships, and many others.
          </p>
          <text className="text-white mt-5 font-bold text-xl">My Experience</text>
          <p className="text-white mt-5 text-lg">
           Developed a mobile application for split bill for restaurants and customers using React Native, Supabase, and JavaScript. Apart from that, I participated in the Tiktok Hackathon 2023, in which I performed as a frontend developer. We created a group purchase feature for tiktok.
          </p>
          <text className="text-white mt-5 font-bold text-xl">Life Values</text>
          <p className="text-white mt-5 text-lg">
            I value the experience that I have gotten from working with other people, that is why my life goal is to help people, create values for them, and become meaningful.
          </p>
        </div>
        <img className="xsm: w-[420px] xl:w-[635px]"src={soft} alt="software"/>
      </div>
      
    </div>
  );
}
