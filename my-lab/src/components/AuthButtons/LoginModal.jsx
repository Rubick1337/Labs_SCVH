  import React from 'react';
  import { Modal, Form, Button } from 'react-bootstrap';
  import './modalStyles.css'; 

  function LoginModal ({ show, onHide })  {
    return (
      <Modal show={show} onHide={onHide} centered>
          <div className="modal-content d-flex">
            <div className="left-panel">
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
            <div className="right-panel">
            </div>
          </div>
      </Modal>
    );
  };

  export default LoginModal;