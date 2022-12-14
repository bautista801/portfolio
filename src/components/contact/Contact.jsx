import React, { useState } from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaLinkedin} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fs4cu8j', 'template_9zqhbl6', form.current, 'hqeKAIwM5KziwF21l')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id='contact'>
        <h4>Get In Touch</h4>
        <h2>Contact Me</h2>

        <div className="container contact__container">
            <div className="contact__options">
                <article className="contact__option">
                    <MdOutlineEmail className="contact__option-icon" />
                    <h4>Email</h4>
                    <h5>bauti.castets1@gmail.com</h5>
                    <a href="mailto:bauti.castets1@gmail.com" target='_blank'>Send a Message</a>
                </article>

                <article className="contact__option">
                    <FaLinkedin className="contact__option-icon" />
                    <h4>Linkedin</h4>
                    <h5>Bautista Castets</h5>
                    <a href="https://www.linkedin.com/in/bautista-castets/" target='_blank'>Send a Message</a>
                </article>

                <article className="contact__option">
                    <ImWhatsapp className="contact__option-icon" />
                    <h4>WhatsApp</h4>
                    <h5>+54 9 294 433-4629</h5>
                    <a href="https://api.whatsapp.com/send?phone+5492944334629" target='_blank'>Send a Message</a>
                </article>
            </div>


            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" placeholder='Your Message'  rows="7" required></textarea>
                <button
                className='btn btn-primary' 
                    type='submit'>
                        Send Message
                </button>
            </form>

        </div>

    </section>
  )
}

export default Contact