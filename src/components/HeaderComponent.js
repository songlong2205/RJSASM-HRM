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
                    <div className='container-fluid'>
                        <div className="row">
                            <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand className="mr-auto" href='/'>
                                <img src="assets/images/logo192.png" height="30" width="41"
                                    alt="Logo" />
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem className="m-2">
                                        <NavLink className="nav-Link" to="/stafflist">
                                            <span className="fa fa-users fa-lg"> Nhân Viên</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="m-2">
                                        <NavLink className="nav-Link" to="/departments">
                                            <span className="fa fa-address-card-o fa-lg">  Phòng ban</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem className="m-2">
                                        <NavLink className="nav-Link" to="/salary">
                                            <span className="fa fa-money fa-lg">  Bảng lương</span>
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;