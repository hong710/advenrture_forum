import React from "react";
import logo from "../assets/Adventure.svg";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
          <NavLink to="/" exact>
        <a href="#" className="navbar-brand">
          <img src={logo} height="50" alt="CoolBrand" />
        </a>
        </NavLink>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
            <NavLink to="/contributors" exact>
              <a href="#" className="nav-item nav-link text-lightgreen">
                CONTRIBUTORS
              </a>
            </NavLink>
            <NavLink to="/about" exact>
            <a href="#" className="nav-item nav-link text-lightgreen">
              ABOUT
            </a>
            </NavLink>
            <NavLink to="/new-comment" exact>
            <a href="#" className="nav-item nav-link text-lightgreen">
              CREATE NEW COMMENT
            </a>
            </NavLink>
          </div>
          <div>
          <NavLink to="/new-post" exact>
            <a href="#" className="nav-item nav-link text-lightgreen">
              CREATE NEW POST
            </a>
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto">
              <NavLink to="/login" exact>
            <a href="#" className="nav-item nav-link text-lightgreen">
              LOGIN
            </a>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
