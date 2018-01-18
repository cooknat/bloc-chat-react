import React from 'react';
import firebase from '../firebase';


class Message extends React.Component {
	constructor(){
		super();
		this.sendMessage = this.sendMessage.bind(this);
		this.messagesRef = firebase.database().ref('messages');		
	}


	sendMessage(event){
		event.preventDefault();	

		if(this.props.getActiveRoom() !== null && this.props.user !== null){
			let activeRoom = this.props.getActiveRoom();		
			 var timestamp = new Date();
       var timeString = timestamp.getHours() + ":" + (timestamp.getMinutes()<10?'0':'') + timestamp.getMinutes();
				this.messagesRef.push({
			  content: event.target.messageContent.value,
			  roomId: activeRoom[0],
			  time: timeString,
			  user: this.props.user.displayName
			});
			this.messageForm.reset();
		} 
		else{
			alert("Please login and pick a room before sending a message");
		}
	}

	render() {
		return (	
		<div className="addMessage">
			<form id="sendMessage" ref={(input) => this.messageForm = input} onSubmit={(e) => this.sendMessage(e)}>					
					<input ref={(input) => this.messageContent = input} name="messageContent" type="text" />
					<button type="submit">Send Message</button>
				</form>
		</div>
		)
	}
}


export default Message;