import React from "react";
import { Link } from "react-router-dom"
import { MDBMask, MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";

const Home = (props) => {
    let Greeting;
    if (props.user === null) {
        Greeting = (<div id="apppage">
            <MDBMask className="d-flex justify-content-center align-items-center app">
                <MDBContainer>
                    <MDBRow>
                        <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                            <h1 className="h1-responsive font-weight-bold mt-sm-5">
                                Welcome to Social Animals!{" "}
                            </h1>
                            <hr className="hr-light" />
                            <h6 className="mb-4">
                                This app was created based off our mutual love of animals. Feel free to use this service post about your pet and search for nearby rescue animals!
                            </h6>
                            <MDBBtn color="elegant"><Link to="/login">Log In</Link></MDBBtn>
                            <MDBBtn color="unique"><Link to="/signup">Sign Up</Link></MDBBtn>

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

            <MDBContainer>
                <MDBRow className="py-5">
                    <MDBCol md="12" className="text-center">
                        <p>
                            GitHub Repo:https://github.com/rchlblns
                            Portfolio:
                            LinkedIn:
        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>)
    } else if (props.user.username) {
        Greeting = (
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
                                    This app was created based off our mutual love of animals. Feel free to use this service post about your pet and search for nearby rescue animals!
                    </h6>

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

                <MDBContainer>
                    <MDBRow className="py-5">
                        <MDBCol md="12" className="text-center">
                            <p>
                                GitHub Repo:https://github.com/rchlblns
                                Portfolio:
                                LinkedIn:
                </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    } else if (props.user.username) {
        Greeting = (
            <p id="greeting">
                Welcome, <strong>{props.user.username} </strong>
            </p>
        )
    }
    return (
        <div className="Header">
            {Greeting}
        </div>
    )
}
export default Home;