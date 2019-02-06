import React, { Component } from 'react'
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

// login form
class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
// handling event change and values
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
// handling submit
	handleSubmit(event) {
		event.preventDefault()
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password)
		this.setState({
			redirectTo: '/'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="LoginForm">
					<MDBContainer>
						<MDBRow>
							<MDBCol md="3"></MDBCol>
							<MDBCol md="5">
								<MDBCard id="login-form">
									<MDBCardBody>
										<MDBCardHeader className="form-header pink lighten-4 rounded">
											<h3 className="my-3 text-center">
												<MDBIcon icon="lock" /> Login
                							</h3>
										</MDBCardHeader>
										<form>
											<div className="grey-text">
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
													label="Type your password"
													icon="lock"
													group
													type="password"
													name="password"
													value={this.state.password}
													onChange={this.handleChange}
													validate
												/>
											</div>

											<div className="text-center mt-4">
												<MDBBtn
												id="loginbtn"
													onClick={this.handleSubmit}
													color="light-blue"
													className="mb-3"
													type="submit"
												>
													Login
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
}

