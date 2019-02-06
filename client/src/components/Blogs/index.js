import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";

const Blogs = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          My Blogs
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Post about your love of animals here. Create as many posts as you like!
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://lh3.googleusercontent.com/rm71L4DZttnYslOASllXHucDg1QnublLMbqg8acMypnU4VwI1-quL8stYAYySdjao7AWnxtf2hfo644F0gVvlA=s750"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="dog" className="pr-2" />
                Dog
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Dog Lover</strong>
            </h3>
            <p>
              Example post over dogs. 
            </p>
            <p>
              by
              
                <strong>Richelle Billones</strong>
             
              
            </p>
            <MDBBtn color="success" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="cat" className="pr-2" />
               Cats
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>I love my cats!</strong>
            </h3>
            <p>
              Example post for cats. 
            </p>
            <p>
              by
              
                <strong>Jeffrey VanHorn</strong>
           
            
            </p>
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="https://gfnc1kn6pi-flywheel.netdna-ssl.com/wp-content/uploads/2015/12/about-happy-puppy.png"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="paw" className="pr-2" />
                Dog
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong></strong>
            </h3>
            <p>
              Another post for dogs, because they are awesome. 
            </p>
            <p>
              by
              
                <strong>Joshua Henry</strong>
         
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>

    
    
  );
}

export default Blogs;
