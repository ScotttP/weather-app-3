import React from "react";

const Favorites = (props) => {
	return (
		<div id="favoritesContainer">
			<h1 id="favorites">Favorites</h1>
			<ul id="favoritesList">
				<li>Toledo, US</li>
				<br></br>
				<button
					className="deleteFromFavoritesButton"
					onClick={props.deleteFromFavorites}
				>
					Delete From Favorites
				</button>
			</ul>
		</div>
	);
};
export default Favorites;
