import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profilPage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


// const MyPostsConteiner = (props) => {
//     debugger;
//     let state = props.store.getState();

//     let addPost =()=> {
//                 props.store.dispatch(addPostActionCreator());
//                       };

//     let onPostChage = (text) => {
//                 let action = updateNewPostTextActionCreator(text);
//         props.store.dispatch(action);
       
//     }

//     return (<MyPosts updateNewPostText = {onPostChage} addPost = {addPost} posts = {state.profilPage.posts} 
//                      newPosttext = {state.profilPage.newPosttext}/>);
        
    
// }
const mapStateToProps = (state) => {
    return {
      posts: state.profilPage.posts,
      newPosttext: state.profilPage.newPosttext  
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        updateNewPostText: (text) =>{
            let action = updateNewPostTextActionCreator(text);
            dispatch(action); 
        },
        addPost: () =>{
            dispatch(addPostActionCreator())
        }
    }
}


const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
console.log(MyPostsConteiner);


export default MyPostsConteiner;