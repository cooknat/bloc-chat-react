import React from 'react';
import RoomList from './components/RoomList';
import './App.css';
import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDSnL9g-E8JfL6lAu3avCmSxQhO8Ad3gL4",
    authDomain: "bloc-chat-react-nc.firebaseapp.com",
    databaseURL: "https://bloc-chat-react-nc.firebaseio.com",
    projectId: "bloc-chat-react-nc",
    storageBucket: "bloc-chat-react-nc.appspot.com",
    messagingSenderId: "875654243654"
  };
  firebase.initializeApp(config);

  
class App extends React.Component {
  render() {
    return (
     <div>       
       <RoomList firebase={firebase}/>
     </div>
    );
  }
}

export default App;
