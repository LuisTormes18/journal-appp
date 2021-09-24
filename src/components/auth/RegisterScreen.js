import React from "react";
import { Link } from "react-router-dom";
import useForm from "./../../hooks/useForm";

function RegisterScreen() {
  const [stateValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = stateValues;
  const handleSubmit = (e) => {
    e.prevetDefault();
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
        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </div>
  );
}

export default RegisterScreen;
