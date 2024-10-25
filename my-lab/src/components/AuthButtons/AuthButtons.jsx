import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const AuthButtons = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClose = () => setShowLogin(false);
  const handleRegisterClose = () => setShowRegister(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShowLogin(true)}>
        Login
      </Button>
      <Button variant="secondary" onClick={() => setShowRegister(true)}>
        Register
      </Button>


      <LoginModal show={showLogin} onHide={handleLoginClose} />

      <RegisterModal show={showRegister} onHide={handleRegisterClose} />
    </>
  );
};

export default AuthButtons;
