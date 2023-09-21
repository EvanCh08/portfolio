import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_25w9gnm', 'template_i2xfujb', form.current, '65m9BAtkFzWZOEKM6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };  

  return (
    <form ref={form} onSubmit={sendEmail} className="bg-white">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};