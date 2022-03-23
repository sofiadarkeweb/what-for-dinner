import "./App.css";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AddDishForm from "./components/AddDishForm";
import Button from "./components/Button";

function App() {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	const [dishes, setDishes] = useState([]);
	const [open, setOpen] = useState(true);

	const buttonTexts = [
		"Another idea?",
		"Not pleased?",
		"You didn't like this one?",
		"Maybe not today?",
		"Hmm not sure?",
		"Give me more!",
	];

	// get All dishes
	async function getFood() {
		const response = await fetch("http://localhost:5000/api/food", {
			method: "GET",
		});
		const data = await response.json();
		setDishes(data);
		console.log(data);
	}

	useEffect(() => {
		getFood();
		// setDishes(data);
	}, []);

	const showSuggestion = () => {
		setOpen(!open);
	};

	// get All dishes
	async function addDish(text) {
		const response = await fetch("http://localhost:5000/api/food", {
			method: "POST",
			body: text,
			headers: { "Content-type": "application/json" },
			mode: "no-cors",
			// body: JSON.stringify()
		});

		const foodData = await response.json();
		console.log("fooddata" + foodData);
		const newDishes = [...foodData, { text: { text } }];
		console.log(foodData);
		setDishes(newDishes);
	}

	useEffect(() => {
		addDish();
		// setDishes(data);
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<h4>What's for dinner?</h4>

				{
					dishes.map((dish) => (
						<div
							key={dish._id}
							className={open ? "app" : null}
							data-aos="zoom-in"
						>
							<h1>{dish.length === 0 ? "loading..." : dish.text}</h1>
						</div>
					))[Math.floor(Math.random() * dishes.length)]
				}

				<Button
					onClick={showSuggestion}
					color="pink"
					title={buttonTexts[Math.floor(Math.random() * buttonTexts.length)]}
				/>
			</header>
			<section>
				<h3>All my dishes</h3>
				<div className="all-dishes">
					{dishes.map((dish) => (
						<div key={dish._id} className="dish-box">
							<p>{dish.length === 0 ? "loading..." : dish.text}</p>
						</div>
					))}
				</div>
			</section>
			<AddDishForm addDish={addDish} />
			{/* <Footer /> */}
		</div>
	);
}

export default App;
