import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  Github,
  Linkedin,
  InstagramIcon,
} from "lucide-react";

export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();


    emailjs.sendForm('service_25w9gnm', 'template_yq05zrr', form.current, '65m9BAtkFzWZOEKM6')
      .then((result) => {
        console.log(result.text);
    }).catch( (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="flex flex-col  bg-black xsm:h-full xl:h-screen">
      <div className="flex flex-row xl:items-center xsm:items-start w-screen xl:h-20 xsm:h-[300px] bg-zinc-950/80 fixed xl:space-y-0 xsm:space-y-20">
        <div className="flex xl:flex-row xsm:flex-col xl:justify-between xsm:items-start xl:items-center  w-full h-16 xl:m-32 m-6 xsm:mx-10  ">
          <div className="">
            <text className="text-white/90 text-xl text-start font-lato">
              Evan Darren Christanto
            </text>
          </div>
          <div className="flex xl:space-x-20 xl:flex-row xsm:flex-col xsm:items-start xl:items-center">
            <div className="flex flex-col my-3">
              <a href="/" className=" text-white text-xl hover:text-sky-600  font-lato">
                Home
              </a>
            
            </div>
            <a href="/contact" className=" text-xl font-bold text-sky-600 font-lato my-1">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1UXxWLY8_Hi5FnF-QUSU9jmvG1gpubJv3/view?usp=sharing"
              className="text-white/90 flex justify-center text-xl rounded-lg hover:text-sky-600  h-10  xsm:items-start xl:items-center my-2"
            >
              <text className="xsm:pr-11 xl:pr-0 py-1">My Resume</text>
            </a>
          </div>
        </div>
      </div>
      
      <div className="xl:mt-[200px] xsm:mt-[250px] xsm:mx-auto xl:mx-32">
        <text className="text-white font-bold text-4xl xl:my-5 xsm: my-4 font-ubuntu">
              Contact Me
        </text>
      </div>
      
      <div className="flex xl:flex-row xsm:flex-col">
       
        <div className= "border-2 border-white/85 flex flex-col xsm:ml-0 xl:ml-32 xsm:self-center  xl:mx-0 mt-5 xsm:h-[350px] xsm:w-[320px] xl:h-[400px] xl:w-[550px] rounded-xl">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col my-auto m-5 ">
            <div className="flex flex-col">
              <label className=" text-white/75 font-bold font-ubuntu xsm:text-md xl:text-lg">Full Name</label>
              <input placeholder="Full Name" className="w-full xsm:h-6 xl:h-9 rounded-md px-2 border-2 border-white/75 bg-black text-white" type="text" name="name"/>
            </div>
            <div className="flex flex-col my-3">
              <label className="text-white/75 font-bold font-ubuntu xsm:text-md xl:text-lg">Email</label>
              <input  placeholder="Email" className="w-full xsm:h-6 xl:h-9 rounded-md px-2 border-2 border-white/75 bg-black text-white" type="email" name="user_email"/>
            </div>

            <label className="text-white/75 font-bold font-ubuntu xsm:text-md xl:text-lg">Message</label>
            <textarea placeholder="Message from me to Evan is..."  name='message' className="rounded-md px-2 py-1 border-2 border-white/75 bg-black text-white"rows='4'/>
            <input type='submit' className="w-full xsm:h-7 xl:h-9 hover:bg-white hover:text-black rounded-xl border-2 border-white/75 text-white mt-5 font-bold font-ubuntu" value='Send My Email!'/>
          </form>
        </div>
        <div className="bg-white xl:h-[400px] xl:w-1 mt-5 xl:mx-[95px] xsm:mx-8 xsm:h-1 xsm:w-[320px] xsm:mt-10 xl:mt-auto"><text></text></div>
        <div className="text-white font-bold font-ubuntu flex xl:mx-0 xsm:mx-8 flex-col xsm:w-[320px] xl:w-[500px] my-auto xsm:mt-10 xl:mt-auto">
          <p className="text-justify text-2xl ">Are you interested more about my skills and experiences? Wondering how I can reach you? Please do not hesitate to contact me by inserting your full name, email, and messages that you would like to send me. </p>
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
