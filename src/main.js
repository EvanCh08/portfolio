import soft from "./software.webp";

import gans from "./ganteng.jpeg";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink } from "lucide-react";

export default function Main() {
  const data = [
    {
      name: "Discrete Event Simulator",
      link: "https://github.com/EvanCh08/Discrete-Event-Simulation",
      desc: "The project is about a event simulation, in which there’s a simulation that contains customers and cashiers. The project will simulate how the customers are served based on the arrival time of the customers and the availability of the cashiers.",
    },
    {
      name: "Splitrr",
      link: "https://github.com/EvanCh08/SS2AM-Orbital-Project",
      desc: "In this project, I performed as a frontend and backenc codeveloper, along side with my partner. Some features we have are login sign up page, splitbill page, and register menu page for restaurants.",
    },
    {
      name: "Tiktok Hackathon",
      link: "https://github.com/kyledilao777/Tiktok-Hack-2023",
      desc: "During the Hackathon, I worked as a frontend developer that is tasked to make sure that all the features are connected and attracts many people to use our application. Tech stacks we used are react native, supabase, and tailwind CSS.",
    },
    {
      name: "Airline Analysis",
      link: "https://docs.google.com/presentation/d/1sTyUDye3xVW0hV3Yd1CSoTNCy5OB3RsC/edit#slide=id.p1",
      desc: "During the Hackathon, I worked as a frontend developer that is tasked to make sure that all the features are connected and attracts many people to use our application. Tech stacks we used are react native, supabase, and tailwind CSS.",
    },
  ];
  return (
    <div className="flex flex-col bg-black xsm:h-full xl:w-full h-full">
      <div className="flex flex-row items-center w-full h-20 bg-black/40 fixed">
        <div className="flex flex-row justify-between items-center w-full h-16 xl:m-32 m-6">
          <div className="">
            <span className="text-white font-bold text-xl font-lato">
              Evan Darren Christanto
            </span>
          </div>
          <div className="xl:space-x-20 flex flex-row font-bold space-x-5  items-center">
            <div className="flex flex-col">
              <a href="/" className="text-white text-xl">
                Home
              </a>
              <div className="bg-white rounded-xl h-1"></div>
            </div>
            <a href="/contact" className="text-white text-xl">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1UXxWLY8_Hi5FnF-QUSU9jmvG1gpubJv3/view?usp=sharing"
              className="text-white flex justify-center text-xl border-2 border-white border-solid rounded-lg hover:bg-white hover:text-black hover:border-black h-10"
            >
              <text className=" px-3 py-1">My Resume</text>
            </a>
          </div>
        </div>
      </div>
      <div className="xl:my-4 mt-[100px] m-5">
        <div className=" xl:flex-row xl:mt-32 my-20 xl:grid grid-cols-2 xsm: flex flex-col xsm: m-5 ">
          <div className="self-center mx-auto bg-white">
            <img
              className="rounded-full xsm:w-[360px] xsm:h-[360px] xl:h-[515px] xl:w-[525px]"
              src={gans}
              alt="profile"
            />
          </div>
          <div className="xsm:mt-10 xl:self-center text-white flex flex-col xl:">
            <text className="text-white text-2xl font-bold">
              Hello, there! I am
            </text>
            <text className="text-6xl font-bold ">Evan Darren Christanto</text>
            <text className="font-bold text-2xl">
              A Frontend Developer Studying at NUS
            </text>
            <text className="mt-1 text-xl">
              I am a web and app developer with experienced for over 1 year{" "}
            </text>
            <text className="text-xl mt-1">
              I have been developing websites and mobile application!{" "}
            </text>
            <a
              href="/contact"
              className="flex justify-center items-center text-white text-xl border-2 border-white border-solid rounded-lg hover:bg-white hover:text-black hover:black w-40 mt-4 h-12"
            >
              <text className="font-bold px-5 text-center">Contact Me</text>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl xl:w-50 xl:mx-32 h-1 xsm: m-5 mt-10"></div>
      <div className="grid xl:grid-cols-2 font-ubuntu xsm:m-5">
        <div className="xl:mx-28 my-auto xl:m-0 xsm: m-5 flex flex-col mt-10">
          <text className="text-white font-bold text-4xl xl:my-5 xsm: my-4 font-ubuntu">
            About me
          </text>
          <text className="text-white mt-5 font-bold text-2xl">My Skills</text>
          <p className="text-white mt-5 text-lg font-ubuntu">
            In terms of technical skills, I excel in frontend and backend
            development with tech stacks include React JS, React Native, HTML,
            CSS, JavaScript, Python, Supabase, Tailwind CSS. Besides that I also
            have several experiences in communication skills, leaderships, and
            many others.
          </p>

          <text className="text-white mt-5 font-bold text-2xl font-ubuntu">
            Life Values
          </text>
          <p className="text-white mt-5 text-lg font-ubuntu">
            I value the experience that I have gotten from working with other
            people, that is why my life goal is to help people, create values
            for them, and become meaningful.
          </p>
        </div>
        <div className="flex flex-col my-auto">
          <div className="flex flex-row font-bold font-ubuntu text-6xl mx-[70px]">
            <text className="text-white">"</text>
            <text className="text-white text-6xl font-bold font-ubuntu ">
              I can do all things
            </text>
          </div>
          <text className="text-white text-6xl font-bold font-ubuntu  mx-24">
            through Christ
          </text>
          <text className="text-white text-6xl font-bold font-ubuntu  mx-24">
            strengthens me."
          </text>
        </div>
      </div>
      <text className="text-white font-bold text-3xl xl:my-10 xsm: my-4 xl: mx-32 font-ubuntu">
        My Experience
      </text>
      <div className="flex flex-col text-white font-bolf font-ubuntu mx-32">
        <text className="text-2xl">NUANSA Set and Props Co-Director</text>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <p className="text-white mt-5 text-lg font-ubuntu">
              NUANSA is a Indonesian drama musical theater in NUS. Before the
              covid period, they had always been holding events in their{" "}
            </p>
          </div>
          <img src={gans} className="w-[500px] mt-7" alt="ya maap" />
        </div>
        <div className="flex flex-row">
          <img />
          <p></p>
        </div>
        <div className="flex flex-row">
          <p></p>
          <img />
        </div>
      </div>
      <text className="text-white font-bold text-3xl xl:my-10 xsm: my-4 xl: mx-32 font-ubuntu">
        My Projects
      </text>
      <div className="xl:grid grid-cols-3 xl:gap-7 xsm:flex flex-col m-5 items-center mx-32">
        {data.map((product, index) => (
          <div
            className=" bg-white text-black transition ease-in-out delay-175 hover:bg-violet-800 hover:text-white hover:-translate-y-1 hover:scale-110 font-ubuntu h-[450px] self-center rounded-lg"
            key={index}
          >
            <div>
              <img
                className="h- w-full rounded-t-lg"
                src={gans}
                alt="turu deck"
              />
            </div>
            <p className="mx-5 mt-2 text-justify">{product.desc}</p>
            <div className="xl: flex flex-row xl:justify-between self-end m-5 xl:items-center  ">
              <text className="text-lg font-bold">{product.name}</text>
              <div className="flex flex-row items-center">
                <a
                  href={product.link}
                  alt="product"
                  className="flex flex-row items-center"
                >
                  <ExternalLink className="h-4" />
                  <text className="text-sm">Visit Website!</text>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
