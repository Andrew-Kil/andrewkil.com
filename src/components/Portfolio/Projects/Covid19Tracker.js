import React from "react";
import covid19Tracker from "../../../assets/projects/covid-19-tracker.png";
import * as c from "../constants";

const Covid19Tracker = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="https://covid19tracker-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={covid19Tracker} alt="COVID-19 Tracker" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>COVID-19 Tracker</h4>
        </div>
        <div className="project-links">
          <a
            href="https://covid19tracker-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <a
            href="https://github.com/Andrew-Kil/covid-19-tracker"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
        <div className="project-description">
          <p>
            Track statistics about COVID-19. Filter by country. React Hooks.
            Responsive design. Chart.js for data visualization.
          </p>
          <p className="project-tech">Tech:</p>
          <ul className="tech-tags">
            <li>{c.HTML5}</li>
            <li>{c.CSS3}</li>
            <li>{c.JAVASCRIPT}</li>
            <li>{c.REACT}</li>
            <li>{c.MATERIAL_UI}</li>
            <li>{c.CHART_JS}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Covid19Tracker;
