import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AddStudents = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState({
    name: "",
    email: "",
    department: "",
    password: "",
    address: "",
    category_id: "",
    image: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", students.name);
    formData.append("email", students.email);
    formData.append("password", students.password);
    formData.append("address", students.address);
    formData.append("department", students.department);
    formData.append("image", students.image);
    formData.append("category_id", students.category_id);

    axios
      .post("http://localhost:5000/auth/add_students", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/students");
        } else {
          alert(result.data.Error);
        }
      })

      .catch((err) => console.log(err));
  };

  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" d-flex justify-content-center align-items-center mt-3 ">
      <div className="p-3 rounded w-50 border ">
        <h2 className="text-center">Add Students</h2>
        <form className="row g-1" onSubmit={handelSubmit}>
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="inputName"
              placeholder="Enter Name"
              className="form-control rounded-0"
              onChange={(e) =>
                setStudents({ ...students, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="inputEmail"
              placeholder="Enter Email"
              className="form-control rounded-0"
              onChange={(e) =>
                setStudents({ ...students, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="text"
              id="inputPaasword"
              placeholder="Enter Password"
              className="form-control rounded-0"
              onChange={(e) =>
                setStudents({ ...students, password: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <input
              type="text"
              id="inputDepartment"
              placeholder="Enter Department"
              className="form-control rounded-0"
              onChange={(e) =>
                setStudents({ ...students, department: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="inputAddress"
              placeholder="Enter Address"
              autoComplete="off"
              className="form-control rounded-0"
              onChange={(e) =>
                setStudents({ ...students, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              onChange={(e) =>
                setStudents({ ...students, category_id: e.target.value })
              }
            >
              {category.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label" htmlFor="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              id="inputGroupFile01"
              name="image"
              className="form-control rounded-0"
              onChange={(e) =>
                setStudents({ ...students, image: e.target.files[0] })
              }
            />
          </div>
          <div className="col-12">
            <button className="btn btn-success w-100 rounded-0">
              Add Students
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
