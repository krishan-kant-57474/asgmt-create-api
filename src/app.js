const express = require("express");
const app = express();
app.use(express.json());

app.get("/api/:number", (req, res) => {
	const number = parseInt(req.params.number);

	if (isNaN(number)) {
		return res
			.status(400)
			.json({ error: "Invalid input. Please provide an integer number." });
	}

	let result = "";

	if (number % 5 === 0) {
		result += "L";
	}

	if (number % 7 === 0) {
		result += "R";
	}

	if (!result) {
		result = number.toString();
	}

	res.json({ result });
});

module.exports = app;
