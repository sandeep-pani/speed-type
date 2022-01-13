import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

function navBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Speed Type
          </Link>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/learn" className="nav-links">
                Learn
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/careers" className="nav-links">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-links">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default navBar;
