import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Students = () => {
  const navigation=useNavigate
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/students")
      .then(result => {
        if (result.data.Status) {
          setStudents(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

const handelDelete=(id)=>{
  axios
  .delete("http://localhost:5000/auth/delete_students/"+id)  
  .then(result => {
    if (result.data.Status) {
      window.location.reload()
    } else {
      alert(result.data.Error);
    }
  })
  .catch((err) => console.log(err));

}

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Students list</h3>
      </div>
      <Link to={"/dashboard/add_students"} className="btn btn-success">
        Add Students
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Address</th>
              <th>Department</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s=>(
              <tr>
                <td>{s.name}</td>
                <td><img src={`http://localhost:5000/Images/`+s.image} className='students_image' /></td>
                <td>{s.email}</td>
                <td>{s.address}</td>
                <td>{s.department}</td>

                <td>
                  <Link to={`/dashboard/edit_students/`+s.id} className='btn btn-info btn-sm me-2'>Edit</Link>
                  <button className='btn btn-warning btn-sm' onClick={()=>handelDelete(s.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    
  )
}

export default Students;
