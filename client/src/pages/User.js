import React, { Component } from "react";
import { MDBCol, MDBRow, MDBContainer } from "mdbreact";
import axios from "axios";
import UsersPosts from "../components/UsersPosts/index";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
  } from "mdbreact";
import "./styles/user.css";
const UserBar = props => {
	let Greeting;
	if (props.user === null) {
		Greeting =     Greeting = (
      <MDBContainer>
      <MDBNavbar id="navbar" expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </MDBContainer>
    )

	} else if (props.user) {
		Greeting = (
      <MDBContainer>
      <MDBNavbar id="navbar" expand="md">
        <MDBNavbarBrand>
          <span className="">{props.user.avatar}</span>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav left>
          <MDBNavItem>
              <MDBNavLink to="#!">Name: {props.user.firstname} {props.user.lastname}</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">My Favorite Animal is: {props.user.favoriteAnimal}</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </MDBContainer>
    )
	} else if (props.user) {
		Greeting = (
      <MDBContainer>
      <MDBNavbar id="navbar" expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">{props.user.username}</strong>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3" navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to="#!">Features</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#!">Pricing</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
      </MDBContainer>
    )
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

class User extends Component {
    state = {
        Posts: [],
        user: null,
    };

    componentDidMount() {
        axios.get('/api/users-posts').then(response => {
            const data = response.data[0];
            const thingy = [...data.posts];
            for (var i = 0; i < thingy.length; i++) {
                let post = thingy[i];
                this.state.Posts.push(post);
                console.log(thingy)
            }
        })
        .catch((err) =>{
            console.log(err)
        });
    };
    componentWillMount(){
        axios.get('/api/user').then(response => {
            console.log(response.data)
            if (!!response.data.user) {
              console.log('THERE IS A USER')
              this.setState({
                user: response.data.user
              })
            } else {
              this.setState({
                user: null
              })
            }
          })  
          console.log(this.state);
    };

    render() {
        return (

            <div>
                <UserBar  user={this.state.user}/>
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