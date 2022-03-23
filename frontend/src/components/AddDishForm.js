import { useState } from "react";

function AddDishForm({ addDish }) {
	const [value, setValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addDish(value);
		setValue("");
		console.log(value);
	};

	return (
		<form>
			<input
				type="text"
				className="input"
				value={value}
				placeholder="add new dish"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button onClick={handleSubmit}>Add +</button>
		</form>
	);
}

export default AddDishForm;
