import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const HeaderTop = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-5">
                        <Nav.Link href="#projects" className="text-white mr-3">Projects</Nav.Link>
                        <Nav.Link href="#blogs" className="text-white mr-3">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderTop;