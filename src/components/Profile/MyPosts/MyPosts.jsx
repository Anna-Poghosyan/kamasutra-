import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {
   
    let postsElement = props.posts
    .map(p =>  <Post message = {p.message} likeCount = {p.likeCount}/>);

    let newPostElement = React.createRef();

    let onAddPost =()=> {
                props.addPost();
                      };

    let onPostChage = () => {
        let text= newPostElement.current.value;
         props.updateNewPostText(text);
        
       
    }

    return (
        <div >
            <div className={classes.mypost}>
                My post
            <div>
                    <div><textarea ref ={newPostElement} value = {props.newPosttext}
                    onChange={onPostChage}></textarea></div>
                    <button onClick={ onAddPost }>Add post</button>

                </div>
            </div>

            <div className = {classes.posts}>
             {postsElement}
            </div>
        </div>

    );
}
export default MyPosts;