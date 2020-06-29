import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { ThemeContext } from "./contexts/ThemeContext";

export default function Nav(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="Nav">
      <nav
        className={
          isDarkMode
            ? "navbar navbar-expand-md dark fixed-top"
            : "navbar navbar-expand-md light fixed-top"
        }
      >
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
              <i className="fas fa-bars"></i>
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
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            onChange={toggleTheme}
            className="custom-control-input"
            id="customSwitch1"
          />
          <label className="custom-control-label pr-3" htmlFor="customSwitch1">
            Invert Colors
          </label>
        </div>
      </nav>
    </div>
  );
}
