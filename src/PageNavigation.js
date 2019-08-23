import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import Button from 'react-bootstrap/Button';

class PageNav extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      category: "people",
    }

  }

  render(props) {
    return (
        <div className="full-height full-width">
          <Button>Hello</Button>
        </div>
    )
  }
}

export default withFirebase(PageNav)
