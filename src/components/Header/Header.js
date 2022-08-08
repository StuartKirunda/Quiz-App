import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Header() {
    return (
        <div className='header'>
            <Link to={"/"} className="title">
                <img src={logo} alt='headerImage' />
            </Link>
        </div>
    );
}

export default Header;