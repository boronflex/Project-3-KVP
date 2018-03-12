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
      application_status: "",
      reference_status: "",
      offerpaperwork_status: "",
      drugtest_status: "",
      fitness_status: ""
    };
  }

  //collapsible card,
  //if the application field is empty status or color is red
  //if the application field has data status or color is amber
  //if the drug test and fitness test have data, color is green
  //eventially add in the collapsible a hold field --low priority
  //if else function- see status button

  //application card
  //want to show:
  //who sent and date
  //who received and date
  //button
  // not started
  // in progress
  // complete

  //reference checks
  //dependent on application returned
  //want to show:
  //who sent and date
  //who received and date
  //button
  // not started
  // in progress
  // complete

  //offer letter and new hire paperwork
  //dependent on reference checks completion
  //want to show:
  //who sent and date
  //who received and date
  //button
  // not started
  // in progress
  // complete

  //drug test
  //dependent on offer letter and new hire paperwork
  //want to show:
  //who sent and date
  //who received and date
  //button
  // not started
  // in progress
  // complete

  //fitness test
  //dependent on offer letter and new hire paperwork
  //want to show:
  //who sent and date
  //who received and date
  //button
  // not started
  // in progress
  // complete

  //status buttons
  //need click events for these here, they change status, maybe they take stage (i.e. application, so they know what to update) name
  //these probably need to inherit from cards to change-that makes the most sense


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
    }

    //application status/control
    let applicationColor = null;
    let applicationStatus = null;
    if (isNull(candidate.app_sent_by)) {
      applicationColor = "red";
      applicationStatus = "not started";
    } else if (candidate.app_sent_by && isNull(candidate.app_returned)) {
      applicationColor = "amber";
      applicationStatus = "in progress";
    } else if (candidate.app_returned) {
      applicationColor = "green";
      applicationStatus = "complete";
    }

    //reference status/control
    let referencesColor = null;
    let referencesStatus = null;
    if (candidate.app_returned && isNull(candidate.ref_checks_ip)) {
      referencesColor = "red";
      referencesStatus = "not started";
    } else if (candidate.ref_checks_ip && isNull(candidate.ref_checks_complete)) {
      referencesColor = "amber";
      referencesStatus = "in progress";
    } else if (candidate.ref_checks_complete) {
      referencesColor = "green";
      referencesStatus = "complete";
    }

    //offer letter & new hire paperwork status/control
    let offerLetterColor = null;
    let offerLetterStatus = null;
    if (candidate.ref_checks_complete && isNull(candidate.off_nh_pkg_sent)) {
      offerLetterColor = "red";
      offerLetterStatus = "not started";
    } else if (candidate.off_nh_pkg_sent && isNull(candidate.off_nh_pkg_returned)) {
      offerLetterColor = "amber";
      offerLetterStatus = "in progress";
    } else if (candidate.off_nh_pkg_returned) {
      offerLetterColor = "green";
      offerLetterStatus = "complete";
    }

    //drug test
    let drugTestColor = null;
    let drugTestStatus = null;
    if (candidate.off_nh_pkg_returned && isNull(candidate.drug_test)) {
      drugTestColor = "red";
      drugTestStatus = "not started";
    } else if (candidate.drug_test && isNull(candidate.drug_test_complete)) {
      drugTestColor = "amber";
      drugTestStatus = "in progress";
    } else if (candidate.drug_test_complete) {
      drugTestColor = "green";
      drugTestStatus = "complete";
    }

    //fitness test
    let fitnessTestColor = null;
    let fitnessTestStatus = null;
    if (candidate.off_nh_pkg_returned && isNull(candidate.fitness_test)) {
      fitnessTestColor = "red";
      fitnessTestStatus = "not started";
    } else if (candidate.fitness_test && isNull(candidate.fitness_test_complete)) {
      fitnessTestColor = "amber";
      fitnessTestStatus = "in progress";
    } else if (candidate.fitness_test_complete) {
      fitnessTestColor = "green";
      fitnessTestStatus = "complete";
    }


    //place holder for now don't forget to switch hired status on drug and fitness test complete.
    let isHired = false;
    if (candidate.fitness_test_complete && candidate.drug_test_complete) {
      isHired = true;
    }

    //#############end color control/status control block###############


    return (
      <div className="row">

        <Collapsible color={collapseCardColor} column_size="col s2">

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
            <p className="center">added_by</p>

            <p className="center">Title:</p>
            <p className="center">offer_title</p>

            <p className="center">Pay:</p>
            <p className="center">offer_pay</p>

            <p className="center">Start Date:</p>
            <p className="center">requested_start_date</p>

            <p className="center">Project Number:</p>
            <p className="center">project_number</p>

          </CollapsibleItem>

        </Collapsible>

        <Card column_size="center col s2" title="Application">

          <CardPage>
            <div>
              <StatusButton />
            </div>
          </CardPage>

        </Card>

        <Card column_size="center col s2" title="Reference Checks">

          <CardPage>
            <div>
              <StatusButton />
            </div>
          </CardPage>

        </Card>

        <Card column_size="center col s2" title="offer letter & new hire paperwork">

          <CardPage>
            <div>
              <StatusButton />
            </div>
          </CardPage>

        </Card>

        <Card column_size="center col s2" title="Drug Test">

          <CardPage>
            <div>
              <StatusButton />
            </div>
          </CardPage>

        </Card>

        <Card column_size="center col s2" title="Fitness Test">

          <CardPage>
            <div>
              <StatusButton />
            </div>
          </CardPage>

        </Card>

      </div>
    )
  }

}

export default InfoBlock;




