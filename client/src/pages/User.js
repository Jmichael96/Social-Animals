import React, { Component } from "react";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";
import axios from "axios";
import UsersPosts from "../components/UsersPosts/index";

class User extends Component {

    state = {
        postArray: [],
    };

    componentDidMount() {
        axios.get('/api/users-posts').then(response => {
            const posts = response.data;
            for (var i = 0; i < posts.length; i++) {
                let post = posts[i];
                this.state.postArray.push(post);
            }
        })
        console.log("===NEW STATE===");
        console.log(this.state);

    };

    render(props) {
        return (
            <div>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            {this.state.postArray.map(post =>
                                <UsersPosts
                                    id={post._id}
                                    key={post._id}
                                    title={post.title}
                                    authorName={post.authorName}
                                    content={post.content}
                                    contact={post.contact}
                                    date={post.date}
                                />)}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
};

export default User;