import React from "react";
import "./Login.css";
import LoginForm from "../Inputs/LoginForm"

const Login = props => 

  <div id="modal1" className="modal">
    <div className="modal-content">

      <p>you must have an account to sign in</p>
      <p>contact Kyle Palmer for credentials</p>

      <LoginForm />
      
    </div>
    <div class="modal-footer">
      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Sign In</a>
    </div>
  </div>;

export default Login;

