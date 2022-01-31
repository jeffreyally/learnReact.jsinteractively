import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Alert = (props) => {
	const colorClasses = {
		red: "alert-danger",
		orange: "alert-warning",
	};
	if (colorClasses[props.color] == "alert-danger") {
		return (
			<div class="alert alert-danger" role="alert">
				{props.text}
			</div>
		);
	}
	if (colorClasses[props.color] == "alert-warning") {
		return (
			<div class="alert alert-warning" role="alert">
				{props.text}
			</div>
		);
	}
};
Alert.propTypes = {
	color: PropTypes.string,
	text: PropTypes.string,
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
	<div>
		<Alert text="OMG! Something really bad has happended!" color="red" />
		<Alert text="Well, it is not that bad after all!" color="orange" />
	</div>,
	document.querySelector("#myDiv")
);
