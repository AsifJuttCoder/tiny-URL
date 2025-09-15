import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { signJWT } from "./Utils/jwt.js";
import { verifyJWT } from "./Utils/jwt.js";
import { ConnectMongoDB } from "./Utils/mongodb.js";
import urlRoutes from "./Routes/urls.js";
import UserRoute from "./Routes/user.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
ConnectMongoDB();



app.use("/url", urlRoutes);
app.use("/user",UserRoute);
app.listen(5050, () => {
  console.log("I am working");
});
// signJWT({
//   name: "Farhan Ullah",
//   userId: "tdasd",
// });

// verifyJWT(
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJOYW1lIjoiQWhtYWQiLCJFbWFpbCI6ImtoYW4iLCJpYXQiOjE3NTcwODUxOTAsImV4cCI6MTc1NzA4NTMxMH0.ozO3fZcCqX0m_9cN5KTiQXrUZB5FMHH4ZIDRwgmorN8"
// )