import { useState } from "react";

function AddDishForm({ addDish }) {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addDish(value);
		setValue("");
		console.log({ value });
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				value={value}
				placeholder="Type in a new dish"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={handleSubmit}>Add me</button>
		</form>
	);
}

export default AddDishForm;
