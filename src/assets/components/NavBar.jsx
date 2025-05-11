import React from 'react';
import './NavBar.css'; // Import the styles from an external CSS file

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>UNIVERSITY OF</h1>
        <h2>WATERLOO</h2>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#societies">Societies</a>
        <a href="#about">About Us</a>
      </div>
    </div>
  );
};

export default NavBar;
