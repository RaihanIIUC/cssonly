import React from "react";

import LOGO from "../../assets/images/logo.png";
import CART from '../../assets/images/cart.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <       img src={LOGO} alt="logo" width="125" />
      </div>

      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Produts</a>
          </li>

          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Contact</a>
          </li>

          <li>
            <a href="">Account</a>
          </li>
        </ul>
      </nav>

      <img src={CART} alt=""  width="30px"/>
    </div>
  );
}
  
export default Navbar;
