import React from "react";
import { Offline, Online } from "react-detect-offline";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Offline>You're currently offline</Offline>
				<Online>You're currently online</Online>
			</div>
		);
	}
}

export default App;
