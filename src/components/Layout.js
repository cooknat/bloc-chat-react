import React from 'react';
import RoomList from './RoomList';
import MessageList from './MessageList';

class Layout extends React.Component {	
  
  
	render() {
		return (	
		<div className="container">	
		  <div className="roomlist">
		    <RoomList setActiveRoom={this.props.setActiveRoom}/>		   
		  </div>
		  <div className="messageList">
		    <MessageList getActiveRoom={this.props.getActiveRoom} />
		  </div>  
		</div>
		)
	}
}


export default Layout;