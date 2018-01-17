import React from 'react';
import firebase from '../firebase';


class MessageList extends React.Component {

		constructor(){
			super();		
			this.messagesRef = firebase.database().ref('messages');					
			this.roomsRef = firebase.database().ref('rooms');			
			this.state = {
				messages: []
			};
		}


  	componentWillReceiveProps(){   	
	  	if(this.state.messages.length > 0){
	  		this.setState({ messages: [] });
	  	}
	  	//get room id
	  	var curr = this.props.getActiveRoom();
	  	var roomId = null;
	  	this.roomsRef.orderByChild('name').equalTo(curr).once('value', snapshot => {
	  	     	snapshot.forEach(room => {     		
	     		roomId = room.key;
	     	});
	     	
	  	});
	  	var arr = [];
     this.messagesRef.orderByChild('roomId').equalTo(roomId).on('value', snapshot => {      	
         if(snapshot.val()){
         	 snapshot.forEach(message => {
         	 	 let temp = message.val();         	 	
         	 		temp.key = message.key;
         	 		arr.push(temp);
         	 });
           this.setState({ messages: arr });              
         }               
     });
    }   


	render() {
		return (	
		<div>
		<p>Welcome to the <b>{this.props.getActiveRoom()}</b>	</p>
			<ul>
			 {(this.state.messages).map(message => <li key={message.key}>{message.user}: {message.content} - Sent at: {message.time}</li>)}			  
			</ul>
		</div>
		)
	}
}


export default MessageList;

/*this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;     
       this.setState({ rooms: this.state.rooms.concat( room ) });       
     });;*/

     