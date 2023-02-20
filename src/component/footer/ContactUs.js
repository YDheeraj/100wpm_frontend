import React, { useState } from 'react';
import "./ContactUs.css";
import Footer from './Footer';


const  ContactUs=()=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  }

  return (
    <>
    <form onSubmit={handleSubmit} className="contact-form">
      <h2 className="contact-header">Contact Us</h2>
      <label className="contact-label">
        Name:
        <input type="text" value={name} onChange={handleNameChange} className="contact-input" />
      </label>
      <br />
      <label className="contact-label">
        Email:
        <input type="email" value={email} onChange={handleEmailChange} className="contact-input" />
      </label>
      <br />
      <label className="contact-label">
        Message:
        <textarea value={message} onChange={handleMessageChange} className="contact-textarea"></textarea>
      </label>
      <br />
      <button type="submit" className="contact-button">Send Message</button>
    </form>
    <Footer></Footer>
    </>
  );
}

export default ContactUs;
