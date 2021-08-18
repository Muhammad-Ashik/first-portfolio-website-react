import React from "react";
import "./navbar.css";
import "bootstrap";
import { Link } from "react-scroll";
import {
  faDribbble,
  faBehance,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo-w.png";
import NavBarLink from "./NavBarLink";

function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top py-0 navbar-expand-md navbar-dark navbar-color py-md-0">
        <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
          <ul className="navbar-nav mr-auto">
            <NavBarLink to={"home"} link={"HOME"} type="link" />
            <NavBarLink to={"portfolio"} link={"PORTFOLIO"} type="link" />
            <NavBarLink to={"contact"} link={"CONTACT ME"} type="link" />
          </ul>
        </div>
        <div className="mx-auto order-0">
          <Link
            spy={true}
            smooth={true}
            duration={1000}
            className="navbar-brand mx-auto"
            to="home"
          >
            <img className="image-logo" alt="logo" src={logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-collapse2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <NavBarLink
              type="a"
              href={"https://www.facebook.com/adrian.ahsin"}
              a_icon={faFacebookF}
            />
            <NavBarLink
              type="a"
              href={"https://www.behance.net/mdashikuzzaman"}
              a_icon={faBehance}
            />
            <NavBarLink
              type="a"
              href={"https://dribbble.com/MrWiseDesigner"}
              a_icon={faDribbble}
            />
            <NavBarLink
              type="a"
              href={"mailto:ashik.chowdhury79@gmail.com"}
              a_icon={faEnvelope}
            />
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
