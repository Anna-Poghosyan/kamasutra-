import massegePageReducer from './massegePage-reducer';
import profilePageReducer from './profilPage-reducer';

let store = {
_callSubscriber() {
    console.log('ddd')
},
_state: {
    massegePage:{
        dialogs:[
            {id: 1, name: 'Markiz'},
            {id: 2, name: 'Shirush'},
            {id: 3, name: 'Radik'},
            {id: 4, name: 'Vagho'},
        ],
        messages:[
            {id:1, massege: "Hi?"},
            {id:1, massege: "How are you?"},
            {id:1, massege: "Yo"},
            {id:1, massege: "du you like react"},
        ],
        newMessegeBody: '',
    },
    profilPage:{
        posts:[
            {id: 1, message:'hi, how are you?', likeCount: 12},
            {id: 2, message: 'it`s my first post', likeCount: 25},
            {id: 3, message: 'hay hay', likeCount:41} 
        ],
        newPosttext: 'lolo'
    }
},
getStore(){
    return this._state
},

subServer(obServer){
        this._callSubscriber = obServer;
    },

    dispatch(action) {

        this._state.profilPage = profilePageReducer(this._state.profilPage, action);
        this._state.massegePage = massegePageReducer(this._state.massegePage, action);
        
            this._callSubscriber(this._state)
        }
        };
    
             

export default store;
