import React from 'react';
import Layout from './components/Layout';
import './App.css';
  
class App extends React.Component {
 
constructor(){
  super();
  this.setActiveRoom = this.setActiveRoom.bind(this);
  this.state = {
    activeRoom: null
  };
} 

  setActiveRoom = (activeRoom) => {
     this.setState({ activeRoom: activeRoom });
  };

  getActiveRoom = () => {
    return this.state.activeRoom;
  }

  render() {
    return (
     <div>       
     <p>Active room is: {this.state.activeRoom}</p>
       <Layout setActiveRoom={this.setActiveRoom} getActiveRoom={this.getActiveRoom}/>
     
     </div>
    );
  }
}

export default App;
