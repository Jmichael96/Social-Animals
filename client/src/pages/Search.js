import React from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import pf from "pet-finder-api";
import {Pet, pet, pets} from "../components/Pet/index";

const petfinder = pf({
  key: process.env.REACT_APP_PF_APIKEY,
  secret: process.env.REACT_APP_PF_APISECRET
});

class Search extends React.Component {
  constructor(props) {
    super(props);

    // empty array to hold pets retrieved from the petfinder api
    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    petfinder.pet
      .find({ location: "Houston, TX", output: "full" })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
          this.setState({
            pets
          });
        }
      })
  }

  render() {
    return (
      <div>
        <MDBContainer>
          <MDBCol>
            <h1>Adopt Me</h1>
            <MDBRow>
              {this.state.pets(map(pet => {
                let breed;
                if (Array.isArray(pet.breeds.breed)) {
                  breed = pets.breed.breed.join(" ");
                } else {
                  breed = pets.breed.breed;
                }
                return (
                  <Pet
                    name={pet.name}
                    animal={pet.animal}
                    key={pet.id}
                    breed={breed}
                  />
                )
              }))}
            </MDBRow>
          </MDBCol>
        </MDBContainer>
      </div>
    )
  }


}

export default Search;