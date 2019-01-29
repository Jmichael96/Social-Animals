import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask, MDBRow, MDBCol, MDBBtn,   MDBView, MDBContainer, MDBFormInline } from "mdbreact";
import "./index.css";

class AppPage extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const navStyle = { marginTop: "4rem" };
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        <Router>
          <div>
            <MDBNavbar
              color="black"
              style={navStyle}
              dark
              expand="md"
              fixed="top"
              scrolling
              transparent
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className="white-text">Social Animals</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>

                      <MDBNavLink to="#!">Home</MDBNavLink>

                    </MDBNavItem>

                    <MDBNavItem>

                      <MDBNavLink to="#!">Blogs</MDBNavLink>
                    
                    </MDBNavItem>

                    <MDBNavItem>
                      <MDBNavLink to="#!">Search for Animals</MDBNavLink>
                      </MDBNavItem>

                      <MDBNavItem>
                        <MDBNavLink to="#!">Contact Us</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className="md-form my-0">
                          <input
                            className="form-control mr-sm-2"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
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
                  <MDBBtn color="elegant">Log In</MDBBtn>
                  <MDBBtn color="unique">Create Account</MDBBtn>
                  
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
        </MDBView>

        <MDBContainer>
          <MDBRow className="py-5">
            <MDBCol md="12" className="text-center">
              <p>
                GitHub Repo:
                Portfolio:
                LinkedIn: 
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AppPage;