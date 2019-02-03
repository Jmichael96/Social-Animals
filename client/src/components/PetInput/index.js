import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBInput, MDBRow, MDBBtn } from "mdbreact";
import { ANIMALS } from "petfinder-client";
import { Consumer } from "../PetContext";

class PetInput extends Component {

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.search();
  };

  render() {
    return (
      <Consumer>
        {context => (
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form onSubmit={this.handleFormSubmit}>
                  <div>
                    <label htmlFor="animal">
                      Choose an animal
                    <select
                        className="browser-default custom-select"
                        onChange={context.handleAnimalChange}
                        value={context.animal}
                      >
                        <option />
                        {ANIMALS.map(animal => (
                          <option value={animal} key={animal}>
                            {animal}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  {/* </MDBCol>
              <MDBCol> */}
                  <div className="form-group">
                    <label htmlFor="zipcode">
                      Enter zipcode
                      <input
                        type="text"
                        className="form-control"
                        id="zipCodInput"
                        onChange={context.handleLocationChange}
                        value={context.location}
                      />
                    </label>
                  </div>
                </form>
                {/* </MDBCol>
              <MDBCol> */}
                <MDBBtn
                  color="unique"
                  type="submit"
                // onSubmit={this.handleFormSubmit}
                >
                  Find pets!
                 </MDBBtn>
              </MDBCol>
            </MDBRow>
            {/* <MDBRow> */}
            {/* </MDBRow> */}

          </MDBContainer>
        )}
      </Consumer>
    )
  }
};

export default PetInput;