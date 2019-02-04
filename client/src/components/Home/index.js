import React from "react";
import "./style.css";
import Carousel from "../Carousel/index";
import Footer from "../Footer/index";
const Home = (props) => {
    let Greeting;
    if (props.user === null) {
        Greeting = (
            <div id="apppage">
                <p id="title" className="h1-responsive text-center">
                    Welcome to Social Animals!{" "}
                </p>
                <Carousel />

                <Footer />
            </div>)
    } else if (props.user.username) {
        Greeting = (
            <div id="apppage">
                <p id="title" className="h1-responsive text-center">
                    Welcome to Social Animals!{" "}
                </p>
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