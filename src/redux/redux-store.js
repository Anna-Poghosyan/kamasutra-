import { combineReducers, createStore } from "redux";
import massegePageReducer from './massegePage-reducer';
import profilePageReducer from './profilPage-reducer';
import usersReducer from "./users-reducer";


let reducers = combineReducers({
    profilPage: profilePageReducer,
    massegePage: massegePageReducer,
    usersPage: usersReducer

}) ;
 let store = createStore(reducers);


 
export default store;