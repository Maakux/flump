import React from "react";

class NoMatch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="not-found fadeInUp">
				<i className="icon-file"></i>
				<div className="message">no files here friend :)</div>
			</div>
		);
	}
}

export default NoMatch;
