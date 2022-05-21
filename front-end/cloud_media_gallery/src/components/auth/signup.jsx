import React, { Component, useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import ButtonDark from "../UI/ButtonDark";

const SignUp = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const SignUpHandler = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const firstname = firstnameRef.current.value;
    const lastname = lastnameRef.current.value;
    const email = emailRef.current.value;

    dispatch(
      authActions.login({
        token: username,
        userName: username,
        fullName:
          firstname[0].toUpperCase() +
          firstname.slice(1) +
          " " +
          lastname[0].toUpperCase() +
          lastname.slice(1),
        email: email,
      })
    );

    navigate("/", { replace: true });
  };
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <form className="w-25" onSubmit={SignUpHandler}>
        <h3 className="mb-4">Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            ref={firstnameRef}
            type="text"
            className="form-control"
            placeholder="First name"
            required
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            ref={lastnameRef}
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
            ref={emailRef}
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
        <div className="d-flex justify-content-between">
          <ButtonDark type="submit">Sign Up</ButtonDark>
          <ButtonDark
            onClick={() => {
              navigate("/login", { replace: true });
            }}
          >
            Log In
          </ButtonDark>
        </div>
      </form>
    </section>
  );
};
export default SignUp;
