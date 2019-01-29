import React, { Component } from "react";
import axios from 'axios';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBFormInline } from "mdbreact";
import "./style.css";
import Greeting from "../Greeting/index";


class Nav extends Component {
    state = {
        collapsed: false
    };
    constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}
    _login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
    }
    
    handleTogglerClick = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const navStyle = { marginTop: "4rem" };
        const overlay = (
            <div
                id="sidenav-overlay"
                style={{ backgroundColor: "transparent" }}
                onClick={this.handleTogglerClick}
            />
        );
        return (
            <div>
                <MDBNavbar
                    color="black"
                    style={navStyle}
                    dark
                    expand="md"
                    fixed="top"
                    scrolling
                    transparent
                >
                
                    <MDBContainer>
                    <Greeting user={this.state.user} />

                        <MDBNavbarBrand>
                            <strong className="white-text">Social Animals</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.handleTogglerClick} />
                        <MDBCollapse isOpen={this.state.collapsed} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem active>

                                    <MDBNavLink id="navbtn" to="/">Home</MDBNavLink>

                                </MDBNavItem>

                                <MDBNavItem>

                                    <MDBNavLink id="navbtn" to="#!">Blogs</MDBNavLink>

                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink id="navbtn" to="/login">Login</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem >
                                    <MDBNavLink id="navbtn" to="/signup">Signup
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBFormInline waves>
                                        <div className="md-form my-0">
                                            <input
                                                className="form-control mr-sm-2"
                                                type="text"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                        </div>
                                    </MDBFormInline>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                {this.state.collapsed && overlay}
            </div>
        );
    }
}

export default Nav;