import React from "react";
import blahBlahBlog from "../../../assets/projects/blah-blah-blog.png";
import * as c from "../constants";

const AndrewKil = () => {
  return (
    <section className="project">
      <div className="project-container">
        <div className="project-image">
          <a
            href="https://blah-blah-blog.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            <div className="image-container">
              <img src={blahBlahBlog} alt="BlahBlahBlog personal blog" />
              <div className="middle">
                <div className="middle-text">View</div>
              </div>
            </div>
          </a>
        </div>
        <div className="project-title">
          <h4>Blah Blah Blog</h4>
        </div>
        <div className="project-links">
          <a
            href="https://blah-blah-blog.netlify.app/"
            target="_blank"
            rel="noopener noreferrer">
            Demo
          </a>
          <a
            href="https://github.com/Andrew-Kil/blah-blah-blog"
            target="_blank"
            rel="noopener noreferrer">
            Code
          </a>
        </div>
        <div className="project-description">
          <p>
            Blah Blah Blog is my personal blog for any topic related to coding
            and web development. It was created using Gatsby. Since the blog is
            brand new, there are only 2 blog posts at the moment but there are
            many more blog posts in the works. Some of the features that I am
            considering adding include support for dark/light mode toggle and an
            option to sign-up for a mailing list.
          </p>
        </div>
        <p className="project-tech">Tech:</p>
        <ul className="tech-tags">
          {c.projectTags.blahBlahBlog.slice(1).map((tag) => (
            <li>{tag}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default AndrewKil;
