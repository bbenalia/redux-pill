import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import withLayout from "../../hoc/withLayout";
import { createUser } from "../../redux/auth/actions";

import "./SignUp.scss";

function SignUp() {
  const { status, isAuthenticated } = useSelector((state) => state.users);
  const [isValid, setIsValid] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.confirmPassword.value) {
      setIsValid(false);
    } else {
      setIsValid(true);
      dispatch(
        createUser(
          e.target.name.value,
          e.target.email.value,
          e.target.password.value,
          e.target.confirmPassword.value,
        ),
      );
    }
  };

  useEffect(() => {
    if (status === "ok" && isAuthenticated) history.push("/dashboard");
  }, [status, isAuthenticated, history]);

  return (
    <>
      <main className="d-flex justify-content-center align-items-center flex-column container">
        <h4>Sign Up</h4>
        {status === "error" && (
          <h5 className="text-danger">That email already exists</h5>
        )}
        {!isValid && <h5 className="text-danger">Passwords must match</h5>}
        <form onSubmit={handleSubmit} className="w-100 p-5 form-custom">
          <input
            type="text"
            className="mb-3 p-2 border border-2 rounded-pill form-control"
            placeholder="Name..."
            name="name"
          />
          <input
            type="text"
            className="mb-3 p-2 border border-2 rounded-pill form-control"
            placeholder="Email..."
            name="email"
          />
          <input
            type="password"
            className="mb-3 p-2 border border-2 rounded-pill form-control"
            placeholder="Password..."
            name="password"
          />
          <input
            type="password"
            className="mb-3 p-2 border border-2 rounded-pill form-control"
            placeholder="Confirm Password..."
            name="confirmPassword"
          />
          <button
            type="submit"
            className="btn btn-warning border border-2 rounded-pill"
          >
            Sign Up
          </button>
        </form>
      </main>
    </>
  );
}

export default withLayout(SignUp);
