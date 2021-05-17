import React from 'react';
import { Container } from 'react-bootstrap';
import Profile from '../Images/Profile.jpg';

const AboutMe = () => {
    return (
        <section className="p-5">
            <Container>
                <div id="aboutMe">
                    <h1 className="text-uppercase text-center pb-3">About Me</h1>
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-12 p-3">
                            <img src={Profile} alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-sm-6 col-12 p-3">
                            <h4>Hello! I'm Avishek Talukdar</h4>
                            <p className="text-dark">I am a self-motivated Web Developer who wants to learn anything as he wants to.</p>
                            <p className="text-dark">I want to live my life differently & I wish to see the world in new, better & helpful ways than it is now. I want to learn new skills for turning myself into a better person than I am. I always take my work seriously & I have a driven mind to make my job done. I take responsibility for what I do.</p>
                            <p className="text-dark">I love travelling a lot. Nature, especially Mountain & Sea, attracts me very much.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AboutMe;