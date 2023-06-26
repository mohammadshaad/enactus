import React, { useState } from "react";
import { auth, db } from "../Config/Config";
import { Link } from "react-router-dom";
import LoginImg from "../images/login.png";

export const Signup = (props) => {
  // defining state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // signup
  const signup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("SignedUpUsersData")
          .doc(cred.user.uid)
          .set({
            Name: name,
            Email: email,
            Password: password,
          })
          .then(() => {
            setName("");
            setEmail("");
            setPassword("");
            setError("");
            props.history.push("/login");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-fields">
          <div className="login-titles">
            <h2 className="login-heading">Sign up</h2>
            <h5 className="login-sub-heading">Create an account to get started!</h5>
          </div>
          <form autoComplete="off" className="login-form" onSubmit={signup}>
            {/* <label htmlFor="name">Name</label> */}
            <input
              type="text"
              className="email-input"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your name"
            />
            <br />
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
            {/* <label htmlFor="passowrd">Password</label> */}
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
              SUBMIT
            </button>
          </form>
          {error && <span className="error-msg">{error}</span>}
          <br />
          <span className="register-here-title">
            Already have an account? Login
            <Link to="login" className="register-here"> Here</Link>
          </span>
        </div>
        <div className="login-image">
          <img src={LoginImg} alt="" border="0" className="" />
        </div>
      </div>
    </div>
  );
};
