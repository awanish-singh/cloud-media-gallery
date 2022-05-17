import React, { Component, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import ButtonDark from "../UI/ButtonDark";

const SignUp = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const SignUpHandler = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    dispatch(
      authActions.login({
        sessionId: username,
        userName: username,
        fullName: username,
        email: `${username}@gmail.com`,
      })
    );

    navigate("/", { replace: true });
  };
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <form className="w-25" onSubmit={SignUpHandler}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            required
          />
        </div>
        <div className="mb-3">
          <label>Username</label>
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            placeholder="Username"
            required
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <div className="d-grid">
          <ButtonDark type="submit">Sign Up</ButtonDark>
        </div>
        <p className="forgot-password text-right">
          Already registered <NavLink to="/login">sign in?</NavLink>
        </p>
      </form>
    </section>
  );
};
export default SignUp;
