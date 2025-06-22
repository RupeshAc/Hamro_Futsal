// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="futsal-footer">
      <p>&copy; {new Date().getFullYear()} Futsal Management System. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
