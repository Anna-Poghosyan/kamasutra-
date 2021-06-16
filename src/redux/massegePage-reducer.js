let initialState = {
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
}
const massegePageReducer = (state = initialState,action) => {
    switch(action.type) {
        case 'updateNewMessageBody':{
            let stateCopy = {...state};
            stateCopy.newMessegeBody = state.newMessegeBody;
            stateCopy.newMessegeBody = action.body;
            return stateCopy;
        }
        
        case 'sendMessage': {
            debugger;
        // let stateCopy = {...state};
        // stateCopy.newMessegeBody = state.newMessegeBody;
        // stateCopy.messages = {...stateCopy.messages};
        let body = state.newMessegeBody;
        state.messages.push({id:6, massege: body});
        state.newMessgeBody = '';
        return state;
    }

        default:
            return state;
    }    
        
};

export const sendMessageCreator = () => {
    return  {type: 'sendMessage'} 
        
};

export const updateNewMessageActionCreator = (body) => {
    return ({
        type: 'updateNewMessageBody',
        body: body
    })
}

export default massegePageReducer;