import React from "react";
import { Router, Route, Link } from "react-router";

class UploadForm extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			files: [],
			uploads: [],
			dropzoneClass: "dropzone",
			dropzoneText: "Select or drop files to upload."
		};
	}

	handleFile(e) {
		this.handleUpload(e.target.files);
	}

	handleClick(e) {
		this.refs.file.click();
	}

	handleDragOver(e) {
		e.preventDefault();

		this.setState({ dropzoneText: "Drop the files to upload." });

		return false;
	}

	handleDragLeave(e) {
		this.setState({ dropzoneText: "Select or drop files to upload." });

		return false;
	}

	handleOnDrop(e) {
		e.preventDefault();

		this.setState({ dropzoneText: "Select or drop files to upload." });

		this.handleUpload(e.dataTransfer.files);
	}

	handleUpload(files) {
		var formData = new FormData();
		var xhr = new XMLHttpRequest();
		var self = this;

		for (var i = 0; i < files.length; i++) {
			formData.append("file[]", files[i]);
		}

		xhr.open("POST", "/api/files");
		xhr.send(formData);

		xhr.onload = function() {
			var response = JSON.parse(this.responseText);

			var uploads = self.state.uploads.concat(response.data);

			self.setState({ uploads: uploads });
		}
	}

	renderButton() {
		if (this.state.formData === null ||
			this.state.isSubmitting) {
			return <button type="submit" disabled>Upload</button>;
		}

		return <button type="submit">Upload</button>;
	}

	renderUploads() {
		return this.state.uploads.map(function(file, i) {
			var link = "/files/" + file.short_hash;

			return (
				<li key={i} className="uploaded-item fadeInUp">
					<i className="icon-check"></i>
					{file.name} uploaded!
					<Link to={link}>View File</Link>
				</li>
			);
		});
	}

	renderForm() {
		var button = this.renderButton();
		var uploads = this.renderUploads();

		return (
			<form 	method="post"
					action="/api/files"
					encType="multipart/form-data" >
				<div	className="dropzone"
						onDragOver={this.handleDragOver.bind(this)}
						onDragLeave={this.handleDragLeave.bind(this)}
						onDrop={this.handleOnDrop.bind(this)} >
					<a className="icon-upload" onClick={this.handleClick.bind(this)}></a>
					<div className="message">{this.state.dropzoneText}</div>
				</div>
				<ul className="uploads">{uploads}</ul>
				<input	type="file"
						ref="file"
						name="file[]"
						style={{display: "none"}}
						onChange={this.handleFile.bind(this)}
						multiple />
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