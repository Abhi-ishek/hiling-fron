
import { Router } from "express";

import authController from "../controller/AuthController.js";
// import protect from "../middlewares/authMiddleware.js";

const router = Router();

// Register
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

// Get logged-in user
// router.get("/me", protect, getMe);

export default router;
