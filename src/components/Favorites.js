import React from "react";
import styled from "styled-components";

const FavoritesDiv = styled.div`
	display: flex;
	justify-self: center;
	justify-content: center;
	align-items: center;
	width: 90%;
	min-width: 150px;
	height: 90%;
	background-color: ${(props) => props.theme.colors.displayBackgroundColor};
	color: ${(props) => props.theme.colors.textColor};
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.26);
	border-radius: 10px;
	padding: 10px;
	transition: 0.3s;
	&:hover {
		cursor: pointer;
		transform: translateY(-5px);
		box-shadow: 0 0 5px rgba(0, 0, 0, 5);
	}
`;
const FavoritesInnerDiv = styled.div`
	width: 100%;
	padding: 0 5% 0 5%;
	display: flex;
	justify-content: space-between;
`;

const Favorites = (props) => {
	return (
		<FavoritesDiv onClick={() => props.displayFavorites()}>
			<FavoritesInnerDiv>
				<h3>
					{props.element.city}, {props.element.country}
				</h3>

				<i
					className="fa fa-close"
					onClick={() => props.deleteFromFavorites(props.index)}
				></i>
			</FavoritesInnerDiv>
		</FavoritesDiv>
	);
};
export default Favorites;
