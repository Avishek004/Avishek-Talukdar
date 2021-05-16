import React from 'react';
import { Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';

const MainHeader = () => {
    return (
        <div className="d-flex align-items-center justify-content-center w-100 p-5" style={{ height: "790px", margin: 0 }}>
            <div className="text-white text-center">
                <p style={{ fontSize: "2.5em" }}>Hello, I'm Avishek Talukdar</p>
                <p style={{ fontSize: "2em" }} id="Type">
                    <Typewriter
                        options={{
                            strings: ['Front End Web Developer', 'React Developer'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 1500,
                            delay: 50,
                            deleteSpeed: 50,
                        }}
                    />
                </p>
                <Button variant="outline-secondary" className="text-white" href="https://drive.google.com/uc?export=download&id=1-6AOTLtfwigZ27q7GdFOJCiEHpK_ioWM">My Resume</Button>
            </div>
        </div>
    );
};

export default MainHeader;