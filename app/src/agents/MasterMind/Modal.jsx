import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class Modal_page extends Component {
  render() {
    const className = this.props.attr ? "hidden" : "";
    return (
      <div className={className}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Dear User</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Welcome to MasterMind! Click start to play!</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={this.props.active}>
              start
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    );
  }
}

export default Modal_page;
