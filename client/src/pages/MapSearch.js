import React, { Component } from "react";
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import MapSearchBar from "../components/MapSearchBar/index"
import MapContainer from "../components/MapContainer/index";


class MapSearch extends Component {
    render() {
        return (
            <div>
            <h1>Find pet related products and services here!</h1>
                <MapContainer />
                <MapSearchBar />
            </div>
        );
    };
};

export default MapSearch;

