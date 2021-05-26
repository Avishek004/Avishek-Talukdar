import React from 'react';
import './Home.css';
import Blogs from '../../Blogs/Blogs';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Header from '../Header/Header';
import AboutMe from '../../AboutMe/AboutMe';
import Skills from '../../Skills/Skills';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <AboutMe />
            <Skills />
            <Projects />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;