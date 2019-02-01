import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const mapstyles = {
  width: "100%",
  height: "100%"
},


export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapstyles}
        initialCenter={{
          lat: -1.2,
          lng: 36
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: REACT_APP_GOOGLE_APIKEY
})(MapContainer);