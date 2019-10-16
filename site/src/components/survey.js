import React, { Component } from 'react';

class Survey extends Component {

  state = {
    responses: {
      fname: '',
      bday: ''
    }
}

 inputChanged = event => {
   let resp = this.state.responses;
   resp[event.target.name] = event.target.value;
   this.setState({responses: resp});
 }

  render() {
    return <div>
      <span>What is your First Name?</span><br/>
      <input type="text" name="fname" value={this.state.responses.fname}
        onChange={this.inputChanged}/><br/>
      <span>What is your Birthday?</span><br/>
        <input type="text" name="bday" value={this.state.responses.bday}
          onChange={this.inputChanged}/><br/>
    </div>
  }
}

export default Survey;
