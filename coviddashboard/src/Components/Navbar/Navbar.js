import React from 'react';
import './Navbar.css'; 
import Logo from './../../Assets/virus.svg';
import {NavLink,Route} from 'react-router-dom';
import Dashboard from '../../Containers/Dashboard/Dashboard';

const navbar = () => {
    return(
        <div className='Navbar'>
            <div className='Logo-Div'>
                <img src={Logo} className='Logo' alt='Logo'/>
                <p>COVID19</p>
            </div>
            <div className='Menu'>
                <ul>
                    <li><Route path="/" render={()=><h1>Hello</h1>}>Home</Route></li>
                    {/* <li><Route to="/">FAQ</Route></li>
                    <li><Route to="/">Helpful Links</Route></li> */}
                </ul>
            </div>
        </div>
    );

};

export default navbar;