import React, { Component } from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
// import { Provider } from "../components/PetContext";
import PetInput from "../components/PetInput";
import {PetList, PetListItem} from "../components/PetResults";
import pf from "petfinder-client";

const petfinder = pf({
  key: process.env.REACT_APP_PF_APIKEY,
  secret: process.env.REACT_APP_PF_APISECRET
});

class PetSearch extends Component {

  state = {
    location: "",
    animal: "",
    pets: [],
  };

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

  handleFormSubmit = (event) => {
    event.preventDefault();
    petfinder.pet
      .find({
        output: "full",
        location: this.state.location,
        animal: this.state.animal,
      })
      .then(res => this.setState({ pets: res.data}))
      // {
        // let pets;
        // if (data.petfinder.pets && data.petfinder.pets.pet) {
        //   if (Array.isArray(data.petfinder.pets.pet)) {
        //     pets = data.petfinder.pets.pet;
        //   } else {
        //     pets = [data.petfinder.pets.pet];
        //   }
        // } else {
        //   pets = [];
        // }
        // this.setState({ pets });
      // });
  };

  render() {
    return (
      <div>
        {/* <Provider value={this.state}> */}
          <MDBContainer>
            <MDBRow>
              <MDBCol className="text-center">
                <h3>Search for adoptions in your area</h3>
                <PetInput 
                handleAnimalChange={this.handleAnimalChange}
                handleLocationChange={this.handleLocationChange}
                handleFormSubmit={this.handleFormSubmit}/>
              </MDBCol>
            </MDBRow>
            <MDBBtn
            onClick={this.handleFormSubmit}
            color="unique"
            type="submit"
          >
            Find pets!
            </MDBBtn>
            <MDBRow>
              <MDBCol className="text-center">
                <h3>Available Pets:</h3>
                {/* <PetResults> */}
                  <PetList>
                    {this.state.pets.map(pet => {
                      return (
                        <PetListItem
                          key={pet.name}
                          name={pet.name}
                          location={pet.location}
                          contact={pet.contact}
                        />
                      );
                    })}
                  </PetList>
                {/* </PetResults> */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        {/* </Provider> */}
      </div>
    )
  }
}

export default PetSearch;