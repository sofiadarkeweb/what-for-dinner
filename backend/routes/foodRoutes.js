const express = require("express");
const {
	getFood,
	setFood,
	updateFood,
	deleteFood,
} = require("../controllers/foodControllers");
const router = express.Router();

router.route("/").get(getFood).post(setFood);
router.route("/:id").put(updateFood).delete(deleteFood);

module.exports = router;
