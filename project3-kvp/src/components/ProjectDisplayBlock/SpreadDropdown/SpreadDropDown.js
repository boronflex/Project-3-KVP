import React from "react";
import "./SpreadDropDown.css";

import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { isNull } from "util";


class SpreadDropDown extends React.Component {

  state = {
    selectedOption: '',
  }

  myOptions = () => {

    let spreadNums = this.props.projects
      .filter(projects => projects.project_idfk === this.props.selectedProject)
      .map(projects => {
        let spreadNum = projects.spread_num
        return spreadNum
      })

    let feedOptions = spreadNums.map(vals => {
      let options = { value: vals, label: vals }
      return options
    })

    return feedOptions

  }

  handleChange = (selectedOption) => {

    this.setState({ selectedOption });
    //console.log(`Selected: ${selectedOption.label}`); broken

    if (isNull(selectedOption)) {
      selectedOption = '';
    } else {
      this.props.parentChange(selectedOption.label)
    }
  }

    render() {

      const { selectedOption } = this.state;
      const value = selectedOption && selectedOption.value;

      return (
        <div>
          <Select
            name="form-field-name"
            placeholder="Select Spread..."
            value={value}
            onChange={this.handleChange}
            options={this.myOptions()}
          />
        </div>
      );
    }
  }


  export default SpreadDropDown;

