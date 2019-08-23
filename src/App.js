import React, { Component } from 'react';
import HomePage from './HomePage';
import SignIn from './SignIn';
import ProfilePage from './ProfilePage';
import './App.css';
import {
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { withFirebase } from './Firebase';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  async componentDidMount(props) {
    if(this.props.firebase.loggedIn) {
      this.props.history.push(ROUTES.HOME)
    } else {
      this.props.history.push(ROUTES.SIGN_IN)
    }
    const user = await this.props.firebase.checkAuth();
    if(this.props.firebase.loggedIn) {
      this.props.history.push(ROUTES.HOME)
    } else {
      this.props.history.push(ROUTES.SIGN_IN)
    }
    this.setState({loading: false});
  }

  render() {
    return (
      <div className="App">
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route exact path={ROUTES.PROFILE} component={ProfilePage} />
      </div>
    );
  }
}

export default withRouter(withFirebase(App));
