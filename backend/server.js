const express = require("express");
const path = require("path");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	// res.append("Access-Control-Allow-Origin", ["*"]);
	res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.append("Access-Control-Allow-Headers", "Content-Type");
	next();
});

app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
		// headers: { "content-type": "text/plain" },
	})
);

app.use("/api/food", require("./routes/foodRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Serve frontend

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/build")));

	app.get("*", (req, res) =>
		res.sendFile(
			path.resolve(__dirname, "../", "frontend", "build", "index.html")
		)
	);
} else {
	app.get("/", (req, res) => res.send("Please set to production"));
}

app.use(errorHandler);

app.listen(port, () => console.log(`server started on ${port}`));
