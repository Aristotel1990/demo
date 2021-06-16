import React from "react";
import { useState } from "react";
import { Modal, Button, Form, Input } from "react-bootstrap";
import { useStateValue } from "../reducers/StateProvider";

function SignInModal({ history }) {
  const [show, setShow] = useState(false);
  const [{}, dispatch] = useStateValue();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onFinish = () => {
    dispatch({ type: "SIGNIN_TRUE" });
    history.push("/home");
    setShow(false);
  };
  return (
    <>
      <Button onClick={handleShow}>Sign In</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={onFinish}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignInModal;
