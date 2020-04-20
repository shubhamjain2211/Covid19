import React, { Component } from 'react';
import classes from './NavLink.module.css';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className={classes.NavLinks}>
            <NavLink to={props.link} exact={props.exact}
            activeStyle = {{padding : "1rem 0", color : "red" , borderBottom : "2px solid red"}}>
            {props.children}
            </NavLink>
        </div>
    )
}
export default Nav
