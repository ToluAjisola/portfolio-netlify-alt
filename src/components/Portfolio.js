import React from 'react'
import "./assets/css/portfolio.css";

function Portfolio() {
  return (
    <>
      <section id="portfolio">
        <div className="content">
          <h2>Projects</h2>
          <div className="portfolio-wrapper">
            <div className="screenshot-wrapper">
              <p>Project screenshot</p>
              
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