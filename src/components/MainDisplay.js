import React, { useState } from "react";
import Error from "./Error";

const MainDisplay = (props) => {
	const [unit, setUnit] = useState("F");
	const toggleDegrees = () => {
		setUnit((prevState) => {
			if (prevState === "F") return "C";
			else return "F";
		});
	};

	const kelvinToUnit = (kelvinTemp) => {
		let celsius = kelvinTemp - 273.15;
		let fahrenheit = (celsius * 9) / 5 + 32;
		return (
			Math.round((unit === "C" ? celsius : fahrenheit + Number.EPSILON) * 100) /
			100
		);
	};

	const windSpeed = (speed) => {
		return Math.round(speed * 2.23694 * 10) / 10;
	};
	const windDirection = (wind) => {
		let val = Math.floor(wind / 22.5 + 0.5);
		let arr = [
			"N",
			"NNE",
			"NE",
			"ENE",
			"E",
			"ESE",
			"SE",
			"SSE",
			"S",
			"SSW",
			"SW",
			"WSW",
			"W",
			"WNW",
			"NW",
			"NNW",
		];
		return arr[val % 16];
	};

	if (props.error === true) return <Error errorMessage={props.errorMessage} />;

	return (
		<div id="mainDisplayContainer">
			<div id="content">
				<div id="main">
					<h1 className="mainContent" id="location">
						{props.weatherData.city}, {props.weatherData.country}
					</h1>
					<button onClick={toggleDegrees} id="toggleDegrees">
						toggle F and C
					</button>
					<img
						className="mainContent"
						id="weatherIcon"
						src={`https://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`}
						alt={props.weatherData.description + " Icon"}
					/>
					<p id="temp">
						<strong>
							{
								<>
									{kelvinToUnit(props.weatherData.temp)}&deg;{unit}{" "}
								</>
							}
						</strong>
					</p>
					<p id="weatherDescription">
						<strong>{props.weatherData.description}</strong>
					</p>
				</div>
				<div id="details">
					<p className="detailContent" id="feelsLike">
						Feels Like:{" "}
						<strong>
							{
								<>
									{kelvinToUnit(props.weatherData.temp)}&deg;{unit}
								</>
							}
						</strong>
					</p>
					<p className="detailContent" id="humidity">
						Humidity: <strong>{props.weatherData.humidity}%</strong>
					</p>
					<p className="detailContent" id="windDirection">
						Wind Direction:{" "}
						<strong>
							{<>{windDirection(props.weatherData.windDirection)}</>}
						</strong>
					</p>
					<p className="detailContent" id="windSpeed">
						Wind Speed:{" "}
						<strong>{<>{windSpeed(props.weatherData.windSpeed)} MPH</>}</strong>
					</p>
				</div>
				<button onClick={() => props.addToFavorites(props.weatherData)}>
					Add to Favorites
				</button>
			</div>
		</div>
	);
};
export default MainDisplay;
