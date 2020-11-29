import React from "react";

const Error = (props) => {
	console.log(props);
	return (
		<div id="errorContainer">
			<h1>An Error Occured while fetching</h1>
			<p>{props.errorMessage}</p>
		</div>
	);
};
export default Error;
