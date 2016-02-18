import React from "react";
import moment from "moment";
import NoMatch from "../NoMatch";
import { Router, Route, Link } from "react-router";

class ViewFile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			file: null
		};
	}

	componentDidMount() {
		var file = this.props.params.file;

		$.ajaxSetup({
	        headers: {
	            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	        }
		});

		$.ajax({
			url: "/api/files/" + file,
			type: "GET",
			success: function(response) {
				this.setState({ file: response });
			}.bind(this),
			error: function(xhr, status, error) {
				this.setState({ file: {} });
			}.bind(this)
		});
	}

	render() {
		if (this.state.file !== null) {
			if (Object.keys(this.state.file).length === 0) {
				return <NoMatch />;
			}

			var file = this.state.file;

			var protocol = window.location.protocol + "//";
			var host = "f." + window.location.host;

			var fileLink = protocol + host + "/" + file.name;

			var created_at = moment(file.created_at).fromNow();
			var expire_date = moment(file.expire_date).fromNow();

			return (
				<div className="file fadeInUp">
					<a className="view-file" href={fileLink}>
						<i className="icon-file"></i>
					</a>
					<div className="name">File: {file.original_name}</div>
					<div className="info">
						This file was uploaded {created_at}, and will be removed {expire_date}.
					</div>
					<a className="download" href={"/files/" + this.state.file.hash + "/download"}>
						Download File
					</a>
					<div className="about-links">
						<Link to="/">flump</Link>
						<Link to="/faq">faq</Link>
						<a href="https://github.com/brti/flump">github</a>
					</div>
				</div>
			);
		}

		return (
			<div className="loading loading-center">
				<div className="loading-icon"></div>
			</div>
		);
	}
}

export default ViewFile;
