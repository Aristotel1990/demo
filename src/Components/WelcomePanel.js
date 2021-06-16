import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

function WelcomePanel() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome Panel </h1>
        <p>Now you can work on</p>
      </Container>
    </Jumbotron>
  );
}

export default WelcomePanel;
