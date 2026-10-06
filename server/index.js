
import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./router/Authrout.js";
import connection from "./database/db.js";
const app = express();
dotenv.config();
// ============================ 
// MIDDLEWARE
// ============================
const port = process.env.PORT || 5000;  
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://your-frontend.vercel.app",
    ],
    credentials: true,
  })
);

app.use(json());
app.use(urlencoded({ extended: true }));

connection();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Healing Center API is running",
  });
});

app.use("/api/auth", authRoutes);


app.listen(port, () => {
    console.log("Server is running on port", port);
});


