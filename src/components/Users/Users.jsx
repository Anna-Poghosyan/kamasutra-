import * as axios from 'axios';
import React from 'react';
import styles from'./Users.module.css';
import userPhoto from '../../assets/images/user.jpg'

let Users = (props) => {
    const getUsers = () =>{
    if(props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            debugger;
            props.setUsers(response.data.items)
        });
    }
}
   return  (
        <div>
             <button onClick={getUsers}>getUsers</button>
           {
             props.users.map(u => <div key = {u.id}>
                 <span>
                     <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/></div>
                     <div>
                         {u.followed 
                         ? <button onClick = { () =>{props.unfollow(u.id)} }>unfollow</button> 
                         : <button onClick = { () =>{props.follow(u.id)} }>follow</button>}
                     </div>
                 </span>
                 <span>
                     <div>{u.name}</div>
                     <div>{u.status}</div>
                 </span>
                 <span>
                     <div>{'u.location.country'}</div>
                     <div>{'u.location.city'}</div>
                 </span>
             </div>)
           }
       </div>)
   
}
export default Users;