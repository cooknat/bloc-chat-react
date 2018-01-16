import React from 'react';
import RoomList from './RoomList';
import MessageList from './MessageList';

class Layout extends React.Component {	

  
	render() {

		return (	
		<div className="container">	
		  <div className="roomlist">
		    <RoomList activeRoom={this.props.activeRoom}/>
		  </div>
		  <div className="messageList">
		    <MessageList activeRoom={this.props.activeRoom} />
		  </div>  
		</div>
		)
	}
}


export default Layout;