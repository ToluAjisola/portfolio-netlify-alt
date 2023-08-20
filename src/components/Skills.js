import React from 'react'
import "./assets/css/skills.css";
import Profile from "../components/assets/images/Portfolio_image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Skills() {
  return (
    <>
      <section id="skill">
        <div className="image-wrapper">
          <img src={Profile} alt="My portfolio profile" />
        </div>
        <div className="skill-wrapper">
          <h2>Skill</h2>
          <div className="features">
            <section>
              <span className="icon solid major fa-code">
                <FontAwesomeIcon icon="fa-brands fa-html5" />
              </span>
              <FontAwesomeIcon icon="fa-brands fa-css3-alt" />
              <h3>HTML & CSS</h3>
            </section>
            <section>
              <span className="icon solid major fa-lock"></span>
              <FontAwesomeIcon icon="fa-brands fa-square-js" />
              <h3>JavaScript</h3>
              <p></p>
            </section>
            <section>
              <span className="icon solid major fa-lock"></span>
              <FontAwesomeIcon icon="fa-brands fa-square-js" />
              <h3>React Js</h3>
              <p></p>
            </section>
            <section>
              <span className="icon solid major fa-lock"></span>
              <FontAwesomeIcon icon="fa-brands fa-java" />
              <h3>Java</h3>
              <p></p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills