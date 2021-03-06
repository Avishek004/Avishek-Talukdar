import React from 'react';
import HeaderTop from '../HeaderTop/HeaderTop';
import MainHeader from '../MainHeader/MainHeader';
import './Header.css';

const Header = () => {
    return (
        <section className="header-container">
            <HeaderTop />
            <MainHeader />
        </section>
    );
};

export default Header;