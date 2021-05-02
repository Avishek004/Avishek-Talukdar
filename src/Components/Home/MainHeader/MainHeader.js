import React from 'react';
import { Button } from 'react-bootstrap';
import Profile from '../../Images/Profile.jpg';

const MainHeader = () => {
    return (
        <div className="row d-flex align-items-center w-100" style={{ height: "730px" }}>
            <div className="col-md-5 offset-md-1 col-sm-6 col-12">
                <img src={Profile} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <div className="text-white text-center">
                    <p style={{ fontSize: "60px" }}>Hi, I am Avishek Talukdar</p>
                    <p style={{ fontSize: "30px" }}>Welcome to My Website</p>
                    <Button variant="outline-secondary" className="text-white">My Resume</Button>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;