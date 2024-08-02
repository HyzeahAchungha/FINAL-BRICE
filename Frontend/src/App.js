import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/login";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import NewsWeek from "./component/NewsWeek";
import Category from "./component/Category";
import Students from "./component/Students";
import Chats from "./component/Chats";
import Profile from "./component/Profile";
import Readmore from "./component/readmore";
import { AddCatergory } from "./component/AddCatergory";
import { AddStudents } from "./component/AddStudents";
import { EditStudents } from "./component/EditStudents";
import StudentLogin from "./component/studentsApp/Login";
import StudentSignup from "./component/studentsApp/Signup";
import Chat from "./component/studentsApp/Chat";
import Start from "./component/Start";
import StudentsDashboard from "./component/studentsApp/StudentsDashboard";


function App() {


  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/adminlogin" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="" element={<Home />} />
                    <Route path="students" element={<Students />} />
                    <Route path="add_students" element={<AddStudents />} />
                    <Route path="chat" element={<Chats />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="add_category" element={<AddCatergory />} />
                    <Route path="edit_students/:id" element={<EditStudents />} />
                    <Route path="newsweek" element={<NewsWeek />} />
                    <Route path="category" element={<Category />} />
                    <Route path="readmore" element={<Readmore />} />
                </Route>
                <Route path="/students/login" element={<StudentLogin />} />
                <Route path="/students/signup" element={<StudentSignup />} />
                <Route path="/students_dashboard" element={<StudentsDashboard />}>
                    <Route path="students/chat" element={<Chat />} />
                    <Route path="newsweek" element={<NewsWeek />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
