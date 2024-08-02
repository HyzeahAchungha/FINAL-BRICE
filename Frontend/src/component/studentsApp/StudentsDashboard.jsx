import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.json";
import "bootstrap-icons/font/bootstrap-icons.css";

const StudentsDashboard = () => {
  const navigation = useNavigate();
  const handelLogout = () => {
    axios
      .get("http://localhost:5000/auth/logout", {
        withCredentials: true,
      })
      .then((result) => {
        if (result.data.Status) {
          navigation("/");
        }
      });
  };
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/students_dashboard"
              className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 fw-bolder d-none d-sm-inline">
                Students Dashboard
              </span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="w-100">
                <Link
                  to="students/chat"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-chat ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Chat</span>
                </Link>
              </li>
              <li className="w-100">
                <Link
                  to="newsweek"
                  className="nav-link px-0 align-middle text-white"
                >
                  <i className="fs-4 bi-book ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">News Week</span>
                </Link>
              </li>
              <li className="w-100" onClick={handelLogout}>
                <Link className="nav-link px-0 align-middle text-white">
                  <i className="fs-4 bi-power ms-2"></i>
                  <span className="ms-2 d-none d-sm-inline">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Student Communication System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudentsDashboard;
