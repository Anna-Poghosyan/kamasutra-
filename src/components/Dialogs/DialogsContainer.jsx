import React from 'react';
import Massege from './Massege/Massege';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Dialogs from './Dialogs';
import {sendMessageCreator,updateNewMessageActionCreator} from '../../redux/massegePage-reducer';
import { connect } from 'react-redux';



// const DialogsContainer = (props) => {
//     debugger;
//     let state = props.store.getState().massegePage;

    
//     let x= ()=> {
//         props.store.dispatch(sendMessageCreator())
//     };

//     let y = (body)=> {
//                 // let body = e.target.value;

//         props.store.dispatch(updateNewMessageActionCreator(body))
//     }
//     return  <Dialogs  updateNewMessageBody = {y} sendMessage = {x} massegePage = {state} />
// }
let mapStateToProps = (state) => {
    debugger;
    return {
        dialogsPage:state.massegePage.dialogs,
        messagePage:state.massegePage.messages,
        newMessegeBody:state.massegePage.newMessegeBody
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
              dispatch(sendMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageActionCreator(body));
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);
export default DialogsContainer;