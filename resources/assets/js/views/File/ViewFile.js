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

	handleDownload(e) {
		var file = this.props.params.file;

		e.preventDefault();

		$.ajax({
			url: "/api/files/" + file + "/download",
			type: "POST",
			success: function(response) {
				console.log(response)
			},
			error: function(xhr, status, error) {
				console.log(error);
			}
		});
	}

	render() {
		if (this.state.file !== null) {
			var file = this.state.file;

			var created_at = moment(file.created_at).fromNow();
			var expire_date = moment(file.expire_date).fromNow();

			return (
				<div className="file fadeInUp">
					<div className="file-icon">
						<i className="icon-file"></i>
					</div>
					<div className="name">{file.original_name}</div>
					<div className="info">
						This file was uploaded {created_at}, and will be removed {expire_date}.
					</div>
					<button	className="download"
							onClick={this.handleDownload.bind(this)} >
							Download File
					</button>
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