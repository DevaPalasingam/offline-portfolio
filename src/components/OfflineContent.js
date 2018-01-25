import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const OfflineContent = () => {
	return (
		<Grid className="wrapper">
			<Row className="row">
				<Col className="col titleCol" xs={12} sm={8}>
					<div className="text nameText">Deva Palasingam</div>
				</Col>
				<Col className="col" xs={12} sm={4}>
					<Row className="row rowOneThird">
						<div className="text">Email</div>
					</Row>
					<Row className="row rowOneThird">
						<div className="text">LinkedIn</div>
					</Row>
					<Row className="row rowOneThird">
						<div className="text">GitHub</div>
					</Row>
				</Col>
			</Row>
			<Row className="row">
				<Col className="col" xs={12}>
					<div className="aboutMe">
						<h1>About Me</h1>
						<p>
							Hi! My name is Deva Palasingam. I graduated from UT
							Austin with an Electrical Engineering degree in
							2015. I spent two years working as a hardware
							engineer. But now I'm working hard to make a switch
							to web development. It'll be hard, but I'm sure I'll
							have fun along the way.
						</p>
						<p>
							A bit about me: My typical days these days are spent
							coding and learning about code. I also help out at
							my local church. I enjoy food for thought and
							thoughts of food. I like puzzles, brain teasers, and
							anything that makes me laugh.
						</p>
						<p>
							Here's some food for thought, recently featured by
							the good people of TED-Ed: Are we a body with a mind
							or a mind with a body? Be careful how you answer.
						</p>
						<p>
							If we're a body with a mind, then our "mind" is
							nothing more than chemical reactions in our brain.
							Love, emotions, morality, even conciousness, all of
							those things are mere illusions. Fundamentally we
							are not really any different from a robot or even a
							rock, for that matter.
						</p>
						<p>
							If we're a mind with a body, then that mind must
							have a fully or partially non-physical existence.
							But then there must exist things that are
							non-physical, a spiritual realm if you don't mind me
							calling it that.
						</p>
						<p>
							Some follow up questions: Which do we intellectually
							believe? Which one seems more in alignment with our
							experience of reality? Do we live in a way that is
							logically consistent with the one we belive? What
							are the ramifications with regards to purpose,
							morality, and how we live our life?
						</p>
					</div>
				</Col>
			</Row>
		</Grid>
	);
};

export default OfflineContent;
