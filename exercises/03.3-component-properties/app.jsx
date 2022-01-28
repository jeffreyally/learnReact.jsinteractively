import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";
//description = "Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
//imageURL = "https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
//buttonURL = "https://en.wikipedia.org/wiki/Bob_Dylan"
//buttonLabel = "Go to wikipedia"

const BootstrapCard = (props) => {
	// 1) replace the hard-coded image, description, link, etc. With their property variable.
	return (
		<div className="card m-5">
			<img className="card-img-top" src={props.imageURL} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
				<a href={props.buttonURL} className="btn btn-primary">
					{props.buttonLabel}
				</a>
			</div>
		</div>
	);
};
BootstrapCard.propTypes = {
	description: PropType.string,
	imageURL: PropType.string,
	buttonURL: PropType.string,
	title: PropType.string,
	buttonLabel: PropType.string,
};

ReactDOM.render(
	<BootstrapCard
		description="Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter."
		imageURL="https://github.com/4GeeksAcademy/react-tutorial-exercises/blob/master/.learn/assets/Dylan.png?raw=true"
		buttonURL="https://en.wikipedia.org/wiki/Bob_Dylan"
		title="Bob Dylan"
		buttonLabel="Go to wikipedia"
	/>,
	document.querySelector("#myDiv")
);
