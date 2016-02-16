import React from "react";
import UploadForm from "./components/UploadForm";

class UploadFile extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
			{
				this.props.children ||
				<div>
					<div className="landing-title">
						<div className="title">flump</div>
						<div className="tagline">the best temporary online file store...</div>
					</div>
					<div className="file-upload">
						<UploadForm />
					</div>
				</div>
			}
			</div>
		);
	}
}

export default UploadFile;