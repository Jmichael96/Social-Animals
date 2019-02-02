import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import CurrentLocation from "../MapLocation/index";

const mapstyles = {
  width: "100%",
  height: "100%"
},


export class MapContainer extends Component {

  state = {
    showingInfoWindow: false, // hides/shows the info window (hidden by default)
    activeMarker: {},         // shows the active marker when clicked 
    selectedPlace: {}         // shows the info window to the selected place upon a marker
  };

  handleMarkerClick = (props, marker, event) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  handleClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div>
        <CurrentLocation
          centerAroundCurrentLocation
          google={this.props.google}
        >
          <Marker
            onClick={this.handleMarkerClick}
            name={"current location"}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.handleClose}
          >
            <h1>this.state.selectedPlace.name</h1>
          </InfoWindow>
        </CurrentLocation>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_APIKEY
})(MapContainer);