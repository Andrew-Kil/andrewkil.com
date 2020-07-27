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
            <p>
              Hi, I'm Andrew. I started learning how to code in my free time
              while I was working in the hospitality industry, using websites
              such as freeCodeCamp and Codecademy. Shortly after, I found out
              about{" "}
              <a
                href="https://www.pursuit.org/"
                target="_blank"
                rel="noopener noreferrer">
                Pursuit
              </a>
              , a highly selective and diverse software engineering program
              where the fellows come from non-traditional backgrounds. I
              graduated from Pursuit where I spent 10-months learning Full Stack
              Web Development.
            </p>
            <p>
              My past experience of working in the hospitality industry taught
              me the importance of effectively working in a team to empathize
              with guests and provide excellent service. I apply that mindset
              towards designing and developing user-centered applications.
            </p>
            <p>
              I'm currently looking for opportunities to join a team and improve
              the lives of others with technology.
            </p>
            <p>
              Feel free to <a href="#contact">contact me</a> if you have any
              questions or want to chat!
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
