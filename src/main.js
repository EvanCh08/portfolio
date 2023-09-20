import soft from "./software.webp";

import gans from "./ganteng.jpeg";
import { useNavigate } from 'react-router-dom';

export default function Main() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col bg-black xsm:h-full xl:h-full">
      <div className="flex flex-row items-center w-full h-20 bg-black/30 fixed">
        <div className="flex flex-row justify-between items-center w-full h-16 xl:m-32 m-6">
          <div className="">
            <span className="text-white font-bold text-xl font-lato">
              Evan Darren Christanto
            </span>
          </div>
          <div className="xl:space-x-20  flex flex-row font-bold space-x-5">
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
            <a href="https://drive.google.com/file/d/1UXxWLY8_Hi5FnF-QUSU9jmvG1gpubJv3/view?usp=sharing" className="text-white text-xl border-2 border-white border-solid rounded-lg hover:bg-white hover:text-black hover:border-black">
              <text className="p-4 p
              y-2">My Resume</text>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black xl:my-4 mt-[100px] m-5">
        <div className=" xl:flex-row xl:mt-32 my-10 xl:grid grid-cols-2 xsm: flex flex-col xsm: m-5">
          <div className="self-center mx-auto">
            <img className="rounded-full xsm:w-[360px] xsm:h-[360px] xl:h-[475px] xl:w-[485px]"src={gans} alt="profile"/>
          </div>
          <div className="xsm:mt-10 xl:self-center text-white flex flex-col xl:mx-12">
            <text className="text-white text-2xl font-bold">Hello, I am</text>
            <text className="text-5xl font-bold ">Evan Darren Christanto</text>
            <text className="font-bold text-2xl">A Frontend Developer Studying at NUS</text>
            <text className="mt-1 text-xl">I am a web and app developer with experienced for over 1 year </text>
            <text className="text-xl mt-1">I have been developing websites and mobile application! </text>
            <a href="/contact" className="text-white text-xl border-2 border-white border-solid rounded-lg hover:bg-white hover:text-black hover:black w-40 mt-4" >
              <text className="font-bold px-5">Contact Me</text>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl xl:w-50 xl:mx-32 h-1 xsm: m-5 mt-10">
        
      </div>
      <div className="grid xl:grid-cols-2 font-ubuntu xsm:m-5">
        <div className="xl:mx-32 my-auto xl:m-0 xsm: m-5 flex flex-col mt-10">
          <text className="text-white font-bold text-3xl xl:my-7 xsm: my-4 font-ubuntu">About me</text>
          <text className="text-white mt-5 font-bold text-2xl">My Skills</text>
          <p className="text-white mt-5 text-lg font-ubuntu">
            In terms of technical skills, I excel in frontend and backend development with tech stacks include React JS, React Native, HTML, CSS, JavaScript, Python, Supabase, Tailwind CSS. Besides that I also have several experiences in communication skills, leaderships, and many others.
          </p>
          <text className="text-white mt-5 font-bold text-2xl font-ubuntu">My Experience</text>
          <p className="text-white mt-5 text-lg font-ubuntu">
           Developed a mobile application for split bill for restaurants and customers using React Native, Supabase, and JavaScript. Apart from that, I participated in the Tiktok Hackathon 2023, in which I performed as a frontend developer. We created a group purchase feature for tiktok.
          </p>
          <text className="text-white mt-5 font-bold text-2xl font-ubuntu">Life Values</text>
          <p className="text-white mt-5 text-lg font-ubuntu">
            I value the experience that I have gotten from working with other people, that is why my life goal is to help people, create values for them, and become meaningful.
          </p>
        </div>
        <img className="xsm: w-[420px] xl:w-[635px] mt-7"src={soft} alt="software"/>
      </div>
      
    </div>
  );
}
