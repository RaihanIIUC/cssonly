import React from "react";

import LOGO from "../assets/images/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={LOGO} alt="logo" width="125" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="">Home</a>
            <a href="">Produts</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Account</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
