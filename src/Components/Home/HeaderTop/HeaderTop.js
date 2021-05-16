import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const HeaderTop = () => {
    return (
        <div style={{margin: 0, padding: 0, width: '100%'}}>
            <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: '#02434f' }}>
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