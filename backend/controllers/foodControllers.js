const asyncHandler = require("express-async-handler");
const Food = require("../models/foodModel");

// description: Get Food (all for now without auth)
// Route: GET /api/food
// Access: private
const getFood = asyncHandler(async (req, res) => {
	const food = await Food.find();
	await res.status(200).json(food);
});

// description: Set Food (all for now without auth)
// Route: POST /api/food
// Access: private
const setFood = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Add some text");
	}

	const food = await Food.create({
		text: req.body.text,
	});
	res.status(200).json(food);
});

// description: Update Food (all for now without auth)
// Route: PUT /api/food/:id
// Access: private
const updateFood = asyncHandler(async (req, res) => {
	const food = Food.findById(req.params.id);

	if (!food) {
		res.status(400);
		throw new Error("That dish did not exist");
	}

	const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.status(200).json(updatedFood);
});

// description: Delete Food (all for now without auth)
// Route: DELETE /api/food/:id
// Access: private
const deleteFood = asyncHandler(async (req, res) => {
	const food = Food.findById(req.params.id);

	if (!food) {
		res.status(400);
		throw new Error("That dish did not exist");
	}

	await food.remove();
	res.status(200).json({ id: req.params.id });
});

module.exports = {
	getFood,
	setFood,
	updateFood,
	deleteFood,
};
