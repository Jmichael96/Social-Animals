import React, { Component } from "react";
import { MDBContainer, MDBCol, MDBInput, MDBRow, MDBBtn } from "mdbreact";
import { ANIMALS } from "petfinder-client";
import axios from "axios";

class PetInput extends Component {

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   this.search()
  // }
  // search = () => {
  //   axios.get(`http://api.petfinder.com/pet.find?key=${process.env.REACT_APP_PF_APIKEY}&animal=${this.animal}&location=${this.location}&output=basic&format=json&callback=?`)
  //   .then(data => {
  //     console.log(data)
  //     this.setState({ pet: data.petfinder.pets.pet })
  //   })
  // }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <form
              className="search"
              // onSubmit={this.handleFormSubmit}
            >
              <div>
                <label htmlFor="animal">
                  Choose an animal
                    <select
                    value={this.animal}
                    onChange={this.handleAnimalChange}
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
                    value={this.location}
                    onChange={this.handleLocationChange}
                    type="text"
                    className="form-control"
                    id="zipCodeInput"
                  />
                </label>
              </div>
            </form>
            <MDBBtn
              onClick={this.handleFormSubmit}
              color="unique"
              type="submit"
            >
              Find pets!
          </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
};

export default PetInput;