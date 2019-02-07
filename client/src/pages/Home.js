import React from "react";
import "./styles/home.css";
import Carousel from "../components/Carousel/index";
import Footer from "../components/Footer/index";
import { MDBAnimation } from "mdbreact";

// displaying home according to user authentication
const Home = (props) => {
  let Greeting;
  if (props.user === null) {
    Greeting = (
      <div id="apppage">
      <MDBAnimation type="slideInRight">
        <p id="title" className="h1-responsive text-center">
          Welcome to Social Animals!{" "}
        </p>
        </MDBAnimation>
        <Carousel />
        <Footer />
      </div >)
  } else if (props.user.username) {
    Greeting = (
      <div id="apppage">
        <MDBAnimation type="slideInRight">
        <p id="title" className="h1-responsive text-center">
          Welcome to Social Animals!{" "}
        </p>
        </MDBAnimation>
        <Carousel />
        <Footer />
      </div>)
  }
  return (
    <div className="Header">
      {Greeting}
    </div>
  )
}
export default Home;