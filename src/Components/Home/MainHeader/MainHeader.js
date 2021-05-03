import React from 'react';
import { Button } from 'react-bootstrap';
import Profile from '../../Images/Profile.jpg';

const MainHeader = () => {
    return (
        <div className="row d-flex align-items-center w-100 pb-5" style={{ height: "100%", margin: "0" }}>
            <div className="col-md-5 offset-md-1 col-sm-6 col-12">
                <img src={Profile} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 col-sm-6 col-12">
                <div className="text-white text-center">
                    <p style={{ fontSize: "60px" }}>Hi, I am Avishek Talukdar</p>
                    <p style={{ fontSize: "30px" }}>Welcome to My Website</p>
                    <Button variant="outline-secondary" className="text-white" href="https://drive.google.com/uc?export=download&id=1-6AOTLtfwigZ27q7GdFOJCiEHpK_ioWM">My Resume</Button>
                </div>
            </div>
        </div>
    );
};

export default MainHeader;