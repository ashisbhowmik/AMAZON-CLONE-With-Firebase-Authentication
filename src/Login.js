import React, { useState } from "react";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)

      .then((auth) => {
        history.push("/");
        setEmail("");
        setPassword("");
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        setPassword("");
        setEmail("");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <>
      <div className="login">
        <Link to="/">
          <img
            className="login__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="image not found"
          />
        </Link>
        <div className="login__container">
          <h1>Sign in</h1>
          <form action="#">
            <h5>Email</h5>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={login} className="signin__botton">
              Sign In
            </button>
          </form>
          <p>
            By continuing, you agree to Amazon's <a href="#">Terms </a>
            and <a href="#">Conditions</a> and also
            <a href="#"> Privacy</a> Policy
          </p>
          <button type="submit" onClick={register} className="register__botton">
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
