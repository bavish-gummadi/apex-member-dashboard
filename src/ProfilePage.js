import React, { Component, Fragment } from 'react';
import { withFirebase } from './Firebase';


class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  //HEY ROBERT WHAT IS UP BUD
  //TODO this is basically where you can get started.
  render(props) {
    return (
      <div>
        <h2>Hello</h2>
      </div>
    );
  }
}

export default withFirebase(ProfilePage);
