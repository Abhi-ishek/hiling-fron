
import { Router } from "express";

import authController from "../controller/AuthController.js";
import protect from "../middlewares/authMiddleware.js";

const router = Router();

// Register
router.post("/register", authController.register);

// Login
router.post("/login", authController.login);

// Get logged-in user (protected)
router.get("/me", protect, authController.getMe);

export default router;
