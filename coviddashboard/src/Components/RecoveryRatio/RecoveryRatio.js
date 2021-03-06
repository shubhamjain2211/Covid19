import React, { useEffect, useState } from 'react';
import classes from './RecoveryRatio.module.css';
import { useSelector } from 'react-redux';
const RecoveryRatio = (props) => {

    const percentage = useSelector(state => state.TotalStat.percentage);
    const statData = useSelector(state => state.TotalStat.RFormatted);
    const Cases = useSelector(state => state.TotalStat.TCFormatted);
    const percent = 565 - (565 * percentage) / 100;

    return (
        <div className={classes.pt}>
            <div className={classes.Box}>
                <h4>Ratio of Recovery</h4>
                <div className={classes.ProgressBar}>
                    <svg className={classes.ProgressSvg}>
                        <circle className={classes.ProgressBar_path} cx="50%" cy="50%" r="90px"></circle>
                        <circle className={classes.ProgressBar_thumb} style={{ strokeDashoffset: percent }} 
                        cx="50%" cy="50%" r="90px"></circle>
                    </svg>
                    <div className={classes.AnalogData}>{percentage}%</div>
                </div>
                <div className={classes.Statistics}>
                    <p>{Cases} Affected</p>
                    <p>|</p>
                    <p>{statData} Recovered</p>
                </div>
            </div>
        </div>
    )
}

export default RecoveryRatio;
