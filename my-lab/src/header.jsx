import React, { Component } from 'react';
import image from './images/IMAGE.png';
import Navigation from './navigation'
class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-site">
          <div className="container-navigation">
            <div className="navigation">
             <Navigation/>
            </div>
            <div className="burger-menu">
              <span className="line-burger"></span>
              <span className="line-burger"></span>
              <span className="line-burger"></span>
            </div>
            <img className="woodendot" alt="woodendot" src={image} id="woodendot" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
