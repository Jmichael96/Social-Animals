import React, { Component } from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
// import Pet from "../Pet/index";
// import petfinderClient from "petfinder-client";

export function PetList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function PetListItem({
  name,
  animal,
  media,
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
