import React from 'react';
import { withRouter } from "react-router-dom";
import Checkbox from './Checkbox';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      skills: [
        { id: 1, value: "Electronique", isChecked: false },
        { id: 2, value: "Biologie", isChecked: false },
        { id: 3, value: "Robotique", isChecked: false },
      ],
      interests: [
        { id: 4, value: "Electronique", isChecked: false },
        { id: 5, value: "Biologie", isChecked: false },
        { id: 6, value: "Robotique", isChecked: false },
      ],
    };
  }

  handleCheckElement = (e) => {
    const skills = this.state.skills;
    const interests = this.state.interests;
    skills.forEach((skill) => {
      if (skill.value === e.target.value)
        skill.isChecked = e.target.checked;
    });
    interests.forEach((interest) => {
      if (interest.value === e.target.value)
        interest.isChecked = e.target.checked;
    });
    this.setState({ skills: skills, interests: interests });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }; 

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    alert(`Bienvenue ${this.state.username} !`);
    this.props.history.push('/profile');
  };

  render() {

    const form = {
      "margin-left": "auto",
      "margin-right": "auto",
      "margin-top": "1em",
      "text-align": "center",
      width: "50%",
      border: "1px solid rgba(0,0,0,.125)",
      "border-radius": "0.5em",
      "box-shadow": "0px 4px 4px rgba(0,0,0,.125)"
    }

    const formContainer = {
      "margin-left": "auto",
      "margin-right": "auto",
      "margin-top": "1em",
      "margin-bottom": "1em",
      width: "80%",
      height: "80%"
    }

    const sizeText = {
      "font-size": "18px"
    }

  return (
    <Form style={form} onSubmit={this.submitForm}>
      <div style={formContainer}>
      <h3>Inscription</h3>
      <br/>
      <Row form>
        <Col>
        <FormGroup>
        <Label for="username" style={sizeText}>Nom d'utilisateur</Label>
        <Input 
          id="username"
          name="username"
          type="text"
          minLength="4"
          required
          checked={this.state.firstname}
          onChange={this.handleInputChange}
        />
      </FormGroup>
        <FormGroup>
        <Label for="email" style={sizeText}>Email</Label>
        <Input 
          type="email" 
          name="email" 
          id="email"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="password" style={sizeText}>Mot de passe</Label>
        <Input 
          type="password" 
          name="password" id="password" 
          minLength="6"
          required
        />
      </FormGroup>
        </Col>
      </Row>
      <br/>
      <FormGroup>
          <p style={sizeText}>Vos compétences : </p>
          <Checkbox
            value="Electronique"
            label="Electronique"
            id="1"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Biologie"
            label="Biologie"
            id="2"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Robotique"
            label="Robotique"
            id="3"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Drone"
            label="Drone"
            id="4"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Couture"
            label="Couture"
            id="5"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Design"
            label="Design"
            id="6"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Machines"
            label="Machines"
            id="7"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Musique"
            label="Musique"
            id="8"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Architecture"
            label="Architecture"
            id="9"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Media"
            label="Media"
            id="10"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Cosplay"
            label="Cosplay"
            id="11"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <br/>
      </FormGroup>
          <p style={sizeText}>Vos centres d'intérêts :</p> 
          <Checkbox
            value="Electronique"
            label="Electronique"
            id="1"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Biologie"
            label="Biologie"
            id="2"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Robotique"
            label="Robotique"
            id="3"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Drone"
            label="Drone"
            id="4"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Couture"
            label="Couture"
            id="5"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Design"
            label="Design"
            id="6"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Machines"
            label="Machines"
            id="7"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Musique"
            label="Musique"
            id="8"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Architecture"
            label="Architecture"
            id="9"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Media"
            label="Media"
            id="10"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <Checkbox
            value="Cosplay"
            label="Cosplay"
            id="11"
            name="skills"
            onChange={this.handleCheckElement}
          />
          <br/>
      <Button>Valider</Button>
      </div>
    </Form>
  );
}}

export default withRouter(SignUp);