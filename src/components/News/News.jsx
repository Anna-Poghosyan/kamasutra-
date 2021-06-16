import React from 'react';
import classes from './News.module.css';

const News = ()=>{
    return(
        <div className={classes.content}>
          <iframe width="300" height="200" src="https://www.youtube.com/embed/v218CgeAHIU?list=RDGMEMYH9CUrFO7CfLJpaD7UR85w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>

        </div>
    )
} 

export default News
