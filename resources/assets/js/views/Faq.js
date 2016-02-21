import React from "react";
import { Router, Route, Link } from "react-router";

class Faq extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="faq fadeInUp">
				<h1>FAQ</h1>
				<div className="question">
					<h2>what is flump?</h2>
					<div className="answer">
						flump is a service that allows you to temporarily store your files.
					</div>
				</div>
				<div className="question">
					<h2>what does flump mean?</h2>
					<div className="answer">
						flump is what you get when you combine the words file, and dump to get flump.
					</div>
				</div>
				<div className="question">
					<h2>why was my file discarded?</h2>
					<div className="answer">
						if your file exceeds the size of 75MB then it will be discarded during the upload process.
					</div>
				</div>
				<div className="question">
					<h2>why weren't my files uploaded?</h2>
					<div className="answer">
						your files will not be uploaded if they either exceed 75MB or if one of them is an executable.
					</div>
				</div>
				<div className="question">
					<h2>what file types are accepted?</h2>
					<div className="answer">
						as of now all file types are accepted apart from executable files.
					</div>
				</div>
				<div className="question">
					<h2>when will my file be removed?</h2>
					<div className="answer">
						all files will be deleted 24 hours after they have been uploaded.
					</div>
				</div>
				<div className="about-links">
					<Link to="/">flump</Link>
					<Link to="/faq">faq</Link>
					<a href="https://github.com/brti/flump">github</a>
				</div>
			</div>
		);
	}
}

export default Faq;

