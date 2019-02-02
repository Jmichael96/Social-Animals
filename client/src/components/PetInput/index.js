import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBInput, MDBRow, MDBBtn } from "mdbreact";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.REACT_APP_PF_APIKEY,
  secret: process.env.REACT_APP_PF_APISECRET
});

class PetInput extends Component {

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <h3 className="h3 text-center">Find An Animal</h3>
              <div className="grey-text">
                <MDBInput
                  label="Animal"
                  group
                  type="password"
                  validate
                />
                <MDBInput
                  label="Breed (optional)"
                  group
                  type="text"
                  validate
                />
                <MDBInput
                  label="Location"
                  group
                  type="text"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn>Search</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
};

export default PetInput;