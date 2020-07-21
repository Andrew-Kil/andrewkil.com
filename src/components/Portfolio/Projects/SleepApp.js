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
            Sleep App is an application where users can submit sleep logs that
            include information such as what time they slept and if they had any
            dreams. Any other relevant information can be added in the notes
            section. The sleep logs can be saved as either private or public.
            Public sleep logs can be viewed by other users who visit your
            profile page and they can also see the profile information that you
            submitted including name and occupation. PostgreSQL is used to store
            data including sleep logs and user profile information. Firebase is
            used for user authentication. State management is handled by using a
            combination of React Hooks and the Context API. Sleep app is under
            construction and it will be deployed soon.
          </p>
          <p className="project-tech">Tech:</p>
          <ul className="tech-tags">
            {c.projectTags.sleepApp.slice(1).map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SleepApp;
