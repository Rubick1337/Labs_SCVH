import React, { Component } from 'react';

class Navigation extends React.Component
{
    render()
    {
        return(
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
        )
    }
}
export default Navigation;