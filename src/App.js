import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";
import Favorites from "./components/Favorites";

import "./App.css";

const App = () => {
	const [weatherData, setWeatherData] = useState({
		userInput: "New York City",
		// userInput: "New York",
		// 	icon: "",
		// 	city: "",
		// 	country: "US",
		// 	temp: "",
		// 	description: "",
		// 	feelsLike: "",
		// 	humidity: "",
		// 	windDirection: "",
		// 	windSpeed: "",
	});
	useEffect(() => {
		getWeatherData();
	}, []);

	const getWeatherData = async () => {
		console.log("getWeatherdata function");
		// try {
		// 	const response = await fetch(
		// 		`https://api.openweathermap.org/data/2.5/weather?q=${this.state.userInput}&APPID=b388badf2ea8d6a1b0fc28f7d99e0ccc`,
		// 		{ mode: "cors" }
		// 	);
		// 	const weatherData = await response.json();
		// 	this.setState({
		// 		city: weatherData.name,
		// 		icon: weatherData.weather[0].icon,
		// 		country: weatherData.sys.country,
		// 		temp: weatherData.main.temp,
		// 		description: weatherData.weather[0].description,
		// 		feelsLike: weatherData.main.feels_like,
		// 		humidity: weatherData.main.humidity,
		// 		windDirection: weatherData.wind.deg,
		// 		windSpeed: weatherData.wind.speed,
		// 	});
		// } catch (error) {
		//  console.log("display error component")
		// }
	};
	const getCurrentLocation = async () => {
		console.log("get current location and then run getWeatherData function");
	};
	const addToFavorites = () => {
		console.log("add to favorites list");
	};
	const deleteFromFavorites = () => {
		console.log("delete From favorites");
	};

	const handleSubmit = (e) => {
		console.log(e);
		e.preventDefault();
		getWeatherData();
	};
	const handleChange = (e) => {
		console.log("set user input state");
		e.preventDefault();
	};

	const toggleLightAndDarkMode = () => {
		console.log("toggle dark and light mode");
	};

	return (
		<div id="appContainer">
			<Header
				submit={handleSubmit}
				change={handleChange}
				toggleMode={toggleLightAndDarkMode}
				getCurrentLocation={getCurrentLocation}
			/>
			<MainDisplay addToFavorites={addToFavorites} />
			<Favorites deleteFromFavorites={deleteFromFavorites} />
		</div>
	);
};

export default App;
