import React, { Component } from "react";
import pf from "petfinder-client";
// import { Consumer } from '../SearchContext';
import Pet from "../Pet/index";
import PetSearchBox from "../PetSearchBox/index";

const petfinder = pf({
  key: process.env.REACT_APP_PF_APIKEY,
  secret: process.env.REACT_APP_PF_APISECRET
});

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    this.search();
  }

  search = () => {
    petfinder.pet
      .find({
        output: 'full',
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
        breed: this.props.searchParams.breed
      })
      .then(data => {
        let pets;
        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        this.setState({ pets });
      });
  }
  render() {
    return (
      <div className="search">
        <PetSearchBox search={this.search} />
        {this.state.pets.map(pet => {
          let breed;
          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(', ');
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              id={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

export default Results;