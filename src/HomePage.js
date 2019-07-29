import React, { Component } from 'react';
import logo from './images/logo.png';
import { withFirebase } from './Firebase';
import * as ROUTES from './constants/routes';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  signOut = (props) => {
    this.props.firebase.signOutUser();
    this.props.history.push(ROUTES.SIGN_IN);
  }
  logCredentials = () => {
    console.log(this.props.firebase.user);
  }
  //HEY ROBERT WHAT IS UP BUD
  //TODO this is basically where you can get started.
  render(props) {
    return (
      <div>
        <header className="App-header">
          {this.props.firebase.user ? (
            <>
              <h2>
                Hi {this.props.firebase.userData.name.first}
              </h2>
              <img src={this.props.firebase.userData.photoURL} alt="userPhoto"/>
            </>
          ) : (
            <h2>
              Loading...
            </h2>)
          }

          <h2>
            Apex Member Dashboard
          </h2>
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={this.signOut}>HERE SIGN OUT</button>
          <button onClick={this.logCredentials}>HERE TO LOG CREDS</button>

        </header>
      </div>
    );
  }
}

export default withFirebase(HomePage);
