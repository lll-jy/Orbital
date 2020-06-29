import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import Logo from "../../Images/Logo.png";


export default function () {
  return (
    <div className="navbar">
      <img src={Logo} className="navbar__logo" alt="logo" />
      <span className="navbar__logo">Answer Master</span>
      <ul className="navbar__list">
	<li className="navbar__item">
	  <Link to="/" className="navbar__link">Home</Link>
	</li>
	<li className="navbar__item navbar__submenu-container">
	  <button className="navbar__link">Account</button>
	  <ul className="navbar__submenu">
	    <li className="navbar__submenu-item">
	      <Link to="/auth/login" className="navbar__submenu-link">Login</Link>
	    </li>
	    <li className="navbar__submenu-item">
	      <Link to="/auth/register" className="navbar__submenu-link">Register</Link>
	    </li>
	  </ul>
	</li>
      </ul>
    </div>
  )
}
