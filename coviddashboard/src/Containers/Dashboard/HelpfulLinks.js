import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import './HelpfulLinks.css';

class HelpfulLinks extends Component{
    render(){
        return(
            <Aux>
                <Navbar/>
                    <h1>This is Helpful Links Page</h1>
            </Aux>
        );
    };
}

export default HelpfulLinks;