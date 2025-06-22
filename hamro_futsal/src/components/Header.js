// src/components/Header.js
import React from 'react';
import './Header.css';
import logo from '../logo.svg';
import ContactUs from './ContactUs';

function Header({ onNav }) {
  return (
    <header className="futsal-header">
      <nav className="header-left">
        
        <div className="header-right">
        <img src={logo} alt="Futsal Logo" className="header-logo" />
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="ContactUs.js">Contact Us</a>
      </div>
      </nav>

      <div className="header-right">
        
        <a href="#">Login</a>
        <a href="#">Register</a>
      </div>
    </header>
  );
}

export default Header;
