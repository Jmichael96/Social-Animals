import React from "react";
import { MDBMask, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "./style.css";
import Carousel from "../Carousel/index";
const Home = (props) => {
    let Greeting;
    if (props.user === null) {
        Greeting = (
            <div id="apppage">
                <p id="title" className="h1-responsive text-center">
                    Welcome to Social Animals!{" "}
                </p>
                <Carousel />

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
                <p id="title" className="h1-responsive text-center">
                    Welcome to Social Animals!{" "}
                </p>
                <Carousel />

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
    }
    return (
        <div className="Header">
            {Greeting}
        </div>
    )
}
export default Home;