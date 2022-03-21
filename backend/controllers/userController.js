const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// description: Register new user
// Route: POST /api/users
// Access: public
const registerUser = async (req, res) => {
	res.json({ message: "Register User" });
};

// description: Authenticate user
// Route: POST /api/users/login
// Access: public
const loginUser = async (req, res) => {
	res.json({ message: "login User" });
};

// description: Get user data
// Route: GET /api/users/me
// Access: private
const getUser = async (req, res) => {
	res.json({ message: "User data" });
};

module.exports = { registerUser, loginUser, getUser };
