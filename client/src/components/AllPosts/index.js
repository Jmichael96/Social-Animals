import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import "./style.css";
const AllPosts = (props) => {
    return (
        <div>
            <MDBCard id="card" className="my-5 px-5 pb-5">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol lg="5" xl="4">
                            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                                <img
                                    className="img-fluid"
                                    src="/assets/images/puppy.jpg"
                                    alt=""
                                />
                                <a href="#!">
                                    <MDBMask overlay="white-slight" />
                                </a>
                            </MDBView>
                        </MDBCol>
                        <MDBCol lg="7" xl="8">
                            <h3 className="font-weight-bold mb-3 p-0">
                                <strong>{props.title}</strong>
                            </h3>
                            <p>Date: {props.date}</p>
                            <p>
                                by <a href="#!" className="font-weight-bold">{props.authorName}</a> 
                            </p>
                            <p className="dark-grey-text">
                                {props.content}
                            </p>
                            <hr />
                            <p>CONTACT: {props.contact}</p>
                        </MDBCol>
                    </MDBRow>
                    <hr className="my-5" />
                </MDBCardBody>
            </MDBCard>

        </div>
    )
}

export default AllPosts;