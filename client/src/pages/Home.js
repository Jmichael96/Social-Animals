import React from "react";
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBContainer, MDBFooter } from "mdbreact";
import "./styles/home.css";

const Home = (props) => {
    return (
      <div id="apppage">
          <MDBMask className="d-flex justify-content-center align-items-center app">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    Welcome to Social Animals!{" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                    This app was created based off our mutual love of animals. Feel free to use this service to search for animals, post about your pet and search for nearby rescue animals!
                  </h6>
                  <MDBBtn color="elegant" href="/login">Log In</MDBBtn>
                  <MDBBtn color="unique" href="/signup">Create Account</MDBBtn>
                  
                </div>
                <MDBCol md="6" xl="5" className="mt-xl-5">
                  <img
                    src="http://pluspng.com/img-png/cute-animal-png-hd-best-animals-hd-wallpapers-screenshot-thumbnail-394.png"
                    alt=""
                    className="img-fluid"
                  />
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>

        <MDBFooter color="rgba(244, 67, 54, 0.7) rgba-red-strong" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">About Us</h5>
            <p>
             Listed here is the information for our Github repositories, personal portfolios and LinkedIn profiles.  
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Github</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://github.com/rchlblns" target="_blank">Richelle Billones</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/Jmichael96" target="_blank">Jeffrey VanHorn</a>
              </li>
              <li className="list-unstyled">
                <a href="https://github.com/joshehenry" target="_blank">Joshua Henry</a>
              </li>
             
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Personal Portfolios</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://rchlblns.github.io/current-portfolio/" target="_blank">Richelle Billones</a>
              </li>
              <li className="list-unstyled">
                <a href="https://jvh-portfolio-96.herokuapp.com/" target="_blank">Jeffrey VanHorn</a>
              </li>
              <li className="list-unstyled">
                <a href="https://joshehenry.github.io/Bootstrap-Portfolio/" target="_blank">Joshua Henry</a>
              </li>
             
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">LinkedIn</h5>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/richellebillones/" target="_blank">Richelle Billones</a>
              </li>
              <li className="list-unstyled">
                <a href="HTTPS://WWW.LINKEDIN.COM/IN/JEFFREY-VHMICHAEL/" target="_blank">Jeffrey VanHorn</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/joshua-henry-a5aa1a55//" target="_blank">Joshua Henry</a>
              </li>
             
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </MDBFooter>
      </div>
    );
  }
export default Home;




