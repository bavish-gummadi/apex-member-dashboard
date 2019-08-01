import React, { Component } from 'react';
import logo from './images/logo.png';
import { withFirebase } from './Firebase';
import * as ROUTES from './constants/routes';

function Header(props) {
    return (
    <div>    
      <header className="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <img className="logo" src={logo} />
              <ul class="site-nav">
                <li class="nav-item"><a href="" class="nav-link">PEOPLE</a> </li>
                <li class="nav-item"><a href="" class="nav-link">PROJECTS</a> </li>
                <li class="nav-item"><a href="" class="nav-link">RESOURCES</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>    
    );
  }

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
            <Header />
            <SearchBar />
        </div>
        <header className="App-header">
          {this.props.firebase.user ? (
            <>
              <h2>
                Hi {this.props.firebase.userData.name.first}
              </h2>
              <img className="profile" src={this.props.firebase.userData.photoURL} alt="userPhoto"/>
            </>
          ) : (
            <h2>
              Loading...
            </h2>)
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
