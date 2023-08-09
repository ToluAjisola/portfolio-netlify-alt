import React from 'react'
import "./assets/css/sidebar.css"

function Navbar() {
  return (
    <div className="inner">
      <nav>
        <ul>
          <li>
            <a href="#intro">Welcome</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#two">What we do</a>
          </li>
          <li>
            <a href="#contact">Get in touch</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar