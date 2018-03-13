//
//The intention of this info block is to hold state for a clock of collapsible cards, card, and buttons
//state will be handled to pass props down to these elements to change their color and content on the interview and hr page
//I want to pull state out of those other components and lift it up here
//
//the page will make a request and pull a chunk of data, it will map and filter and pass it to this component's state.
//this block will call all these components in the right structure, in a materialize row,
//some analysis will have to be performed on the data 

//the query will have to get all of the relevant data from the join, I'll have to make sure I get names, dates, etc

import React from "react";
import "./InfoBlock.css";

import Card from "../Card/Card";
import CardPage from "../Card/CardPage"
import Collapsible from "../Card/Collapsible"
import CollapsibleItem from "../Card/Collapsible/CollapsibleItem"
import StatusButton from '../Buttons/StatusButton';
import { isNull } from "util";

class InfoBlock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      candidate: this.props.candidate_info,
      collapsible_status: "",
      application_status: null,
      reference_status: null,
      offerpaperwork_status: null,
      drugtest_status: null,
      fitness_status: null
    };
  }

  //status buttons
  //need click events for these here, they change status, maybe they take state (i.e. application, so they know what to update) name
  //these probably need to inherit from cards to change-that makes the most sense

  StatusUpdates() {

  }


  render() {

    const candidate = this.state.candidate;
    //console.log(candidate)

    //#############begin color control/status control block###############

    //all the if statements are split out for planning and my organizition, if there is time, refactor down to single handler function
    // function (progress, hired){
    //if statements
    //return color
    //}

    //collapsible status/color control
    let collapseCardColor = null;
    if (isNull(candidate.app_sent_by)) {
      collapseCardColor = "red";
    } else if (candidate.app_sent_by && !(candidate.hired)) {
      collapseCardColor = "amber";
    } else if (candidate.hired) {
      collapseCardColor = "green";
    } else {
      collapseCardColor = "red";
    }

    //application status/control
    let applicationColor = null;
    if (isNull(candidate.app_sent_by)) {
      applicationColor = "red";
      this.setState({application_status: "not started"});
    } else if (candidate.app_sent_by && isNull(candidate.app_returned)) {
      applicationColor = "amber";
      this.setState({application_status: "in progress"});
    } else if (candidate.app_returned) {
      applicationColor = "green";
      this.setState({application_status: "complete"});
    }

    //reference status/control
    let referencesColor = null;
    //let referencesStatus = null;
    if (candidate.app_returned && isNull(candidate.ref_checks_ip)) {
      referencesColor = "red";
      this.setState({reference_status: "not started"});
    } else if (candidate.ref_checks_ip && isNull(candidate.ref_checks_complete)) {
      referencesColor = "amber";
      this.setState({reference_status: "in progress"});
    } else if (candidate.ref_checks_complete) {
      referencesColor = "green";
      this.setState({reference_status: "complete"});
    } else {
      referencesColor = "red";
      this.setState({reference_status: "not started"});
    }

    //offer letter & new hire paperwork status/control
    let offerLetterColor = null;
    //let offerLetterStatus = null;
    if (candidate.ref_checks_complete && isNull(candidate.off_nh_pkg_sent)) {
      offerLetterColor = "red";
      this.setState({offerpaperwork_status: "not started"});
    } else if (candidate.off_nh_pkg_sent && isNull(candidate.off_nh_pkg_returned)) {
      offerLetterColor = "amber";
      this.setState({offerpaperwork_status: "in progress"});
    } else if (candidate.off_nh_pkg_returned) {
      offerLetterColor = "green";
      this.setState({offerpaperwork_status: "complete"});
    } else {
      offerLetterColor = "red";
      this.setState({offerpaperwork_status: "not started"});
    }

    //drug test
    let drugTestColor = null;
    //let drugTestStatus = null;
    if (candidate.off_nh_pkg_returned && isNull(candidate.drug_test)) {
      drugTestColor = "red";
      this.setState({drugtest_status: "not started"});
    } else if (candidate.drug_test && isNull(candidate.drug_test_complete)) {
      drugTestColor = "amber";
      this.setState({drugtest_status: "in progress"});
    } else if (candidate.drug_test_complete) {
      drugTestColor = "green";
      this.setState({drugtest_status: "complete"});
    } else {
      drugTestColor = "red";
      this.setState({drugtest_status: "not started"});
    }

    //fitness test
    let fitnessTestColor = null;
    //let fitnessTestStatus = null;
    if (candidate.off_nh_pkg_returned && isNull(candidate.fitness_test)) {
      fitnessTestColor = "red";
      this.setState({fitness_status: "not started"});
    } else if (candidate.fitness_test && isNull(candidate.fitness_test_complete)) {
      fitnessTestColor = "amber";
      this.setState({fitness_status: "in progress"});
    } else if (candidate.fitness_test_complete) {
      fitnessTestColor = "green";
      this.setState({fitness_status: "complete"});
    } else {
      fitnessTestColor = "red";
      this.setState({fitness_status: "not started"});
    }


    //place holder for now don't forget to switch hired status on drug and fitness test complete.
    // let isHired = false;
    // if (candidate.fitness_test_complete && candidate.drug_test_complete) {
    //   isHired = true;
    // }

    //#############end color control/status control block###############


    return (

      <div className="section">

        <div className="row">

          <div className="section col s12 m5 l2">

            <Collapsible color={collapseCardColor} column_size="col s12 m12 l12">

              <CollapsibleItem color={collapseCardColor} collapsible_heading={candidate.first_name + " " + candidate.last_name}>

                <p>"{candidate.nick_name}"</p>

              </CollapsibleItem>

              <CollapsibleItem color={collapseCardColor} collapsible_heading="Candidate Info">

                <p className="center">phone 1:</p>
                <p className="center">{candidate.phone_1}</p>

                <p className="center">phone 2:</p>
                <p className="center">{candidate.phone_2}</p>

                <p className="center">address:</p>
                <p className="center">{candidate.address_st + " " + candidate.city + " " + candidate.address_state + " " + candidate.zip}</p>

                <p className="center">email:</p>
                <p className="center">{candidate.email}</p>

              </CollapsibleItem>

              <CollapsibleItem color={collapseCardColor} collapsible_heading="Offer Info">

                <p className="center">Requested By:</p>
                <p className="center">{candidate.added_by}</p>

                <p className="center">Title:</p>
                <p className="center">{candidate.offer_title}</p>

                <p className="center">Pay:</p>
                <p className="center">{candidate.offer_pay}</p>

                <p className="center">Start Date:</p>
                <p className="center">{candidate.requested_start_date}</p>

                <p className="center">Project Number:</p>
                <p className="center">{candidate.project_number}</p>

              </CollapsibleItem>

            </Collapsible>

          </div>

          <div className="section col s12 m7 l6">

            <Card color={applicationColor} column_size="center col s12 m12 l4" title="Application">

              <CardPage>
                <div className="row button-row-override">
                  <br/>
                  <StatusButton 
                    status={this.state.application_status} 
                    column_size="center col s6 offset-s3 m6 offset-m3 l10 offset-l1"
                    />
                </div>
              </CardPage>

            </Card>

            <Card color={referencesColor} column_size="center col s12 m12 l4" title="Reference Checks">

              <CardPage>
                <div className="row button-row-override">
                  <br/>
                  <StatusButton 
                    status={this.state.reference_status} 
                    column_size="center col s6 offset-s3 m6 offset-m3 l10 offset-l1"
                    />
                </div>
              </CardPage>

            </Card>

            <Card color={offerLetterColor} column_size="center col s12 m12 l4" title="offer letter & new hire paperwork">

              <CardPage>
                <div className="row button-row-override">
                  <br/>
                  <StatusButton 
                    status={this.state.offerpaperwork_status} 
                    column_size="center col s6 offset-s3 m6 offset-m3 l10 offset-l1"
                    />
                </div>
              </CardPage>

            </Card>

          </div>

          <div className="section col s12 m7 offset-m5 l4">

            <Card color={drugTestColor} column_size="center col s12 m12 l6" title="Drug Test">

              <CardPage>
                <div className="row button-row-override">
                  <br/>
                  <StatusButton 
                    status={this.state.drugtest_status} 
                    column_size="center col s6 offset-s3 m6 offset-m3 l10 offset-l1"
                    />
                </div>
              </CardPage>

            </Card>

            <Card color={fitnessTestColor} column_size="center col s12 m12 l6" title="Fitness Test">

              <CardPage>
                <div className="row button-row-override">
                  <br/>
                  <StatusButton 
                    status={this.state.fitness_status} 
                    column_size="center col s6 offset-s3 m6 offset-m3 l10 offset-l1"
                    />
                </div>
              </CardPage>

            </Card>

          </div>

          {/* <Card color="grey" column_size="center col s12 m6 l2" title="issue hold">

              <CardPage>
                <div>
                  <StatusButton status="issue" />
                </div>
              </CardPage>

            </Card> */}

        </div>

        <div className="divider">></div>

      </div>
    )
  }

}

export default InfoBlock;




