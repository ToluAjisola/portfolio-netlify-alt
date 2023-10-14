import React from 'react'
import "./assets/css/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
  return (
    <>
      <section id="contact" className="wrapper style1 fade-up">
        <div className="contact-container">
          <h2>Get in touch</h2>
          <p>
            Contact me if my portfolio has piqued your interest.
            <br />I would love to receive project offers/job oppotunities.
          </p>
          <div className="split style1">
            <section>
              <form method="post" action="#">
                <div className="fields">
                  <div className="field half">
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label for="subject">Subject</label>
                    <input type='text' name="subject" id="subject" rows="5"/>
                  </div>
                  <div className="field">
                    <label for="message">Message</label>
                    <textarea name="message" id="message" rows="5"></textarea>
                  </div>
                </div>
                <ul className="actions">
                  <li>
                    <button className="button submit">Send Message</button>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Address</h3>
                  <span>
                    Mississauga, ON
                    <br />
                    CA
                  </span>
                </li>
                <li>
                  <h3>Email</h3>
                  <span>ajisola.toluwalope@gmail.com</span>
                </li>
                <li>
                  <h3>Phone</h3>
                  <span>(437) 366-1161</span>
                </li>
                <li>
                  <h3>Social</h3>
                  <ul className="icons">
                    <li>
                      <a href="https://www.linkedin.com/in/toluwalope-ajisola/">
                        <FontAwesomeIcon
                          icon="fa-brands fa-linkedin"
                          style={{ color: "#ffffff" }}
                        />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/ToluAjisola?tab=repositories">
                        <FontAwesomeIcon
                          icon="fa-brands fa-github"
                          style={{ color: "#ffffff" }}
                        />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact