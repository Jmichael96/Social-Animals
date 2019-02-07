import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBContainer } from
    "mdbreact";
import "./style.css";
import img from "./assets/img.jpg";
import img6 from "./assets/img6.jpg"
import img7 from "./assets/img7.jpg";
import img8 from "./assets/img8.jpg";
import corgi from "./assets/corgi.jpg";
// carousel for home page
const CarouselPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="4"></MDBCol>
                <MDBCol md="4">
                    <MDBCarousel id="object" activeItem={1} length={5} showControls={true} showIndicators={true} className="z-depth-5">
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <img id="img" className="d-block w-100" src={img6} alt="First slide" />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <img id="img" className="d-block w-100" src={img8} alt="Second slide" />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <img id="img" className="d-block w-100" src={img7} alt="Second slide" />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="4">
                                <img id="img" className="d-block w-100" src={img} alt="Second slide" />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="5">
                                <img id="img" className="d-block w-100" src={corgi} alt="Second slide" />
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBCol>
                <MDBCol md="4"></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default CarouselPage;