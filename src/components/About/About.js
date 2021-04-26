import React from "react";
import resume from "../../assets/resume.pdf";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="component-container">
      <div className="about-container">
        <h3>About</h3>
        <section className="about-info">
          <div className="about-text">
            <h4>
              {" "}
              Hi, I'm Andrew{" "}
              <span role="img" aria-label="wave emoji">
                👋
              </span>
            </h4>
            <p>I design and develop user-centered web applications.</p>
            <p>
              <a href="#contact">Contact me</a> if you have any questions or
              want to chat!
            </p>
          </div>
          <div className="contact-buttons-container">
            <a
              href="https://github.com/Andrew-Kil"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-buttons">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/andrew-kil/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-buttons">
              LinkedIn
            </a>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-buttons">
              Resume
            </a>
            <a
              href="https://blah-blah-blog.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-buttons">
              Blog
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
