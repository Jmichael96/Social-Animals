import React, {Component} from "react";

class Pet extends Component {
    render() {
        const {name, animal, media, location, id} = this.props;
        let photos = [];
        
        if (media && media.photos && media.photos.photo) {
            photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
        }
        return(
            <div className="Pet">
                <div className="image-container">
                    <img src={photos[0].value} alt = {name} />
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>{`${animal} - ${location} - ${id}`}</h2>
                </div>
            </div>
        );
    }
}

export default Pet;