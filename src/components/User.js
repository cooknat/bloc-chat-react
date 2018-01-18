import React from 'react';
import firebase from '../firebase';


class User extends React.Component {
	
	constructor(){
		super();
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);		
		this.getDisplayName = this.getDisplayName.bind(this);
	}
	

  componentDidMount(){  
  	firebase.auth().onAuthStateChanged( user => {
      this.props.setUser(user); 
     });  	
  }


  login(){     	
    const provider = new firebase.auth.GoogleAuthProvider();   
    firebase.auth().signInWithPopup( provider );    
  }

  logout(){
  	firebase.auth().signOut();
  }

  getDisplayName(){
  	if(this.props.user !== null)
  		return this.props.user.displayName;
  	else return "Guest";

  }
	

	render() {
		return (	
			<div>	 
				<p>Hello {this.getDisplayName()}</p>  
				{this.getDisplayName() !== "Guest" ? <button onClick={this.logout}>Logout</button> : <button onClick={this.login}>Login</button> } 
			
			</div>
		)
	}
}


export default User;