import React from "react";
import { MDBContainer } from "mdbreact";
import Posts from "../components/Profile/index";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse,
} from "mdbreact";
import "./styles/user.css";


const Profile = (props) => {
  let Profile;
  if (props.user === null) {
    Profile = (
      <div>
      </div>
    )
  } else if (props.user.username) {
    Profile = (
      <div>
        <MDBContainer>
          <MDBNavbar id="navbar" expand="md">
            <MDBNavbarBrand>
              <span >{props.user.avatar}</span>
            </MDBNavbarBrand>
            <MDBCollapse id="navbarCollapse3" navbar>
                <p to="#!"><strong className="font-weight-bold">Name:</strong> {props.user.firstname} {props.user.lastname}</p>
                <p to="#!" left className="text-center"> <strong className="font-weight-bold"> My Favorite Animal is A:</strong> {props.user.favoriteAnimal}</p> 
            </MDBCollapse>
          </MDBNavbar>
        </MDBContainer>
        <Posts />
      </div>
    )
  }
  return (
    <div className="Header">
      {Profile}
    </div>
  )
}

export default Profile;