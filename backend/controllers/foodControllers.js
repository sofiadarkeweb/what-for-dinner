const asyncHandler = require("express-async-handler");

// description: Get Food (all for now without auth)
// Route: GET /api/food
// Access: private
const getFood = asyncHandler(async (req, res) => {
	await res.status(200).json({ message: "Get food" });
});

// description: Set Food (all for now without auth)
// Route: POST /api/food
// Access: private
const setFood = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Add some text");
	}
	res.status(200).json({ message: "Set food" });
});

// description: Update Food (all for now without auth)
// Route: PUT /api/food/:id
// Access: private
const updateFood = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update food ${req.params.id}` });
});

// description: Delete Food (all for now without auth)
// Route: DELETE /api/food/:id
// Access: private
const deleteFood = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete food ${req.params.id}` });
});

module.exports = {
	getFood,
	setFood,
	updateFood,
	deleteFood,
};
