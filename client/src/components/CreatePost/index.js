import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

class CreatePost extends Component{

    constructor(){
        super()
        this.state = {
            title: "",
            authorName: "",
            content: "",
            date: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
    }
    handleSubmit(event){
        event.preventDefault();
        axios.post('/api/create-post', {
            title: this.state.title,
            authorName: this.state.authorName,
            content: this.state.content,
            date: this.state.date,
        })
        .then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                console.log('youre good')
                this.setState({
                    redirectTo: '/createpost'
                })
            } else {
                console.log('duplicate');
            }
        })
    }
    render() {
        if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
        return (
            <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h5 text-center mb-4">Create Post</p>
              <div className="grey-text">
                <MDBInput
                  label="Title"
                  icon="file"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={this.state.title}
                        onChange={this.handleChange}
                    name="title"
                />
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="authorName" 
                        value={this.state.authorName} 
                        onChange={this.handleChange}
                />
                <MDBInput
                  label="Confirm your email"
                  icon="exclamation-triangle"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
              
                 <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">
            Create Blog
            </label>
            <textarea
            type="text" 
            name="content"
            className="form-control"
            value={this.state.content}
            onChange={this.handleChange}
            rows="5"
            />
        </div>
              </div>
              <div className="text-center">
                <MDBBtn color="primary" onClick={this.handleSubmit}>Post</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
        );
    }
}

export default CreatePost;

