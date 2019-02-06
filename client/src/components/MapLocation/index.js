import React, {Component} from "react";
import ReactDOM from "react-dom";

const mapStyles = {
    map: {
        position: "absolute",
        width: "100%",
        height: "100%"
    }
};

export class CurrentLocation extends Component {
    construction(props) {
        super(props);
        
        const { lat, lng } = this.props.initialCenter;
        this.state = {
            CurrentLocation: {
                lat: lat,
                lng: lng
            }
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.googe){
            this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
            this.recenterMap();
        }
    }

    recenterMap() {
        const map = this.map;
        const current = this.state.currentLocation;
        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng);
            map.panTo(center);
        }
    }

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const cords = pos.cords;
                    this.setState({
                        currentLocation: {
                            lat: cords.latitude,
                            lng: cords.longitude
                        }
                    });
                });
            }
        }
        this.loadMap();
    }

    loadMap() {
        if (this.props && this.props.google) {
            const { google } = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;

            const node = ReactDOM.findDOMNode(mapRef);

            let { zoom } = this.props;
            const { let, lng } = this.state.currentLocation;
            const center = new.maps.LatLng(lat,lng);
            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom
                }
            );

            //map.Map is a constructor that instatiates the map
            this.map = new map.Map(node, mapConfig)
        }
    }

    renderChildren() {
        const { children } = this.props;
        if (!children) return;

        return React.Children.map(children, c => {
            if (!c) return;
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCeter: this.state.currentLocation
            });
        });
    }

    render() {
        const style = Object.assign({}, mapStyles.map);
        return(
            <div>
                <div style={style} ref="map">Loading map...</div>
                {this.renderChildren()}
            </div>
        );
    }
}

export default CurrentLocation;