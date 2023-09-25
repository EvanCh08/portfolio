import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Github, Linkedin, InstagramIcon } from "lucide-react";
import { Menu, X } from "lucide-react";
import {useState} from 'react';

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_25w9gnm",
        "template_yq05zrr",
        form.current,
        "65m9BAtkFzWZOEKM6"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
  }

  const [isOpen, setIsOpen] = useState(false);

  const togglenavbar = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }

  return (
    <div className="flex flex-col bg-black xsm:h-full xl:h-screen">
      <div className="flex flex-row xl:items-center xsm:items-start w-screen xl:h-20 xsm:h-[70px] xl:space-y-0 bg-black xl:static xsm:fixed xsm:space-y-20">
        <div className="flex xl:flex-row xsm:flex-row justify-between  xl:items-center w-full h-16 xl:m-32 m-6 xsm:mx-10 sxl:mx-20 xmd:mx-[60px] ">
          <div className="">
            <text className="text-white/90 text-xl text-start font-ubuntu font-bold">
              Evan Darren Christanto
            </text>
          </div>
          <ul className="flex xl:space-x-10 xl:flex-row xsm:flex-col xsm:items-start xl:items-center visile xl:flex xsm:hidden">
            <div className="flex flex-col my-3">
              <a 
                href="/"
                className=" text-xl font-bold hover:text-sky-600 text-white font-ubuntu  my-1"
              >
                Home
              </a>
            </div>
            

            
            
            <a
              href="https://drive.google.com/file/d/1E4sXZRROnNSU8PXlx5X6BQ_nwbdziV0W/view?usp=sharing"
              className="text-white/90 flex justify-center text-xl rounded-lg hover:text-sky-600  h-10  xsm:items-start xl:items-center my-2"
            >
              <text className="xsm:pr-11 xl:pr-0 py-1 font-bold font-ubuntu">
                Resume
              </text>
            </a>
            
          </ul>
          <div className="visible xl:hidden xsm:visible xl:mx-0  ">
            <button onClick={togglenavbar}>
              {isOpen ? <X color="white" size="40"/> : <Menu color="white" size="40"/>}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
          <div className="h-60 xsm:mt-[70px] xmd:mx-[60px] fixed bg-zinc-950/80 text-white xsm:mx-10 sxl:mx-20 w-full" >
              <ul className="flex flex-col space-y-5">
              <a className=" text-xl font-bold hover:text-sky-600 text-white font-ubuntu  my-1" href="/">Home</a>
      
              <a href="https://drive.google.com/file/d/1E4sXZRROnNSU8PXlx5X6BQ_nwbdziV0W/view?usp=sharing" className="text-xl font-bold hover:text-sky-600 text-white font-ubuntu  my-1">Resume</a>
          
              </ul>
          </div>

        )}

      <div className="xl:mt-[125px] xsm:mt-[200px] xsm:mx-auto xl:mx-32">
        <text className="text-white font-bold text-4xl xl:my-5 xsm: my-4 font-ubuntu">
          Contact Me
        </text>
      </div>

      <div className="xl:grid xmd:mx-[60px] sxl:mx-20 grid-cols-2 xsm:flex flex-col xsm:mx-10 xl:mx-0 ">
        <div className="border-2 border-white/85 flex flex-col xsm:mx-32 xsm:ml-0 xl:ml-32 xl:mx-0 mt-5 xsm:h-[350px] xsm:w-full xl:h-[400px] xl:w-[550px]  rounded-xl">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col my-auto m-5 "
          >
            <div className="flex flex-col">
              <label className=" text-white/75 font-bold font-ubuntu xsm:text-md xl:text-lg">
                Full Name
              </label>
              <input
                placeholder="Full Name"
                className="w-full xsm:h-6 xl:h-9 rounded-md px-2 border-2 border-white/75 bg-black text-white"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col my-3">
              <label className="text-white/75 font-bold font-ubuntu xsm:text-md xl:text-lg">
                Email
              </label>
              <input
                placeholder="Email"
                className="w-full xsm:h-6 xl:h-9 rounded-md px-2 border-2 border-white/75 bg-black text-white"
                type="email"
                name="user_email"
              />
            </div>

            <label className="text-white/75 font-bold font-ubuntu xsm:text-md xl:text-lg">
              Message
            </label>
            <textarea
              placeholder="Message from me to Evan is..."
              name="message"
              className="rounded-md px-2 py-1 border-2 border-white/75 bg-black text-white"
              rows="4"
            />
            <input
              type="submit"
              className="w-full xsm:h-7 xl:h-9 hover:bg-white hover:text-black rounded-xl border-2 border-white/75 text-white mt-5 font-bold font-ubuntu"
              value="Send My Email!"
            />
          </form>
          
        </div>
        <div className="my-auto">
            <div className="flex flex-col xsm:[300px] xl:w-[550px] xl:mx-[80px] xl:mt-0 xsm:mt-5">
              <text className="text-white text-5xl font-bold font-ubuntu xsm:text-center xl:mt-0 sxl:mt-5 xsm:mt-5">Let's get in touch!</text>
              <p className="text-white mt-3 text-xl font-ubuntu text-justify text-opacity-80 my-auto">
                Are you interested in my skills and experiences? Wondering how I
                can reach you? Please do not hesitate to contact me by inserting
                your full name, email, and messages that you would like to send
                me. Make sure to drop your phone number message box, so that I
                can reach out to you! Thank you{" "}
              </p>
            </div>
          </div>
      </div>

      <div className="mx-32 mt-10">
        <text className="text-white xsm:flex justify-center xl:self-end font-ubuntu font-bold text-3xl">
          Social
        </text>
      </div>
      <div className="bg-white rounded-xl xl:w-50 xl:mx-32 h-[2px] xsm:m-5 xsm:mt-3 xsm:mx-10"></div>
      <div className="flex flex-row justify-center space-x-5 mb-3 ">
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
