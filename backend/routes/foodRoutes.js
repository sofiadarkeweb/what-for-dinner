const express = require("express");
const {
	getFood,
	setFood,
	updateFood,
	deleteFood,
} = require("../controllers/foodControllers");
const router = express.Router();

router.get("/", getFood);

router.post("/", setFood);

router.put("/:id", updateFood);

router.delete("/:id", deleteFood);

module.exports = router;
