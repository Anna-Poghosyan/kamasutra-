import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
    return (

        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPvHJD1RHO9eVG47fc8Y6OQ9zRZtdPX0rHDg&usqp=CAU" />
                    {props.message} 
                    <div><span>like {props.likeCount}</span></div>
        </div>


    );
}
export default Post;