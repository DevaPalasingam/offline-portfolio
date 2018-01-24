import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const OfflineContent = () => {
	return (
		<Grid className="wrapper">
			<Row className="row">
				<Col className="col" xs={8}>
					<div className="text">Test</div>
				</Col>
				<Col className="col" xs={2}>
					<Row className="row"><div className="text">Test</div></Row>
					<Row className="row"><div className="text">Test</div></Row>
					<Row className="row"><div className="text">Test</div></Row>
				</Col>
				<Col className="col" xs={2}>
					<div className="text">Test</div>
				</Col>
			</Row>
		</Grid>
	);
};

export default OfflineContent;
