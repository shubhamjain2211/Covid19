import React, { Component } from 'react';
import WorldInfo from './../../Components/WorldInfo/WorldInfo';
import './Dashboard.css';
import Country from './../../Components/Country/Country';
import Sidebar from './../../Components/Sidebar/Sidebar';
import WorldMap from './../../Components/WorldMap/WorldMap';
import Trends from './../../Components/Trends/Trends';
import News from './../../Components/News/News';
import Aux from './../Hoc/Aux.js';

class Dashboard extends Component{
    render(){
        return(
            <Aux>
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