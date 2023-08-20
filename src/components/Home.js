import React, { Fragment } from 'react'
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import "./assets/css/home.css";
import Intro from './Intro';
import Contact from './Contact';
import Skills from './Skills';
/* import About from './About'; */

export default function Home() {
    return (
      <Fragment>
        {/* <!-- Sidebar --> */}
        <section id="sidebar">
          <Navbar />
        </section>

        {/* <!-- Wrapper --> */}
        <div id="content-wrapper">
          {/* <!-- Intro --> */}
          <Intro />

          {/* <!-- One --> */}
          <Portfolio />

          {/* <!-- Two --> */}

          {/* <About/> hide foe now*/}
          {/* Picture side by side with Resume*/}
          {/* 
		  on smaller screens; make picture smaller and circle
		  and resume below it, and is a flip card to skills
		  */}
          <Skills />
          {/*or put picture beside skills 
				and on smaller screens, make a flip card */}

          {/* <!-- Three --> */}
          <Contact />
        </div>
      </Fragment>
    );
}
 