import React from "react";
import recipePals from "../../../assets/projects/recipe-pals.png";
import * as c from "../constants";

const RecipePals = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="http://recipepals.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={recipePals} alt="Recipe Pals" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>Recipe Pals</h4>
        </div>
        <div className="project-links">
          <a
            href="http://recipepals.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <div>N/A</div>
        </div>
        <div className="project-description">
          <p>
            Recipe Pals is a platform for users to share recipes with their
            network and the rest of the Recipe Pals community. Start by signing
            up or logging in. To submit a recipe, add recipe information, tags,
            ingredients, and directions. Users can leave comments on recipes.
          </p>
          <p className="project-tech">Tech:</p>
          <ul className="tech-tags">
            {c.projectTags.recipePals.slice(1).map((tag, idx) => (
              <li key={idx}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RecipePals;
