import React, { Component, Fragment } from 'react';
import * as ROUTES from './constants/routes';
import { withFirebase } from './Firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this)
  }
  componentDidMount(props) {
    console.log(this.props.firebase);
  }
  logIn() {
    this.props.firebase.signInWithGoogle()
  }

  render(props) {
    return (
      <div>
        <p>THIS IS SIGN IN</p>
        <button onClick={this.logIn}>HERE SIGN IN</button>
      </div>
    );
  }
}

export default withFirebase(SignIn)
