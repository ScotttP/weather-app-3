import React from "react";
import styled from "styled-components";

const ToggleTempUnits = (props) => {
	return (
		<label id="toggleUnits">
			<input type="checkbox" onClick={props.toggle} />
			<span className="slider">
				<div className="tempUnits">
					<span>F</span>
					<span>C</span>
				</div>
			</span>
		</label>
	);
};
export default ToggleTempUnits;
