import { useState } from "react";
import React from "react";
import Profile from "../components/Profile";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


function Home() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <Container>
        {/* <Row>
            <Col> 
                <h1 className="text-left">Derek Roberts</h1>
                <p className="text-left">Full Stack Web Developer</p>
            </Col>
        </Row> */}
      <div className="container"></div>
      <div>{showProfile && <Profile />}</div>
    </Container>
  );
}

export default Home;
