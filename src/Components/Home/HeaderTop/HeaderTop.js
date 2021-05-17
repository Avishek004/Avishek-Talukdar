import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import whiteLogo from '../../Images/logo-white.png';

const HeaderTop = () => {
    return (
        <div className="m-0 p-0 w-100">
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#"><img src={whiteLogo} alt="" className="w-25 h-25 ml-5" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <Nav.Link href="#projects" className="text-white mr-3">Projects</Nav.Link>
                        <Nav.Link href="#blogs" className="text-white mr-3">Blogs</Nav.Link>
                        <Nav.Link href="#aboutMe" className="text-white text-uppercase mr-3">About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderTop;