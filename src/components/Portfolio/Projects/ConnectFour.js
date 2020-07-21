import React from "react";
import connectFour from "../../../assets/projects/connect-four.png";
import * as c from "../constants";

const ConnectFour = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="https://connect-four-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={connectFour} alt="Connect Four" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>Connect Four</h4>
        </div>
        <div className="project-links">
          <a
            href="https://connect-four-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <a
            href="https://github.com/Andrew-Kil/connect-four"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
        <div className="project-description">
          <p>
            Connect Four - 2 player game. Take turns dropping tokens into the
            grid. The first player to get four in a row wins. If the entire grid
            is occupied by tokens without any four in a row combinations, the
            game is a tie. Created using React & Redux.
          </p>
          <p className="project-tech">Tech:</p>
          <ul className="tech-tags">
            {c.projectTags.connectFour.slice(1).map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConnectFour;
