import React from "react";
import Posts from "../components/Profile/index";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import "./styles/user.css";
import { MDBAnimation } from "mdbreact";

// displays user profile
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
        <MDBAnimation type="flipInX">
        <MDBContainer>
          <MDBCard className="w-50 mt-3 pink darken-4">
            <MDBCardBody>
              <MDBCardTitle className="white-text">Name: {props.user.firstname} {props.user.lastname}</MDBCardTitle>
              <MDBCardText className="white-text">My favorite animal is: {props.user.favoriteAnimal}!!
                </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        </MDBAnimation>
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

