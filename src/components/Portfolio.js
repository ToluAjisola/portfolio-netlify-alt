import React from 'react'
import "./assets/css/portfolio.css";
import thumbnail1 from "../components/assets/images/pic01.jpg";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="content">
          <h2>Projects</h2>
          <div className="portfolio-wrapper">
            <div className="screenshot-wrapper">
              <img src={thumbnail1} alt="My portfolio profile" />
            </div>
            <div className="detail-wrapper">
              <p>Project description</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio