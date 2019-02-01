import React, { Component } from "react";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";
import axios from "axios";
import PersonalPosts from "../components/PersonalPosts/index";
// import NavBarPage from "../components/";
// import MapContainer from "../components/Maps/index";
import Search from "../components/SearchBar/index";
// import "./styles/home.css";

class User extends Component {

    state = {
        postArray: []
    };
    // componentDidMount() {
    //     axios.get('/api/posts')
    //       .then(res => {
    //         const posts = res.data.data.children.map(obj => obj.data);
    //         this.setState({ posts });
    //       });
    //   }

    componentDidMount() {
        axios.get('/api/posts').then(response => {
            console.log(response.data)
            const posts = response.data;
            for(var i = 0; i < posts.length; i ++){
                let post = posts[i];
                this.state.postArray.push(post);
            }
        })
        console.log(this.state);
        // .catch((err)=>{
        //     response.json(err);
        // })
    };

    render() {
        return (
            <div>
                <MDBContainer>
                    {/* <NavBarPage /> */}
                    <MDBRow>
                        <MDBCol>

                        </MDBCol>
                        <MDBCol>
                            <Search />
                        </MDBCol>
                    </MDBRow>
                    <ul>
                        {this.state.postArray.map(post => 
                        <PersonalPosts 
                        id={post._id}
                        key={post._id}
                        title={post.title}
                        authorName={post.authorName}
                        content={post.content}
                        date={post.date}
                        />)}
                    </ul>
                    {/* <div>
                    {this.state.post.map(posts =>
                            <PersonalPosts 
                            id={posts.id}
                            key={posts.id}
                            title={posts.title}
                            authorName={posts.authorName}
                            content={posts.content}
                            date={posts.date}
                            />
                        )}
                    </div> */}
                </MDBContainer>
            </div>
        );
    }
};

export default User;