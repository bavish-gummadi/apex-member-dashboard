import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    if (this.props.data) {
      let name = this.props.data['name']['first'] + " " + this.props.data['name']['last'];
      return (
        <Card className="custom-card centered">
          <Card.Img variant="top" className="resize-img" src={this.props.data['photoURL']}/>
          <Card.Body className="custom-card-body no-padding no-margin">
            <Card.Text className="small-text custom-font card-padding"><span className="med-text heavy-font">{name}</span> <br></br> Business Analyst</Card.Text>
          </Card.Body>
        </Card>
      )
    } else {
      return (
        <Card className="custom-card centered">
          <Card.Img variant="top" className="resize-img" src="https://lh3.googleusercontent.com/-w5La0iJhe34/AAAAAAAAAAI/AAAAAAAAAA4/zgGWU7zITik/photo.jpg"/>
          <Card.Body className="resize-card-body">
            <Card.Text className="med-text heavy-font">Placeholder</Card.Text>
          </Card.Body>
        </Card>
      )
    }
  }
}

export default withFirebase(Person)
