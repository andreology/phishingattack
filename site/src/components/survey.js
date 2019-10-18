import React, { Component } from 'react';
import firebase from '../firebase';

class Survey extends Component {

  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };

    this.db = firebase.firestore();
  }

 inputChanged = event => {
  this.setState({
    [event.target.id]:
      event.target.value
  });
 }

 handleSubmit = event => {
  event.preventDefault();
  const { firstName, lastName, email } = this.state;
  
  this.db.collection("UserData").add({
    firstName: firstName,
    lastName: lastName,
    email: email,
  })
  .then(docRef => {
    const docID = docRef.id;
    console.log("User data successfully written. DocID: ", docID);
  })
  .catch(error => {
    console.error("Error writing document: ", error);
  });

  this.setState({       
    firstName: "",
    lastName: "",
    email: "", 
  });
}

  render() {
    const { firstName, lastName, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <span>What is your first name?</span><br/>
        <input 
          type="text" 
          id="firstName" 
          value={firstName}
          onChange={this.inputChanged}
        /><br/>
        <span>What is your last name?</span><br/>
        <input 
          type="text" id="lastName" 
          value={lastName}
          onChange={this.inputChanged}
        /><br/>
        <span>What is your email?</span><br/>
        <input 
          type="text" 
          id="email" 
          value={email}
          onChange={this.inputChanged}
        /><br/> 
        <button type="submit">Submit</button>

        {/* todo: add parking questions */}
      </form>
    );
  }
}

export default Survey;
