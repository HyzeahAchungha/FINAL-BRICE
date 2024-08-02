import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export const EditStudents = () => {
  const [students, setStudents] = useState({
    name: "",
    email: "",
    department: "",
    address: "",
    category_id: "",
  });
  const [category, setCategory] = useState([]);
const navigation=useNavigate()
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

    axios
      .get("http://localhost:5000/auth/students/" + id)
      .then((result) => {
        setStudents({
          ...students,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          address: result.data.Result[0].address,
          department: result.data.Result[0].department,
          category_id: result.data.Result[0].category_id
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const { id } = useParams();

  const handelSubmit = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:5000/auth/edit_students/'+id, students)
      .then((result) => {
       if (result.data.Status) {
        navigation('/dashboard/students')
        
       }else{
        alert(result.data.Error)
       }
      })
      .catch((err) => console.log());
  };
  return (
    <div className=" d-flex justify-content-center align-items-center mt-3 ">
      <div className="p-3 rounded w-50 border ">
        <h2 className="text-center">Edit Students</h2>
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
              value={students.name}
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
              value={students.email}
              onChange={(e) =>
                setStudents({ ...students, email: e.target.value })
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
              value={students.department}
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
              value={students.address}
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

          <div className="col-12">
            <button className="btn btn-success w-100 rounded-0">
              Edit Students
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
