import React from "react";
import "./style.css";
import Carousel from "../Carousel/index";
import Footer from "../Footer/index";
// Make sure in jsFiddle you have selected option onLoad
// (function () {
//     var cx = '017643444788069204610:4gvhea_mvga'; // Insert your own Custom Search engine ID here
//     var gcse = document.createElement('script');
//     gcse.type = 'text/javascript';
//     gcse.async = true;
//     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(gcse, s);
// })();

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
            </div>
        )
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