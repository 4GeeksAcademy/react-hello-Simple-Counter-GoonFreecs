import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SimpleClock from "./clock";

//create your first component
const Home = () => {
	return (
		<div>
			<><SimpleClock/></>
		</div>
	);
};

export default Home;
