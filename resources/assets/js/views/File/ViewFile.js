import React from "react";
import moment from "moment";

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
				console.log(xhr)
			}
		});
	}

	render() {
		if (this.state.file !== null) {
			var file = this.state.file;

			var protocol = window.location.protocol + "//";
			var host = "f." + window.location.host;

			var fileLink = protocol + host + "/" + file.name;

			console.log(fileLink);

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
					<a href={"/files/" + this.state.file.hash + "/download"}>
						Download File
					</a>
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