import "dotenv/config";

import express from "express";
import cors from "cors";

import authRoutes from "./router/Authrout.js";
import connection from "./database/db.js";

const app = express();

const port = process.env.PORT || 5000;

// app.use(
//   cors({
//     origin: [
//       // "http://localhost:3000",
//       // "http://localhost:5173",
//       // "https://your-frontend.vercel.app",
//       "*"
//     ],
//     credentials: true,
//   })
// );
app.use(cors({
  origin: [
    "*",
  ]
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Healing Center API is running",
  });
});
app.get("/", (req, res) => {
  res.send("Healing Center API is running");
  res.json({
    success: true,
    message: "Healing Center API is running",
    
  });
});

app.use("/api/auth", authRoutes);

const startServer = async () => {
  try {
    await connection();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();