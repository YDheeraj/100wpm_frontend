import React from 'react';
import "./aboutUs.css";
import Footer from './Footer';

const AboutUs=()=> {
  return (
    <>
    <div className="about-us">
      <h2 className="about-header">About Us</h2>
      <p className="about-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit purus vel arcu facilisis, at iaculis quam efficitur. Sed tincidunt lacus eu justo tincidunt, id egestas risus ullamcorper. Phasellus tincidunt fringilla risus, ac dapibus nibh vulputate sit amet. Morbi vel lacinia justo. Donec at diam diam. Sed vel felis eu odio euismod interdum. Integer vel semper nisl. In a tellus quis orci malesuada consectetur. Nam ac lacus lorem. Fusce sollicitudin nibh eget tristique blandit. In euismod libero ut ligula placerat tincidunt.
      </p>
      <p className="about-paragraph">
        Donec quis tortor ut mi posuere bibendum. Nullam varius ut enim et suscipit. Curabitur iaculis sapien id mauris maximus, vel blandit purus ullamcorper. Donec vestibulum ante non elit ultrices, ut vulputate nulla dignissim. Sed gravida efficitur massa, at malesuada enim aliquet vel. Etiam et vestibulum nisi, vel tincidunt lacus. Integer tristique arcu vel purus malesuada, at tincidunt tellus vehicula. In hac habitasse platea dictumst.
      </p>
    </div> 
    <Footer></Footer>
    </>
  );
}

export default AboutUs;
