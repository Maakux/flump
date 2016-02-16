import React from "react";

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
		console.log(this.state.file);

		if (this.state.file !== null) {
			return (
				<div className="file-info">
					<div className="name">{this.state.file.original_name}</div>
					<div className="">
						This file was uploaded {this.state.file.created_at}, and will be removed {this.state.file.expire_date}
					</div>
					<a className="download">Download File</a>
				</div>
			);
		}

		return (
			<div>loading...</div>
		);
	}
}

export default ViewFile;