import React, { Component } from 'react';
import firebase from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Survey extends Component {
  notify = () => toast("Thank you for your time, we have received your answers. We will contact you if you were part of the hundred students.");

  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      hasError: false,
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

  //Check if the firstname, lastname and email are provided
  if (firstName.length > 0 && lastName.length > 0 & email.length > 0) {
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
      hasError: false,
    });
    this.notify();
  }
  else {
    this.setState({
      hasError: true
    });
  }
}

  render() {
    const { firstName, lastName, email } = this.state;

    return (
      <div>
        <header>
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/CSU-Longbeach_seal.svg/1200px-CSU-Longbeach_seal.svg.png" alt="CSULB Logo" role="img"/>
          <img id="name" src="http://www.csulb.edu/sites/all/themes/custom/lb_theme/images/logo.png" alt="CSULB Logo" role="img"/>
        </header>

        <main>
          <h1>
            PARKING SURVEY
          </h1>
          <section id="paragraph">
      			<p>Hello CSULB students! On behalf of the university, we would like to thank you for your patience in regards to parking. We understand that parking has become an issue in recent years and we are looking for ways to improve. We have tried valet parking this semester and would like to hear your feedback on this. If you could please fill out the survey below, we will be giving away $25 Amazon gift cards to the first 100 submissions.</p>
      		</section>

          <form id="question" onSubmit={this.handleSubmit}>
            <ol>
              <li>What is your first name? <span className="form-required" title="This field is required." aria-hidden="true">*</span></li>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={this.inputChanged}
              />
            <li>What is your last name? <span className="form-required" title="This field is required." aria-hidden="true">*</span></li>
              <input
                type="text" id="lastName"
                value={lastName}
                onChange={this.inputChanged}
              />
            <li>What is your email? <span className="form-required" title="This field is required." aria-hidden="true">*</span></li>
              <input
                type="text"
                id="email"
                value={email}
                onChange={this.inputChanged}
              />
              <li>Are you a Student, Faculty, or Staff ?</li>
              <textarea rows="10" cols="80" className="text"></textarea>
              <li>How many days a week do you normally park on campus?</li>
              <textarea rows="10" cols="80" className="text"></textarea>
              <li>How easy is it to find a parking space on campus?</li>
              <textarea rows="10" cols="80" className="text"></textarea>
              <li>How much time do you spend looking for a parking spot?</li>
              <textarea rows="10" cols="80" className="text"></textarea>
              <li>Have you ever been late to class because you could not find a spot ?</li>
              <textarea rows="10" cols="80" className="text"></textarea>
              <li>How would you rate the current parking system ?</li>
              <textarea rows="10" cols="80" className="text"></textarea>
              <li>How strongly do you reccommend a new parking system which will let you know about how many parking spots are available at each lot?</li>
              <textarea rows="10" cols="80" className="text"></textarea>
            </ol>
            <button className="sub-button" type="submit">Submit</button>
            {this.state.hasError ? <div class="error">Please fill out your firstname, lastname and email.</div> : "" }
          </form>
          <ToastContainer autoClose={15000}/>
        </main>
        <footer role="contentinfo">
          <div className="footer-text">
            <p>1250 Bellflower Boulevard</p>
            <p>Long Beach, California 90840</p>
            <p>562.985.4111</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Survey;
