import React from "react";
import "./ProjectDropDown.css";

import Select from 'react-select';
import 'react-select/dist/react-select.css';


class ProjectDropDown extends React.Component {

  state = {
    selectedOption: '',
  }

  myOptions = () => {

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    let projectNums = this.props.projects
      .map(projects => {
        let projectID = projects.project_idfk
        return projectID
      }).filter(onlyUnique)

    let feedOptions = projectNums.map(vals => {
      let options = { value: vals, label: vals }
      return options
    })

    return feedOptions

  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    //console.log(`Selected: ${selectedOption.label}`); broken
    this.props.parentChange(selectedOption.label)
  }

  render() {

    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    return (
      <div>
        <Select
          name="form-field-name"
          value={value}
          onChange={this.handleChange}
          options={this.myOptions()}
        />
      </div>
    );
  }
}


export default ProjectDropDown;

