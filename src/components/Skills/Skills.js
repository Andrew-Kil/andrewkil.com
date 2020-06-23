import React, { useState } from "react";
import "./Skills.css";

const SHOW_ALL = "Show All";
const FRONT_END = "Front End";
const BACK_END = "Back End";
const OTHER = "Other";

const Skills = () => {
  const [selectedOption, setSelectedOption] = useState(SHOW_ALL);
  const options = [SHOW_ALL, FRONT_END, BACK_END, OTHER];

  const handleChange = (e) => {
    e.preventDefault();
    setSelectedOption(e.target.value);
  };

  const frontendSkills = () => (
    <>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-html5-plain colored"></i>
        <p>HTML5</p>
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-css3-plain colored"></i>
        <p>CSS3</p>
      </a>
      <a
        href="https://sass-lang.com/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-sass-original colored"></i>
        <p>Sass</p>
      </a>
      <a
        href="https://getbootstrap.com/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-bootstrap-plain colored"></i>
        <p>Bootstrap</p>
      </a>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-javascript-plain colored"></i>
        <p>Javascript</p>
      </a>
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
        <i className="devicon-react-original colored"></i>
        <p>React</p>
      </a>
      <a href="https://jquery.com/" target="_blank" rel="noopener noreferrer">
        <i className="devicon-jquery-plain colored"></i>
        <p>jQuery</p>
      </a>
    </>
  );

  const backendSkills = () => (
    <>
      <a
        href="https://nodejs.org/en/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-nodejs-plain colored"></i>
        <p>Node.js</p>
      </a>
      <a
        href="https://expressjs.com/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-express-original colored"></i>
        <p>Express</p>
      </a>
      <a
        href="https://www.postgresql.org/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-postgresql-plain colored"></i>
        <p>PostgreSQL</p>
      </a>
    </>
  );

  const otherSkills = () => (
    <>
      <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
        <i className="devicon-git-plain colored"></i>
        <p>Git</p>
      </a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
        <i className="devicon-github-plain colored"></i>
        <p>GitHub</p>
      </a>
      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-google-plain colored"></i>
        <p>Google</p>
      </a>
      <a
        href="https://www.heroku.com/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-heroku-plain colored"></i>
        <p>Heroku</p>
      </a>
      <a href="https://slack.com/" target="_blank" rel="noopener noreferrer">
        <i className="devicon-slack-plain colored"></i>
        <p>Slack</p>
      </a>
      <a
        href="https://trello.com/en-US"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-trello-plain colored"></i>
        <p>Trello</p>
      </a>
      <a
        href="https://code.visualstudio.com/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="devicon-visualstudio-plain colored"></i>
        <p>Visual Studio Code</p>
      </a>
    </>
  );

  return (
    <div id="skills" className="component-container">
      <div className="skills-container">
        <h3>Skills</h3>
        <select onChange={handleChange} className="select-skills">
          <option defaultValue value={options[0]}>
            {options[0]}
          </option>
          {options.slice(1).map((option, idx) => (
            <option value={option} key={idx}>
              {option}
            </option>
          ))}
        </select>
        <div className="skills-icons">
          {(selectedOption === FRONT_END || selectedOption === SHOW_ALL) &&
            frontendSkills()}
          {(selectedOption === BACK_END || selectedOption === SHOW_ALL) &&
            backendSkills()}
          {(selectedOption === OTHER || selectedOption === SHOW_ALL) &&
            otherSkills()}
        </div>
      </div>
    </div>
  );
};

export default Skills;
