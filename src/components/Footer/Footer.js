import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <footer>
        &copy; {new Date().getFullYear()} - Made with{" "}
        <span className="heart">&hearts;</span> by{" "}
        <a
          href="https://github.com/Andrew-Kil"
          target="_blank"
          rel="noopener noreferrer">
          Andrew Kil
        </a>
      </footer>
    </div>
  );
};

export default Footer;
