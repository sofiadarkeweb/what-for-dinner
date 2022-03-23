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
		console.log(response);
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
		console.log("hej");
		const response = await fetch("http://localhost:5000/api/food", {
			method: "POST",
			body: text,
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
				// "Content-Type": "text/plain",
				// "Content-Type": "text/html",
			},
			// mode: "no-cors",
			// body: JSON.stringify(text),
		});

		//when I have content type application/json i get to here

		console.log("hoj");
		console.log(response);
		const data = await response.json();
		console.log(data);

		const newDishes = [...data, { text }];
		//when I have content type text plain i get to here
		setDishes(newDishes);
	}

	// useEffect(() => {
	// 	addDish();
	// 	// setDishes(data);
	// }, []);

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
							<a href="./" className="recipe-link">
								More info
							</a>
						</div>
					))}
				</div>
				<AddDishForm addDish={addDish} />
			</section>

			{/* <Footer /> */}
		</div>
	);
}

export default App;
