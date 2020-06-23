import React from "react";
import sleepApp from "../../../assets/projects/sleep-app.png";
import * as c from "../constants";

const SleepApp = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="https://github.com/Andrew-Kil/sleep-tracker"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={sleepApp} alt="Sleep App" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>Sleep App</h4>
        </div>
        <div className="project-links">
          <div>N/A</div>
          <a
            href="https://github.com/Andrew-Kil/sleep-tracker"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
        <div className="project-description">
          <p>
            An application that stores user logs of sleep information such as
            time slept, dreams, and any other notes they wish to add. The user
            can choose to make their logs private or public. All public logs can
            be viewed by the community. Users can click on a users profile to
            find information about them as well as their sleep logs. Firebase
            authentication. Written using React Hooks and Context API. Work in
            progress.
          </p>
          <p className="project-tech">Tech:</p>
          <ul className="tech-tags">
            <li>{c.HTML5}</li>
            <li>{c.CSS3}</li>
            <li>{c.JAVASCRIPT}</li>
            <li>{c.REACT}</li>
            <li>{c.CONTEXT_API}</li>
            <li>{c.MATERIAL_UI}</li>
            <li>{c.NODE}</li>
            <li>{c.EXPRESS}</li>
            <li>{c.POSTGRESQL}</li>
            <li>{c.FIREBASE}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SleepApp;
