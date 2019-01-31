import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom'

    // constructor() {
    //     super()
    //     this.state ={
    //         title: '',
    //         content: '',
    //         user: this.props.user,
    //         categories: [],
    //     },
    //     this.handleSubmit = this.handleSubmit.bind(this)
	// 	this.handleChange = this.handleChange.bind(this)
    // }

    // getPickerValue = (value) => {
    //     console.log(value);
    //   }
    
    // onChange = e =>
    //     this.setState({
    //         data: { ...this.state.data, [e.target.name]: e.target.value },
    //     });

    // onSelectChange = (e, i, values) => {
    //     this.setState({
    //         data: { ...this.state.data, categories: values },
    //     });
    // };

    // handleSubmit = () => {
    //     const errors = this.validate(this.state.data);
    //     this.setState({ errors });

    //     if (Object.keys(errors).length === 0) {
    //         this.setState({ loading: true });
    //         this.props
    //             .submit(this.state.data)
    //             .catch(err =>
    //                 this.setState({ errors: err.response.data.errors, loading: false }),
    //             );
    //     }
    // };

    // validate = data => {
    //     const errors = {};
    //     if (!data.title) errors.title = "Can't be blank!";
    //     if (!data.content) errors.content = "Can't be blank!";

    //     return errors;
    // };
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
        axios.post('/api/create', {
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
                    redirectTo: '/addpost'
                })
            } else {
                console.log('duplicate')
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