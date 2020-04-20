import React from 'react'

import classes from './HelpfulLinks.module.css';

const HelpfulLinks = (props) => {

    return (
        <div className={classes.Container}>
        <div className={classes.MainDiv}>
            <h1 className={classes.Heading}>Helpful Links</h1><br/>
            <a className={classes.Links} target="_blank" href="https://www.suny.edu/health-alert/?utm_source=home&utm_campaign=012020" className={classes.Heading}>Delhi Government</a><br/>
            <a className={classes.Links} target="_blank" href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" className={classes.Heading}>CDC GOvernment</a><br/>
            <a className={classes.Links} target="_blank" href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" className={classes.Heading}>World Health Organization</a><br/>
            <a className={classes.Links} target="_blank" href="https://www.health.ny.gov/contact/contact_information/" className={classes.Heading}>New York Health</a><br/>
            <a className={classes.Links} target="_blank" href="https://covid19tracker.health.ny.gov/views/NYS-COVID19-Tracker/NYSDOHCOVID-19Tracker-Map?%3Aembed=yes&%3Atoolbar=no&%3Atabs=n" className={classes.Heading}>Covid-19 Tracker</a><br/>
            <a className={classes.Links} target="_blank" href="https://www.worldometers.info/coronavirus/#countries" className={classes.Heading}>World Meter</a><br/>
        </div>
        </div>
    )
}

export default HelpfulLinks;