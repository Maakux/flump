import React from "react";

class UploadFile extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<div className="landing-title">
					<div className="title">flump</div>
					<div className="tagline">the best temporary online file store...</div>
				</div>
				<div className="file-upload">
					<form method="post" action="/files" encType="multipart/form-data">
						<input type="file" name="file" id="file" />
						<button type="submit">Upload</button>
					</form>
				</div>
			</div>
		);
	}
}

export default UploadFile;