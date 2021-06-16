const addPosts = 'addPosts';
const updatePost = 'updatePost';

let initialState = {
    posts:[
        {id: 1, message:'hi, how are you?', likeCount: 12},
        {id: 2, message: 'it`s my first post', likeCount: 25},
        {id: 3, message: 'hay hay', likeCount:41} 
    ],
    newPosttext: 'lolo'
}
const profilePageReducer = (state = initialState, action) => {
    switch(action.type) {
        case addPosts: {
        let newPost = {
                    id: 4,
                    message: state.newPosttext,
                    likeCount: 43
                };
                let stateCopy = {...state};
                stateCopy.posts = [...state.posts]
                stateCopy.posts.push( newPost );
                stateCopy.newPosttext = '';
                return stateCopy;
            }
        case updatePost: 
        let stateCopy = {...state};
        stateCopy.newPosttext = state.newPosttext;
        stateCopy.newPosttext = action.newText;
        return stateCopy;
        default:
            return state;
    }
    };

    export const addPostActionCreator = () =>{
        return {
            type: addPosts, 
               }
             };

    export const updateNewPostTextActionCreator = (x) => {
        return {
            type: updatePost, 
            newText: x,
               };
            }

export default profilePageReducer;          