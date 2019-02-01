import React, { Component } from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import pf from "petfinder-client";
import SearchBox from "../components/PetSearchBox/index";
import PetResults from "../components/PetResults/index"

const petfinder = pf({
  key: process.env.REACT_APP_PF_APIKEY,
  secret: process.env.REACT_APP_PF_APISECRET
});

class Search extends Component {
  constructor(props) {
    super(props);

    // empty array to hold pets retrieved from the petfinder api
    this.state = {
      location: "Houston, TX",
      animal: " ",
      breed: " ",
      breeds: [],
      handleLocationChange: this.handleLocationChange,
      handleAnimalChange: this.handleAnimalChange,
      handleBreedChange: this.handleBreedChange,
      getBreeds: this.getBreeds
    };
  }

  handleLocationChange = (event) => {
    this.setState({
      location: event.target.value
    })
  }

  handleAnimalChange = (event) => {
    this.setState(
      {
        animal: event.target.value,
        breed: " ",
      },
      this.getBreeds
    );
  };

  handleBreedChange = (event) => {
    this.setState({
      breed: event.target.value
    });
  };

  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({
            breeds: data.petfinder.breeds.breed
          });
        } else {
          this.setState({ breeds: [] });
        }
      })
    }
  }

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <h1>Adopt Me</h1>
            <MDBCol>
              <SearchBox />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <PetResults />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

export default Search;