import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Pet from "../Pet/index";
// import petfinderClient from "petfinder-client";
// import axios from "axios";


// class PetResults extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       pets: []
//     }
//   }

//   componentDidMount() {
//     this.search();
//   }

//   search = () => {
//     axios.get(`http://api.petfinder.com/pet.find?key=${process.env.REACT_APP_PF_APIKEY}&animal=${this.state.animal}&location=${this.state.location}&output=full&format=json&callback=?`)
//       .then(data => {
//         // console.log(data)
//         // this.setState({ pet: data.petfinder.pets.pet })
//         let pets;
//         if (data.petfinder.pets && data.petfinder.pets.pet) {
//           if (Array.isArray(data.petfinder.pets.pet)) {
//             pets = data.petfinder.pets.pet;
//           } else {
//             pets = [data.petfinder.pets.pet];
//           }
//         } else {
//           pets = [];
//         }
//         this.setState({ pets });
//       });
//   }
//   render() {
//     return (
//       this.state.pets.map(pet =>
//         <div className="info">
//           <h1>{pet.name}</h1>
//           <h2>{`${pet.animal} - ${pet.location} - ${pet.id}`}</h2>
//         </div>
//       )
//     )
//   }
// }


export function PetList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function PetListItem({
  name,
  animal,
  // media,
  location,
  contact
}) {
  return (
    <li className="list-group-item">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
          <h3>{name}</h3>
          <h4>{`${animal} - ${location} - ${contact}`}</h4>
          </MDBCol>
        </MDBRow>
      </MDBContainer>


    </li>
  )
}