import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav(props) {
  return (
    <div className="Nav">
      <nav className="navbar navbar-expand-md fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" exact to="/">
            Oracle
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i class="fas fa-bars"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <div className="navbar-nav">
              <NavLink
                activeClassName="Nav-active "
                className="nav-item nav-link px-5"
                exact
                to="/"
              >
                Tarot
              </NavLink>
              <NavLink
                activeClassName="Nav-active "
                className="nav-item nav-link px-5"
                exact
                to="/about"
              >
                Runes
              </NavLink>
              <NavLink
                activeClassName="Nav-active"
                className="nav-item nav-link px-5"
                exact
                to="/portfolio"
              >
                Random
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
