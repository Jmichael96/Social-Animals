import React, { Component, Fragment } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'
import { MDBContainer, MDBBtn, MDBInput, MDBIcon } from 'mdbreact';
import "./style.css";

class CreatePost extends Component {
    constructor() {
        super()
        this.state = {
            title: "",
            authorName: "",
            content: "",
            contact: "",
            date: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    getPickerValue = value => {
        console.log(value);
    };
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/create-post', {
            title: this.state.title,
            authorName: this.state.authorName,
            content: this.state.content,
            contact: this.state.contact,
            date: this.state.date,

        })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('youre good')
                    this.setState({
                        redirectTo: '/'
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
            <div>
                <MDBContainer id="form">
                    <form>
                        <MDBInput
                            label="Title"
                            icon="sort-alpha-down"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                        <MDBInput
                            label="Your Name"
                            icon="user-edit"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            name="authorName"
                            value={this.state.authorName}
                            onChange={this.handleChange}
                        />
                    </form>
                    <MDBInput
                        label="Contact Me (optional)"
                        icon="id-card"
                        group
                        type="text"
                        name="contact"
                        value={this.state.contact}
                        onChange={this.handleChange}
                    />
                    <MDBInput
                        label="Date"
                        icon="calendar-alt"
                        group
                        type="text"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleChange}
                    />
                    <form>
                        <MDBInput
                            type="textarea"
                            rows="5"
                            label="Your Post"
                            icon="pencil-alt"
                            name="content"
                            value={this.state.content}
                            onChange={this.handleChange}
                        />
                    </form>
                    <Fragment>
                        <MDBBtn onClick={this.handleSubmit} color="default">
                            POST <MDBIcon far icon="paper-plane" />
                        </MDBBtn>
                    </Fragment>
                </MDBContainer>
            </div>
        );
    }
}

export default CreatePost;