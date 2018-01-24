import React from "react";
import { Offline, Online } from "react-detect-offline";
import OnlineContent from "./OnlineContent";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Offline>You're currently offline</Offline>
				<Online>
					<OnlineContent/>
				</Online>
			</div>
		);
	}
}

export default App;
