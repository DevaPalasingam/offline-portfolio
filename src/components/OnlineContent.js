import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const OnlineContent = () => {
	return (
		<Grid className="wrapper">
			<Row className="row">
				<Col className="col" xs={12} md={8}>
					<div className="text onlineTextMain">
						You must go offline to view this page
					</div>
				</Col>
				<Col className="col" xs={12} md={4}>
					<div className="text">Try going to airplane mode</div>
				</Col>
			</Row>
			<Row className="row">
				<Col className="col" xs={12}>
					<div className="text">
						Don't worry. We'll watch your stuff for you.
					</div>
				</Col>
			</Row>
		</Grid>
	);
};

export default OnlineContent;
