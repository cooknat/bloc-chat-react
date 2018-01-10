
import React from 'react';

class RoomList extends React.Component {

	constructor(props){
			super(props);			
			this.roomsRef = this.props.firebase.database().ref('rooms');
			this.createRoom = this.createRoom.bind(this);
			this.addRoom = this.addRoom.bind(this);
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

	render() {

		return (	
		<div>	
				<div className="roomList">
					<ul>
					  {(this.state.rooms).map(room => <li key={room.key}>{room.name}</li>)}				  
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