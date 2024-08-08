import express from 'express';
import con from '../utils/db.js';
import jwt from 'jsonwebtoken';
const router = express.Router();

router.post('/signup', function (req, res) {
	const data = [
		req.body.name,
		req.body.email,
		req.body.password,
		req.body.department,
	];
	const sql =
		'INSERT INTO student_info(name, email, password, department) VALUES (?, ?, ?, ?)';
	con.query(sql, data, function (err, result) {
		if (err) return res.status(400).json({ message: err.message });
		const token = jwt.sign(
			{ role: 'student', email: req.body.email},
			'jwt_secret_key',
			{
				expiresIn: '1d',
			}
		);

		
		res.cookie('token', token);
		res
			.status(200)
			.json({ message: 'Student registered successfully', loginStatus: true });
	});
});

router.post('/login', (req, res) => {
	const sql = 'SELECT * FROM student_info where email=? and password=?';
	con.query(sql, [req.body.email, req.body.password], (err, result) => {
		if (err) return res.json({ loginStatus: false, Error: 'Querry failed' });
		if (result.length > 0) {
			const email = result[0].email;
			const token = jwt.sign(
				{ role: 'admin', email: email },
				'jwt_secret_key',
				{ expiresIn: '1d' }
			);

			res.cookie('token', token);
			return res.json({ loginStatus: true, student: result });
		} else {
			return res.json({
				loginStatus: false,
				Error: 'Wrong email or password ',
			});
		}
	});
});
router.post('/students-department', (req, res) => {
	const sql = 'SELECT * FROM student_info WHERE department=?';
	const dep_id = req.body.departmentID;
	con.query(sql, [dep_id], (err, results) => {
		if (err)
			return res.status(400).json({ message: 'Querry failed to be executed' });
		return res.status(200).json([...results]);
	});
});

router.post('/students-chats', (req, res) => {
	const sql = 'SELECT * FROM messages WHERE department_id=?';
	const dep_id = req.body.departmentID;
	con.query(sql, [dep_id], (err, results) => {
		if (err)
			return res.status(400).json({ message: 'Query failed to be executed' });
		return res.status(200).json([...results]);
	});
});

router.post('/send-message', (req, res) => {
	const sql =
		'INSERT INTO messages(student_id, department_id, message, hour) VALUES (?, ?, ?, ?)';
	const { student_id, department_id, message, hour } = req.body;
	con.query(sql, [student_id, department_id, message, hour], (err, results) => {
		if (err)
			return res.status(400).json({ message: 'Query failed to be executed' });
		return res.status(200).json({ message: 'Message sent successfully' });
	});
});
router.get('/logout',(req,res)=>{
	res.clearCookie("token");
   return res.json({ Status: true, message: "Logged out successfully" });
  })

  
export default router;
