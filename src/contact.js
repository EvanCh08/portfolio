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

      <div className="mt-32 mx-32">
        <text className="text-white font-bold text-4xl xl:my-5 xsm: my-4 font-ubuntu">
              Contact Me
        </text>
      </div>
      
      <div className= "border-2 border-white/75 flex flex-col mx-32 mt-5 h-[350px] w-[500px] rounded-xl">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col my-auto m-5 ">
          <div className="flex flex-col">
            <label className=" text-white font-bold font-ubuntu text-lg">Name</label>
            <input placeholder="Name" className="w-full h-9 rounded-md px-2 bg-white" type="text" name="name"/>

          </div>
          <div className="flex flex-col my-3">
            <label className="text-white font-bold font-ubuntu">Email</label>
            <input  placeholder="Email" className="w-full h-9 rounded-md px-2" type="email" name="user_email"/>
          </div>
          

          <label className="text-white font-bold font-ubuntu ">Message</label>
          <textarea placeholder="Message from me to Evan is..."  name='message' className="rounded-md px-2 py-1"rows='4'/>
          <input type='submit' className="w-full h-9 rounded-md" value='send'/>
        </form>
      </div>
      
    </div>
  );
}
