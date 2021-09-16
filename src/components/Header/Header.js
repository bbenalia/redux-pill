import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import { HOME, DASHBOARD, LOGIN } from "../../constants/routes";
import { logout } from "../../redux/auth/actions";

import "./Header.scss";

export default function Header() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={HOME}>
            Redux Project
          </NavLink>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to={HOME}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to={DASHBOARD}
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>

            <form className="d-flex ms-5">
              <Link
                to={LOGIN}
                className="btn btn-outline-dark rounded-pill px-3"
              >
                Login
              </Link>
              <button
                className="btn btn-warning ms-3 rounded-pill px-3"
                type="submit"
                onClick={handleLogOut}
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
