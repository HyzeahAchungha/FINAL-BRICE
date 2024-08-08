const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const bodyParser =require ('body-parser');
const cors =require('cors');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
})
);

const server = http.createServer(app);



const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});


const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'brice',
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.post('/student/students-department', (req, res) => {
  const sql = 'SELECT * FROM student_info WHERE department=?';
  const dep_id = req.body.departmentID;
  con.query(sql, [dep_id], (err, results) => {
    if (err) return res.status(400).json({ message: 'Query failed to be executed' });
    return res.status(200).json([...results]);
  });
});

app.post('/student/students-chats', (req, res) => {
  const sql = 'SELECT * FROM messages WHERE department_id=?';
  const dep_id = req.body.departmentID;
  con.query(sql, [dep_id], (err, results) => {
    if (err) return res.status(400).json({ message: 'Query failed to be executed' });
    return res.status(200).json([...results]);
  });
});

// WebSocket connection
io.on('connection', (socket) => {
  console.log('New client connected');

  // Listen for new messages
  socket.on('send-message', (message) => {
    const { student_id, department_id, message: msg, hour } = message;
    const sql = 'INSERT INTO messages (student_id, department_id, message, hour) VALUES (?, ?, ?, ?)';
    con.query(sql, [student_id, department_id, msg, hour], (err, results) => {
      if (err) {
        console.log('Error inserting message:', err);
      } else {
        io.emit('receive-message', { id: results.insertId, student_id, department_id, message: msg, hour }); // Emit the new message to all clients
      }
    });
  });

  // Handle client disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});



server.listen(8000, () => {
  console.log('Server is running on port 8000');
});