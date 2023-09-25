import gans from "./ganteng.jpeg";
import buses from "./bus.jpeg";
import planes from "./plane.jpeg";
import tiktoks from "./tiktokun.jpeg";
import splitrrs from "./splitrr.jpeg";
import vegetable from "./vegetables.webp";
import nuansas from "./nuansa.jpeg";
import bigdatas from "./bigdata.webp";
import commits from "./commit.jpeg";
import discretes from "./discrete.jpeg";
import {
  Github,
  ExternalLink,
  Linkedin,
  InstagramIcon,
  Play,
  X,
  Menu,
} from "lucide-react";
import { useState, useRef } from "react";

export default function Main() {
  const data = [
    {
      name: "DES",
      photo: discretes,
      link: "https://github.com/EvanCh08/Discrete-Event-Simulation",
      desc: "The project is about an event simulation, in which there is a simulation that contains customers and cashiers. The program will simulate how the customers are served based on the arrival time of the customers and the availability of the cashiers.",
    },
    {
      name: "Splitrr",
      photo: splitrrs,
      link: "https://github.com/EvanCh08/SS2AM-Orbital-Project",
      desc: "In this project, I performed as a frontend and backend co-developer. Some features we have are login sign up page, splitbill page, and register menu page for restaurants.",
    },
    {
      name: "Tiktok",
      photo: tiktoks,
      link: "https://github.com/kyledilao777/Tiktok-Hack-2023",
      desc: "During Tiktok Hackathon, I worked as a frontend developer that is tasked to make sure that all the features are connected and attracts many people to use our application. Tech stacks we used are react native, supabase, and tailwind CSS.",
    },
    {
      name: "Airline Analysis",
      photo: planes,
      link: "https://docs.google.com/presentation/d/1sTyUDye3xVW0hV3Yd1CSoTNCy5OB3RsC/edit#slide=id.p1",
      desc: "In BT2102 module, alongside with my other 5 teammates, we created a project about airline analysis, using SQl, Tableau, and Microsoft Powerpoint. I performed as a data cleaner for this job, so I managed a lot in using SQL. I also executed some data visualization using tableau.",
    },
    {
      name: "Bus API",
      photo: buses,
      link: "https://github.com/EvanCh08/Bus-API",
      desc: "Bus API is a project done when I took CS2030, Programming Methodology II. I used CompletableFuture and functional programming concepts to solve this project. In the end, the project functions by calling a destination from one to another and the program will display the possible bus routes that the customers can take.",
    },
    {
      name: "Eating Analysis",
      photo: vegetable,
      link: "https://sites.google.com/view/evaneatinghabit?usp=sharing",
      desc: "During my summer holiday, I did this project about eating habit anaysis, whereby I analyzed my eating habit in a 5-day window. After further analysis through charts, graphs, and the amount of nutrients I got, I made a conclusion that I must fix my eating habit.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const project = useRef(null);
  const experience = useRef(null);
  const about = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  const togglenavbar = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <div className="flex flex-col xsm:bg-black xl:bg-black xsm:min-w-screen xsm:h-full xl:w-full h-full w-screen">
      <div className="flex flex-row xl:items-center xsm:items-start w-screen xl:h-20 xsm:h-[70px] xl:space-y-0 bg-black xl:static xsm:fixed xsm:space-y-20">
        <div className="flex sxl:flex-row xsm:flex-row justify-between  xl:items-center  w-full h-16 xl:m-32 m-6 xsm:mx-10 sxl:mx-20 xmd:mx-[60px]">
          <div className="">
            <text className="text-white/90 text-xl text-start font-ubuntu font-bold">
              Evan Darren Christanto
            </text>
          </div>
          <ul className="flex sxl:space-x-10 sxl:flex-row xsm:flex-col xsm:items-start xl:items-center visile xl:flex xsm:hidden">
            <div className="flex flex-col xl:my-3">
              <li
                onClick={() => scrollToSection(about)}
                className="  text-xl text-white  hover:text-sky-600 font-ubuntu font-bold"
              >
                About
              </li>
            </div>
            <li
              onClick={() => scrollToSection(project)}
              className=" text-xl font-bold hover:text-sky-600 text-white font-ubuntu  "
            >
              Projects
            </li>
            <li
              onClick={() => scrollToSection(experience)}
              className=" text-xl font-bold hover:text-sky-600 text-white font-ubuntu  "
            >
              Experience
            </li>

            <a
              href="/contact"
              className=" text-xl font-bold hover:text-sky-600 text-white font-ubuntu  xl:my-1"
            >
              Contact Me
            </a>
          </ul>
          <div className="visible xl:hidden sxl:visible xsm:visible xl:mx-0  ">
            <button onClick={togglenavbar}>
              {isOpen ? (
                <X color="white" size="40" />
              ) : (
                <Menu color="white" size="40" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="h-[200px] xsm:mt-[70px] fixed bg-zinc-950/80 text-white xsm:mx-10 xmd:mx-[60px] w-full ">
          <ul className="flex flex-col space-y-5 sxl:mx-5">
            <li
              className=" text-xl font-bold hover:text-sky-600 text-white font-ubuntu  my-1"
              onClick={() => scrollToSection(about)}
            >
              About
            </li>
            <li
              className=" text-xl font-bold hover:text-sky-600 text-white font-ubuntu  my-1"
              onClick={() => scrollToSection(project)}
            >
              Projects
            </li>
            <li
              className=" text-xl font-bold hover:text-sky-600 text-white font-ubuntu  my-1"
              onClick={() => scrollToSection(experience)}
            >
              Experience
            </li>
            <a
              className=" text-xl font-bold hover:text-sky-600 text-white font-ubuntu  my-1"
              href="/contact"
            >
              Contact Me
            </a>
          </ul>
        </div>
      )}
      <div className="xl:my-4 xsm: my-3 m-5">
        <div className=" sxl:flex-row xl:mt-[100px] my-20 xl:grid grid-cols-2 xsm: flex flex-col xsm: m-5 ">
          <div className="self-center mx-auto xl:mt-0 xsm:mt-[60px]">
            <img
              className="xl:rounded-full xsm:rounded-full xsm:w-[320px] xsm:h-[310px] xmd:w-[400px] xmd:h-[390px] sxl:[h-450px] sxl:w-[400px] xl:h-[515px] xl:w-[525px]"
              src={gans}
              alt="profile"
            />
          </div>
          <div className="xsm:mt-10 sxl:self-center xmd:mx-[60px] xsm:text-justify xl:text-start text-white/90 flex flex-col sxl:w-[440px] xl:w-[650px]  xl:mx-0 sxl:mx-10">
            <text className=" text-2xl font-bold">Hey! I am</text>
            <text className="text-6xl font-bold ">Evan Darren Christanto</text>
            <text className="font-bold text-2xl">
              A passionate Software Engineer who loves to build web and
              application!
            </text>
            <text className="mt-1 text-xl text-opacity-80">
              I am currently a Sophomore Business Analytics student in the
              National University of Singapore (NUS){" "}
            </text>
            <a
              href="/contact"
              className="flex justify-center items-center text-white/90 text-xl border-2 border-white/90 border-solid rounded-lg hover:bg-sky-600 hover:text-white hover:border-sky-600 hover:black w-40 mt-4 h-12"
            >
              <text className="font-bold px-5 text-center">Contact Me</text>
            </a>
          </div>
        </div>
      </div>

      <div
        ref={about}
        className="bg-white rounded-xl xl:w-50 xl:mx-32 h-[2px] xsm: m-5 xl:mt-10 xsm:mt-3 xmd:mx-[60px] sxl:mx-20 xsm:mx-10 "
      ></div>
      <div className="flex flex-col text-white font-bolf font-ubuntu sxl:mx-20 xsm:mx-10 xmd:mx-[60px] xl:mx-32">
        <div className="sxl:grid grid-cols-2 xsm:flex flex-col">
          <div className="flex flex-col xsm:[300px] xl:w-[480px] sxl:w-[430px] ">
            <text
              ref={about}
              className="text-3xl text-white font-bold xl:my-5 xsm:my-5"
            >
              About Me
            </text>
            <text className="text-white my-5 font-bold font-ubuntu text-2xl">
              My Skills
            </text>
            <p className="text-white text-lg font-ubuntu text-justify text-opacity-80 ">
              In terms of technical skills, I have experiences in both react
              native for app development and react js for web development. I
              performed well with React Native, React JS, Supabase, HTML, CSS,
              and Tailwind CSS. In addition to that, I have also touched on
              analytical tools, SQL, Tableau, and python for data analytics.{" "}
            </p>
            <text className="text-white my-5 font-bold font-ubuntu text-2xl">
              What I value in Life
            </text>
            <p className="text-white text-lg font-ubuntu text-justify text-opacity-80 ">
              I value the principles of setting the right purpose and believe. I
              have always set the purpose of things that I am doing in my life.
              Setting the purpose will give us the idea to take actions. Next
              up, Believe. Believing is one word that has a powerful meaning.
              When I believe that I can achieve, I will be able to achieve with
              the help of God and the people surrounding me.{" "}
            </p>
            <text className="text-white my-5 font-bold font-ubuntu text-2xl">
              Strength and Weakness
            </text>
            <p className="text-white text-lg font-ubuntu text-justify text-opacity-80 ">
              I have always been able to solve problems in front end
              development. For example there is a specific styling that I would
              like to have, I have always been able to implement it using my
              very own solutions. If I were to define one of my weaknesses, I
              would say that I can have a sudden anxiety, to speak in front of
              many people. I have tried to transform it into my strength
              instead, by taking a public speaking course in my university. Now,
              it is better for me to publicly speaking in front of many people.{" "}
            </p>
          </div>
          <div className="flex flex-col  text-white/90 xsm:my-5 xsm:w-full xl:w-full ">
            <div className="flex flex-col w-full ">
              <text className="text-white text-2xl font-bold xl:mt-[80px] ">
                Tech Stacks
              </text>
              <div className="flex flex-row xl:mt-5  w-full xsm:mt-5 justify-between bg-black text-lg">
                <div className="space-y-5">
                  <div className="flex flex-row ">
                    <Play />
                    <text>JavaScript</text>
                  </div>

                  <div className="flex flex-row">
                    <Play />
                    <text>Java</text>
                  </div>
                  <div className="flex flex-row">
                    <Play />
                    <text>Python</text>
                  </div>
                  <div className="flex flex-row">
                    <Play />
                    <text>Supabase</text>
                  </div>
                  <div className="flex flex-row">
                    <Play />
                    <text>React Native</text>
                  </div>
                  <div className="flex flex-row">
                    <Play />
                    <text>React JS</text>
                  </div>
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="flex flex-row">
                    <Play />
                    <text>HTML</text>
                  </div>
                  <div className="flex flex-row">
                    <Play />
                    <text>CSS</text>
                  </div>
                  <div className="flex flex-row">
                    <Play />
                    <text>Tailwind CSS</text>
                  </div>
                  <div className="flex flex-row">
                    <Play />
                    <text>Git</text>
                  </div>
                  <div className="flex flex-row">
                    <Play />
                    <text>SQL</text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <text
        ref={experience}
        className="xmd:mx-[60px] text-white/90 font-bold text-3xl xl:my-10 xsm: my-5 sxl:mx-20 xl:mx-32 xsm:mx-10 font-ubuntu"
      >
        Experience
      </text>
      <div className="flex flex-col text-white font-bolf font-ubuntu xsm:mx-10 xl:mx-32 sxl:mx-20 xmd:mx-[60px]">
        <text className="text-2xl text-white/90 font-bold xl:my-auto xsm:my-5">
          NUSSU CommIT Technical Team Member
        </text>
        <div className="sxl:grid grid-cols-2 xsm:flex flex-col">
          <div className="flex flex-col xsm:[300px] xl:w-[480px]  sxl:w-[430px]">
            <p className="text-white mt-5 text-lg font-ubuntu text-justify text-opacity-80 ">
              I just entered NUSSU CommIT Technical Team Member in September,
              2023. I performed here as an experienced frontend developer that
              is tasked to design NUSSU websites. We also have workshops every
              week conducted for junior developers that includes training in
              HTML, CSS, Python, and React. I am looking forward to many more
              experiences here in NUSSU CommIT!{" "}
            </p>
          </div>
          <img src={commits} className="w-full mt-7 rounded-lg" alt="ya maap" />
        </div>

        <text className="text-2xl text-white/90 font-bold xl:my-auto xsm:my-5">
          NUANSA Set and Props Director
        </text>
        <div className="sxl:grid grid-cols-2 xsm:flex flex-col ">
          <div className="flex flex-col xsm:[300px] xl:w-[480px] sxl:w-[430px]">
            <p className="text-white mt-5 text-lg font-ubuntu text-justify text-opacity-80 ">
              NUANSA is an esteemed Indonesian drama musical theater production
              at the National University of Singapore (NUS). Before the COVID19
              Pandemic, NUANSA had always been operating in the University
              Cultural Centre (NUS). I took charge of decision-making processes
              for meetings, leading these crucial gatherings, and actively
              organizing the committee. My skills are tested by being
              responsible for determining the property sets and prices.
              Including where to buy them and what are their dimensions. This
              required me to run through the script and took note of the
              properties that are needed in a particular scenario. In addition
              to that, I also made friends and built networks with fellow
              friends. I am very excited to work with them and build a strong
              relationship. I believe that the event will run smoothly.{" "}
            </p>
          </div>
          <img src={nuansas} className="w-full mt-7 rounded-lg" alt="ya maap" />
        </div>

        <text className="text-2xl text-white/90 font-bold xl:my-auto xl:mt-10 xsm:my-5">
          Data Analyst Internship
        </text>
        <div className="sxl:grid grid-cols-2 xsm:flex flex-col">
          <div className="flex flex-col xsm:[300px] xl:w-[480px] sxl:w-[430px]">
            <p className="text-white mt-5 text-lg font-ubuntu text-justify text-opacity-80 ">
              During summer, I did my very first internship in Indonesia which
              is in PT Catur Kimiatama Agung. It is a company that operates with
              paint and powders I had an incredible experience of talking to my
              supervisor of my internship. I first made the report on my own, by
              seeing the sales company data from an excel sheet. I observed many
              things and learned that factors on how a company operates can
              vary. After that, I collaborated with my supervisor and seek for
              His advice on my insights. I improved the report that I have made
              earlier and submitted it to the supervisor, to be presented to the
              upper managers. However, I got a one of a lifetime chance to
              present myself and my findings in front of my manager at the last
              weeks of my internship. I had my utmost experience there, due to
              the work environment.{" "}
            </p>
          </div>
          <img
            src={bigdatas}
            className="w-full mt-7 rounded-lg"
            alt="ya maap"
          />
        </div>
      </div>
      <text
        ref={project}
        className="text-white/90 xmd:mx-[60px] font-bold text-3xl xl:my-10 xsm:my-5 xl:mx-32 xsm:mx-10 font-ubuntu sxl:mx-20"
      >
        Projects
      </text>
      <div className="sxl:grid grid-cols-3 xmd:mx-[60px] xl:h-[1000px] sxl:gap-5 xl:gap-7 xsm:flex flex-col m-5 xsm:space-y-10 sxl:space-y-0 items-center xsm:mx-10 xl:mx-32 sxl:mx-20">
        {data.map((product, index) => (
          <div
            className=" bg-zinc-800 text-white transition ease-in-out delay-175 hover:bg-sky-700 hover:text-white hover:-translate-y-1 hover:scale-105 font-ubuntu xsm:h-full sxl:h-full rounded-lg flex flex-col"
            key={index}
          >
            <div>
              <img
                className="xl:h-[250px] sxl:h-[200px] w-full rounded-t-lg"
                src={product.photo}
                alt="turu deck"
              />
            </div>
            <p className="mx-5 mt-2 text-justify text-opacity-80">
              {product.desc}
            </p>

            <div className="flex-grow"></div>

            <div className="flex flex-row justify-between items-center mx-5 mb-3">
              <text className="text-lg font-bold">{product.name}</text>
              <a
                href={product.link}
                alt="product"
                className="flex flex-row items-center"
              >
                <ExternalLink className="h-4" />
                <span className="text-sm ml-1">Visit Website!</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-32 xsm:my-3 xl:my-1 ">
        <text className="text-white xsm:flex justify-center xl:self-end font-ubuntu font-bold text-3xl">
          Social
        </text>
      </div>
      <div className="bg-white rounded-xl xl:w-50 xl:mx-32 sxl:mx-20 h-[2px] xsm:m-5 xsm:mt-3 xsm:mx-10"></div>
      <div className="flex flex-row justify-center space-x-5 mb-3">
        <a href="https://github.com/EvanCh08">
          <Github color="white" size="35" />
        </a>
        <a href="https://www.linkedin.com/in/evan-darren-christanto-675b33251/">
          <Linkedin color="white" size="35" />
        </a>
        <a href="https://www.instagram.com/evan__darren/">
          <InstagramIcon color="white" size="35" />
        </a>
      </div>
    </div>
  );
}
