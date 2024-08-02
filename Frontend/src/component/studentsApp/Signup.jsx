import React, { useRef, useState } from "react";
import Brice from "../../component/IMAGES/Brice.svg";
import "./../style.css";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

const StudentSignup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
  });
  const department = useRef();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values, department.current.value);
    const data = { ...values, department: department.current.value };
    axios
      .post("http://localhost:5000/student/signup", data, {
        withCredentials: true,
      })
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/students/login");
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
        <h2>Signup Page</h2>
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
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Enter Name"
              className="form-control rounded-0"
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Department</strong>
            </label>
            <select className="form-control rounded-0" ref={department}>
              <option value="1">Software Engineering</option>
              <option value="2">Civil Engineering Technology</option>
              <option value="3">Mechanical Engineering</option>
              <option value="4">Graphics and Web Design</option>
              <option value="5">Business Administration</option>
              <option value="6">Accounting and Marketing</option>
            </select>
          </div>
          <button className="btn btn-success w-100 rounded-0">Signup</button>
          <div className="mb-3">
            <input type="checkbox" name="tick" id="tick" />
            <label htmlFor="email">
              You agree with the terms and conditions
            </label>
          </div>
          <div className="mb-3">
            <span>Already have an account? </span>
            <Link
              to="/students/login"
              className="formSignup link"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Login HERE
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

export default StudentSignup;
