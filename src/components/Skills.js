import React from 'react'
import "./assets/css/skills.css";

function Skills() {
  return (
    <>
      <section id="skill">
        <div className="skill-wrapper">
          <h2>Skill</h2>
          <p>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
          </p>
          <div className="features">
            <section>
              <span className="icon solid major fa-code"></span>
              <h3>Lorem ipsum amet</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon solid major fa-lock"></span>
              <h3>Aliquam sed nullam</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
           
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills