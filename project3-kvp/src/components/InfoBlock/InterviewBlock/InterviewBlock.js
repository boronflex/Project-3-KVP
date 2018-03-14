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
import "./InterviewBlock.css";

import Collapsible from "../../Card/Collapsible";
import CollapsibleItem from "../../Card/Collapsible/CollapsibleItem";
import OfferData from '../../Inputs/OfferData/OfferData';
import NoOffer from '../../Inputs/NoOffer/NoOffer'
import ProjectDisplayBlock from '../../ProjectDisplayBlock/ProjectDisplayBlock/ProjectDisplayBlock';
import SpreadDisplayBlock from '../../ProjectDisplayBlock/SpreadDisplayBlock/SpreadDisplayBlock'
import { isNull } from "util";

class InterviewBlock extends React.Component {

  constructor(props) {
    super(props);
    this.handleinProgressClick = this.handleProgressClick.bind(this);
    this.state = {
      candidate: this.props.candidate_info,
      collapseCardColor: null,
      application_status: null,
      applicationColor: null,
      reference_status: null,
      referencesColor: null,
      offerpaperwork_status: null,
      offerLetterColor: null,
      drugtest_status: null,
      drugTestColor: null,
      fitness_status: null,
      fitnessTestColor: null,
      ishired: null,
    }
  };

  //status buttons
  //need click events for these here, they change status, maybe they take state (i.e. application, so they know what to update) name
  //these probably need to inherit from cards to change-that makes the most sense

  componentDidMount() {
    this.getCandidateStatus();
  }

  //needs to be refactored but this is the state handler for color and text displays whenever the data comes in
  getCandidateStatus() {

    //will use api to grab this and set state
    const candidate = this.state.candidate;

    //#############begin color control/status control block###############

    //all the if statements are split out for planning and my organizition, if there is time, refactor down to single handler function
    // function (progress, hired){
    //if statements
    //return color
    //}

    let collapseCardColor = null;

    let applicationColor = null;
    let application_status = null;

    let referencesColor = null;
    let reference_status = null;

    let offerLetterColor = null;
    let offerpaperwork_status = null;

    let drugTestColor = null;
    let drugtest_status = null;

    let fitnessTestColor = null;
    let fitness_status = null;

    //collapsible status/color control
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
    if (isNull(candidate.app_sent_by)) {
      applicationColor = "red";
      application_status = "not started";
    } else if (candidate.app_sent_by && isNull(candidate.app_returned)) {
      applicationColor = "amber";
      application_status = "in progress";
    } else if (candidate.app_returned) {
      applicationColor = "green";
      application_status = "complete";
    }

    //reference status/control
    if (candidate.app_returned && isNull(candidate.ref_checks_ip)) {
      referencesColor = "red";
      reference_status = "not started";
    } else if (candidate.ref_checks_ip && isNull(candidate.ref_checks_complete)) {
      referencesColor = "amber";
      reference_status = "in progress";
    } else if (candidate.ref_checks_complete) {
      referencesColor = "green";
      reference_status = "complete";
    } else {
      referencesColor = "red";
      reference_status = "not started";
    }

    //offer letter & new hire paperwork status/control
    if (candidate.ref_checks_complete && isNull(candidate.off_nh_pkg_sent)) {
      offerLetterColor = "red";
      offerpaperwork_status = "not started";
    } else if (candidate.off_nh_pkg_sent && isNull(candidate.off_nh_pkg_returned)) {
      offerLetterColor = "amber";
      offerpaperwork_status = "in progress";
    } else if (candidate.off_nh_pkg_returned) {
      offerLetterColor = "green";
      offerpaperwork_status = "complete";
    } else {
      offerLetterColor = "red";
      offerpaperwork_status = "not started";
    }

    //drug test
    if (candidate.off_nh_pkg_returned && isNull(candidate.drug_test)) {
      drugTestColor = "red";
      drugtest_status = "not started";
    } else if (candidate.drug_test && isNull(candidate.drug_test_complete)) {
      drugTestColor = "amber";
      drugtest_status = "in progress";
    } else if (candidate.drug_test_complete) {
      drugTestColor = "green";
      drugtest_status = "complete";
    } else {
      drugTestColor = "red";
      drugtest_status = "not started";
    }

    //fitness test
    if (candidate.off_nh_pkg_returned && isNull(candidate.fitness_test)) {
      fitnessTestColor = "red";
      fitness_status = "not started";
    } else if (candidate.fitness_test && isNull(candidate.fitness_test_complete)) {
      fitnessTestColor = "amber";
      fitness_status = "in progress";
    } else if (candidate.fitness_test_complete) {
      fitnessTestColor = "green";
      fitness_status = "complete";
    } else {
      fitnessTestColor = "red";
      fitness_status = "not started";
    }

    this.setState({

      collapseCardColor: collapseCardColor,
      application_status: application_status,
      applicationColor: applicationColor,
      reference_status: reference_status,
      referencesColor: referencesColor,
      offerpaperwork_status: offerpaperwork_status,
      offerLetterColor: offerLetterColor,
      drugtest_status: drugtest_status,
      drugTestColor: drugTestColor,
      fitness_status: fitness_status,
      fitnessTestColor: fitnessTestColor,

    });

    //#############end color control/status control block###############
  }

