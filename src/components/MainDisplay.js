import React, { useState } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import ToggleTempUnits from "./toggleTempUnits";

const MainDisplayContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 5% 2% 2% 2%;
`;

const Content = styled.div`
	background-color: white;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.26);
	border-radius: 10px;
	width: 40%;
	${"" /* padding: 50px 100px 50px 100px; */}
	min-height: 522px;
`;

const Details = styled.div`
	margin: 10% 5% 5% 5%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
`;

const TempAndWeatherDescription = styled.div`
	margin: 20px;
`;

const ToggleUnitsContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const LoadingIndicator = (props) => {
	return <Loader type="ThreeDots" color="#6291d3	" height="100" width="100" />;
};

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
		return Math.round(
			Math.round((unit === "C" ? celsius : fahrenheit) * 100) / 100
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

	return (
		<MainDisplayContainer id="mainDisplayContainer">
			{props.isLoading ? (
				<Content>
					<LoadingIndicator />
				</Content>
			) : (
				<Content>
					<ToggleUnitsContainer>
						<ToggleTempUnits toggle={toggleDegrees}></ToggleTempUnits>
					</ToggleUnitsContainer>

					<div id="main">
						<h1 className="mainContent" id="location">
							{props.weatherData.city}, {props.weatherData.country}
						</h1>

						<img
							className="mainContent"
							id="weatherIcon"
							src={`https://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`}
							alt={props.weatherData.description + " Icon"}
						/>
						<TempAndWeatherDescription>
							<strong>
								{
									<>
										{kelvinToUnit(props.weatherData.temp)}&deg;{unit}{" "}
									</>
								}
							</strong>
						</TempAndWeatherDescription>
						<TempAndWeatherDescription>
							<strong>{props.weatherData.description}</strong>
						</TempAndWeatherDescription>
					</div>
					<Details>
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
							<strong>
								{<>{windSpeed(props.weatherData.windSpeed)} MPH</>}
							</strong>
						</p>
					</Details>
					<button onClick={() => props.addToFavorites(props.weatherData)}>
						Add to Favorites
					</button>
				</Content>
			)}
		</MainDisplayContainer>
	);
};
export default MainDisplay;
