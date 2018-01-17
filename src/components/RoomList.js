import React from 'react';
import firebase from '../firebase';


class RoomList extends React.Component {

	constructor(props){
			super(props);			
			this.roomsRef = firebase.database().ref('rooms');
			this.createRoom = this.createRoom.bind(this);
			this.addRoom = this.addRoom.bind(this);
			this.setActiveRoom = this.setActiveRoom.bind(this);
			this.state = {
				rooms: []
			};
		}

	componentDidMount(){	
     this.addRoom();   
	}

	createRoom(event){
		event.preventDefault();	
		this.roomsRef.push({
		  name: event.target.roomname.value
		});
		this.addRoom();  
		this.roomForm.reset();   
     
	}

	addRoom(){
		this.roomsRef.on('child_added', snapshot => {
       const room = snapshot.val();
       room.key = snapshot.key;     
       this.setState({ rooms: this.state.rooms.concat( room ) });       
     });
	}

	setActiveRoom(event){
		this.props.setActiveRoom(event.target.name);
	}

	render() {

		return (	
		<div>	
				<div>
					<ul>
					  {(this.state.rooms).map(room =><li key={room.key}><a onClick={this.setActiveRoom} name={room.name}>{room.name}</a></li>)}				  
					</ul>
				</div>
				<form id="createRoom" ref={(input) => this.roomForm = input} onSubmit={(e) => this.createRoom(e)}>
					<label>Add a room:</label>
					<input ref={(input) => this.roomname = input} name="roomname" type="text" />
					<button type="submit">Create Room</button>
				</form>
			</div>
		)
	}
}


export default RoomList;