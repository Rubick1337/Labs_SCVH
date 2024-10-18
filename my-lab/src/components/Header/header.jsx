import React from 'react';
import '../Header/header.css';
import AuthButtons from '../AuthButtons/AuthButtons';
import Navigation from '../Header/navigation';

export default function Header({ logo }) {
  return (
    <header>
      <div className="header-site">
        <div className="container-navigation">
          <div className="navigation">
            <Navigation />
            <AuthButtons />
          </div>
          <img className="woodendot" alt="woodendot" src={logo} id="woodendot" />
        </div>
      </div>
    </header>
  );
}
