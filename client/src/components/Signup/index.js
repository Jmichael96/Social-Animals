import React, { Component } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBModalFooter,
	MDBIcon,
	MDBCardHeader,
	MDBBtn,
	MDBInput
} from "mdbreact";
import "./style.css";

// signup form 
class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			firstname: '',
			lastname: '',
			favoriteAnimal: '',
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
	// handle submit for signup
	handleSubmit(event) {
		event.preventDefault()
		// TODO - validate!
		axios
			.post('/api/signup', {
				firstname: this.state.firstname,
				lastname: this.state.lastname,
				favoriteAnimal: this.state.favoriteAnimal,
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
			<div id="signup-form" className="SignupForm">
				<MDBContainer>
					<MDBRow>
						<MDBCol md="3"></MDBCol>
						<MDBCol md="5">
							<MDBCard id="login-form">
								<MDBCardBody>
									<MDBCardHeader className="form-header pink lighten-4 rounded">
										<h3 className="my-3 text-center">
											<MDBIcon far icon="grin-alt" /> Signup
                							</h3>
									</MDBCardHeader>
									<form>
										<div className="grey-text">
											<MDBInput
												label="First Name"
												icon="user-alt"
												type="text"
												name="firstname"
												value={this.state.firstname}
												onChange={this.handleChange}
												group

												validate
												error="wrong"
												success="right"
											/>
											<MDBInput
												label="Last Name"
												icon="user-alt"

												name="lastname"
												value={this.state.lastname}
												onChange={this.handleChange}
												group
												type="text"
												validate
												error="wrong"
												success="right"
											/>
											<MDBInput
												label="Favorite Animal"
												icon="user-alt"

												name="favoriteAnimal"
												value={this.state.favoriteAnimal}
												onChange={this.handleChange}
												group
												type="text"
												validate
												error="wrong"
												success="right"
											/>
											<MDBInput
												label="Type Your Username"
												icon="user-alt"

												name="username"
												value={this.state.username}
												onChange={this.handleChange}
												group
												type="text"
												validate
												error="wrong"
												success="right"
											/>
											<MDBInput
												label="password"
												icon="lock"
												group
												type="password"
												name="password"
												value={this.state.password}
												onChange={this.handleChange}
												validate
											/>
											<MDBInput
												label="Confirm Password"
												icon="lock"
												group
												type="password"
												name="confirmPassword"
												value={this.state.confirmPassword}
												onChange={this.handleChange}
												validate
											/>
										</div>
										<div className="text-center mt-4">
											<MDBBtn
												id="signupbtn"
												onClick={this.handleSubmit}
												color="light-blue"
												className="mb-3"
												type="submit"
											>
												Signup
                								</MDBBtn>
										</div>
									</form>
									<MDBModalFooter>
										<div className="font-weight-light">
											<Link to="/signup"><p>Not a member? Sign Up</p></Link>
										</div>
									</MDBModalFooter>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol md="3"></MDBCol>
					</MDBRow>
				</MDBContainer>
			</div>
		)
	}
}

export default SignupForm;