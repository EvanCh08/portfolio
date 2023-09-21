import gans from "./ganteng.jpeg";
import buses from "./bus.jpeg";
import planes from "./plane.jpeg";
import tiktoks from "./tiktokun.jpeg";
import splitrrs from "./splitrr.jpeg";
import customers from "./customer.jpeg";
import { useNavigate } from "react-router-dom";
import { Github, ExternalLink, Linkedin, InstagramIcon } from "lucide-react";

export default function Main() {
  const data = [
    {
      name: "Discrete Event Simulator",
      photo: customers,
      link: "https://github.com/EvanCh08/Discrete-Event-Simulation",
      desc: "The project is about a event simulation, in which there’s a simulation that contains customers and cashiers. The project will simulate how the customers are served based on the arrival time of the customers and the availability of the cashiers.",
    },
    {
      name: "Splitrr",
      photo: splitrrs,
      link: "https://github.com/EvanCh08/SS2AM-Orbital-Project",
      desc: "In this project, I performed as a frontend and backend codeveloper. Some features we have are login sign up page, splitbill page, and register menu page for restaurants. Ouor main objective is to help restaurants and customers in terms of splibill.",
    },
    {
      name: "Tiktok Hackathon",
      photo: tiktoks,
      link: "https://github.com/kyledilao777/Tiktok-Hack-2023",
      desc: "During the Hackathon, I worked as a frontend developer that is tasked to make sure that all the features are connected and attracts many people to use our application. Tech stacks we used are react native, supabase, and tailwind CSS.",
    },
    {
      name: "Airline Analysis",
      photo: planes,
      link: "https://docs.google.com/presentation/d/1sTyUDye3xVW0hV3Yd1CSoTNCy5OB3RsC/edit#slide=id.p1",
      desc: "During the Hackathon, I worked as a frontend developer that is tasked to make sure that all the features are connected and attracts many people to use our application. Tech stacks we used are react native, supabase, and tailwind CSS.",
    },
    {
      name: "Bus API",
      photo: buses,
      link: "https://github.com/EvanCh08/Bus-API",
      desc: "Bus API is a project done when I took CS2030, Programming Methodology II. I used CompletableFuture and functional programming to solve this project. In the end theh project functions by calling a destination from one to another and the program will display the possible bs routes that the customers can take.",
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
          <div className="xl:space-x-20 flex flex-row font-bold space-x-5 items-center">
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
            <text className="mt-1 text-xl text-opacity-80">
              I am a web and app developer with experienced for over 1 year{" "}
            </text>
            <text className="text-xl mt-1 text-opacity-80">
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
        <div className="xl:mx-[107px] w-[580px] text-justify my-auto xl:m-0 xsm: m-5 flex flex-col mt-10">
          <text className="text-white font-bold text-4xl xl:my-5 xsm: my-4 font-ubuntu">
            About me
          </text>
          <text className="text-white mt-5 font-bold text-2xl">My Skills</text>
          <p className="text-white mt-5 text-lg font-ubuntu text-opacity-80">
            In terms of technical skills, I excel in frontend and backend
            development with tech stacks include React JS, React Native, HTML,
            CSS, JavaScript, Python, Supabase, Tailwind CSS. Besides that I also
            have several experiences in communication skills, leaderships, and
            many others.
          </p>

          <text className="text-white mt-5 font-bold text-2xl font-ubuntu">
            Life Values
          </text>
          <p className="text-white mt-5 text-lg font-ubuntu text-opacity-80">
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
      <text className="text-white font-bold text-4xl xl:my-10 xsm: my-4 xl: mx-32 font-ubuntu">
        My Experience
      </text>
      <div className="flex flex-col text-white font-bolf font-ubuntu mx-32">
        <text className="text-2xl">NUSSU CommIT Technical Team Member</text>
        <div className="grid grid-cols-2">
          <div className="flex flex-col w-[580px]">
            <p className="text-white mt-5 text-lg font-ubuntu text-justify text-opacity-80">
              I just entered NUSSU CommIT Technical Team Member in September,
              2023. I performed here as an experienced frontend developer that
              is tasked to design NUSSU websites. We also have workshops every
              week conducted for junior developers that includes bakcend and
              frontend engineer, that is . I am looking forward to many more
              experiences here in NUSSU CommIT!{" "}
            </p>
          </div>
          <img src={gans} className="w-[640px] mt-7 rounded-lg" alt="ya maap" />
        </div>

        <div className="grid grid-cols-2 my-3">
          <img
            src={gans}
            className="w-[580px] mt-20 rounded-lg"
            alt="ya maap"
          />
          <div className="flex flex-col w-[628px]">
            <text className="text-2xl my-5 font-bold">
              NUANSA Set and Props Co-Director
            </text>
            <p className="text-white text-lg font-ubuntu text-justify text-opacity-80">
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
        </div>

        <div className="grid grid-cols-2 my-3">
          <div className="flex flex-col w-[580px]">
            <text className="text-2xl my-5">
              Data Analyst Internship at PT Catur Kimiatama Agung
            </text>
            <p className="text-white text-lg font-ubuntu text-justify text-opacity-80">
              During summer, I did my very first internship in Indonesia which
              is in PT Catur Kimiatama Agung. It is a company that operates with
              paint and powders I had an incredible experience of talking to my
              supervisor of my internship. I first made the report on my own, by
              seeing the sales company data from an excel sheet. I observed many
              things and learned that factors on how a company operates can
              vary. After that, I collaborated with my supervisor and seek for
              his advices on my insights. I improved the report that I have made
              earlier and submitted it to the supervisor, to be presented to the
              upper managers. However, I got a one of a lifetime chance to
              present myself and my findings in front of my manager at the last
              weeks of my internship. I had my utmost experience here, due to
              the work environment.{" "}
            </p>
          </div>
          <img
            src={gans}
            className="w-[615px] rounded-lg mt-20 ml-3"
            alt="ya maap"
          />
        </div>
      </div>
      <text className="text-white font-bold text-3xl xl:my-10 xsm: my-4 xl: mx-32 font-ubuntu">
        My Projects
      </text>
      <div className="xl:grid grid-cols-3 xl:gap-7 xsm:flex flex-col m-5 items-center mx-32">
        {data.map((product, index) => (
          <div
            className=" bg-zinc-900 text-white transition ease-in-out delay-175 hover:bg-red-700 hover:text-white hover:-translate-y-1 hover:scale-105 font-ubuntu h-[500px] self-center rounded-lg flex flex-col"
            key={index}
          >
            <div>
              <img
                className="h- w-full rounded-t-lg"
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
      
      <div className="mx-32 my-3">
          <text className="text-white flex justify-center font-ubuntu font-bold text-2xl">Social</text>
      </div>
      <div className="bg-white rounded-xl xl:w-50 xl:mx-32 h-1 xsm: m-5"></div>
      <div className="flex flex-row justify-center space-x-5">
          <a href="https://github.com/EvanCh08"> 
            <Github color="white" />
          </a>
          <a href="https://www.linkedin.com/in/evan-darren-christanto-675b33251/"> 
            <Linkedin color="white" />
          </a>
          <a href="https://www.instagram.com/evan__darren/"> 
            <InstagramIcon color="white" />
          </a>
          
      </div>
    </div>
  );
}
