import React from "react";
import studdyBuddy from "../../../assets/projects/study-buddy.png";
import * as c from "../constants";

const StudyBuddy = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="https://studybuddy.netlify.com/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={studdyBuddy} alt="Study Buddy" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>Study Buddy</h4>
        </div>
        <div className="project-links">
          <a
            href="https://studybuddy.netlify.com/"
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <a
            href="https://github.com/Andrew-Kil/study-buddy"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
        <div className="project-description">
          <p>
            This app allows the user to improve their productivity by using a
            pomodoro timer and a todo list. The pomodoro technique uses the
            strategy of breaking down work into intervals, typically 25 minutes,
            followed by a short or long break. Turn off any distractions such as
            phone, internet, and TV in order to focus on the task at hand.
          </p>
          <p className="project-tech">Tech:</p>
          <ul className="tech-tags">
            {c.projectTags.studyBuddy.slice(1).map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StudyBuddy;
