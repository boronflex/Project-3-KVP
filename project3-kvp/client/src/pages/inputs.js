import React from "react";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";

import Collapsible from "../components/Card/Collapsible/Collapsible"
import CollapsibleItem from "../components/Card/Collapsible/CollapsibleItem/CollapsibleItem"
import Container from "../components/Container";
import UserBlock from '../components/UserBlock/UserBlock';

import NewProspect from "../components/Inputs/ProspectInput";
import NewProject from "../components/Inputs/ProjectInput";
import NewSpread from "../components/Inputs/SpreadInput";

const Inputs = () =>

  <Container>

    <div className="row">

      <h3 className="col s12 m7 l6">Input Dashboard</h3>

      <UserBlock user_name="Kyle Palmer" />

    </div>

    <div className="row">

      <div className="col s12">


        <div className="row">
          <div className="col s12 m12 l6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">New Prospect</span>
                <NewProspect />
              </div>
            </div>
          </div>

          <Collapsible color="blue-grey darken-1" column_size="col s12 m12 l6">
            <CollapsibleItem color="blue-grey darken-1 white-text" collapsible_heading="New Project">
              <NewProject />
            </CollapsibleItem>
            <CollapsibleItem color="blue-grey darken-1 white-text" collapsible_heading="New Spread">
              <NewSpread />
            </CollapsibleItem>
          </Collapsible>

        </div>



      </div>

    </div>

  </Container>

export default Inputs;
