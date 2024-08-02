import React, { useState } from "react";
import Brice from "../../component/IMAGES/Brice.svg";
import "./../style.css";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const StudentLogin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/student/login", values, {
        withCredentials: true,
      })
      .then((result) => {
        if (result.data.loginStatus) {
          const studData = result.data.student[0];
          localStorage.setItem("student", JSON.stringify(studData));
          navigate(
            `/students_dashboard/students/chat?depart_id=${studData.department}&u_id=${studData.id}`
          );
        } else {
          console.log(result);
          setError(result.data.error);
        }
      })

      .catch((err) => console.log(err));
  };

  return (
    <div className=" d-flex justify-content-center align-items-center vh-100 loginpage">
      <div className="p-3 rounded w-25 border loginForm">
        <div className="text-danger">{error && error}</div>
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
          <div className="mb-3">
            <span>NEW USER? </span>
            <Link
              to="/students/signup"
              className="formSignup link"
              style={{ textDecoration: "none" }}
            >
              {" "}
              SING UP HERE
            </Link>
          </div>
        </form>
      </div>
      <div className="m-5">
        <img src={Brice} alt="hero" />
      </div>
    </div>
  );
};

export default StudentLogin;
