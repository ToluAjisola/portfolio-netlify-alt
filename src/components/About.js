import React from 'react'
import Profile from '../components/assets/images/Portfolio_image.jpg'
import "./assets/css/about.css";
function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
          <p>
              Early Career software developer who is approachable, motivation driven,
              collaborative and eager to learn.
              <br />
              Proficient in HTML, CSS, Javascript, Java and React framework.
          </p>
      {/**add portfolio picture and resume to be side by side */}
      <div className="about-me-wrapper">
        <div className="image-wrapper">
         <img src={Profile} alt="My portfolio profile" /> 
              </div>
              <div className='resume-wrapper'>
                  <p>Resume here</p>
              </div>
      </div>
    </section>
  );
}

export default About