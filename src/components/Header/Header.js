import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useHistory } from "react-router-dom";

import { HOME, DASHBOARD, LOGIN, SIGN_UP } from "../../constants/routes";
import { logout } from "../../redux/auth/actions";

import "./Header.scss";

export default function Header() {
  const { isAuthenticated } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogOut = () => {
    dispatch(logout());
  };

  const handleSignUp = () => {
    history.push(SIGN_UP);
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

            <div className="d-flex ms-5">
              <Link
                to={LOGIN}
                className="btn btn-outline-dark rounded-pill px-3"
              >
                Login
              </Link>
              {isAuthenticated ? (
                <button
                  className="btn btn-warning ms-3 rounded-pill px-3"
                  type="submit"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="btn btn-warning ms-3 rounded-pill px-3"
                  type="submit"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
