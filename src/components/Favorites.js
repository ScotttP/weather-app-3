import React from "react";

const Favorites = (props) => {
	return (
		<div onClick={() => props.displayFavorites()}>
			<h1>
				{props.element.city}, {props.element.country}
			</h1>

			<button
				className="deleteFromFavoritesButton"
				onClick={() => props.deleteFromFavorites(props.index)}
			>
				Delete From Favorites
			</button>
		</div>
	);
};
export default Favorites;
