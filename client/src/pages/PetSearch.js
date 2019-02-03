import React, { Component } from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import { Provider } from "../components/PetContext";
import PetInput from "../components/PetInput";
import PetResults from "../components/PetResults";

class PetSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "77063",
      animal: "",
      pets: [],
      handleAnimalChange: this.handleAnimalChange,
      handleLocationChange: this.handleLocationChange
    };
  }

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value
    })
  };
  
  handleAnimalChange = (event) => {
    this.setState({
      animal: event.target.value
    });
  };
  
  render() {
    return (
      <div>
        <Provider value={this.state}>
        <MDBContainer>
          <MDBRow>
            <MDBCol className="text-center">
              <h3>Search for adoptions in your area</h3>
              <PetInput />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="text-center">
              <h3>Available Pets:</h3>
              <PetResults />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </Provider>
      </div>
    )
  }
}

export default PetSearch;