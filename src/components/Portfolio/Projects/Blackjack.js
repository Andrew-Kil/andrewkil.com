import React from "react";
import blackjack from "../../../assets/projects/blackjack.png";
import * as c from "../constants";

const Blackjack = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="https://blackjack-21.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={blackjack} alt="Blackjack" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>Blackjack</h4>
        </div>
        <div className="project-links">
          <a
            href="https://blackjack-21.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <a
            href="https://github.com/Andrew-Kil/blackjack"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
        <div className="project-description">
          <p>
            Blackjack game - beat the dealers score without going over 21.
            Created using Vanilla JavaScript.
          </p>
          <p className="project-tech">Tech:</p>
          <ul className="tech-tags">
            <li>{c.HTML5}</li>
            <li>{c.CSS3}</li>
            <li>{c.JAVASCRIPT}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Blackjack;
