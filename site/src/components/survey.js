import React, { Component } from 'react';

class Survey extends Component {

  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
    };
  }

 inputChanged = event => {
  this.setState({
    [event.target.id]:
      event.target.value
  });
 }

  render() {
    const { firstName, lastName, email } = this.state;

    return <div>
      <span>What is your first name?</span><br/>
      <input type="text" id="firstName" value={firstName}
        onChange={this.inputChanged}/><br/>
      <span>What is your last name?</span><br/>
        <input type="text" id="lastName" value={lastName}
          onChange={this.inputChanged}/><br/>
      <span>What is your email?</span><br/>
        <input type="text" id="email" value={email}
          onChange={this.inputChanged}/><br/>
    </div>
  }
}

export default Survey;
