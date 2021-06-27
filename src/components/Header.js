import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import background__img from '../images/homepage-1.jpg';

function Header() {
    return (
        <>
            <div className='header'>
                <nav className='navbar'>
                    <div className='logo'>LOGO AND NAME</div>
                    <div className="navbar__list">
                        <ul className='menu d-flex me-auto mb-2 mb-lg-0'>
                            <li className='home'>
                                <Link to='/' className='nav-link text-white'>Home</Link>
                            </li>
                            <li className='about'>
                                <Link to='/signup' className='nav-link text-white'>Sign Up</Link>
                            </li>
                            <li className='login'>
                                <Link to='/signin' className='nav-link text-white' >Sign In</Link>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
            <img className='homepage__img' src={background__img} />
        </>
    )
}

export default Header;


