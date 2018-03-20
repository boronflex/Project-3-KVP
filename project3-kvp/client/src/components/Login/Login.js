import React from "react";
import "./Login.css";
import LoginForm from "../Inputs/LoginForm"

import { Modal, Button } from 'react-materialize'

const Login = props =>

// $('.modal').modal();
// $('#modal1').modal('open');
// $('.modal').modal({
//   dismissible: false, // Modal can be dismissed by clicking outside of the modal
//   opacity: .5, // Opacity of modal background
//   inDuration: 300, // Transition in duration
//   outDuration: 200, // Transition out duration
//   startingTop: '4%', // Starting top style attribute
//   endingTop: '10%', // Ending top style attribute
//   ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
//     alert("Ready");
//     console.log(modal, trigger);
//   },
//   complete: function () { alert('Closed'); } // Callback for Modal close
// });

  <Modal
    header='Modal Header'
    trigger={<Button>MODAL</Button>}>
    <p>you must have an account to sign in</p>
    <p>contact Kyle Palmer for credentials</p>
    <LoginForm />
  </Modal>

export default Login;

