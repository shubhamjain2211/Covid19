import React from 'react';
import classes from './Navbar.css'; 
import Logo from './../../Assets/virus.svg'

const navbar = () => {
    return(
        <div className='Navbar'>
            <div className='Logo-Div'>
                <img src={Logo} className='Logo' alt='Logo'/>
                <p>COVID19</p>
            </div>
            <div className='Menu'>
                <ul>
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Helpful Links</li>
                </ul>
            </div>
        </div>
    );

};

export default navbar;