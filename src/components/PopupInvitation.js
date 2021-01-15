import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


  const = {
      "background-color": "#6c757d",
      color: "white"
  }

    return (
      const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}></ModalHeader>
        <ModalBody>
          Samson Corbières souahite te rencontrer ! 
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Prendre un café au Fablab</Button>{' '}
          <Button color="secondary" onClick={toggle}>Envoyer un message sur Discord</Button>
					<Button color="primary" onClick={toggle}>Envoyer un message</Button>
					<Button color="secondary" onClick={toggle}>It's a match ! Ajouter en ami !</Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
