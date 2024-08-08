import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoutes.js";
import studentRouter from "./Routes/StudentRoute.js";
import jwt from "jsonwebtoken";
import cookieParser from 'cookie-parser';








const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser())
app.use(express.json());
app.use("/auth", adminRouter);
app.use("/student", studentRouter);
app.use(express.static("public"));



const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, "jwt_secret_key", (err, decode) => {
      if (err) return res.json({ Status: false, Error: "Wrong Token" });

      req.id = decode.id;
      req.role = decode.role;
      next();
    });
  } else {
    return res.json({ Status: false, Error: "Not authenticated" });
  }
};




app.get("/verify", verifyUser, (req, res) => {
	return res.json({ Status: true, role:req.role,id:req.id });
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
