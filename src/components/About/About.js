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
            <p>Hello!</p>
            <p>
              I'm Andrew, a developer from New York City. I graduated from{" "}
              <a
                href="https://www.pursuit.org/"
                target="_blank"
                rel="noopener noreferrer">
                Pursuit
              </a>
              , a 10-month software engineering program, where I learned Full
              Stack Web Development and I have experience developing, designing
              and deploying web applications.
            </p>
            <p>
              My background of working in the hospitality industry allows me to
              quickly adapt to different environments and effectively
              communicate with others.
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
