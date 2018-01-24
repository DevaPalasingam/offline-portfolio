import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const OfflineContent = () => {
	return (
		<Grid>
			<Row>
				<Col xs={12} md={8}>
					Testing
				</Col>
				<Col xs={6} md={4}>
					Testing
				</Col>
			</Row>

			<Row>
				<Col xs={6} md={4}>
					Testing
				</Col>
				<Col xs={6} md={4}>
					Testing
				</Col>
				<Col xsHidden md={4}>
					Testing
				</Col>
			</Row>

			<Row>
				<Col xs={6} xsOffset={6}>
					Testing
				</Col>
			</Row>

			<Row>
				<Col md={6} mdPush={6}>
					Testing
				</Col>
				<Col md={6} mdPull={6}>
					Testing
				</Col>
			</Row>
		</Grid>
	);
};

export default OfflineContent;
