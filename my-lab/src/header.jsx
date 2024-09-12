import React, { Component } from 'react';
import image from './images/IMAGE.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-site">
          <div className="container-navigation">
            <div className="navigation">
              <nav>
                <ul className="menu-navigation">
                  <li>
                    <a href="#Wooden-Furniture" data-i18n="menu-wooden-furniture">
                      Wooden Furniture
                    </a>
                  </li>
                  <li>
                    <a href="#About" data-i18n="menu-about">About</a>
                  </li>
                  <li>
                    <a href="#Stories" data-i18n="menu-stories">Stories</a>
                  </li>
                  <li>
                    <a href="admin-panel.html" data-i18n="Admin" id="admin">Admin</a>
                  </li>
                  <div className="buttons">
                    <label className="switch">
                      <input type="checkbox" className="switch-input" />
                      <span className="switch-slider"></span>
                    </label>
                    <div className="moon"></div>
                    <div className="dropdown">
                      <button className="dropbtn" type="button">RU</button>
                      <div className="dropdown-content">
                        <button className="language-btn" type="button" id="button-ru">
                          RU
                        </button>
                        <button className="language-btn" type="button" id="button-en">
                          EN
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="img-profile background-settings"></div>
                  <div id="dropdownMenu" className="dropdown-menu">
                    <div className="login-register-menu-header">
                      <a href="../login.html">Login</a>
                      <a href="../registration.html">Register</a>
                    </div>
                    <div className="user-menu-header">
                      <span>Welcome, <span className="username-display-header"></span>!</span>
                      <button id="logoutButton-header">Log out</button>
                    </div>
                  </div>
                </ul>
              </nav>
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
