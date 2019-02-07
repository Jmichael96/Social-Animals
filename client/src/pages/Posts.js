import React, { Component } from "react";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";
import axios from "axios";
import AllPosts from "../components/AllPosts/index";
import "./styles/posts.css";
import { MDBAnimation } from "mdbreact";
 
class Posts extends Component {

    state = {
        postArray: [],
    };
// api for getting all posts
    componentDidMount() {
        axios.get('/api/posts').then(response => {
            const posts = response.data;
            for (var i = 0; i < posts.length; i++) {
                let post = posts[i];
                this.state.postArray.push(post);
                console.log(posts)
            }
        })
        console.log(this.state);
    };
    render() {
        return (
            <div>
                <MDBContainer>
                    <MDBAnimation type="slideInRight">
                    <p id="posts-title" className="h1-responsive font-weight-bold text-center">
                        Most Recent Posts!
                    </p>
                    </MDBAnimation>
                    <MDBRow>
                        <MDBCol>
                            {this.state.postArray.map(post =>
                                <AllPosts
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

export default Posts;