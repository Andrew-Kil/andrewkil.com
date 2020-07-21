import React from "react";
import andrewkil from "../../../assets/projects/andrewkil.png";
import * as c from "../constants";

const AndrewKil = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="https://andrewkil.com/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={andrewkil} alt="Portfolio website" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>andrewkil.com</h4>
        </div>
        <div className="project-links">
          <a
            href="https://andrewkil.com/"
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <a
            href="https://github.com/Andrew-Kil/andrewkil.com"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
        <div className="project-description">
          <p>
            Portfolio website created using React. HTML includes meta tags for
            SEO & Open Graph. CSS includes animations and responsive design.
            Formspree was used for the contact form. Deployed on Netlify.
          </p>
        </div>
        <p className="project-tech">Tech:</p>
        <ul className="tech-tags">
          {c.projectTags.andrewKil.slice(1).map((tag, idx) => (
            <li key={idx}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default AndrewKil;
