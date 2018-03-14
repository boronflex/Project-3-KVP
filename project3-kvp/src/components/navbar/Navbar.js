import React from "react";
//import { Link } from "react-router-dom"; -need to set this up for persistence i think
import "./Navbar.css";
import Container from "../Container";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => 

  <nav>
    
    <Container>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Total Station</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/inputs">Inputs</a></li>
          <li><a href="/search">Applicants</a></li>
          <li><a href="/interview">Interview</a></li>
          <li><a href="/overview">Overview</a></li>
        </ul>
      </div>
    </Container>

  </nav>;

export default Navbar;