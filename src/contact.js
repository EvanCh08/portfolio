import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactUs from "./email";

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
      <div className="flex flex-row items-center w-full h-20 bg-black fixed">
        <div className="flex flex-row justify-between items-center w-full h-16 xl:m-32 m-6">
          <div className="">
            <span className="text-white  text-xl font-lato">
              Evan Darren Christanto
            </span>
          </div>
          <div className="xl:space-x-20 flex flex-row  space-x-5 items-center">
            <a href="/" className="text-white/90 text-xl">
              Home
            </a>

            <div className="flex flex-col">
              <a href="/contact" className="text-white text-xl">
                Contact Me
              </a>
              <div className="bg-white rounded-xl h-[2px]"></div>
            </div>

            <a
              href="https://drive.google.com/file/d/1UXxWLY8_Hi5FnF-QUSU9jmvG1gpubJv3/view?usp=sharing"
              className="text-white/90 flex justify-center text-xl  border-white/90 border-solid rounded-lg  h-10"
            >
              <text className=" px-3 py-1">My Resume</text>
            </a>
          </div>
        </div>
        
      </div>

      <div className="mt-[200px] mx-32">
        <text className="text-white font-bold text-4xl xl:my-5 xsm: my-4 font-ubuntu">
              Contact Me
        </text>
      </div>
      <div className="flex flex-row">
        <div className= "border-2 border-white/85 flex flex-col ml-32 mt-5 h-[400px] w-[550px] rounded-xl">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col my-auto m-5 ">
            <div className="flex flex-col">
              <label className=" text-white/75 font-bold font-ubuntu text-lg">Full Name</label>
              <input placeholder="Full Name" className="w-full h-9 rounded-md px-2 border-2 border-white/75 bg-black text-white" type="text" name="name"/>

            </div>
            <div className="flex flex-col my-3">
              <label className="text-white/75 font-bold font-ubuntu text-lg">Email</label>
              <input  placeholder="Email" className="w-full h-9 rounded-md px-2 border-2 border-white/75 bg-black text-white" type="email" name="user_email"/>
            </div>

            <label className="text-white/75 font-bold font-ubuntu text-lg">Message</label>
            <textarea placeholder="Message from me to Evan is..."  name='message' className="rounded-md px-2 py-1 border-2 border-white/75 bg-black text-white"rows='4'/>
            <input type='submit' className="w-full h-9 hover:bg-white hover:text-black rounded-xl border-2 border-white/75 text-white mt-5 font-bold font-ubuntu" value='Send My Email!'/>
          </form>
        </div>
        <div className="bg-white h-[400px] w-1 mt-5 mx-[95px]"><text></text></div>
        <div className="text-white font-bold font-ubuntu flex flex-col w-[500px] my-auto">
          <p className="text-justify text-2xl">Are you interested more about my skills and experiences more? Wondering how I can reach you? Please do not hesitate to contact me by inserting your full name, email, and messages that you would like to send me. </p>
        </div>
      </div>
      
      
    </div>
  );
}
