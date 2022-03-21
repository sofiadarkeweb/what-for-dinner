const mongoose = require("mongoose");

//adding all my inputs
const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "please add your name"],
		},
		email: {
			type: String,
			required: [true, "please add an email"],
		},
		password: {
			type: String,
			required: [true, "please add a password"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", userSchema);
