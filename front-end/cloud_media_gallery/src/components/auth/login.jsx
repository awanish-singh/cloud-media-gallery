import React, { Component, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";
import { httpStateActions } from "../../store/httpState-slice";
import { removeNotification } from "../../store/notification-actions";
import { notificationActions } from "../../store/notification-slice";

import ButtonDark from "../UI/ButtonDark";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    dispatch(httpStateActions.send());

    dispatch(
      notificationActions.add({
        title: "Logging",
        description: "Logging you in...",
        type: "NORMAL",
      })
    );

    dispatch(removeNotification());

    setTimeout(() => {
      dispatch(
        authActions.login({
          sessionId: username,
          userName: username,
          fullName: username,
          email: `${username}@gmail.com`,
        })
      );

      dispatch(httpStateActions.response());

      dispatch(
        notificationActions.add({
          title: "Logged In",
          description: "You are logged in...",
          type: "NORMAL",
        })
      );

      dispatch(removeNotification());

      navigate("/", { replace: true });
    }, 2000);
  };
  return (
    <section style={{ display: "flex", justifyContent: "center" }}>
      <form className="w-25" onSubmit={loginHandler}>
        <h3 className="mb-4">Log In</h3>
        <div className="mb-3">
          <label>Username</label>
          <input
            ref={usernameRef}
            type="text"
            className="form-control"
            placeholder="Enter username"
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
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <ButtonDark type="submit">Log In</ButtonDark>
          <ButtonDark
            onClick={() => {
              navigate("/signup", { replace: true });
            }}
          >
            Sign Up
          </ButtonDark>
        </div>
      </form>
    </section>
  );
};
export default Login;
