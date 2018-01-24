import React from "react";
import { Offline, Online } from "react-detect-offline";
import OnlineContent from "./OnlineContent";
import OfflineContent from "./OfflineContent";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

// need to switch offline and online when done testing
	render() {
		return (
			<div>
				<Online>
					<OfflineContent/>
				</Online>
				<Offline>
					<OnlineContent/>
				</Offline>
			</div>
		);
	}
}

export default App;
