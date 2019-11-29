import React from "react";

import {Link as NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light sticky-nav custom-nav`}
    >
      <div className="container">
        <NavLink to="/" className="navbar-brand js-scroll-trigger">
          {/* <img src={logo} width="50px" alt="appLog" />
          Doggies */}
          NombreGenerico
        </NavLink>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto my-2 my-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link js-scroll-trigger">
                <FontAwesomeIcon icon="home" size="2x" /> Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/game" className="nav-link js-scroll-trigger">
                <FontAwesomeIcon icon="gamepad" size="2x" /> ¡Jugar!
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
