import React from 'react';
import { Button } from 'react-bootstrap';

const MainHeader = () => {
    return (
        <div className="text-white d-flex flex-column align-items-center justify-content-center" style={{ height: "735px" }}>
            <div className="">
                <p style={{ fontSize: "60px" }}>Hi, I am Avishek Talukdar</p>
            </div>
            <div className="">
                <p style={{ fontSize: "30px" }}>Welcome to My Website</p>
            </div>
            <Button variant="outline-secondary" className="text-white">My Resume</Button>
        </div>
    );
};

export default MainHeader;