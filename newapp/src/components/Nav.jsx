import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img
          src="logo192.png"
          alt="Logo"
          width="50px"
          height="50px"
        />
      </div>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
        <li>
          <a href="#">JOIN US</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;