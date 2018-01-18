import React from 'react';
import Layout from './components/Layout';
import User from './components/User';
import Header from './components/Header';
import Message from './components/Message';
import './App.css';
  
class App extends React.Component {
 
constructor(){
  super();
  this.setActiveRoom = this.setActiveRoom.bind(this);
  this.setUser = this.setUser.bind(this);
  this.state = {
    activeRoom: [0, "Pick a room!"],
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
        <Header />
        <div>    
          <User setUser={this.setUser} user={this.state.currentUser}/>
          <p>Active room is: {this.state.activeRoom[1]}</p>
          <Layout setActiveRoom={this.setActiveRoom} getActiveRoom={this.getActiveRoom}/>     
        </div>
        <Message getActiveRoom={this.getActiveRoom} user={this.state.currentUser}  />    
      </div>
         );
       }
     }
   
export default App;
