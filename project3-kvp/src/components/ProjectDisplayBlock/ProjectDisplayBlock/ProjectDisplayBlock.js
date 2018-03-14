import React from "react";
import "./ProjectDisplayBlock.css";

import SpreadDisplayBlock from '../SpreadDisplayBlock/SpreadDisplayBlock'

import ProjectDropDown from '../ProjectDropDown/ProjectDropDown'


class ProjectDisplayBlock extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: this.props.project_info,
      selectedProject: null,
    }

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(value) {
    this.setState({
      selectedProject: value
    })
    console.log('wtf isnt this working')
  }

  render() {

    return (
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <ProjectDropDown projects={this.state.projects}/>
              <br/>
              <SpreadDisplayBlock />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDisplayBlock;

