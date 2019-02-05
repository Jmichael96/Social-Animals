import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBInput, MDBRow, MDBBtn } from "mdbreact";
import { ANIMALS } from "petfinder-client";
import axios from "axios";

function PetInput (props) {

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <form
              className="search"
            >
              <div>
                <label htmlFor="animal">
                  Choose an animal
                    <select
                    value={props.animal}
                    onChange={props.handleAnimalChange}
                    className="browser-default custom-select"
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
              <div className="form-group">
                <label htmlFor="zipcode">
                  Enter zipcode
                  <input
                    value={props.location}
                    onChange={props.handleLocationChange}
                    type="text"
                    className="form-control"
                    id="zipCodeInput"
                  />
                </label>
              </div>
            </form>
            <MDBBtn
              onClick={props.handleFormSubmit}
              color="unique"
              type="submit"
            >
              Find pets!
          </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
};

export default PetInput;