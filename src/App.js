import React from 'react';
import Layout from './components/Layout';
import './App.css';
  
class App extends React.Component {
 
constructor(){
  super();
  this.getActiveRoom = this.getActiveRoom.bind(this);
  this.state = {
    activeRoom: null
  };
} 

  getActiveRoom = (activeRoom) => {
     this.setState({ activeRoom: activeRoom });
  };

  render() {
    return (
     <div>       
     <p>Active room is: {this.state.activeRoom}</p>
       <Layout activeRoom={this.getActiveRoom}/>
     }
     </div>
    );
  }
}

export default App;
