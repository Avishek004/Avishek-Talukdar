import React from 'react';
import './Home.css';
import Blogs from '../../Blogs/Blogs';
import Contact from '../../Contact/Contact';
import Projects from '../../Projects/Projects';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header />
            <Projects />
            <Blogs />
            <Contact />
        </div>
    );
};

export default Home;