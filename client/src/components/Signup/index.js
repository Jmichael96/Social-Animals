import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import "./style.css";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',
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
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/api/signup', {
				username: this.state.username,
				password: this.state.password
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
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
			<MDBContainer>
			  <MDBRow>
				<MDBCol md="6">
				  <form>
					<p className="h5 text-center mb-4">Sign up</p>
					<div className="grey-text">
					  <MDBInput
						label="Your name"
						icon="user"
						group
						type="text"
						validate
						error="wrong"
						success="right"
						name="username"
						value={this.state.username}
					onChange={this.handleChange}
					  />
					  <MDBInput
						label="Your email"
						icon="envelope"
						group
						type="email"
						validate
						error="wrong"
						success="right"
						value={this.state.email}
					onChange={this.handleChange}
					  />
					 
					  <MDBInput
						label="Your password"
						icon="lock"
						group
						type="password"
						validate
						value={this.state.password}
						onChange={this.handleChange}
					  />
					</div>
					<div className="text-center">
					  <MDBBtn onClick = {this.handleSubmit}color="primary">Register</MDBBtn>
					</div>
				  </form>
				</MDBCol>
			  </MDBRow>
			</MDBContainer>
		  );
		};

};

export default SignupForm;

