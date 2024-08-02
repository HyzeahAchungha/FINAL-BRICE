import React, { useEffect, useRef, useState } from "react";
import "./chat.css";
import pic from "./../../assets/profile3.jpeg";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function Chat() {
  const [allStudents, setAllStudents] = useState([]);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const messageRef = useRef(null);
  const searchParam = useSearchParams()[0];
  const depID = searchParam.get("depart_id");
  const studentID = searchParam.get("u_id");
  const getAllStudentsDepart = async () => {
    try {
      const students = await axios({
        method: "post",
        url: "http://localhost:5000/student/students-department",
        data: { departmentID: depID },
      });
      setAllStudents(students.data);
    } catch (err) {
      console.log(err);
    }
  };

  function scrollToBottom() {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  const getAllChats = async () => {
    try {
      const chats = await axios({
        method: "post",
        url: "http://localhost:5000/student/students-chats",
        data: { departmentID: depID },
      });
      setMessages(chats.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const chat = {
        student_id: studentID,
        department_id: depID,
        message: text,
        hour: Date.now(),
      };
      await axios({
        method: "POST",
        url: "http://localhost:5000/student/send-message",
        data: chat,
      });
      getAllChats();
      setText("");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllStudentsDepart();
    getAllChats();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, []);
  useEffect(() => {
    scrollToBottom();
  }, [messages.length]);
  return (
    <div>
      <header className="header">
        <h1>HIBMAT UNIVERSITY INSTITUTE OF BUEA</h1>
      </header>
      <div className="body">
        <div className="chats">
          {allStudents.length > 0 &&
            allStudents.map((student) => (
              <div className="contact" key={student.id}>
                <img src={pic} alt="Profile Picture" className="profile-pic" />
                <span className="names">{student.name}</span>
              </div>
            ))}
        </div>
        <div className="message">
          <div className="message-box">
            {messages.length > 0 &&
              messages.map((message) => {
                let student = allStudents.filter(
                  (stud) => stud.id === message.student_id
                );
                return (
                  <div
                    className={`tweet ${
                      student[0].id === Number(studentID) ? "me" : "not-me"
                    }`}
                    key={message.id}
                  >
                    <div className="name">{student[0].name}</div>
                    <div className="text">{message.message}</div>
                    <div className="time">
                      {new Date(message.hour).toDateString()}
                    </div>
                  </div>
                );
              })}
            <div ref={messageRef}></div>
          </div>
          <div className="form">
            <form action="" className="form" onSubmit={handleSendMessage}>
              <input
                type="text"
                name="message"
                id="message"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button className="btn btn-chat" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
