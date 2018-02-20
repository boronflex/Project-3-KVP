import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HR_view from "./pages/HR_view";
import Inputs from "./pages/inputs";
import Interview from "./pages/interview";
import Login from "./pages/login";
import Search_Select from "./pages/search_select";

import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Login} />
        <Route exact path="/inputs" component={Inputs} />
        <Route exact path="/search" component={Search_Select} />
        <Route exact path="/interview" component={Interview} />
        <Route exact path="/hr" component={HR_view} />
      </Wrapper>
      {/* <Footer /> */}
    </div>
  </Router>;

export default App;