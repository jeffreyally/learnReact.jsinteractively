import React, { Component } from "react";
import ReactDOM from "react-dom";

class PrintHello extends Component {
	render() {
		return (
			<>
				<div class="card m-5">
					<img class="card-img-top" src="" alt="Card image cap" />
					<div class="card-body">
						<h5 class="card-title">{this.props.name}</h5>
						<p class="card-text">
							Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an
							influential figure in popular music and culture for more than five decades.
						</p>
						<a href="https://en.wikipedia.org/wiki/Bob_Dylan" class="btn btn-primary">
							Go to wikipedia
						</a>
					</div>
				</div>
			</>
		);
	}
}

ReactDOM.render(<PrintHello name="Trying a class" />, document.querySelector("#myDiv"));

//redid this exercise as a class to try and understand
//them better. I think it's important to at least be
//able to read them well even if we are using functions