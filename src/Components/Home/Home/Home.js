import React from 'react';
import './Home.css';
import Blogs from '../../Blogs/Blogs';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Header from '../Header/Header';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Blogs />
            <Contact />
        </div>
    );
};

export default Home;