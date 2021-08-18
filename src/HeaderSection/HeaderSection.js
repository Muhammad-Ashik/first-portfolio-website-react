import React from "react";
import "./header.css";
import { Link } from "react-scroll";

function HeaderSection() {
  return (
    <div>
      <div className="cover" id="home">
        <div className="header">
          <div className="header-text">
            <h1>Hi, I'm Wisedesigner!</h1>
            <h5>Scroll down to see my portfolio</h5>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              duration={1000}
              to="portfolio"
              className="masthead-arrow-container"
            >
              <div className="masthead-arrow"></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
