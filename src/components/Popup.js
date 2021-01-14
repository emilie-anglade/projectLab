import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { useHistory } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import { Button, ButtonGroup } from 'reactstrap';

function PopupProject(props) {
  const history = useHistory();
  const [rSelected, setRSelected] = useState(null);
  const [projectName, setProjectName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [skillsArea, setSkillsArea] = useState([
    { id: 1, value: "Electronique", isChecked: false },
    { id: 2, value: "Biologie", isChecked: false },
    { id: 3, value: "Robotique", isChecked: false },
  ])
  
  const handleCheckElement = (e) => {
    skillsArea.forEach((skill) => {
      if (skill.value === e.target.value)
        skill.isChecked = e.target.checked;
    });
    
    setSkillsArea(skillsArea);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(projectName, startDate, endDate, description, skillsArea);
    alert(`Ton projet ${projectName} a bien été enregistré`);
  };

  const redirection = (e) => {
    e.preventDefault();
    history.push('/memberslist');
  }

  const buttonColor = {
      "background-color": "#6c757d",
      color: "white"
  }

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
          <form onSubmit={submitForm}>
            <input 
              type="text" 
              placeholder="Nom du projet" 
              value={projectName}
              onChange={e=> setProjectName(e.target.value)}
            />
            <input 
              type="date" 
              value={startDate}
              onChange={e=> setStartDate(e.target.value)}
            />
            <input 
              type="date" 
              value={endDate}
              onChange={e=> setEndDate(e.target.value)}
            />
            <legend>
            Vos compétences: 
            <Checkbox
              value="Electronique"
              label="Electronique"
              id="1"
              name="skillsArea"
              onChange={handleCheckElement}
            />
            <Checkbox
              value="Biologie"
              label="Biologie"
              id="2"
              name="skillsArea"
              onChange={handleCheckElement}
            />
            <Checkbox
              value="Robotique"
              label="Robotique"
              id="3"
              name="skillsArea"
              onChange={handleCheckElement}
            />
          </legend>
            <input 
              type="textarea" 
              placeholder="Description"
              value={description}
              onChange={e=> setDescription(e.target.value)}
            />
            <ButtonGroup>
              <Button style={buttonColor} onClick={() => setRSelected(1)} active={rSelected === "Création"}>Création</Button>
              <Button style={buttonColor} onClick={() => setRSelected(2)} active={rSelected === "Formation"}>Formation</Button>
            </ButtonGroup>
            <input type="submit"/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={redirection}>Recruter des Makers</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default PopupProject;