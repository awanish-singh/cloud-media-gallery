import React, { Component, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/auth-slice";

import ButtonDark from "../UI/ButtonDark";
import useHttp from "../../hooks/http-hook";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { data, sendRequest, cleanUp } = useHttp();

  const dispatch = useDispatch();

  useEffect(() => {
    return cleanUp;
  }, [cleanUp]);

  const loginHandler = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const requestBody = {
      username,
      password,
    };

    sendRequest(
      "http://localhost:8082/users-microservice/users/",
      "POST",
      requestBody
    );

    if (data) {
      dispatch(
        authActions.login({
          token: data.token,
          userName: data.userName,
          fullName: data.fullName,
          email: data.email,
        })
      );

      navigate("/", { replace: true });
    }
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
