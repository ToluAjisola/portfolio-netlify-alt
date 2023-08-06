import React from "react";
import "./assets/css/portfolio.css";
import thumbnail1 from "../components/assets/images/pic01.jpg";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="portfolio-wrapper">
          <div className="screenshot-wrapper">
            <img src={thumbnail1} alt="My portfolio profile" />
          </div>
          <div className="content">
            {/* <h2>Projects</h2> */}
            <div className="inner">
              <div className="detail-wrapper">
                <h2>Project name</h2>
                <p>Project description</p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Portfolio;
