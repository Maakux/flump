import React from "react";
import UploadForm from "./components/UploadForm";
import { Router, Route, Link } from "react-router";

class UploadFile extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className="flump-main">
			{
				this.props.children ||
				<div className="fadeInUp">
					<div className="landing-title">
						<div className="title">flump</div>
						<div className="tagline">simple temporary file storage</div>
					</div>
					<div className="file-upload">
						<UploadForm />
					</div>
				<div className="about-links">
					<Link to="/">flump</Link>
					<Link to="/faq">faq</Link>
					<a href="https://github.com/brti/flump">github</a>
				</div>
				</div>
			}
			</div>
		);
	}
}

export default UploadFile;