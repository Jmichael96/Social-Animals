import React, { Component } from "react";
import NavBarPage from "../components/HamNav/HamNav";
import MapContainer from "../components/Map/index";
import "./styles/home.css";

class User extends Component {

    render() {
        return (
            <div>
                <NavBarPage />
                <MapContainer />
            </div>
        );
    }
}

export default User;