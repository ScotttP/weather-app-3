import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";
import darkTheme from "./themes/dark";

const GlobalStyle = createGlobalStyle`

html{
	height: 100%;
	background-color: ${(props) => (props.light ? "#e3e3e3" : "#2E3440")}
}


`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle></GlobalStyle>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
