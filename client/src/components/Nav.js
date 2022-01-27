import React from "react";
import logo from "../assets/Adventure.svg";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
          <NavLink to="/" exact>
        <i className="navbar-brand">
          <img src={logo} height="50" alt="CoolBrand" />
        </i>
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
              <p className="nav-item nav-link text-lightgreen">
                CONTRIBUTORS
              </p>
            </NavLink>
            <NavLink to="/about" exact>
            <p href="#" className="nav-item nav-link text-lightgreen">
              ABOUT
            </p>
            </NavLink>
            <NavLink to="/new-comment" exact>
            <p className="nav-item nav-link text-lightgreen">
              CREATE NEW COMMENT
            </p>
            </NavLink>
          </div>
          <div>
          <NavLink to="/new-post" exact>
            <p className="nav-item nav-link text-lightgreen">
              CREATE NEW POST
            </p>
            </NavLink>
          </div>
          <div className="navbar-nav ms-auto">
              <NavLink to="/login" exact>
            <p className="nav-item nav-link text-lightgreen">
              LOGIN
            </p>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
