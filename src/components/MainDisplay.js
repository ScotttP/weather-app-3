import React from "react";

const MainDisplay = () => {
	return (
		<div id="mainDisplayContainer">
			<div id="content">
				<div id="main">
					<h1 className="mainContent" id="location">
						{/* {this.props.weather.city}, {this.props.weather.country} */}
						City, Country
					</h1>
					<img
						className="mainContent"
						id="weatherIcon"
						src="https"
						// {`http://openweathermap.org/img/wn/${this.props.weather.icon}@2x.png`}
						alt="icon"
						//{this.props.weather.description + " Icon"}
					/>
					<p id="temp">
						temperature data
						{/* <strong>
                       
							{<>{this.fahrenheit(this.props.weather.temp)}&deg;F </>}
						</strong> */}
					</p>
					<p id="weatherDescription">
						weather description data
						{/* <strong>{this.props.weather.description}</strong> */}
					</p>
				</div>
				<div id="details">
					<p className="detailContent" id="feelsLike">
						Feels Like: temperature data
						{/* <strong>
							{<>{this.fahrenheit(this.props.weather.temp)}&deg;F</>}{" "}
						</strong> */}
					</p>
					<p className="detailContent" id="humidity">
						Humidity: feeels Like data
						{/* <strong>{this.props.weather.humidity}%</strong> */}
					</p>
					<p className="detailContent" id="windDirection">
						Wind Direction: windDirection data
						{/* <strong>
							{<>{this.direction(this.props.weather.windDirection)}</>}
						</strong> */}
					</p>
					<p className="detailContent" id="windSpeed">
						Wind Speed:wind speed data
						{/* <strong>{<>{this.mph(this.props.weather.windSpeed)} MPH</>}</strong> */}
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
