import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import withLayout from "../../hoc/withLayout";
import { login } from "../../redux/auth/actions";

import "./Login.scss";

function Login() {
  const { status, isAuthenticated } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(e.target.email.value, e.target.password.value));
  };

  useEffect(() => {
    if (status === "ok" && isAuthenticated) history.push("/dashboard");
  }, [status, isAuthenticated, history]);

  return (
    <>
      <main className="d-flex justify-content-center align-items-center flex-column container">
        <h4>Log In</h4>
        {status === "error" && (
          <h5 className="text-danger">wrong email or password</h5>
        )}
        <form onSubmit={handleSubmit} className="w-100 p-5 form-custom">
          <input
            type="text"
            className="mb-3 p-2 border border-2 rounded-pill form-control"
            placeholder="email"
            name="email"
          />
          <input
            type="password"
            className="mb-3 p-2 border border-2 rounded-pill form-control"
            placeholder="password"
            name="password"
          />
          <button
            type="submit"
            className="btn btn-warning border border-2 rounded-pill"
          >
            Log in
          </button>
        </form>
      </main>
    </>
  );
}

export default withLayout(Login);
