import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import Error from "./Error";
import styled from "styled-components";

const HeaderContainer = styled.div`
	color: #fff;
	background-color: #6291d3;
	height: 15vh;
	max-height: 155px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ToggleModeButton = styled.button`
	width: 10vw;
	height: 3vh;
	position: absolute;
	right: 5%;
	top: 3.5%;
`;

const WeatherAppHeading = styled.h1`
	font-size: 1.5em;
	text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.26);
	margin: 5px;
`;

const UserSearchForm = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 10px;
`;

const UserSearchInput = styled.input.attrs({
	type: "text",
	placeholder: "City, Country",
	id: "userSearch",
})`
	height: 3vh;
	width: 100%;
	max-width: 350px;
	border-radius: 5px 0 0 5px;
	padding: 12px 20px 12px 12px;
	box-shadow: inset 0px 0px 10px #446491;
	background: transparent;
	outline: none;
	border: none;
	&::placeholder {
		color: #fff;
	}
`;

const SearchBarButton = styled.button`
	background-color: #446491;
	border: none;
	outline: none;
	width: 25px;
	height: 3vh;

	&:hover {
		cursor: pointer;
	}
	color: #fff;
`;
const Header = (props) => {
	return (
		<HeaderContainer>
			<WeatherAppHeading>Weather App</WeatherAppHeading>{" "}
			<ToggleModeButton onClick={props.toggleMode}>
				{props.themeMode === "Light" ? "Dark" : "Light"}
			</ToggleModeButton>
			<UserSearchForm>
				<SearchBarButton onClick={(e) => props.submit(e)}>
					<FontAwesomeIcon icon={faSearch} />
				</SearchBarButton>

				<UserSearchInput
					onChange={(e) => props.handleChange(e)}
				></UserSearchInput>

				<SearchBarButton onClick={(e) => props.getCurrentLocation(e)}>
					<FontAwesomeIcon icon={faCrosshairs} />
				</SearchBarButton>
			</UserSearchForm>
			{props.error ? <Error></Error> : <div></div>}
		</HeaderContainer>
	);
};
export default Header;
