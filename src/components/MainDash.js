import React from 'react';
import { useHistory } from 'react-router-dom';
import './MainDash.css';
import background__img from '../images/homepage.jpg'

function MainDash() {
    const history = useHistory();

    return (
        <div>
            <div className='header'>
                <nav className='navbar'>
                    <div className='logo'>LOGO AND NAME</div>
                    <div className="navbar__list">
                        <ul className='menu d-flex me-auto mb-2 mb-lg-0'>
                            <li className='logout'>
                                <a style={{color:"white"}} className='nav-link text-white' onClick={() => {
                                    window.localStorage.removeItem("app_token");
                                    history.push('/');
                                }}>Logout</a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
            <img className='homepage__img' src={background__img} />
        </div>
    )
}

export default MainDash



