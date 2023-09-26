import React from "react";
import "./assets/css/portfolio.css";
import thumbnail1 from "../components/assets/images/pic01.jpg";

function Portfolio() {
 
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
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
               <h2>Fitness Exercises App</h2>
               <p>
                 Fitness app that utlizes a RapidAPI to fetch exercises by name,
                 muscle and equipment. Allows for the display of youtube
                 instruction videos, similar muscle and equipment when an
                 exercise is selected.
               </p>
               <p>Made with: Reactjs, Material UI and RapidAPI</p>
               <button
                 onClick={() =>
                   openInNewTab("https://golds-exercises.netlify.app")
                 }
               >
                 Live Demo
               </button>
             </div>
           </div>
         </div>
       </div>
     </section>
   </>
 );
}

export default Portfolio;
