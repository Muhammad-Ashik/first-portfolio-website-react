import React from "react";

import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBarLink({ link, to, a_icon, href, type }) {
  return (
    <div>
      <li className="nav-item py-0 ">
        {type === "link" ? (
          <Link
            activeClass="active"
            offset={-70}
            spy={true}
            smooth={true}
            duration={1000}
            className="nav-link icon"
            to={to}
          >
            {link}
          </Link>
        ) : (
          <a
            className="nav-link icon"
            target="_blank"
            rel="noopener noreferrer"
            href={href}
          >
            <FontAwesomeIcon icon={a_icon} />
          </a>
        )}
      </li>
    </div>
  );
}
