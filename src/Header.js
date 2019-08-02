import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import logo from './images/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div>
        <header className="header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12">
                <img className="logo" src={logo} />
                <ul class="site-nav">
                  <li class={"nav-item"}><a href="" class="nav-link">PEOPLE</a> </li>
                  <li class="nav-item"><a href="" class="nav-link">PROJECTS</a> </li>
                  <li class="nav-item"><a href="" class="nav-link">RESOURCES</a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default withFirebase(Header)
