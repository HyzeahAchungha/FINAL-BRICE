import React,{useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Brice from "../component/IMAGES/Brice.svg";
const Start = () => {
  const navigate=useNavigate()
  useEffect(()=>{
  axios.get('http://localhost:5000/verify')
  .then(result=>{
    if (result.data.Status) {
      if (result.data.role) {
        navigate('/dashboard')
      }else{
        navigate('/students/chat')
      }
    }
  
  }).catch(err =>console.log(err))
  },[])

  return (
    <div className=" d-flex justify-content-center align-items-center vh-100 loginpage">
      <div className="m-5">
        <img src={Brice} alt="hero" />
      </div>
      <div className="p-3 rounded w-25 border loginForm">
        <h2 className="text-center">Login As</h2>
        <div className="d-flex justify-content-between mt-5 mb-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              navigate("/students/signup");
            }}
          >
            Students
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              navigate("/adminlogin");
            }}
          >
            Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
