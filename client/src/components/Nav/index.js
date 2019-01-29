import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer, MDBFormInline } from "mdbreact";


class Nav extends Component {
    state = {
        collapsed: false
    };

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
                        <MDBNavbarBrand>
                            <strong className="white-text">Social Animals</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.handleTogglerClick} />
                        <MDBCollapse isOpen={this.state.collapsed} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem active>

                                    <MDBNavLink to="#!">Home</MDBNavLink>

                                </MDBNavItem>

                                <MDBNavItem>

                                    <MDBNavLink to="#!">Blogs</MDBNavLink>

                                </MDBNavItem>

                                <MDBNavItem>
                                    <MDBNavLink to="#!">Search for Animals</MDBNavLink>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <Link
                                        onClick={this.toggleNav}
                                        id="button"
                                        className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
                                        to="/signup"
                                    >
                                        Saved
                                    </Link>
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