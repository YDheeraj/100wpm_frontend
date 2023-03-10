import React from 'react';
import "./aboutUs.css";
import Footer from './Footer';

const AboutUs=()=> {
  return (
    <>
    <div className="about-us">
      <h2 className="about-header">About Us</h2>
      <p className="about-paragraph">
     100wpm is a simple and convenient online typing tutor for everybody who wants to type better.

I know, that you have to type a lot: at home, at school, at work, and it takes the time that you can devote to other activities. With Ratatype you can free up to 20 minutes a day because it will teach you to type much faster and the "blind ten-finger typing method" will no longer be just a phrase from a textbook.
      </p>
      <p className="about-paragraph">
      My courses are absolutely free for all users in any language.
A simple and intuitive interface doesn't distract you from studying the layout.
You can easily get your typing certificate online, you just need to register and check your speed by passing the typing test.
You won’t get bored during the tests and lessons — it’s a real game! You just need to turn on the game mode on the tutor page and the lessons will cease to be boring :)
You can also compete in groups with friends. It's always more fun when we stay together!
Do you learn a new language? No problem! I have a lot of typing courses in different languages. You can practice language and learn to type at the same time.
      </p>
    </div> 
    <Footer></Footer>
    </>
  );
}

export default AboutUs;
