import React from 'react';
import firebase from '../firebase';


class MessageList extends React.Component {

		constructor(props){
			super(props);			
			this.messagesRef = firebase.database().ref('messages');			
			this.state = {
				messages: []
			};
		}

  	componentDidMount(){	
     this.messagesRef.on('child_added', snapshot => {
       console.log(snapshot.val());
       console.log(this.props.activeRoom);
       const message = snapshot.val();
       message.key = snapshot.key;     
       this.setState({ messages: this.state.messages.concat( message ) });       
     });
    }   
	

	render() {

		return (	
		<div>
			<ul>
			  {(this.state.messages).map(message => <li key={message.key}>{message.username}{message.content}</li>)}				  
			</ul>
		</div>
		)
	}
}


export default MessageList;