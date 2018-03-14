import React from "react";
import "./ProjectDisplayContainer.css";
import ProjectDisplayBlock from '../ProjectDisplayBlock/ProjectDisplayBlock'

import projectSampleData from '../../SampleData/project_sampledata';

function getData(inputData) {
  const data = inputData.map((item) => {
    return {
      ...item
    }
  })
  return data;
}

class ProjectDisplayContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: getData(projectSampleData),
    }

  }

  render() {

    return (

      <div className={this.props.column_size}>

        <ProjectDisplayBlock project_info={this.state.projects}/>

      </div>

    );

  }
}

export default ProjectDisplayContainer;

