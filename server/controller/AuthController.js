
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Generate JWT
const generateToken = (user) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );
};

const ensureJwtSecret = (res) => {
  if (process.env.JWT_SECRET) {
    return true;
  }

  res.status(503).json({
    success: false,
    message: "Authentication is not configured on the server",
  });
  return false;
};

// ============================
// REGISTER
// ============================
const register = async (req, res) => {
  try {
    if (!ensureJwtSecret(res)) {
      return;
    }

    const { username, email, password } = req.body || {};

    // Validation
    if (
      typeof username !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string" ||
      !username.trim() ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Username, email and password are required",
      });
    }

    const normalizedUsername = username.trim();
    const normalizedEmail = email.trim().toLowerCase();

    if (normalizedUsername.length < 3) {
      return res.status(400).json({
        success: false,
        message: "Username must be at least 3 characters",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({
      $or: [
        { email: normalizedEmail },
        { username: normalizedUsername },
      ],
    });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Username or email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const user = await User.create({
      username: normalizedUsername,
      email: normalizedEmail,
      password: hashedPassword,
    });

    // Generate token
    const token = generateToken(user);

    res.status(201).json({
      success: true,
      message: "Account created successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Register Error:", error);

    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Username or email already exists",
      });
    }

    res.status(error.message === "JWT_SECRET is not configured" ? 503 : 500).json({
      success: false,
      message: error.message === "JWT_SECRET is not configured"
        ? "Authentication is not configured on the server"
        : "Server error during registration",
    });
  }
};

// ============================
// LOGIN
// ============================
const login = async (req, res) => {
  try {
    if (!ensureJwtSecret(res)) {
      return;
    }

    const { identifier, password } = req.body || {};

    if (
      typeof identifier !== "string" ||
      typeof password !== "string" ||
      !identifier.trim() ||
      !password
    ) {
      return res.status(400).json({
        success: false,
        message: "Email/username and password are required",
      });
    }

    // Search by email OR username
    const normalizedIdentifier = identifier.trim();
    const user = await User.findOne({
      $or: [
        { email: normalizedIdentifier.toLowerCase() },
        { username: normalizedIdentifier },
      ],
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid username/email or password",
      });
    }

    // Compare password
    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid username/email or password",
      });
    }

    // Generate JWT
    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    res.status(error.message === "JWT_SECRET is not configured" ? 503 : 500).json({
      success: false,
      message: error.message === "JWT_SECRET is not configured"
        ? "Authentication is not configured on the server"
        : "Server error during login",
    });
  }
};

// ============================
// GET CURRENT USER
// ============================
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("Get Me Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

export default {
  register,
  login,
  getMe,
};