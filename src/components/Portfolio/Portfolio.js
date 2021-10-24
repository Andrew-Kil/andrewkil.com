import React, { useState } from "react";
import ButtonTags from "./ButtonTags";
import * as c from "./constants";
import AndrewKil from "./Projects/AndrewKil";
import SaveAPlate from "./Projects/SaveAPlate";
import NetflixClone from "./Projects/NetflixClone";
import BlahBlahBlog from "./Projects/BlahBlahBlog";
import SleepApp from "./Projects/SleepApp";
import RecipePals from "./Projects/RecipePals";
import ScareTheCrow from "./Projects/ScareTheCrow";
import Covid19Tracker from "./Projects/Covid19Tracker";
import ConnectFour from "./Projects/ConnectFour";
import Blackjack from "./Projects/Blackjack";
import "./Portfolio.css";

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState(c.SHOW_ALL);

  const handleClick = (e) => setSelectedTag(e.target.value);

  const calculateNumberOfProjects = () => {
    return Object.entries(c.projectTags).reduce((acc, cur) => {
      return cur[1].includes(selectedTag) ? (acc += 1) : acc;
    }, 0);
  };

  return (
    <div id="portfolio" className="component-container">
      <div className="portfolio-container">
        <h3>Portfolio</h3>

        <div className="github-chart">
          <a
            href="https://github.com/Andrew-Kil"
            target="_blank"
            rel="noopener noreferrer">
            <img
              src="http://ghchart.rshah.org/03045e/andrew-kil"
              alt="Github chart - Andrew Kil"
            />
          </a>
        </div>

        <p className="github-char-text">
          <i>An overview of my GitHub contributions.</i>
        </p>

        <div className="tags">
          <ButtonTags handleClick={handleClick} selectedTag={selectedTag} />
        </div>

        <h5 className="filter-projects-text">
          {selectedTag === c.SHOW_ALL
            ? "Showing all projects. Use the filter to list them by skill/technology."
            : `Showing ${calculateNumberOfProjects()} out of ${
                Object.keys(c.projectTags).length
              } projects filtered by: 
          ${selectedTag}.`}
        </h5>

        <div className="projects-container">
          {c.projectTags.andrewKil.includes(selectedTag) && <AndrewKil />}
          {c.projectTags.saveAPlate.includes(selectedTag) && <SaveAPlate />}
          {c.projectTags.connectFour.includes(selectedTag) && <ConnectFour />}
          {c.projectTags.netflixClone.includes(selectedTag) && <NetflixClone />}
          {c.projectTags.blahBlahBlog.includes(selectedTag) && <BlahBlahBlog />}
          {c.projectTags.sleepApp.includes(selectedTag) && <SleepApp />}
          {c.projectTags.scareTheCrow.includes(selectedTag) && <ScareTheCrow />}
          {c.projectTags.recipePals.includes(selectedTag) && <RecipePals />}
          {c.projectTags.covid19Tracker.includes(selectedTag) && (
            <Covid19Tracker />
          )}
          {c.projectTags.blackjack.includes(selectedTag) && <Blackjack />}
        </div>
      </div>
    </div>
  );
};

export default Projects;
