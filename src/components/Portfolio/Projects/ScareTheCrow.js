import React from "react";
import scareTheCrow from "../../../assets/projects/scare-the-crow.png";
import * as c from "../constants";

const ScareTheCrow = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="https://scarethecrow.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={scareTheCrow} alt="Scare the Crow" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>Scare the Crow</h4>
        </div>
        <div className="project-links">
          <a
            href="https://scarethecrow.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <a
            href="https://github.com/Andrew-Kil/scare-the-crow"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
        <div className="project-description">
          <p>
            This is my take on the classic word guessing game - Hangman. Scare
            the crow before the crow scares you! The user can select a
            difficulty level which is stored in local storage along with their
            high score. The goal is to guess the word before you run out of
            lives.
          </p>
          <p className="project-tech">Tech:</p>
          <ul className="tech-tags">
            {c.projectTags.scareTheCrow.slice(1).map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScareTheCrow;
