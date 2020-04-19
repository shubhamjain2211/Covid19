import React from  'react'

import Layout from '../../hoc/Layout/Layout';
import DynamicStatDate from '../../components/Dynamic/Dynamic'
import Country from '../../components/Country/Country'
import NewsFeed from '../../components/NewsFeed/NewsFeed'
import Map from '../../components/Map/Map'
import classes from '../../App.css';
import RecoveryBar from '../../components/RecoveryRatio/RecoveryRatio';
import SpreadTrends from '../../components/Trends/Trends';
import Tweets from '../../components/Twitter/Twitter';
import Aux from '../../hoc/Aux/Aux';


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
          <Tweets />
        </aside>

      </main>
    )
}

export default Home;
