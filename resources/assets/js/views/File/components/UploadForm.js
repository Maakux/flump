import React from "react";

class UploadForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isValid: false,
			isSubmitting: false,
			fileData: null
		};
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ isSubmitting: true });

		$.ajaxSetup({
	        headers: {
	            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	        }
		});

		var data = new FormData();

		data.append("file", this.state.fileData);

		$.ajax({
			url: "/api/files",
			data: data,
			processData: false,
			contentType: false,
			type: "POST",
			success: function(response) {
				var protocol = window.location.protocol + "//";
				var url = window.location.host + "/files/" + response.short_name;

				window.location.replace(protocol + url);
			},
			error: function(xhr, status, error) {
				console.log(error);
			}
		});
	}

	handleFile(e) {
		var file = e.target.files[0];

		this.setState({ fileData: file });
	}

	renderButton() {
		if (this.state.fileData === null ||
			this.state.isSubmitting) {
			return <button type="submit" disabled>Upload</button>;
		}

		return <button type="submit">Upload</button>;
	}

	renderForm() {
		if (this.state.isSubmitting) {
			return <div>Uploading...</div>;
		}
		
		var button = this.renderButton();

		return (
			<form 	method="post"
					action="/api/files"
					encType="multipart/form-data"
					onSubmit={this.handleSubmit.bind(this)}>
				<div className="input-field">
					<input type="file" name="file" onChange={this.handleFile.bind(this)} />
				</div>
				<div className="input-field">
					{button}
				</div>
			</form>
		);
	}

	render() {
		var form = this.renderForm();

		return (
			<div>{form}</div>
		);
	}
}

export default UploadForm;