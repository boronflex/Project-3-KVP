import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HR_view from "./pages/HR_view";
import Inputs from "./pages/inputs";
import Interview from "./pages/interview";
import LoginPage from "./pages/login";
import Search_Select from "./pages/search_select";

import Request_tests from "./pages/request-tests";

import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Overview from "./pages/Overview";

import 'normalize.css/normalize.css';

import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';


const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/inputs" component={Inputs} />
        <Route exact path="/search" component={Search_Select} />
        <Route exact path="/interview" component={Interview} />
        <Route exact path="/overview" component={Overview} />
        <Route exact path="/hr" component={HR_view} />
        <Route exact path="/requesttesting" component={Request_tests} />
      </Wrapper>
      {/* <Footer /> */}
    </div>
  </Router>;

export default App;