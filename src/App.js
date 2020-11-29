import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";
import Favorites from "./components/Favorites";

import "./App.css";

const App = () => {
	const [userInput, setUserInput] = useState("New York City, US");
	const [favorites, setFavorites] = useState([]);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [weatherData, setWeatherData] = useState({
		icon: "",
		city: "",
		country: "US",
		temp: "",
		description: "",
		feelsLike: "",
		humidity: "",
		windDirection: "",
		windSpeed: "",
	});

	useEffect(() => {
		getWeatherData();
	}, []);

	const getWeatherData = async () => {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&APPID=b388badf2ea8d6a1b0fc28f7d99e0ccc`,
				{ mode: "cors" }
			);
			const weatherData = await response.json();

			setWeatherData({
				city: weatherData.name,
				icon: weatherData.weather[0].icon,
				country: weatherData.sys.country,
				temp: weatherData.main.temp,
				description: weatherData.weather[0].description,
				feelsLike: weatherData.main.feels_like,
				humidity: weatherData.main.humidity,
				windDirection: weatherData.wind.deg,
				windSpeed: weatherData.wind.speed,
			});
			setError(false);
		} catch (error) {
			setError(true);
			setErrorMessage(error.toString());
		}
	};
	const getCityWeatherByCoordinates = async (lat, long) => {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b388badf2ea8d6a1b0fc28f7d99e0ccc`,
				{ mode: "cors" }
			);
			const currentCityWeatherdata = await response.json();
			setWeatherData({
				city: currentCityWeatherdata.name,
				icon: currentCityWeatherdata.weather[0].icon,
				country: currentCityWeatherdata.sys.country,
				temp: currentCityWeatherdata.main.temp,
				description: currentCityWeatherdata.weather[0].description,
				feelsLike: currentCityWeatherdata.main.feels_like,
				humidity: currentCityWeatherdata.main.humidity,
				windDirection: currentCityWeatherdata.wind.deg,
				windSpeed: currentCityWeatherdata.wind.speed,
			});
		} catch (error) {
			console.log(error);
			setError(true);
			setErrorMessage(error.toString());
		}
	};
	const getCoordinates = () => {
		const success = (location) => {
			const lat = location.coords.latitude;
			const long = location.coords.longitude;
			setError(false);
			console.log(lat, long);
			getCityWeatherByCoordinates(lat, long);
		};
		const error = (error) => {
			setError(true);
			setErrorMessage(error.message);
		};
		try {
			navigator.geolocation.getCurrentPosition(success, error);
		} catch (error) {
			setError(true);
			setErrorMessage(error.toString());
		}
	};
	const addToFavorites = () => {
		console.log("add to favorites list");
	};
	const deleteFromFavorites = () => {
		console.log("delete From favorites");
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getWeatherData();
	};
	const handleChange = (e) => {
		setUserInput(e.target.value);
		console.log(typeof e.target.value);
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
				getCurrentLocation={getCoordinates}
			/>
			<MainDisplay
				addToFavorites={addToFavorites}
				weatherData={weatherData}
				error={error}
				errorMessage={errorMessage}
			/>
			<Favorites deleteFromFavorites={deleteFromFavorites} />
		</div>
	);
};

export default App;
