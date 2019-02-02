import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

class CreatePost extends Component{

    constructor(){
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
                <form>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input 
                        type="text" 
                        name="title" 
                        value={this.state.title}
                        onChange={this.handleChange}
                        className="form-control form-control-lg" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="authorName">Your Name</label>
                        <input 
                        type="text" 
                        name="authorName" 
                        value={this.state.authorName} 
                        onChange={this.handleChange}
                        className="form-control form-control-lg" />
                    </div>
                </form>
                <form>
                    <div className="form-group">
                        <label htmlFor="content">
                            Summary
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
                </form>
                <div className="form-group">
                        <label htmlFor="contact">Contact Me</label>
                        <input 
                        type="text" 
                        name="contact" 
                        value={this.state.contact}
                        onChange={this.handleChange}
                        className="form-control form-control-lg" />
                    </div>
                <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input 
                        type="text" 
                        name="date" 
                        value={this.state.date}
                        onChange={this.handleChange}
                        className="form-control form-control-lg" />
                    </div>
                    <button onClick={this.handleSubmit}>Post</button>
            </div>
        );
    }
}

export default CreatePost;