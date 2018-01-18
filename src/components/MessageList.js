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
    	var rm = this.props.getActiveRoom();	  	
	  	var arr = [];
      this.messagesRef.orderByChild('roomId').equalTo(rm[0]).on('value', snapshot => {      	
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
   //do i need to call this from 'message' or will it be automatically caused by the message being added to firebase?
   showNewMessage(){
   	this.messagesRef.on('child_added', snapshot => {
       const message = snapshot.val();
       message.key = snapshot.key;     
       this.setState({ messages: this.state.messages.concat( message ) });       
     });
   } 



	render() {
		return (	
		<div>
	
			<ul>
			 {(this.state.messages).map(message => <li key={message.key}>{message.user}: {message.content} - Sent at: {message.time}</li>)}			  
			</ul>
		</div>
		)
	}
}


export default MessageList;

