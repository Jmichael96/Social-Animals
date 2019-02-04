import React, { Component } from "react";
import { MDBTimePicker, MDBCol } from "mdbreact";

class TimePickerPage extends Component {
  getPickerValue = value => {
  console.log(value);
};

render() {
  return (
      <MDBCol md="3">
        <MDBTimePicker id="timePicker" label="12hrs format" getValue={this.getPickerValue} />
      </MDBCol>
    );
  }
}

export default TimePickerPage;