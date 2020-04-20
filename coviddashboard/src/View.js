import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import classes from './View.module.css';

class View extends Component {
    render() {
        return(
            <div className = {classes.View}>
                <NavBar />
                <div className = {classes.Container}>
                {this.props.children}
                </div>
            </div>
        )
    }
}
export default View;
