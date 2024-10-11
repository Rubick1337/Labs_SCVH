import React from 'react';
import '../Header/header.css';
import Navigation from '../Header/navigation';

export default function Header({ logo }) {
  return (
    <header>
      <div className="header-site">
        <div className="container-navigation">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="burger-menu">
            <span className="line-burger"></span>
            <span className="line-burger"></span>
            <span className="line-burger"></span>
          </div>
          <img className="woodendot" alt="woodendot" src={logo} id="woodendot" />
        </div>
      </div>
    </header>
  );
}
