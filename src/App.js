import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";
import Favorites from "./components/Favorites";
import uniqid from "uniqid";

import "./App.css";

const App = () => {
	const [userInput, setUserInput] = useState("New York City, US");
	const [favorites, setFavorites] = useState(() => {
		if (!localStorage.getItem("favorites")) {
			return [];
		} else return JSON.parse(localStorage.getItem("favorites"));
	});
	const [themeMode, setThemeMode] = useState(() => {
		if (!localStorage.getItem("themeMode")) {
			return "Light";
		} else return localStorage.getItem("themeMode");
	});
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

	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);
	useEffect(() => {
		localStorage.setItem("themeMode", themeMode);
	}, [themeMode]);

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
			setError(true);
			setErrorMessage(error.toString());
		}
	};
	const getCoordinates = () => {
		const success = (location) => {
			const lat = location.coords.latitude;
			const long = location.coords.longitude;
			setError(false);
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
	const addToFavorites = (newItem) => {
		let copyFavoritesList = JSON.parse(JSON.stringify(favorites));
		if (copyFavoritesList.includes(newItem)) return;
		else setFavorites([...copyFavoritesList, newItem]);
	};
	const deleteFromFavorites = (index) => {
		let copyFavoritesList = JSON.parse(JSON.stringify(favorites));
		copyFavoritesList.splice(index, 1);
		setFavorites(copyFavoritesList);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getWeatherData();
	};
	const handleChange = (e) => {
		e.preventDefault();
		setUserInput(e.target.value);
	};

	const toggleLightAndDarkMode = () => {
		setThemeMode((prevState) => {
			if (prevState === "Light") return "Dark";
			else return "Light";
		});
	};

	const renderFavorites = () => {
		return favorites.map((element, index) => (
			<Favorites
				key={uniqid()}
				element={element}
				index={index}
				deleteFromFavorites={() => deleteFromFavorites()}
			/>
		));
	};
	return (
		<div id="appContainer">
			<Header
				submit={handleSubmit}
				change={handleChange}
				toggleMode={toggleLightAndDarkMode}
				getCurrentLocation={getCoordinates}
				themeMode={themeMode}
			/>
			<MainDisplay
				addToFavorites={addToFavorites}
				weatherData={weatherData}
				error={error}
				errorMessage={errorMessage}
			/>
			<div id="favoritesContainer">
				<h1 id="favorites">Favorites</h1>
				{renderFavorites()}
			</div>
		</div>
	);
};

export default App;
