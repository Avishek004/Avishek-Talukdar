import React from 'react';
import './HeaderTop.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

const HeaderTop = () => {
    return (
        <div className="m-0 p-0">
            <Container>
                <Navbar collapseOnSelect expand="lg" className="custom-nav" variant="dark">
                    <Navbar.Brand href="#"><span className="text-white">Avishek</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#projects" className="text-white">Projects</Nav.Link>
                            <Nav.Link href="#blogs" className="text-white">Blogs</Nav.Link>
                            <Nav.Link href="#aboutMe" className="text-white">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default HeaderTop;