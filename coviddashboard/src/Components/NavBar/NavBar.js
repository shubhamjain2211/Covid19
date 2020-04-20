import React, { Component } from 'react';
import Nav from './NavLinks/NavLinks';
import classes from './NavBar.module.css';
import Logo from '../../assets/images/covidLogo.png';

class NavBar extends Component {
    render() {
        return(
           <div className = {classes.NavBar}>
               <div className = {classes.LogoDiv}>
                    <img className={classes.Logo} src = {Logo} />
                    <p>COVID'19</p>
               </div>
               <div className = {classes.Nav}>
                <Nav  exact link = '/'>Home</Nav>
                <Nav link = '/Faq'>Faqs</Nav>
                <Nav link = '/helpfulLink'>HelpFul Links</Nav>
               </div>
           </div>
        )
    }
}
export default NavBar;
