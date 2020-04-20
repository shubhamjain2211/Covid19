import React, { useEffect, useState } from 'react';
import classes from './NewsFeed.module.css';
import Personimage from '../../assets/images/newsFeed.png';
import { data } from './Local_response';
const NewsFeed = (props) => {

    const [newsArticles, setnewsArticles] = useState({ headline: "Stay home , stay safe ", description: "we'll keep you updated", ArticleLink: "", articleid: 0 })

    useEffect(() => {

        const interval = setInterval(() => {
            console.log("this runs")
            setnewsArticles((state) => {
                console.log(state.articleid);
                const newsContent = { ...data.articles[state.articleid] };
                let headline;
                let description;
                if (newsContent.title == null)
                    headline = "Stay Home , Stay safe"
                else {
                    if (newsContent.title.length > 60)
                        headline = newsContent.title.slice(0, 60)
                    else {
                        headline = newsContent.title.slice(0, newsContent.title.length - 1)
                    }
                }

                if (newsContent.description == null)
                    description = "we'll keep you updated"
                else {
                    if (newsContent.description.length > 70)
                        description = newsContent.description.slice(0, 70)
                    else {
                        description = newsContent.title.slice(0, newsContent.description.length - 1)
                    }
                }

                const pageUrl = newsContent.url;
                let newsArticlesId;
                if (state.articleid <= data.articles.length) {
                    newsArticlesId = state.articleid + 1;
                }
                else {
                    newsArticlesId = 0
                }
                return { headline: headline, description: description, ArticleLink: pageUrl, articleid: newsArticlesId }
            })
        }, 60000);
        return () => clearInterval(interval);
    }, [])




    return (
        <div className={classes.NewsFeed}>
            <div className={classes.Box}>
                <div className={classes.title}><span>News and Updates</span></div>
                <div className={classes.Container}>
                    <div className={classes.NewsImage}>
                        <img src={Personimage} alt="news icon" />

                    </div>
                    <div className={classes.Content}>
                        <h2>{newsArticles.headline}...</h2>
                        <p>{newsArticles.description}...</p>
                        <button className={classes.newsButton}><a target="_blank" href={newsArticles.ArticleLink}>Read More..</a></button>
                    </div>
                </div>


            </div>
        </div>
    )
}


export default NewsFeed