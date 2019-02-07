import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCol, MDBContainer } from
    "mdbreact";
import "./style.css";
// carousel for home page
const CarouselPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="4"></MDBCol>
                <MDBCol md="4">
                    <MDBCarousel id="object" activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-5">
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <img id="img" className="d-block w-100" src="./public/assets/images/img6.jpg" alt="First slide" />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <img id="img" className="d-block w-100" src="/assets/images/img8.jpg" alt="Second slide" />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <img id="img" className="d-block w-100" src="../public/assets/images/img7.jpg" alt="Second slide" />
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="4">
                                <img id="img" className="d-block w-100" src="./assets/images/img.jpg" alt="Second slide" />
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