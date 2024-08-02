import React, { useState } from "react";
import Brice from "../component/IMAGES/Brice.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentsLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/students/students_login", values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/dashboard");
        } else {
          setError(result.data.error);
        }
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className=" d-flex justify-content-center align-items-center vh-100 loginpage">
      <div className="m-5">
        <img src={Brice} alt="hero" />
      </div>
      <div className="p-3 rounded w-25 border loginForm">
        <div className="text-warning">{error && error}</div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              className="form-control rounded-0"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="Password"
              autoComplete="off"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button className="btn btn-success w-100 rounded-0">Log in</button>
          <div className="mb-3">
            <input type="checkbox" name="tick" id="tick" />
            <label htmlFor="email">
              You agree with the terms and conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentsLogin;
