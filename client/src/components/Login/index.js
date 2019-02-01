import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import "./style.css";

import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon } from 'mdbreact';

const LoginForm = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody className="mx-4">
              <div className="text-center">
                <h3 className="pink-text mb-5">
                  <strong>Login</strong>
                </h3>
              </div>
              <MDBInput label="Your email" group type="text" validate />
              <MDBInput label="Your password" group type="password" validate />
              <div className="md-form pb-3">
                <div className="form-check my-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="defaultCheck12"
                  />
                  <label htmlFor="defaultCheck12" className="grey-text">
                    Accept the
                    <a href="#!" className="blue-text">

                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <MDBRow className="d-flex align-items-center mb-4">
                <MDBCol md="6" className="text-center">
                  <button
                    type="button"
                    className="btn btn-pink btn-block btn-rounded z-depth-1"
                  >
                    Login
                  </button>
                </MDBCol>
                <MDBCol md="6">
                 
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
            
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};



export default LoginForm;



