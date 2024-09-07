import React from "react"
import "./About.css"
import { profile4 } from "../../images";
const About = () => {
    return (
      <section id="about">
        <div className="section__wrapper about__container">
  
          <div className="container blur-effect">
            <div className="photo__container">
              <img src={profile4} alt="" /> 
            </div>
          </div>
  
          <div className="section__header">
            <h2 className="primary__title">About Me</h2>
            <h1 className="title">I am <span className="color__primary">Edem K. Anagbah</span></h1>
            <p className="text__muted description">
              Experienced Full Stack Developer with a passion for creating dynamic, intuitive, and
              responsive applications. Proficient in multiple programming languages and frameworks,
              as well as database design and management. Strong problem-solving and analytical skills,
              and a track record of delivering high-quality code on time and on budget.
            </p>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default About;
  