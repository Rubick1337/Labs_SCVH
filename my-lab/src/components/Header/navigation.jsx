import React from 'react';
import { Link } from 'react-router-dom'; // Изменяем импорт

export default function Navigation() {
  return (
    <nav>
      <ul className="menu-navigation">
        <li>
          <Link to="/welcome">Wooden Furniture</Link>
          {/* <a href="#Wooden-Furniture" data-i18n="menu-wooden-furniture">
              Wooden Furniture
            </a> */}
        </li>
        <li>
          <Link to="/informationus">About</Link>
          {/* <a href="#About" data-i18n="menu-about">About</a> */}
        </li>
        <li>
        <Link to="/cards">Stories</Link>
          {/* <a href="#Stories" data-i18n="menu-stories">Stories</a> */}
        </li>
        <div className="buttons">
          <label className="switch">
            <input type="checkbox" className="switch-input" />
            <span className="switch-slider"></span>
          </label>
          <div className="moon"></div>
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
  );
}
