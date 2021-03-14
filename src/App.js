import React, { Component } from 'react';
import './App.css';
import  UserInput from './UserInput/UserInput'; 
import UserOutput from './UserOtput/UserOutput';

class App extends Component {
 state = {
  username:'Lina'
 }

 usernameChangedHandler=(event)=>{
  this.setState({username:event.target.value});
 }

  render() {
    return (
      <div className="App">
       <UserInput 
          changed={this.usernameChangedHandler}
          currentName={this.state.username}/>
       <UserOutput username="Ana"/>
       <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
