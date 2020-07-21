import React from "react";
import netflixClone from "../../../assets/projects/netflix-clone.png";
import * as c from "../constants";

const AndrewKil = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="https://netflix-clone-b63c3.web.app/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={netflixClone} alt="Netflix clone" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>Netflix Clone</h4>
        </div>
        <div className="project-links">
          <a
            href="https://netflix-clone-b63c3.web.app/"
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <a
            href="https://github.com/Andrew-Kil/netflix-clone"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
        <div className="project-description">
          <p>
            Netflix clone created using React, Firebase, and The Movie Database
            API. Click on a movie to play a trailer (if a trailer is available).
            The app will first look for an official trailer, then look for a
            trailer, and if there are no trailers available then it will play
            the first video that is provided by The Movie Database API. Some
            movies do not have any videos that are provided so the YouTube
            component will not show up. Currently working on adding additional
            features and functionality including displaying details about the
            movie.
          </p>
        </div>
        <p className="project-tech">Tech:</p>
        <ul className="tech-tags">
          {c.projectTags.netflixClone.slice(1).map((tag, idx) => (
            <li key={idx}>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default AndrewKil;
