import React from "react";
import { Offline, Online } from "react-detect-offline";
import OnlineContent from "./OnlineContent";
import OfflineContent from "./OfflineContent";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<Offline>
					<OfflineContent/>
				</Offline>
				<Online>
					<OnlineContent/>
				</Online>
			</div>
		);
	}
}

export default App;
