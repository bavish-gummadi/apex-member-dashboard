import React, { Component, Fragment } from 'react';
import { withFirebase } from './Firebase';
import * as ROUTES from './constants/routes';
import Header from './Header.js'
import Spinner from 'react-bootstrap/Spinner'

function SearchBar(props) {
    return (
   <div class="search-box">
        <div class="inner">
             <form action="{% url 'parks:search-results' %}" method="get" accept-charset="utf-8">
                  <input type="text" placeholder="Search" name="q" /><button type="submit">SEARCH</button>
             </form>
        </div>
   </div>
   )
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      queryParam: "people",
    }

    this.setQueryParam = this.setQueryParam.bind(this);
  }

  setQueryParam = (param) => {
    this.setState({queryParam: param});
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
        <div className="container-side">
            <Header
              setQueryParam={this.setQueryParam}
              />
            <SearchBar />
            <h2>{this.state.queryParam}</h2>
        </div>
        <header className="App-header">
          {this.props.firebase.user ? (
            <Fragment>
              <h2>
                Hi {this.props.firebase.userData.name.first}
              </h2>
              <img className="profile" src={this.props.firebase.userData.photoURL} alt="userPhoto"/>
            </Fragment>
          ) : (
            <Spinner/>
            )
          }

          <h2>
            Apex Member Dashboard
          </h2>
          <button onClick={this.signOut}>HERE SIGN OUT</button>
          <button onClick={this.logCredentials}>HERE TO LOG CREDS</button>

        </header>
      </div>
    );
  }
}

export default withFirebase(HomePage);
