import express from "express";
import con from "../utils/db.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import multer from "multer";
import path from "path";
const router = express.Router();

// router.get('/adminlogin')
router.post("/adminlogin", (req, res) => {
  const sql = "SELECT * FROM admin where email=? and password=?";
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) return res.json({ loginStatus: false, Error: "Querry failed" });
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email,id:result[0].id },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );

      res.cookie("token", token);
      return res.json({ loginStatus: true });
    } else {
      return res.json({
        loginStatus: false,
        Error: "Wrong email or password ",
      });
    }
  });
});

router.get("/category", (req, res) => {
  const sql = "SELECT * FROM category";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.post("/add_category", (req, res) => {
  const sql = "INSERT INTO category(`name`) VALUES(?)";
  con.query(sql, [req.body.category], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true });
  });
});

//image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/Images");
  },
  filename: (req, file, cb) => {
    cb(null,file.filename + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});
const upload = multer({
  storage: storage,
});

//end of image upload
router.post("/add_students", upload.single("image"), (req, res) => {
  const sql = `INSERT INTO students
   (name, email,password,address,department,image,category_id) VALUES(?)`;
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    const values = [
      req.body.name,
      req.body.email,
      hash,
      req.body.address,
      req.body.department,
      req.file.filename,
      req.body.category_id,
    ];

    con.query(sql, [values], (err, result) => {
      if (err) return res.json({ Status: false, Error: "Query Error" });
      return res.json({ Status: true });
    });
  });
});

router.get("/students", (req, res) => {
  const sql = "SELECT * FROM students";
  con.query(sql, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});

router.get("/students/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM students  WHERE id =?";
  con.query(sql, [id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true, Result: result });
  });
});
router.put("/edit_students/:id", (req, res) => {
  const id = req.params.id;
  const sql = `UPDATE students
    set name = ?,email = ?, 
    department = ?, address = ?, category_id=? where id = ?`;

  const values = [
    req.body.name,
    req.body.email,
    req.body.address,
    req.body.department,
    req.body.category_id,
  ];
  con.query(sql, [...values, id], (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
});

router.delete('/delete_students/:id',(req,res)=>{
   const id = req.params.id;
   const sql = 'delete from students where id=?'
   con.query(sql, [id], (err, result) => {
      if (err) return res.json({ Status: false, Error: "Query Error" + err });
      return res.json({ Status: true, Result: result });
    });
})

router.get('/admin_count',(req,res)=>{
  const sql = 'select count(id) as admin from admin'
  con.query(sql,(err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
})

router.get('/students_count',(req,res)=>{
  const sql = 'select count(id) as students from students'
  con.query(sql,(err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
})

router.get('/department_count',(req,res)=>{
  const sql = 'select count(department) as departmentOfEmp from students'
  con.query(sql,(err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
})

router.get("/logout")

router.get('/admin_records',(req,res)=>{
  const sql = 'select * from admin'
  con.query(sql,(err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" + err });
    return res.json({ Status: true, Result: result });
  });
})

router.get('/logout',(req,res)=>{
  res.clearCookie("token");
 return res.json({ Status: true, message: "Logged out successfully" });
})



export { router as adminRouter };