  //############### click handlers -rough draft -will need refactoring
  //can possibly send through props to button but will handle here for now to get working
  //can propably map through state to get this refactored down
  //application click

  handleProgressClick = (stage) => {

    const state = this.state;

    switch (stage) {

      case 'application':

        console.log("application stage clicked")

        //this logic will be replaced with an update api call next
        //instead of just set states
        //set value in database then call get to get new data
        //first grab all candidate data to make it work, then optimize by just pinpointing stage

        if (state.application_status === "not started") {

          this.setState({
            application_status: "in progress",
            applicationColor: "amber"
          })

        } else if (state.application_status === "in progress") {

          this.setState({
            application_status: "complete",
            applicationColor: "green"
          })
        }

        break;

      case 'references':

        console.log("reference stage clicked")

        if (state.reference_status === "not started") {

          //replace with api call next, just fleshing out logic here

          this.setState({
            reference_status: "in progress",
            referencesColor: "amber"
          })

        } else if (state.reference_status === "in progress") {

          this.setState({
            reference_status: "complete",
            referencesColor: "green"
          })
        }

        break;

      case 'offerPaperwork':

        console.log("offer and paperwork stage clicked")

        break;

      case 'drugTest':

        console.log("drug test stage clicked")

        //if drug test and fitness test complete changed hired status to true 

        if (state.drugtest_status === "complete" && state.fitness_status === "complete") {
          this.setState({
            isHired: true
          })
        }

        break;

      case 'fitnessTest':

        console.log("fitness test stage clicked")

        if (state.drugtest_status === "complete" && state.fitness_status === "complete") {
          this.setState({
            isHired: true
          })
        }

        break;

      default:

        break;
    }
  };

  //############### click handlers -rough draft -will need refactoring

  render() {

    const candidate = this.state.candidate;

    const state = this.state;

    if (isNull(state.collapseCardColor)) {

      return <div>Loading...</div>;

    } else {

      return (

        <div className="section">

          <div className="row">

            <div className="section col s12 m5 l2">

              <Collapsible color={state.collapseCardColor} column_size="col s12 m12 l12">

                <CollapsibleItem color={state.collapseCardColor} text="white-text" collapsible_heading={candidate.first_name + " " + candidate.last_name}>

                  <p>"{candidate.nick_name}"</p>

                </CollapsibleItem>

                <CollapsibleItem color={state.collapseCardColor} text="white-text" collapsible_heading="Candidate Info">

                  <p className="center">phone 1:</p>
                  <p className="center">{candidate.phone_1}</p>

                  <p className="center">phone 2:</p>
                  <p className="center">{candidate.phone_2}</p>

                  <p className="center">address:</p>
                  <p className="center">{candidate.address_st + " " + candidate.city + " " + candidate.address_state + " " + candidate.zip}</p>

                  <p className="center">email:</p>
                  <p className="center">{candidate.email}</p>

                </CollapsibleItem>

                <CollapsibleItem color={state.collapseCardColor} text="white-text" collapsible_heading="Hiring Status">


                </CollapsibleItem>

              </Collapsible>

            </div>

            <div className="section col s12 m7 l6">

              <Collapsible color="blue-grey darken-1" column_size="col s12 m12 l12">

                <CollapsibleItem color="blue-grey darken-1" text="white-text" collapsible_heading="Offer Details">

                  <OfferData />
                  use onchange to pass to this see on click from hr block
                  can call a function in interview block to change state in component from offerdata block

                </CollapsibleItem>

                <CollapsibleItem color="blue-grey darken-1" text="white-text" collapsible_heading="No Offer">

                  <NoOffer />

                </CollapsibleItem>

              </Collapsible>

            </div>

            <div className="section col s12 m7 l4">

              <Collapsible color="blue-grey darken-1" column_size="col s12 m12 l12">

                <CollapsibleItem color="blue-grey darken-1" text="white-text" collapsible_heading="Project Details">

                  <ProjectDisplayBlock />

                </CollapsibleItem>

                <CollapsibleItem color="blue-grey darken-1" text="white-text" collapsible_heading="Spread Details">

                  <SpreadDisplayBlock />

                </CollapsibleItem>

              </Collapsible>

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

}

export default InterviewBlock;




