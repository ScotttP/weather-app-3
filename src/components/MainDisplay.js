import React from "react";
import Error from "./Error";

const MainDisplay = (props) => {
	const toggleDegrees = () => {
		console.log("toggles between F and C");
	};

	const fahrenheit = (temp) => {
		return Math.round(((temp - 273.15) * 9) / 5 + 32);
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
						<strong>{<>{fahrenheit(props.weatherData.temp)}&deg;F </>}</strong>
					</p>
					<p id="weatherDescription">
						<strong>{props.weatherData.description}</strong>
					</p>
				</div>
				<div id="details">
					<p className="detailContent" id="feelsLike">
						Feels Like:{" "}
						<strong>{<>{fahrenheit(props.weatherData.temp)}&deg;F</>}</strong>
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
				<button onClick={() => console.log("add to favorites list")}>
					Add to Favorites
				</button>
			</div>
		</div>
	);
};
export default MainDisplay;
