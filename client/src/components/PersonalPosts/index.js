import React from "react";
import { MDBMedia } from 'mdbreact';


const PersonalPosts = (props) => {
    return (
        <div>
            <MDBMedia>
                <MDBMedia left top className="mr-3" href="#">
                    <MDBMedia alt="Generic placeholder image" />
                </MDBMedia>
                <MDBMedia body>
                    <MDBMedia heading>
                        {props.title}
                    </MDBMedia>
                    <MDBMedia heading>
                        {props.authorName}
                    </MDBMedia>
                    <MDBMedia heading>
                        {props.date}
                    </MDBMedia>
                    <p>{props.content}</p>
                    <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </MDBMedia>
            </MDBMedia>
        </div>
    )
}

export default PersonalPosts;