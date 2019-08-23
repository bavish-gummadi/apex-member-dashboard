import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import * as ROUTES from './constants/routes';
import Card from 'react-bootstrap/Card';

class Person extends Component {
  constructor(props) {
    super(props);
    this.toProfile = this.toProfile.bind(this);
  }

  toProfile = () => {
    console.log("Caroline is cute");
    this.props.history.push(ROUTES.PROFILE);
  }

  render(props) {
    if (this.props.data) {
      let name = this.props.data['name']['first'] + " " + this.props.data['name']['last'];
      return (
        <Card as="button" onClick={(e) => this.toProfile()} className="no-padding custom-card centered">
          <Card.Img variant="top" className="card-img" src={this.props.data['apexPhoto']}/>
          <Card.Body className="custom-card-body no-padding no-margin">
            <Card.Text className="small-text custom-font-secondary card-padding color-gray"><span className="med-text heavy-font custom-font color-black">{name}</span> <br></br> Business Analyst <br></br> &#8212;</Card.Text>
          </Card.Body>
        </Card>
      )
    } else {
      return (
        <Card className="custom-card centered">
          <Card.Img variant="top" className="card-img" src="https://lh3.googleusercontent.com/-w5La0iJhe34/AAAAAAAAAAI/AAAAAAAAAA4/zgGWU7zITik/photo.jpg"/>
          <Card.Body className="resize-card-body">
            <Card.Text className="med-text heavy-font">Placeholder</Card.Text>
          </Card.Body>
        </Card>
      )
    }
  }
}

export default withFirebase(Person)
