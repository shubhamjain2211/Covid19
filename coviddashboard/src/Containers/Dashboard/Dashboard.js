import React from  'react';

import DynamicStatDate from '../../Components/WorldInfo/WorldInfo';
import Country from '../../Components/Country/Country';
import NewsFeed from '../../Components/NewsFeed/NewsFeed';
import Map from '../../Components/Map/Map';
import classes from '../../App.css';
import classes from './Dashboard.css';
import RecoveryBar from '../../Components/RecoveryRatio/RecoveryRatio';
import SpreadTrends from '../../Components/Trends/Trends';
import Twitter from '../../Components/Twitter/Twitter';


const Home = () => {
    return(
       
        <main className={classes.MainContainer}>
        <article className={classes.MainBody}>
          <DynamicStatDate />
          <div className={classes.CountryDetailSection}>
            <Country />
            <Map />
          </div>
          <div className = {classes.SocialInfo}>
            <SpreadTrends />
            <NewsFeed />
          </div>
        </article>
        <aside className={classes.SideBody}>
          <RecoveryBar />
          <Twitter />
        </aside>

      </main>
    )
}

export default Home;
