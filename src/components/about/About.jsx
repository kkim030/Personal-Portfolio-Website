import React from "react";
import "./about.css";
import Image from "../../assets/about_image2.png";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello, I'm Kelly — a Front-End Developer in RBC Capital Markets'
              QTS Rotational Program. I hold a Bachelor of Computer Science
              from the University of British Columbia and a Bachelor of
              Commerce in Finance from the Rotman School of Management at the
              University of Toronto. Feel free to contact me!
            </p>
            <a
              href={`${process.env.PUBLIC_URL}/Kelly_Kim_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn__download"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
