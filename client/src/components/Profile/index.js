import React, { Component } from "react";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";
import axios from "axios";
import UsersPosts from "../UsersPosts/index";

class User extends Component {
  state = {
    Posts: [],
  };

  componentDidMount() {
    axios.get('/api/users-posts').then(response => {
      console.log(response.data[0])
      const data = response.data[0];
      const post = [data];
      for (var i = 0; i < post.length; i++) {
        let postData = post[i];
        this.state.Posts.push(postData);
      }
    })
      .catch((err) => {
        console.log(err)
      });
  };
  render(props) {
    return (
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              {this.state.Posts.map(post =>
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