import React, { Component } from 'react';
import { withFirebase } from './Firebase';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
         <div className="content">
              <div className="overlay-red">

              </div>
         </div>
    )
  }
}

export default withFirebase(Results)
