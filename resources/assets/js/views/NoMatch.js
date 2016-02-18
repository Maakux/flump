import React from "react";
import { Router, Route, Link } from "react-router";

class NoMatch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="http-error fadeInUp">
				<i className="icon-file"></i>
				<div className="message">no files here friend :)</div>
				<div className="about-links">
					<Link to="/">flump</Link>
					<Link to="/faq">faq</Link>
					<a href="https://github.com/brti/flump">github</a>
				</div>
			</div>
		);
	}
}

export default NoMatch;
