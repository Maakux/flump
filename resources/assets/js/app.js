import React from "react";
import ReactDom from "react-dom";
import CreateFile from "./views/File/UploadFile";
import { Router, Route, Link } from "react-router";
import createBrowserHistory from "history/lib/createBrowserHistory";

ReactDOM.render((
	<Router history={createBrowserHistory()}>
		<Route path="/" component={UploadFile} />
	</Router>
), document.getElementById("app-root"));