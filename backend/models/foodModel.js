const mongoose = require("mongoose");

//adding all my inputs
const foodSchema = mongoose.Schema(
	{
		text: {
			type: String,
			required: [true, "please add a dish that you like"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("food", foodSchema);
