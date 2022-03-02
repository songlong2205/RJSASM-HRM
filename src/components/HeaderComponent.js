import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <>
                <Navbar dark expand="md">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href='/'>
                            <img src="assets/images/alberto.png" height="30" width="41"
                                alt="Logo" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-Link" to="/stafflist">
                                        <span className="fa fa-users"></span>Nhân Viên
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-Link" to="/home">
                                        <span className="fa fa-address-card-o"></span>Phòng ban
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-Link" to="/aboutus">
                                        <span className="fa fa-money"></span>Bảng lương
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;