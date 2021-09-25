import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import useForm from "./../../hooks/useForm";
import {
  startLoginByEmailPassword,
  startLoginByGoogleAccount,
} from "./../../actions/auth";

function LoginScreen() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.ui);

  const [stateValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = stateValues;

  const handleSubmit = (e) => {
    e.prevetDefault();
    dispatch(startLoginByEmailPassword(email, password));
  };

  const handleGoogleLogin = (e) => {
    e.prevetDefault();
    dispatch(startLoginByGoogleAccount());
  };

  return (
    <div>
      <h2 className="auth__title mb-5">Login</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input mb-5"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="passsword"
          className="auth__input mb-5"
          value={password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary btn-block mt-5"
          disabled={loading}
        >
          Login
        </button>

        <div className="google-btn" onClick={handleGoogleLogin}>
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>
        <Link to="/auth/register" className="link">
          create new account
        </Link>
      </form>
    </div>
  );
}

export default LoginScreen;
