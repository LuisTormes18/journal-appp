import React from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";

import useForm from "./../../hooks/useForm";
import { setError, removeError } from "./../../actions/ui";
import { startRegisterWithEmailPassword } from "../../actions/auth";
function RegisterScreen() {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [stateValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = stateValues;
  const handleSubmit = (e) => {
    e.prevetDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPassword(name, email, password));
    }
  };
  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required!"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email Invalid"));
      return false;
    } else if (password !== password2) {
      dispatch(setError("passowrd no coinciden"));

      return false;
    } else if (password.length <= 5) {
      dispatch(setError("El minimo deb ser 5 caracteres"));
      return false;
    }

    dispatch(removeError());
    return true;
  };
  return (
    <div>
      <h2 className="auth__title mb-5">Register</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input mb-5"
          values={name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input mb-5"
          values={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="passsword"
          className="auth__input mb-5"
          values={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="passsword2"
          className="auth__input mb-5"
          values={password2}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          onClick={handleSubmit}
        >
          Register
        </button>

        {msgError && <span className="alert alert-error">{msgError}</span>}

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </div>
  );
}

export default RegisterScreen;
