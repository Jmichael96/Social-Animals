import React from "react";
import { MDBMedia } from 'mdbreact';


const AllPosts = (props) => {
    return (
        <div>
            <MDBMedia>
                <MDBMedia left top className="mr-3" href="#">
                    <MDBMedia alt="Generic placeholder image" />
                </MDBMedia>
                <MDBMedia body>
                
                       <p> {props.authorName}</p>
                    
                    <MDBMedia heading>
                        {props.title}
                    </MDBMedia>
                    <MDBMedia heading>
                        {props.contact}
                    </MDBMedia>
                    <p>{props.content}</p>
                       <p>{props.date}</p> 
                    
                </MDBMedia>
            </MDBMedia>
        </div>
    )
}

export default AllPosts;