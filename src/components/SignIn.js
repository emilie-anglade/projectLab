import React from 'react';
import { withRouter } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.history.push('/profile');
  };
render() {

  const form = {
    "margin-left": "auto",
    "margin-right": "auto",
    "margin-top": "10em",
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
    <h3>Connexion</h3>
    <br/>
    <Row form>
      <Col>
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
    <Button>Valider</Button>
    </div>
  </Form>
);
}}

export default withRouter(SignIn);