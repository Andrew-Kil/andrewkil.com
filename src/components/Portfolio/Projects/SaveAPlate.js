import React from "react";
import saveAPlate from "../../../assets/projects/save-a-plate.png";
import * as c from "../constants";

const SaveAPlate = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="http://save-a-plate.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={saveAPlate} alt="Save a Plate" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>Save a Plate</h4>
        </div>
        <div className="project-links">
          <a
            href="http://save-a-plate.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <a
            href="https://github.com/Andrew-Kil/SaveAPlate"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
        <div className="project-description">
          <p>
            A full stack web application designed to reduce food waste and
            hunger in New York City. Created during my time at Pursuit.
            Collaborated with 3 other developers and presented the app at the
            Museum of Moving Image. Users can sign up as either vendors or
            clients. Vendors have the ability to donate food items while clients
            can claim food items and add their favorite vendors.
          </p>
          <p className="project-tech">Tech:</p>
          <ul className="tech-tags">
            {c.projectTags.saveAPlate.slice(1).map((tag) => (
              <li>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SaveAPlate;
