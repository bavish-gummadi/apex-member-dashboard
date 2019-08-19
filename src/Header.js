import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import logo from './images/logo.png';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/Button';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div>
        <header className="header">
            <div class="row full-height no-margin">
              <div class="logo-container">
                <img className="logo" src={logo} />
              </div>
              <div className="d-flex flex-column full-height site-nav">
              <ButtonToolbar className="full-height">
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} className="full-height full-width">
                  <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
                  <ToggleButton value={2}>Radio 2</ToggleButton>
                  <ToggleButton value={3}>Radio 3</ToggleButton>
                </ToggleButtonGroup>
              </ButtonToolbar>
              </div>
          </div>
        </header>
      </div>
    )
  }
}

export default withFirebase(Header)
