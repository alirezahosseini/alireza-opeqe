import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';

import './header.styles.scss';

import Navbar from '../navbar/navbar.component';
import LogoSvg from '../svg-icon/logo-svg';
import {Sticky} from "semantic-ui-react";

const Header = () => (

    <Sticky offset={0}>
        <div className='header'>
            <BrowserRouter>
                <Link className='logo' to="/">
                <span>
                    <LogoSvg />
                </span>
                </Link>
                <Navbar />
            </BrowserRouter>
        </div>
    </Sticky>
);

export default Header;