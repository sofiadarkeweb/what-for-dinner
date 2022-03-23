const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// description: Register new user
// Route: POST /api/users
// Access: public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Please add all fields");
	}

	//check if user exist
	const userExist = await User.findOne({ email });

	if (userExist) {
		res.status(400);
		throw new Error("User already exist");
	}

	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	//create user
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id), // jwt
		});
	} else {
		res.status(400);
		throw new Error("invalid user data");
	}
});

// description: Authenticate user
// Route: POST /api/users/login
// Access: public
const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	//check for user email
	const user = await User.findOne({ email });

	//check password, use bbrypt method called compare
	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid credentials");
	}
});

// description: Get user data
// Route: GET /api/users/me
// Access: private
const getUser = asyncHandler(async (req, res) => {
	const { _id, name, email } = await User.findById(req.user.id);
	// res.json({ message: "User data display" });
	res.status(400).json({
		id: _id,
		name,
		email,
	});
});

//generate JWT token
const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
};

module.exports = { registerUser, loginUser, getUser };
