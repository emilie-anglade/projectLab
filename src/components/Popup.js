import React, { useState } from 'react';
import Checkbox from './Checkbox';
import { useHistory } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import { Col, Row, Button, Form, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';

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
  };

  const alertProject = () => {
    alert(`Ton projet ${projectName} a bien été enregistré`);
  };

  const redirection = (e) => {
    e.preventDefault();
    history.push('/memberslist');
  }

  const [buttonColor, buttonColorClicked] = useState({
    "background-color": "rgba(0,0,0,.125)",
    color: "black",
});

const [buttonColor1, buttonColorClicked1] = useState({
  "background-color": "rgba(0,0,0,.125)",
  color: "black",
});

  const groupButton = {
    width: "80%",
    marginLeft: "10%"
}

  const flexyCheckbox = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap"
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
          <Form onSubmit={submitForm}>
            <Input 
              type="text" 
              placeholder="Nom du projet" 
              value={projectName}
              onChange={e=> setProjectName(e.target.value)}
            />
            <br/>
            <Row form>
              <Col md={6}>
                <FormGroup>
                <Label for="start">Date de début</Label>
                <Input 
              type="date" 
              value={startDate}
              id="start"
              onChange={e=> setStartDate(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
          <Label for="end">Date de fin</Label>
          <Input 
              type="date" 
              value={endDate}
              id="end"
              onChange={e=> setEndDate(e.target.value)}
            />
          </FormGroup>
        </Col>
      </Row>

      <br/>
            
            
            Domaine(s) du projet : 
            <div style={flexyCheckbox}>
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
          <Checkbox
            value="Drone"
            label="Drone"
            id="4"
            name="skillsArea"
            onChange={handleCheckElement}
          />
          <Checkbox
            value="Couture"
            label="Couture"
            id="5"
            name="skillsArea"
            onChange={handleCheckElement}
          />
          <Checkbox
            value="Design"
            label="Design"
            id="6"
            name="skillsArea"
            onChange={handleCheckElement}
          />
          <Checkbox
            value="Machines"
            label="Machines"
            id="7"
            name="skillsArea"
            onChange={handleCheckElement}
          />
          <Checkbox
            value="Musique"
            label="Musique"
            id="8"
            name="skillsArea"
            onChange={handleCheckElement}
          />
          <Checkbox
            value="Architecture"
            label="Architecture"
            id="9"
            name="skillsArea"
            onChange={handleCheckElement}
          />
          <Checkbox
            value="Media"
            label="Media"
            id="10"
            name="skillsArea"
            onChange={handleCheckElement}
          />
          <Checkbox
            value="Cosplay"
            label="Cosplay"
            id="11"
            name="skillsArea"
            onChange={handleCheckElement}
          />
            </div>

            <br/>
     
            Type de projet :

            <br/>

            <div>
            <ButtonGroup style={groupButton}>
              <Button 
                style={buttonColor} 
                onClick={
                  () => setRSelected(1), 
                  () => buttonColorClicked({
                    backgroundColor: "#5a6268",
                    color: "white",
                  })} 
                active={rSelected === "Création"}
              >
                Création
              </Button>
              <Button 
                style={buttonColor1} 
                onClick={
                  () => setRSelected(2),
                  () => buttonColorClicked1({
                    backgroundColor: "#5a6268",
                    color: "white",
                  })} 
                active={rSelected === "Formation"}
              >
                Formation
              </Button>
            </ButtonGroup>
            </div>

            <br/>
            <br/>

            <Input 
              type="textarea" 
              placeholder="Description"
              value={description}
              onChange={e=> setDescription(e.target.value)}
            />

            <br/>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={alertProject} type="submit">Créer le projet</Button>
          <Button onClick={redirection}>Recruter des Makers</Button>
        </Modal.Footer>
      </Modal>
    );
}

export default PopupProject;