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
            View global statistics about COVID-19 or select a country to filter
            the results. Uses React Hooks, Material-UI, and Chart.js (data
            visualization). This project is based on a Youtube tutorial.
          </p>
          <p className="project-tech">Tech:</p>
          <ul className="tech-tags">
            {c.projectTags.covid19Tracker.slice(1).map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Covid19Tracker;
