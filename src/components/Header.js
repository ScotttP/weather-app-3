import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
	return (
		<div id="headerContainer">
			<button onClick={props.toggleMode}>{props.themeMode}</button>
			<h1 id="Heading">Weather App</h1>
			<form id="userSearchForm">
				<input
					id="userSearch"
					type="text"
					placeholder="City, Country"
					onChange={(e) => props.change(e)}
				></input>

				<button id="searchButton" onClick={(e) => props.submit(e)}>
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</form>

			<button id="Search Current Location" onClick={props.getCurrentLocation}>
				Search Current Location
			</button>
		</div>
	);
};
export default Header;
