import * as axios from 'axios';
import React from 'react';
import styles from'./Users.module.css';
import userPhoto from '../../assets/images/user.jpg'

class Users extends React.Component{

     getUsers = () =>{
    if(this.props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then(response => {
            debugger;
            this.props.setUsers(response.data.items)
        });
    }
}
render(){
   return  (
        <div>
             <button onClick={this.getUsers}>getUsers</button>
           {
             this.props.users.map(u => <div key = {u.id}>
                 <span>
                     <div><img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/></div>
                     <div>
                         {u.followed 
                         ? <button onClick = { () =>{this.props.unfollow(u.id)} }>unfollow</button> 
                         : <button onClick = { () =>{this.props.follow(u.id)} }>follow</button>}
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
}

export default Users;