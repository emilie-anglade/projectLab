import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, ButtonGroup } from 'reactstrap';

function PopupProject(props) {

  const [rSelected, setRSelected] = useState(null);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Mon projet
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text_area" placeholder="Nom du projet"/>
          <input type="date" />
          <input type="date" />
          <input type="text_area" placeholder="Description"/>
          <ButtonGroup>
            <Button color="primary" onClick={() => setRSelected(1)} active={rSelected === "Créatin"}>Création</Button>
            <Button color="primary" onClick={() => setRSelected(2)} active={rSelected === "Formation"}>Formation</Button>
          </ButtonGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default PopupProject;