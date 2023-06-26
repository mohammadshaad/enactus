import React, { useState } from "react";
import { auth } from "../Config/Config";
import { Link } from "react-router-dom";
import LoginImg from "../images/login.png";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setError("");
        props.history.push("/");
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-fields">
          <div className="login-titles">
            <h2 className="login-heading">Welcome Back</h2>
            <h5 className="login-sub-heading">Login back to your account</h5>
          </div>
          <form autoComplete="off" className="login-form" onSubmit={login}>
            {/* <label htmlFor="email">Email</label> */}
            <input
              type="email"
              className="email-input"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
            />
            <br />
            {/* <label htmlFor="password">Password</label> */}
            <input
              type="password"
              className="password-input"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            placeholder="Enter your password"
            />
            <br />
            <button type="submit" className="login-btn">
              LOGIN
            </button>
          </form>
          {error && <span className="error-msg">{error}</span>}
          <br />
          <span className="register-here-title">
            Don't have an account? Register
            <Link to="signup" className="register-here"> Here</Link>
          </span>
        </div>
        <div className="login-image">
          <img src={LoginImg} alt="" border="0" className="" />
        </div>
      </div>
    </div>
  );
};
