const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
let SET_USERS = 'SET_USERS';

let initialState = {
    users:[
        // {id: 1, followed: false, fullName:'Siranush', status:'she is a docter', location: {city: 'Yerevan', country:'Armenia'}, photoUrl:'https://icons.iconarchive.com/icons/visualpharm/must-have/256/User-icon.png'},
        // {id: 2, followed: true, fullName:'Sirak', status:'he is a boy', location: {city: 'Gavar', country:'Armenia'}, photoUrl:'https://icons.iconarchive.com/icons/visualpharm/must-have/256/User-icon.png'},
        // {id: 3, followed: false, fullName:'Vartitel', status:'she is a teacher', location: {city: 'Yerevan', country:'Armenia'}, photoUrl:'https://icons.iconarchive.com/icons/visualpharm/must-have/256/User-icon.png'},
       
    ]
    
}
const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                       return {...u, followed: true}
                    }
                    return u;
                })
            }
        
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                       return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: 
             return{
                 ...state,
                 users: [...state.users, ...action.users]
             }

        default: 
        return state;
        
    }
    
    }

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})



export default usersReducer;          