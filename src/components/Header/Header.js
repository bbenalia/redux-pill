import React from "react";
import { Link } from "react-router-dom";

import { HOME, DASHBOARD } from "../../constants/routes";

import "./Header.scss";

export default function Header() {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={HOME}>
            Redux Project
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={HOME}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={DASHBOARD}>
                  Dashboard
                </Link>
              </li>
            </ul>

            <form className="d-flex ms-5">
              <button
                className="btn btn-outline-dark rounded-pill px-3"
                type="submit"
              >
                Login
              </button>
              <button
                className="btn btn-warning ms-3 rounded-pill px-3"
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}
