import React from "react";
import styled from "styled-components";

const FavoritesDiv = styled.div`
	display: flex;
	border: 1px solid black;
`;

const Favorites = (props) => {
	return (
		<FavoritesDiv onClick={() => props.displayFavorites()}>
			<h1>
				{props.element.city}, {props.element.country}
			</h1>

			<button
				className="deleteFromFavoritesButton"
				onClick={() => props.deleteFromFavorites(props.index)}
			>
				Delete From Favorites
			</button>
		</FavoritesDiv>
	);
};
export default Favorites;
