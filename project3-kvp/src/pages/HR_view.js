import React from "react";

import Card from "../components/Card/Card";
import CardPage from "../components/Card/CardPage"
import Collapsible from "../components/Card/Collapsible"
import CollapsibleItem from "../components/Card/Collapsible/CollapsibleItem"
import StatusButton from '../components/Buttons/StatusButton';
import Container from "../components/Container";

import testData from '../components/SampleData/hr_sampledata';

function getData() {
  const data = testData.map((item) => {
    return {
      ...item
    }
  })
  return data;
}

//console.log(getData());

class HR_view extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      candidates: getData()
    }

    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {

  //   const target = event.target;
  //   const value = target.value;

  //   console.log("this is the current card: ")

  //   this.setState({
  //     current: value
  //   })

  // }

  render() {

    return (

      <Container>

        <h2>HR View </h2>

        {/* <input onChange={this.changeHandler} value="this is a value" /> */}

        {this.state.candidates
          .filter(candidate => candidate.in_hiring_process === true)
          .map(candidate => {

          return (

            // candidate.app_sent_by this will b status

            <div className="row" key={candidate.id}>

              <Collapsible status="red" column_size="col s2">

                <CollapsibleItem status="red" collapsible_heading={candidate.first_name + " " + candidate.last_name}>

                  <p>"{candidate.nick_name}"</p>

                </CollapsibleItem>

                <CollapsibleItem status="red" collapsible_heading="Candidate Info">

                  <p className="center">phone 1:</p>
                  <p className="center">{candidate.phone_1}</p>

                  <p className="center">phone 2:</p>
                  <p className="center">{candidate.phone_2}</p>

                  <p className="center">address:</p>
                  <p className="center">{candidate.address_st + " " + candidate.city + " " + candidate.address_state + " " + candidate.zip}</p>

                  <p className="center">email:</p>
                  <p className="center">{candidate.email}</p>

                </CollapsibleItem>

                <CollapsibleItem status="red" collapsible_heading="Offer Info">

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
                    <StatusButton/>
                  </div>
                </CardPage>

              </Card>

              <Card column_size="center col s2" title="Reference Checks">

                <CardPage>
                  <div>
                    <StatusButton/>
                  </div>
                </CardPage>

              </Card>

              <Card column_size="center col s2" title="offer letter & new hire paperwork">

                <CardPage>
                  <div>
                    <StatusButton/>
                  </div>
                </CardPage>

              </Card>

              <Card column_size="center col s2" title="Drug Test">

                <CardPage>
                  <div>
                    <StatusButton/>
                  </div>
                </CardPage>

              </Card>

              <Card column_size="center col s2" title="Fitness Test">

                <CardPage>
                  <div>
                    <StatusButton/>
                  </div>
                </CardPage>

              </Card>

            </div>

          );

        })}

        <div className="section col s7">

        </div>

      </Container >
    )
  }
}

export default HR_view;
