import React from "react";
import ReactDOM from "react-dom";
import ViewFile from "./views/File/ViewFile";
import UploadFile from "./views/File/UploadFile";
import { Router, Route, Link } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

ReactDOM.render((
	<Router history={createBrowserHistory()}>
		<Route path="/" component={UploadFile}>
			<Route path="files/:file" component={ViewFile} />
		</Route>
	</Router>
), document.getElementById("app-root"));