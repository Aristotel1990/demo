import React, { useState } from 'react'
import { useStateValue } from "../reducers/StateProvider";
import {Modal,Button,Footer,Body,Title} from 'react-bootstrap';


function SignOutModal({history}) {
    const [show, setShow] = useState(false);
    const [{isLogin}, dispatch] = useStateValue();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const onFinish=()=>{
    dispatch({type:'SIGNIN_FALSE'})
    setShow(false)
}
  return (
    <>
      <Button  onClick={handleShow}>
        Sign Out
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to sign out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={onFinish}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignOutModal
