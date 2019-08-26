import React, { Component, Fragment } from 'react';
import { withFirebase } from './Firebase';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  //HEY ROBERT WHAT IS UP BUD
  //TODO this is basically where you can get started.
  render(props) {
    return (
      <>
      <Modal show={this.props.modalShow} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
  }
}

export default withFirebase(ProfilePage);
