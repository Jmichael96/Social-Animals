import React from 'react';
import { MDBRow, MDBCol, MDBFooter, MDBContainer } from "mdbreact";
import "./style.css";
const Footer = () => {
    return (
        <MDBFooter  className="pink darken-4 font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="3" className="text-center">
                        <h5 className="title">About Us</h5>
                        <p id="text">
                            Listed here is the information for our Github repositories, personal portfolios and LinkedIn profiles.
                            </p>
                    </MDBCol>
                    <MDBCol md="3">
                        <ul className="text-center">
                        <h5 className="title">Github</h5>
                            <li  className="list-unstyled ">
                                <a id="list-unstyled" color="elegant" href="https://github.com/rchlblns" target="_blank">Richelle Billones</a>
                            </li>
                            <li className="list-unstyled">
                                <a id="list-unstyled" href="https://github.com/Jmichael96" target="_blank">Jeffrey VanHorn</a>
                            </li>
                            <li className="list-unstyled">
                                <a id="list-unstyled" href="https://github.com/joshehenry" target="_blank">Joshua Henry</a>
                            </li>

                        </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <ul className="text-center">
                        <h5 className="title">Personal Portfolios</h5>
                            <li className="list-unstyled">
                                <a id="list-unstyled" href="https://rchlblns.github.io/current-portfolio/" target="_blank">Richelle Billones</a>
                            </li>
                            <li className="list-unstyled">
                                <a id="list-unstyled" href="https://jvh-portfolio-96.herokuapp.com/" target="_blank">Jeffrey VanHorn</a>
                            </li>
                            <li className="list-unstyled">
                                <a id="list-unstyled" href="https://joshehenry.github.io/Bootstrap-Portfolio/" target="_blank">Joshua Henry</a>
                            </li>

                        </ul>
                    </MDBCol>
                    <MDBCol md="3">
                        <ul className="text-center">
                        <h5 className="title">LinkedIn</h5>
                            <li className="list-unstyled">
                                <a id="list-unstyled" href="https://www.linkedin.com/in/richellebillones/" target="_blank">Richelle Billones</a>
                            </li>
                            <li className="list-unstyled">
                                <a id="list-unstyled" href="HTTPS://WWW.LINKEDIN.COM/IN/JEFFREY-VHMICHAEL/" target="_blank">Jeffrey VanHorn</a>
                            </li>
                            <li className="list-unstyled">
                                <a id="list-unstyled" href="https://www.linkedin.com/in/joshua-henry-a5aa1a55//" target="_blank">Joshua Henry</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </MDBFooter>
    );

}
export default Footer;