import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import { Route } from 'react-router-dom';
import UsersContanier from './components/Users/UsersContanier';



const App = (props) => {
    debugger;
    return (
                <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Route path = '/news' component = {News}/>
            <Route path = '/dialogs' 
                          render = { () => <DialogsContainer />} />
                            
            <Route path = '/profile' 
                          render = { () => <Profile />} />

            <Route path = '/users'
                          render = {() => <UsersContanier/>} />
            
        </div>
        );
}



export default App;