// import React, { Component } from 'react'
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// const style = {
//  width: "600px",
//  height: "600px"
// };

// export class MapContainer extends Component {

//  render() {
//    return (
//      <div>
//        <Map google={this.props.google}
//          zoom={14}
//          style={style}
//        >

//          <Marker onClick={this.onMarkerClick}
//            name={'Current location'} />

//          {/* <InfoWindow onClose={this.onInfoWindowClose}>
//            <div>
//            <h1>{this.state.selectedPlace.name}</h1>
//            </div>
//          </InfoWindow> */}
//        </Map>
//      </div>
//    );
//  }
// }

// export default GoogleApiWrapper({
//  apiKey: process.env.REACT_APP_Google_APIKEY
// })(MapContainer)