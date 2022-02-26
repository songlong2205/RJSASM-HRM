import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <>
                <Navbar dark>
                    <div className='row'>
                        <NavbarBrand href='/'>Ứng dụng quản lý nhân sự v1.0 </NavbarBrand>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;