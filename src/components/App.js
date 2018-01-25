import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import OnlineContent from "./OnlineContent";
import OfflineContent from "./OfflineContent";
import LinkPage from "./LinkPage";

const FourOhFour = () => <h1 className="fourOhFour">404</h1>;

const Landing = () => {
	return (
		<div>
			<Online>
				<OfflineContent />
			</Online>
			<Offline>
				<OnlineContent />
			</Offline>
		</div>
	);
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// need to switch offline and online when done testing
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/link" component={LinkPage} />
					<Route component={FourOhFour} />
				</Switch>
			</HashRouter>
		);
	}
}

export default App;
