import React from  'react';
import WorldInfo from '../../Components/WorldInfo/WorldInfo';
import Country from '../../Components/Country/Country';
import NewsFeed from '../../Components/NewsFeed/NewsFeed';
import Map from '../../Components/Map/Map';
import classes from './Dashboard.module.css';
import RecoveryRatio from '../../Components/RecoveryRatio/RecoveryRatio';
import Trends from '../../Components/Trends/Trends';
import Twitter from '../../Components/Twitter/Twitter';

const Dashboard = () => {
    return(
        <div className={classes.Main}>
          <div className={classes.MainBody}>
            <WorldInfo />
            <div className={classes.Country}>
              <Country />
              <Map />
            </div>
            <div className = {classes.Social}>
            <Trends />
            <NewsFeed />
            </div>
          </div>
        <div className={classes.SideBody}>
          <RecoveryRatio />
          <Twitter />
        </div>
        </div>
    )
}
export default Dashboard;
