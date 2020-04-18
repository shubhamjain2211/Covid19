import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import './Faq.css';

class Faq extends Component{
    render(){
        return(
            <Aux>
                <Navbar/>
                    <h1>This is Faq Page</h1>
            </Aux>
        );
    };
}

export default Faq;