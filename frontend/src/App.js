import "./App.css";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import AddDishForm from "./components/AddDishForm";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
	const [dishes, setDishes] = useState([]);
	const [show, setShow] = useState(true);
	const buttonTexts = [
		"Another idea?",
		"Not pleased?",
		"You didn't like this one?",
		"Maybe not today?",
		"Hmm not sure?",
		"Give me more!",
	];

	// animation from Aos
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);

	// GET All dishes
	async function getFood() {
		const response = await fetch("/api/food", {
			method: "GET",
		});
		const data = await response.json();
		setDishes(data);
	}

	useEffect(() => {
		getFood();
	}, []);

	// POST new dish
	async function addDish(text) {
		const response = await fetch("/api/food", {
			method: "POST",
			headers: {
				Accept: "*/*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ text }),
		});

		const data = await response.json();
		const newDishes = [...dishes, data];
		console.log(newDishes);
		setDishes(newDishes);
	}

	return (
		<div className="App">
			<header className="App-header" id="hero">
				<h4>What's for dinner?</h4>

				{
					dishes.map((dish) => (
						<div
							key={dish._id}
							className={show ? "app" : null}
							data-aos="zoom-in"
						>
							<h1>{dish.length === 0 ? "loading..." : dish.text}</h1>
						</div>
					))[Math.floor(Math.random() * dishes.length)]
				}

				<Button
					onClick={() => setShow(!show)}
					color="pink"
					title={buttonTexts[Math.floor(Math.random() * buttonTexts.length)]}
				/>
				<a href="#all-dishes" className="all-dishes-link">
					More ideas
				</a>
			</header>
			<section id="all-dishes">
				<h3>All my dishes</h3>
				<div className="all-dishes">
					{dishes.map((dish) => (
						<div key={dish._id} className="dish-box">
							<p>{dish.length === 0 ? "loading..." : dish.text}</p>
							<a href="/" className="recipe-link">
								More info
							</a>
						</div>
					))}
				</div>
				<AddDishForm addDish={addDish} />
				<Footer />
			</section>
		</div>
	);
}

export default App;
