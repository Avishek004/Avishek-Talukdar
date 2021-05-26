import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <Container>
                <div className="row align-items-center text-center p-5">
                    <div className="col-12">
                        <ul className="list-inline social-icon">
                            <li className="list-inline-item">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 text-white">
                        <p className=""><FontAwesomeIcon icon={faCopyright} /> {(new Date().getFullYear())} Avishek Talukdar </p>
                        <p className="text-uppercase">all rights reserved</p>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;