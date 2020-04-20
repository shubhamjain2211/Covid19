import React from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import classes from './Twitter.module.css';
import {FaTwitter} from 'react-icons/fa';

const Twitter = (props) => {

    const sources = ["WHO", "timesofindia", "PMOIndia", "realDonaldTrump"]

    const tweets = sources.map((eachTweet) => {
      return (  <TwitterTimelineEmbed
            sourceType="profile"
            screenName={eachTweet}
            options={{ tweetLimit: 1 }}
            noHeader
            noFooter
            noBorders
        />)
    })

    return (
        <div className = {classes.OuterTweetsBox}>
            <div className={classes.Box}>
                <h4>Latest tweets <FaTwitter color = "#54b5f5" /></h4>
                <div className = {classes.InnerTweetBox}>
                    {tweets}
                </div>
          </div>

        </div>

    )
}
export default Twitter;
