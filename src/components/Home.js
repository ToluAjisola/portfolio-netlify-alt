import React, { Fragment } from 'react'
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import "./assets/css/home.css";
import Intro from './Intro';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';

export default function Home() {
    return (
      <Fragment>
      

		{/* <!-- Sidebar --> */}
			<section id="sidebar">
				<Navbar/>
			</section>

		{/* <!-- Wrapper --> */}
			<div id="content-wrapper">

				{/* <!-- Intro --> */}
					<Intro />

				{/* <!-- One --> */}
					<Portfolio/>

				{/* <!-- Two --> */}
				{/*Display About on full screen then 
				 Skills on smaller screens */}
					{/* <About/> hide foe now*/}
					<Skills/>

				{/* <!-- Three --> */}
					<Contact/>

			</div>

	
      </Fragment>
    );
}
 