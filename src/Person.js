import React, { Component } from 'react';
import { withFirebase } from './Firebase';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Person extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <Card className="part-width part-height centered">
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )
  }
}

export default withFirebase(Person)
