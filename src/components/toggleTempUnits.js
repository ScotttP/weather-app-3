import React from "react";
import styled from "styled-components";

const ToggleTempUnits = (props) => {
	return (
		<label id="toggleUnits">
			<input type="checkbox" onClick={props.toggleDegrees} />
			<span className="slider"></span>
		</label>
	);
};
export default ToggleTempUnits;
