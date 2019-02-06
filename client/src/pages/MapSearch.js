import React, { Component } from "react";
import { MDBCol, MDBFormInline, MDBIcon, MDBBtn } from "mdbreact";
import MapSearchBar from "../components/MapSearchBar/index"
import MapContainer from "../components/MapContainer/index";
import axios from "axios";

class MapSearch extends Component {

    constructor(props) {
        super(props);
        state = {
            query: " ",
            searchResults: []
        }
    }

    search = () => {
        const BASE_URL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input="
        fetch(`${BASE_URL}${this.state.query}${process.env.REACT_APP_GOOGLE_APIKEY}`)
            .then(res => Response.json())
            .then(json => {
                let { searchResults } = json;
                this.setState({ items });
                console.log(json);
            })
    }
    render() {
        return (
            <div>
                <h1>Find pet related products and services here!</h1>
                <MapContainer />
                <MapSearchBar
                    onChange={event => this.setState({ query: event.target.value })}
                    onClick={event => {
                        if (event) {
                            this.search();
                        }
                    }} />
                <MDBRow>
                    <MDBCol>
                        <ul>
                            {this.state.results.map(result => <li>{result.name}</li>)};
                        </ul>
                    </MDBCol>
                </MDBRow>
            </div>

        );
    };
};

export default MapSearch;

