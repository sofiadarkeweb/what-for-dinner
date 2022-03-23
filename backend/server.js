const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
// const cors = require("cors");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
	res.append("Access-Control-Allow-Origin", ["*"]);
	res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
	res.append("Access-Control-Allow-Headers", "Content-Type");
	next();
});

// app.use(cors());

app.use("/api/food", require("./routes/foodRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on ${port}`));
