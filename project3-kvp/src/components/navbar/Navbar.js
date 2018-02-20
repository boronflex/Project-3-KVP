import React from "react";
//import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => 

  <nav>
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">Total Station</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/inputs">Inputs</a></li>
        <li><a href="/search">Search</a></li>
        <li><a href="/interview">Interview</a></li>
      </ul>
    </div>
  </nav>;

export default Navbar;