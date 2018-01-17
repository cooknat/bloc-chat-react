import React from 'react';
import Layout from './components/Layout';
import User from './components/User';
import './App.css';
  
class App extends React.Component {
 
constructor(){
  super();
  this.setActiveRoom = this.setActiveRoom.bind(this);
  this.setUser = this.setUser.bind(this);
  this.state = {
    activeRoom: null,
    currentUser: null  
  };
} 

  setActiveRoom = (activeRoom) => {
     this.setState({ activeRoom: activeRoom });
  };

  getActiveRoom = () => {
    return this.state.activeRoom;
  };

  setUser = (user) => {   
    this.setState({ currentUser: user });
  };

   render() {
    return (
     <div>    
     <User setUser={this.setUser} user={this.state.currentUser}/>
          <p>Active room is: {this.state.activeRoom}</p>
            <Layout setActiveRoom={this.setActiveRoom} getActiveRoom={this.getActiveRoom}/>     
          </div>
         );
       }
     }
   
export default App;
