import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const OnlineContent = () => {
	return (
		<Grid>
			<Row>
				<Col xs={12} md={8}>
					<div className="onlineText onlineTextMain">
						You must go offline to view this page
					</div>
				</Col>
				<Col xs={12} md={4}>
					<div className="onlineText">Try going to airplane mode</div>
				</Col>
			</Row>
			<Row>
				<Col xs={12}>
					<div className="onlineText border">
						Don't worry. We'll watch your stuff for you.
					</div>
				</Col>
			</Row>
		</Grid>
	);
};

export default OnlineContent;
