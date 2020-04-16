import React, { Component } from 'react';
import Navbar from './../Navbar/Navbar';
import WorldInfo from './WorldInfo/WorldInfo';
import classes from './Dashboard.css';
import Country from './Country/Country';
import Sidebar from './Sidebar/Sidebar';
import WorldMap from './WorldMap/WorldMap';
import Trends from './Trends/Trends';
import News from './News/News';
import Aux from './../Hoc/Aux.js';

class Dashboard extends Component{
    render(){
        return(
            <Aux>
                <Navbar/>
                <div className='Dashboard'>
                    <div className='LeftDiv'>
                        <WorldInfo/>
                        <Country/>
                        <WorldMap/>
                        <Trends/>
                        <News/>
                    </div>
                    <div className='RightDiv'>
                        <Sidebar/>
                    </div>
                </div>
            </Aux>  
        );
    };
}

export default Dashboard;