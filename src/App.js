import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import MainDisplay from "./components/MainDisplay";
import Favorites from "./components/Favorites";
import uniqid from "uniqid";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";
import "./App.css";

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	transition: 0.2s;
}

body {
	height: 100vh;
	background-color: ${(props) => props.theme.colors.background};
	
}
button {
	&:hover  {
		cursor: pointer;
	}
}

`;

const FavoritesContainer = styled.div`
	display: grid;
	background: ${(props) => props.theme.colors.background};
	flex-wrap: wrap;
	grid-template-columns: repeat(4, 24vw);
	grid-template-rows: repeat(5, 9vh);
	column-gap: 1%;
	row-gap: 3%;
	justify-self: center;
	margin-bottom: 5%;
	height: 60vh;
	@media only screen and (max-width: 650px) {
		grid-template-columns: repeat(3, 32.5vw);
	}
	@media only screen and (max-width: 510px) {
		grid-template-columns: repeat(2, 48vw);
	}
	@media only screen and (max-width: 350px) {
		grid-template-columns: repeat(1, 98vw);
	}
`;

const App = () => {
	const [userInput, setUserInput] = useState("New York City, US");
	const [loading, setLoading] = useState(false);
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
	}, [userInput]);

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
			setLoading(false);
		} catch (error) {
			setError(true);
			setErrorMessage(error.toString());
		}
	};
	const getCoordinates = (e) => {
		setLoading(true);
		e.preventDefault();
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
		if (
			copyFavoritesList.find(
				(e) => e.city === newItem.city && e.country === newItem.country
			)
		)
			return;
		//check if city is already in favorites list
		else setFavorites([...copyFavoritesList, newItem]);
	};
	const deleteFromFavorites = (index) => {
		let copyFavoritesList = JSON.parse(JSON.stringify(favorites));
		copyFavoritesList.splice(index, 1);
		console.log(index);
		setFavorites(copyFavoritesList);
	};

	const displayFavorites = (element) => {
		setUserInput(`${element.city},${element.country}`);
	};

	const handleSubmit = (e) => {
		const userInputFormValue = document.getElementById("userSearch").value;
		e.preventDefault();
		if (
			userInputFormValue === undefined ||
			userInputFormValue === "" ||
			userInputFormValue === null
		)
			return;
		else setUserInput(userInputFormValue);
	};
	const handleChange = (e) => {
		e.preventDefault();
		setError(false);
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
				displayFavorites={() => displayFavorites(element)}
				deleteFromFavorites={() => deleteFromFavorites(index)}
			/>
		));
	};

	return (
		<ThemeProvider theme={themeMode === "Light" ? lightTheme : darkTheme}>
			<GlobalStyle></GlobalStyle>
			<div id="appContainer">
				<Header
					submit={handleSubmit}
					handleChange={handleChange}
					toggleMode={toggleLightAndDarkMode}
					getCurrentLocation={getCoordinates}
					themeMode={themeMode}
					error={error}
					errorMessage={errorMessage}
				/>

				<MainDisplay
					isLoading={loading}
					addToFavorites={addToFavorites}
					weatherData={weatherData}
					themeMode={themeMode}
				/>
				{/* <h1 id="favorites">Favorites</h1> */}
				<FavoritesContainer themeMode={themeMode}>
					{renderFavorites()}
				</FavoritesContainer>
			</div>
		</ThemeProvider>
	);
};

export default App;
