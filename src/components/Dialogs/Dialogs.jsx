import React from 'react';
import Massege from './Massege/Massege';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import {sendMessageCreator,updateNewMessageActionCreator} from '../../redux/massegePage-reducer';



const Dialogs = (props) => {
    debugger;
    // let state = props.dilogsPage;

    let dialogsElements = props.dialogsPage.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElement = props.messagePage.map(d => <Massege massege={d.massege} id={d.id} />);
    let newMessegeBody = props.newMessegeBody;

    // let newMessageElement = React.createRef();

    let x= ()=> {
        props.sendMessage();
    };

    let y = (e)=> {
                let body = e.target.value;
        props.updateNewMessageBody(body);
        // props.store.dispatch(updateNewMessageActionCreator(body))
    }
    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={classes.masseges}>
                    <div>{messagesElement}</div>
                    <div><textarea 
                    // ref={newMessageElement} 
                                   value={newMessegeBody}
                                   onChange={y}
                                   placeholder = 'Enter your message'
                                   >
                         </textarea>
                    </div>
                    <div>
                        <button onClick={x}>Send</button>
                    </div>
                </div>


            </div>

        </div>
    );
}
export default Dialogs;