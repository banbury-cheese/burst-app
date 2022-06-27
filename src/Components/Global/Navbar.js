import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/SVGs/burst_logo.svg";

const Navigation = () => {
  return (
    <div className="header_header">
      <Link className="header_logo" to="/">
        <Logo/>
      </Link>
      <nav className="header_navigation">
        <ul className="navigation_navigation__container">
          <li className="navigation_navigation__item">
            <Link to="/about">About</Link>
          </li>
          <li className="navigation_navigation__item">
            <Link to="/learn">Learn</Link>
          </li>
          <li className="navigation_navigation__item">
            <Link to="/faq">FAQ</Link>
          </li>
          <li className="navigation_navigation__item">
            <Link to="/careers">Careers</Link>
          </li>
        </ul>
      </nav>
      <div className="header_actions">
        <button className="button_button">Get Early Access</button>
      </div>
    </div>
  );
};

export default Navigation;
