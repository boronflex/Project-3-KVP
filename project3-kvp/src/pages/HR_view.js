import React from "react";

import Card from "../components/Card/Card";
import CardPage from "../components/Card/CardPage"
import Collapsible from "../components/Card/Collapsible"
import CollapsibleItem from "../components/Card/Collapsible/CollapsibleItem"
import StatusButton from '../components/Buttons/StatusButton';
import Container from "../components/Container";

import testData from '../components/SampleData/prospects';

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

            <div className="row">

              <Collapsible status="red" column_size="col s2" key={candidate.id}>

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
                  <p className="center">Kory Baxley</p>

                  <p className="center">Title:</p>
                  <p className="center">PC</p>

                  <p className="center">Pay:</p>
                  <p className="center">20</p>

                  <p className="center">Start Date:</p>
                  <p className="center">3/25/18</p>

                  <p className="center">Project Number:</p>
                  <p className="center">777777</p>

                </CollapsibleItem>

              </Collapsible>

              <Card column_size="center col s2">

                <CardPage>
                  <div>
                    <h6>Application</h6>
                    <p>not started</p>
                    <StatusButton>In Progress</StatusButton>
                  </div>
                </CardPage>

              </Card>

              <Card column_size="center col s2">

                <CardPage>
                  <div>
                    <h6>Reference checks</h6>
                    <p>not started</p>
                    <StatusButton>In Progress</StatusButton>
                  </div>
                </CardPage>

              </Card>

              <Card column_size="center col s2">

                <CardPage>
                  <div>
                    <h6>Offer Letter & New Hire Paperwork</h6>
                    <p>not started</p>
                    <StatusButton>In Progress</StatusButton>
                  </div>
                </CardPage>

              </Card>

              <Card column_size="center col s2">

                <CardPage>
                  <div>
                    <h6>Drug Test</h6>
                    <p>not started</p>
                    <StatusButton>In Progress</StatusButton>
                  </div>
                </CardPage>

              </Card>

              <Card column_size="center col s2">

                <CardPage>
                  <div>
                    <h6>Fitness Test</h6>
                    <p>not started</p>
                    <StatusButton>In Progress</StatusButton>
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
