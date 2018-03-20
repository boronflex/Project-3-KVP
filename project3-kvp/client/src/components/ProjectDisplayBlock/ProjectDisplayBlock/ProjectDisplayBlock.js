import React from "react";
import "./ProjectDisplayBlock.css";

import API from "../../../utils/API"

import SpreadDisplayBlock from '../SpreadDisplayBlock/SpreadDisplayBlock'

import Collapsible from '../../Card/Collapsible/Collapsible'
import CollapsibleItem from '../../Card/Collapsible/CollapsibleItem'
import ProjectDropDown from '../ProjectDropDown/ProjectDropDown'

// import projectSampleData from '../../SampleData/project_sampledata';

// function getData(inputData) {
//   const data = inputData.map((item) => {
//     return {
//       ...item
//     }
//   })
//   return data;
// }

class ProjectDisplayBlock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      selectedOption: '',
      manager: '',
    }

  }

  componentDidMount() {

    //console.log('component has mounted');

    this.getProjectData();

  }

  getProjectData = () => {

    API.getSpreads()
      .then(res =>
        this.setState({
          projects: res.data
        })
      )
  }


  handleParentChange = (dataFromChild) => {
    this.setState({ selectedOption: dataFromChild });
    //console.log("state changed inparent")
  }


  render() {


    //console.log(this.state.selectedOption)

    return (
      <div className="row">
        {console.log(this.state.projects)}
        <div className={this.props.column_size}>
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <p>Project Search</p>
              <br />
              <ProjectDropDown projects={this.state.projects} parentChange={this.handleParentChange} />
              <br />
              <p>{"Survey Manager: " +
                this.state.projects
                  .filter(projects => projects.project_idfk === this.state.selectedOption && projects.spread_num === 1)
                  .map(projects => {
                    return (
                      projects.survey_manager
                    )

                  })
              }
              </p>
              <Collapsible color="blue-grey darken-1">
                {this.state.projects
                  .filter(projects => projects.project_idfk === this.state.selectedOption)
                  .map(projects => {

                    return (

                      <CollapsibleItem color="blue-grey darken-1" key={projects.id} collapsible_heading={`Spread ${projects.spread_num}`}>
                        <SpreadDisplayBlock projects={projects} />
                      </CollapsibleItem>

                    );

                  })}
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDisplayBlock;

