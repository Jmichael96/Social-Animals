import React, { Component } from "react";
import pf from "petfinder-client";
import { Consumer } from "../PetContext";
import Pet from "../Pet/index";
// import PetInput from "../PetInput";

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
        output: "full",
        location: this.props.searchParams.location,
        animal: this.props.searchParams.animal,
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
      <Pet
        key={Pet.id}
        id={Pet.id}
        animal={Pet.animal}
        name={Pet.name}
        media={Pet.media}
        location={`${Pet.contact.city}, ${Pet.contact.state}`}
      />

    );
  }
}

export default function ResultsWithContext(props) {
  return (
    <Consumer>
      {context => <Results {...props} searchParams={context} />}
    </Consumer>
  );
};
