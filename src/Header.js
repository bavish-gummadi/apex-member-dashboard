import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import logo from './images/logowhite.png';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      category: "people",
    }

  }

  render(props) {
    return (
        <div className="header">
            <div className="row full-height no-margin">
              <div className="logo-container">
                <img className="logo" src={logo} />
              </div>
              <div className="d-flex flex-column full-height site-nav">
                <ToggleButtonGroup type="radio" name="categories" className="full-height full-width edge" defaultValue={1}>
                  <ToggleButton variant="dark" onClick={(e) => this.props.setCategory("people", 0)} className="edge large-text custom-font light-font top-gap" value={1}>PEOPLE</ToggleButton>
                  <ToggleButton variant="dark" onClick={(e) => this.props.setCategory("projects", 0)} className="edge large-text custom-font light-font top-gap" value={2}>PROJECTS</ToggleButton>
                  <ToggleButton variant="dark" onClick={(e) =>this.props.setCategory("resources", 0)} className="edge large-text custom-font light-font top-gap" value={3}>RESOURCES</ToggleButton>
                </ToggleButtonGroup>
              </div>
          </div>
        </div>
    )
  }
}

export default withFirebase(Header)
