import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBCollapse, MDBContainer,
    MDBHamburgerToggler
} from 'mdbreact';

class NavbarPage extends Component {
    state = {
        collapse1: false,
        collapseID: ''
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
    }

    toggleSingleCollapse = collapseId => {
        this.setState({
            ...this.state,
            [collapseId]: !this.state[collapseId]
        });
    }

    render(props) {
        return (
            <MDBContainer>
                <MDBNavbar color="amber lighten-4" fixed="top" light transparent>
                    <MDBContainer>
                        <MDBNavbarBrand>
                            Social Animals
                        </MDBNavbarBrand>
                        <MDBHamburgerToggler color="#d3531a" id="hamburgerNav" onClick={() => this.toggleSingleCollapse('collapse1')} />
                        <MDBCollapse isOpen={this.state.collapse1} navbar>
                            {props.children}
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </MDBContainer>
        );
    }
}

export default NavbarPage;